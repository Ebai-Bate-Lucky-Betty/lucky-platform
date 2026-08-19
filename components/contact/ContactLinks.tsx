import { contactPage } from "@/data/contact";
import { siteContent } from "@/data/site";

export default function ContactLinks() {
  const { links } = contactPage;

  const contactItems = [
    siteContent.contact.github,
    siteContent.contact.email,
    siteContent.contact.whatsapp,
  ];

  return (
    <section className="contact-links-section">
      <div className="contact-container">

        <div className="contact-links-header">

          <p className="contact-eyebrow">
            CONNECT
          </p>

          <h2>
            {links.title}
          </h2>

        </div>

        <div className="contact-links">

          {contactItems.map((item) => (

            <a
              key={item.label}
              href={item.href}
              target={
                item.external
                  ? "_blank"
                  : undefined
              }
              rel={
                item.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="contact-link"
            >

              <span className="contact-link-label">
                {item.label}
              </span>

              <span className="contact-link-value">
                {item.value}
              </span>

              <span className="contact-link-arrow">
                ↗
              </span>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}