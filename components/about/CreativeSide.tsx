import Image from "next/image";

import { aboutPage } from "@/data/about";

export default function CreativeSide() {
  const { creative } = aboutPage;

  return (
    <section className="about-split about-creative">
      <div className="about-container about-split-grid about-split-reverse">

        <div className="about-image-wrapper">
          <Image
            src={creative.image.src}
            alt={creative.image.alt}
            fill
            className="about-image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>


        <div className="about-content">

          <p className="about-eyebrow">
            {creative.eyebrow}
          </p>

          <h2 className="about-section-title">
            {creative.title}
          </h2>

          <div className="about-paragraphs">
            {creative.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-highlights">
            {creative.highlights.map((highlight) => (
              <span key={highlight}>
                {highlight}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}