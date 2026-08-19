import { contactPage } from "@/data/contact";

export default function ContactIntro() {
  const { intro } = contactPage;

  return (
    <section className="contact-intro">
      <div className="contact-container">

        <h1 className="contact-title">
          {intro.title}
        </h1>

        <p className="contact-intro-description">
          {intro.description}
        </p>

      </div>
    </section>
  );
}