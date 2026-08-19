import Link from "next/link";
import { resume } from "@/data/resume";

export default function ResumeHero() {
  return (
    <section className="resume-hero">
      <div className="resume-container">
        <div className="resume-hero-content">

          <h1 className="resume-hero-title">
            {resume.personal.name}
          </h1>

          <p className="resume-hero-role">
            {resume.personal.title}
          </p>

          <p className="resume-hero-positioning">
            {resume.personal.positioning}
          </p>

          <div className="resume-hero-actions">
            <Link
              href={resume.contact.href}
              className="button button-primary"
            >
              {resume.contact.label}
            </Link>

            <a
              href={resume.pdf.downloadUrl}
              download
              className="button button-secondary"
            >
              Download Resume
              <span aria-hidden="true">↓</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}