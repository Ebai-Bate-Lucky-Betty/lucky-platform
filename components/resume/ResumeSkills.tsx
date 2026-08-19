import { resume } from "@/data/resume";

type SkillGroupProps = {
  title: string;
  skills: readonly string[];
};

function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="resume-skill-group">

      <div className="resume-skill-group-header">

        <h3>{title}</h3>
      </div>

      <div className="resume-skill-list">
        {skills.map((skill) => (
          <span key={skill} className="resume-skill">
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

export default function ResumeSkills() {
  return (
    <section className="resume-section resume-skills">
      <div className="resume-container">

        <div className="resume-section-heading">
          <p className="resume-eyebrow">
            Skills
          </p>
        </div>

        <div className="resume-skills-grid">

          <SkillGroup
            title="Technical"
            skills={resume.skills.technical}
          />

          <SkillGroup
            title="Creative"
            skills={resume.skills.creative}
          />

          <SkillGroup
            title="Soft"
            skills={resume.skills.soft}
          />

        </div>

      </div>
    </section>
  );
}