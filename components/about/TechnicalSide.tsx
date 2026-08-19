import Image from "next/image";

import { aboutPage } from "@/data/about";

export default function TechnicalSide() {
  const { technical } = aboutPage;

  return (
    <section className="about-split about-technical">
      <div className="about-container about-split-grid">

        <div className="about-content">

          <p className="about-eyebrow">
            {technical.eyebrow}
          </p>

          <h2 className="about-section-title">
            {technical.title}
          </h2>

          <div className="about-paragraphs">
            {technical.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-highlights">
            {technical.highlights.map((highlight) => (
              <span key={highlight}>
                {highlight}
              </span>
            ))}
          </div>

        </div>


        <div className="about-image-wrapper">
          <Image
            src={technical.image.src}
            alt={technical.image.alt}
            fill
            className="about-image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}