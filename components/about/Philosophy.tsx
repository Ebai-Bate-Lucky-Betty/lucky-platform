import Image from "next/image";

import { aboutPage } from "@/data/about";

export default function Philosophy() {
  const { philosophy } = aboutPage;

  return (
    <section className="about-philosophy">
      <div className="about-container">

        <div className="philosophy-grid">

          <div className="about-content">

            <p className="about-eyebrow">
              {philosophy.eyebrow}
            </p>

            <h2 className="about-section-title">
              {philosophy.title}
            </h2>

            <div className="about-paragraphs">
              {philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

          </div>


          <div className="about-image-wrapper philosophy-image">
            <Image
              src={philosophy.image.src}
              alt={philosophy.image.alt}
              fill
              className="about-image"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

        </div>


        <div className="philosophy-principles">

          {philosophy.principles.map((principle) => (
            <div
              key={principle.number}
              className="philosophy-principle"
            >
              <span className="principle-number">
                {principle.number}
              </span>

              <h3>
                {principle.title}
              </h3>

              <p>
                {principle.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}