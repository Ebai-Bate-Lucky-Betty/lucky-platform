import Image from "next/image";
import type { Project } from "@/data/projects";
import Footer from "../layout/Footer";

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  return (
    <main className="case-study">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="case-study-hero">

        {project.image && (
              <div className="case-study-hero-image">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="100vw"
                />

              </div>
           )}

        <div className="case-study-container">

          <div className="case-study-hero-heading">

            

            <h1 className="case-study-title">
              {project.title}
            </h1>

            <p className="case-study-eyebrow">
              {project.category}
            </p>

            <p className="case-study-year">
              {project.year}
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          OVERVIEW
          ===================================================== */}

      <section className="case-study-overview">

        <div className="case-study-narrow">

          <p className="case-study-overview-text">
            {project.overview}
          </p>

        </div>

      </section>


      {/* =====================================================
          PROBLEM
          ===================================================== */}

      <section className="case-study-editorial">

        <div className="case-study-container">

          <div className="editorial-block editorial-left">

            <p className="case-study-label">
              THE PROBLEM
            </p>

            <p className="editorial-text">
              {project.problem}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY I CHOSE IT
          ===================================================== */}

      <section className="case-study-editorial">

        <div className="case-study-container">

          <div className="editorial-block editorial-right">

            <p className="case-study-label">
              WHY I CHOSE IT
            </p>

            <p className="editorial-text">
              {project.whyIChoseIt}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESEARCH
          ===================================================== */}

      <section className="case-study-editorial">

        <div className="case-study-container">

          <div className="editorial-block editorial-left">

            <p className="case-study-label">
              RESEARCH
            </p>

            <p className="editorial-text">
              {project.research}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESIGN PROCESS
          ===================================================== */}

      <section className="case-study-editorial">

        <div className="case-study-container">

          <div className="editorial-block editorial-right">

            <p className="case-study-label">
              MY DESIGN PROCESS
            </p>

            <p className="editorial-text">
              {project.designProcess}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARCHITECTURE
          ===================================================== */}

      <section className="case-study-architecture">

        <div className="case-study-container">

          <div className="architecture-heading">

            <p className="case-study-label">
              ARCHITECTURE
            </p>

            <h2 className="case-study-section-title">
              How the system is built.
            </h2>

            <p className="architecture-introduction">
              The architecture behind the project, from its
              overall structure to the individual systems that
              make it work.
            </p>

          </div>


          <div className="architecture-list">

            {project.architecture.map(
              (section, index) => {

                const reversed = index % 2 !== 0;

                return (
                  <article
                    key={section.title}
                    className={`architecture-item ${
                      reversed
                        ? "architecture-item-reversed"
                        : ""
                    }`}
                  >

                    <div className="architecture-text">

                      <h3>
                        {section.title}
                      </h3>

                      <p>
                        {section.description}
                      </p>

                    </div>


                    {section.image && (
                      <div className="architecture-image">

                        <Image
                          src={section.image}
                          alt={
                            section.imageAlt ??
                            section.title
                          }
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                        />

                      </div>
                    )}

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGIES
          ===================================================== */}

      <section className="case-study-technologies">

        <div className="case-study-container">

          <div className="section-heading-split">

            <div>

              <p className="case-study-label">
                TECHNOLOGIES USED
              </p>

              <h2 className="case-study-section-title">
                Tools with a purpose.
              </h2>

            </div>

            <p className="section-heading-description">
              Every technology was selected to solve a
              particular problem within the project.
            </p>

          </div>


          <div className="technology-table">

            <div className="technology-table-header">

              <span>
                Technology
              </span>

              <span>
                What I used it for
              </span>

            </div>


            {project.technologies.map(
              (technology) => (

                <div
                  key={technology.name}
                  className="technology-table-row"
                >

                  <strong>
                    {technology.name}
                  </strong>

                  <span>
                    {technology.purpose}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CHALLENGES & SOLUTIONS
          ===================================================== */}

      <section className="case-study-challenges">

        <div className="case-study-container">

          <div className="section-heading-split">

            <div>

              <p className="case-study-label">
                CHALLENGES & SOLUTIONS
              </p>

              <h2 className="case-study-section-title">
                What challenged me,
                <br />
                and how I responded.
              </h2>

            </div>

          </div>


          <div className="challenge-grid">

            {project.challenges.map(
              (item, index) => (

                <article
                  key={index}
                  className="challenge-card"
                >

                  <div className="challenge-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <div className="challenge-part">

                    <span>
                      Challenge
                    </span>

                    <p>
                      {item.challenge}
                    </p>

                  </div>


                  <div className="challenge-part">

                    <span>
                      Solution
                    </span>

                    <p>
                      {item.solution}
                    </p>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS
          ===================================================== */}

      <section className="case-study-results">

        <div className="case-study-narrow">

          <p className="case-study-label">
            RESULTS
          </p>

          <h2 className="results-title">
            {project.results}
          </h2>

        </div>


        {project.screenshots.length > 0 && (

          <div className="results-gallery">

            {project.screenshots
              .slice(0, 3)
              .map((image, index) => (

                <figure
                  key={image.src}
                  className={
                    index === 0
                      ? "results-gallery-featured"
                      : ""
                  }
                >

                  <div className="results-image">

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                    />

                  </div>


                  {image.caption && (
                    <figcaption>
                      {image.caption}
                    </figcaption>
                  )}

                </figure>

              ))}

          </div>

        )}

      </section>


      {/* =====================================================
          WHAT I LEARNED
          ===================================================== */}

      <section className="case-study-learning">

        <div className="case-study-container">

          <div className="learning-layout">

            <p className="case-study-label">
              WHAT I LEARNED
            </p>

            <p className="learning-text">
              {project.whatILearned}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE IMPROVEMENTS
          ===================================================== */}

      {project.futureImprovements.length > 0 && (

        <section className="case-study-future">

          <div className="case-study-container">

            <div className="section-heading-split">

              <div>

                <p className="case-study-label">
                  FUTURE IMPROVEMENTS
                </p>

                <h2 className="case-study-section-title">
                  Where it could go next.
                </h2>

              </div>

            </div>


            <div className="future-grid">

              {project.futureImprovements.map(
                (improvement, index) => (

                  <div
                    key={improvement}
                    className="future-item"
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {improvement}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          VIDEO
          ===================================================== */}

      {project.videoDemo && (

        <section className="case-study-video-section">

          <div className="case-study-container">

            <p className="case-study-label">
              VIDEO DEMO
            </p>

            <h2 className="case-study-section-title">
              See it in motion.
            </h2>


            <div className="case-study-video">

              <video
                controls
                src={project.videoDemo}
              />

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          EXPLORE
          ===================================================== */}

      <section className="case-study-explore">

        <div className="case-study-container">

          <p className="case-study-label">
            EXPLORE
          </p>

          <h2 className="explore-title">
            Want to look
            <br />
            closer?
          </h2>


          <div className="explore-links">

            {project.links.github && (

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="explore-link explore-link-primary"
              >

                <span>
                  GitHub Repository
                </span>

                <span>
                  ↗
                </span>

              </a>

            )}


            {project.links.liveDemo && (

              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="explore-link"
              >

                <span>
                  Live Demo
                </span>

                <span>
                  ↗
                </span>

              </a>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          REFLECTION
          ===================================================== */}

      <section className="case-study-reflection">

        <div className="case-study-narrow">

          <p className="case-study-label">
            REFLECTION
          </p>

          <p className="reflection-text">
            {project.reflection}
          </p>

        </div>

      </section>

      <Footer />


    </main>
  );
}