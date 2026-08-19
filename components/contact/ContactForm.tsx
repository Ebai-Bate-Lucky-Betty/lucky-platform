"use client";

import {
  FormEvent,
  useState,
} from "react";

import Script from "next/script";

import { contactPage } from "@/data/contact";

export default function ContactForm() {
  const { form } = contactPage;

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const [whatsappHref, setWhatsappHref] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const formElement =
      event.currentTarget;

    const formData =
      new FormData(formElement);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),

      // Honeypot field
      website: formData.get("website"),

      // Cloudflare Turnstile
      turnstileToken:
        formData.get(
          "cf-turnstile-response"
        ),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        setStatus("error");

        setErrorMessage(
          result.message ||
            form.errorMessage
        );

        return;
      }

      // -----------------------------------------
      // SUCCESS
      // -----------------------------------------

      setStatus("success");

      // Create WhatsApp pre-filled message
      const whatsappNumber =
        process.env
          .NEXT_PUBLIC_WHATSAPP_NUMBER;

      if (whatsappNumber) {
        const whatsappText =
          encodeURIComponent(
            `Hi Lucky, I'm ${data.name} (${data.email}).\n\nSubject: ${data.subject}\n\n${data.message}`
          );

        setWhatsappHref(
          `https://wa.me/${whatsappNumber}?text=${whatsappText}`
        );
      }

      // Clear the form
      formElement.reset();

    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

      setErrorMessage(
        form.errorMessage
      );
    }
  }

  return (
    <>
      {/* Cloudflare Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-form-grid">

            {/* =============================================
                INTRO
            ============================================= */}

            <div className="contact-form-intro">

              <p className="contact-eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                {form.title}
              </h2>

              <p>
                {form.description}
              </p>

            </div>


            {/* =============================================
                FORM
            ============================================= */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* =============================================
                  HONEYPOT
              ============================================= */}

              <div
                className="contact-honeypot"
                aria-hidden="true"
              >

                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />

              </div>


              {/* =============================================
                  NAME
              ============================================= */}

              <div className="contact-field">

                <label htmlFor="name">
                  {form.fields.name.label}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={
                    form.fields.name.placeholder
                  }
                  maxLength={100}
                  autoComplete="name"
                  required
                />

              </div>


              {/* =============================================
                  EMAIL
              ============================================= */}

              <div className="contact-field">

                <label htmlFor="email">
                  {form.fields.email.label}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={
                    form.fields.email.placeholder
                  }
                  maxLength={254}
                  autoComplete="email"
                  required
                />

              </div>


              {/* =============================================
                  SUBJECT
              ============================================= */}

              <div className="contact-field">

                <label htmlFor="subject">
                  {form.fields.subject.label}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={
                    form.fields.subject.placeholder
                  }
                  maxLength={200}
                  required
                />

              </div>


              {/* =============================================
                  MESSAGE
              ============================================= */}

              <div className="contact-field">

                <label htmlFor="message">
                  {form.fields.message.label}
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder={
                    form.fields.message.placeholder
                  }
                  rows={6}
                  maxLength={5000}
                  required
                />

              </div>


              {/* =============================================
                  TURNSTILE
              ============================================= */}

              <div
                className="cf-turnstile"
                data-sitekey={
                  process.env
                    .NEXT_PUBLIC_TURNSTILE_SITE_KEY
                }
              />


              {/* =============================================
                  SUBMIT
              ============================================= */}

              <button
                type="submit"
                className="contact-submit"
                disabled={
                  status === "sending"
                }
              >

                {status === "sending"
                  ? form.sendingLabel
                  : form.submitLabel}

              </button>


              {/* =============================================
                  SUCCESS
              ============================================= */}

              {status === "success" && (

                <div className="contact-form-status-success">

                  <p
                    className="contact-form-success"
                    role="status"
                  >
                    {form.successMessage}
                  </p>

                  {whatsappHref && (

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-secondary"
                    >
                      Also send via WhatsApp
                    </a>

                  )}

                </div>

              )}


              {/* =============================================
                  ERROR
              ============================================= */}

              {status === "error" && (

                <p
                  className="contact-form-error"
                  role="alert"
                >
                  {errorMessage}
                </p>

              )}

            </form>

          </div>

        </div>

      </section>
    </>
  );
}