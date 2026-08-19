import { resume } from "@/data/resume";

export default function ResumeEducation() {
  return (
    <section className="resume-section resume-education">
      <div className="resume-container">

        <div className="resume-section-heading">
          <p className="resume-eyebrow">
            Education
          </p>
        </div>

        <div className="resume-education-list">
          {resume.education.map((education, index) => (
            <article
              key={`${education.degree}-${index}`}
              className="resume-education-item"
            >
              <div className="resume-period">
                {education.period}
              </div>

              <div className="resume-education-main">
                <h3>{education.degree}</h3>

                <p className="resume-institution">
                  {education.institution}
                </p>

                {education.description && (
                  <p className="resume-description">
                    {education.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}