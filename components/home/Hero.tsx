import Image from "next/image";

import { homeContent } from "@/data/home";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-copy">

          <p className="hero-eyebrow">
            {hero.eyebrow.primary}{" "}
            <span>{hero.eyebrow.separator}</span>{" "}
            {hero.eyebrow.secondary}
          </p>


          <h1
            className="hero-title"
            aria-label={hero.title.ariaLabel}
          >
            <span className="hero-word word-1">
              {hero.title.lineOne.first}
            </span>{" "}

            <span className="hero-word word-2">
              {hero.title.lineOne.second}
            </span>

            <br />

            <span className="hero-word word-3">
              {hero.title.lineTwo.first}
            </span>{" "}

            <span className="hero-word word-4 hero-word-italic">
              {hero.title.lineTwo.second}
            </span>
          </h1>


          <p className="hero-description">
            {hero.description.intro}{" "}
            <strong>{hero.description.name}</strong>{" "}
            {hero.description.text}
          </p>


          <div className="hero-actions">

            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`button button-${action.variant}`}
              >
                {action.label}
              </a>
            ))}

          </div>

        </div>


        <div className="hero-visual">

          <Image
            src={hero.visual.src}
            alt={hero.visual.alt}
            fill
            priority
            className="hero-image"
            sizes={hero.visual.sizes}
          />

        </div>

      </div>


      <div
        className="scroll-indicator"
        aria-hidden="true"
      >
        <span />
      </div>
    </section>
  );
}