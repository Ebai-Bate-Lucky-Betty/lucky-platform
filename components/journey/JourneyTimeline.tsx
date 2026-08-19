import { journeyPage } from "@/data/journey";

export default function JourneyTimeline() {
  const { points } = journeyPage;

  return (
    <section className="journey-timeline">
      <div className="journey-container">

        <div className="timeline">

          {points.map((point, index) => (
            <article
              key={`${point.year}-${point.title}`}
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-item-left"
                  : "timeline-item-right"
              }`}
            >

              <div className="timeline-content">

                <span className="timeline-year">
                  {point.year}
                </span>

                <h2 className="timeline-title">
                  {point.title}
                </h2>

                <div className="timeline-description">
                  {point.description.map((description) => (
                    <p key={description}>
                      {description}
                    </p>
                  ))}
                </div>
              </div>


              <div
                className="timeline-marker"
                aria-hidden="true"
              >
                <span />
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
