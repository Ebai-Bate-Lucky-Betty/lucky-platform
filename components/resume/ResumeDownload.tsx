import { resume } from "@/data/resume";

export default function ResumeDownload() {
  return (
    <section className="resume-download">
      <div className="resume-container">

        <div className="resume-download-content">

          <h2 className="resume-download-title">
            Take the complete <em>story</em> with you.
          </h2>

          <p className="resume-download-description">
            Download my full resume for a concise overview of my education, professional experience, technical expertise, and creative work.
          </p>

          <a
            href={resume.pdf.downloadUrl}
            download
            className="button button-primary"
          >
            Download Resume
            <span aria-hidden="true">↓</span>
          </a>

        </div>

      </div>
    </section>
  );
}