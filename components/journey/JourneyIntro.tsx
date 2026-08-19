import { journeyPage } from "@/data/journey";

export default function JourneyIntro() {
  const { intro } = journeyPage;

  return (
    <section className="journey-intro">
      <div className="journey-container">
        
        <h1 className="journey-title">
          {intro.title}
        </h1>

        {intro.description.map((description) => (
          <p className="journey-intro-description" key={description}>
              {description}
          </p>
        ))}
      </div>
    </section>
  );
}


