import { resume } from "@/data/resume";

export default function ResumeExperience() {
  return (
    <section className="resume-section resume-experience">
      <div className="resume-container">

        <div className="resume-section-heading">
          <p className="resume-eyebrow">
            Experience
          </p>
        </div>

        <div className="resume-experience-list">
          {resume.experience.map((experience, index) => (
            <article
              key={`${experience.organization}-${index}`}
              className="resume-experience-item"
            >
              <div className="resume-period">
                {experience.period}
              </div>

              <div className="resume-experience-main">

                <div className="resume-experience-header">
                  <div>
                    <h3>{experience.role}</h3>

                    <p className="resume-institution">
                      {experience.organization}
                    </p>
                  </div>
                </div>

                <p className="resume-description">
                  {experience.description}
                </p>

                {experience.highlights &&
                  experience.highlights.length > 0 && (
                    <ul className="resume-highlights">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}