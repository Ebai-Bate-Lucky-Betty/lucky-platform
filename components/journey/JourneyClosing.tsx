import { journeyPage } from "@/data/journey";

export default function JourneyClosing() {
  const { closing } = journeyPage;

  return (
    <section className="journey-closing">
      <div className="journey-container">

        <p className="journey-eyebrow">
          {closing.eyebrow}
        </p>

        <h2 className="journey-closing-title">
          {closing.title}
        </h2>

        <p className="journey-closing-description">
          {closing.description}
        </p>

      </div>
    </section>
  );
}
