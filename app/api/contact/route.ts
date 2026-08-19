import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token: string, ip: string | null) {
  const formData = new URLSearchParams();
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: formData }
  );

  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website, turnstileToken } = body;

    // Honeypot: bots fill hidden fields. Pretend success so they don't adapt.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Reject malformed emails before ever calling Resend — this is
    // what "test@email" was slipping past, since browser validation
    // doesn't require a top-level domain.
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { message: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for");
    const isHuman = await verifyTurnstile(turnstileToken, ip);

    if (!isHuman) {
      return NextResponse.json(
        { message: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email as string,
      subject: `New message: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // The Resend SDK resolves successfully even on failure — the
    // actual error comes back inside the result, not as a thrown
    // exception. This is the check that was missing before.
    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { message: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    console.log("Email sent:", data?.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}