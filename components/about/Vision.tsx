import { aboutPage } from "@/data/about";

export default function Vision() {
  const { vision } = aboutPage;

  return (
    <section className="about-vision">
      <div className="about-container">

        <p className="about-eyebrow">
          {vision.eyebrow}
        </p>

        <h2 className="vision-title">
          {vision.title}
        </h2>

        <p className="vision-description">
          {vision.description}
        </p>

        <div className="vision-statement">
          <p>
            {vision.statement}
          </p>
        </div>

        <p className="vision-closing">
          {vision.closing}
        </p>

      </div>
    </section>
  );
}