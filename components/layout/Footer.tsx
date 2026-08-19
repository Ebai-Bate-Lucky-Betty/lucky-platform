import { siteContent } from "@/data/site";

export default function Footer() {
  const { brand, contact, footer } = siteContent;

  const contactItems = [
    contact.whatsapp,
    contact.email,
    contact.github,
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        <div className="footer-brand">

          <p className="footer-name">
            {brand.name}
          </p>

          <p className="footer-copyright">
            {footer.copyright}
          </p>

        </div>

        <div className="footer-contact">

          {contactItems.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="footer-link"
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
            >

              <span className="footer-label">
                {item.label}
              </span>

              <span className="footer-value">
                {item.value}
              </span>

            </a>

          ))}

        </div>

      </div>
    </footer>
  );
}