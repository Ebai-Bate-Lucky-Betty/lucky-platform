import { contactPage } from "@/data/contact";

export default function ContactClosing() {
  const { closing } = contactPage;

  return (
    <section className="contact-closing">

      <div className="contact-container">

        <p className="contact-eyebrow">
          {closing.eyebrow}
        </p>

        <h2 className="contact-closing-title">
          {closing.title}
        </h2>

      </div>

    </section>
  );
}