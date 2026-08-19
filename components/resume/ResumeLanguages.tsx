import { resume } from "@/data/resume";

export default function ResumeLanguages() {
  return (
    <section className="resume-section resume-languages">
      <div className="resume-container">

        <div className="resume-section-heading">
          <p className="resume-eyebrow">
            Languages
          </p>
        </div>

        <div className="resume-language-list">
          {resume.languages.map((language) => (
            <div
              key={language.name}
              className="resume-language-item"
            >
              <span className="resume-language-name">
                {language.name}
              </span>

              <span className="resume-language-level">
                {language.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}