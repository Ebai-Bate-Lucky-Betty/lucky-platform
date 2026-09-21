import Image from "next/image";
import type {
  Project,
  ProjectArchitectureSection,
  RichText,
} from "@/data/projects";
import Footer from "../layout/Footer";

type ProjectCaseStudyProps = {
  project: Project;
};

/*
 * =========================================================
 * RICH TEXT RENDERER
 * =========================================================
 *
 * Accepts a RichText value (a single string, or an array of
 * strings) and renders one tag per paragraph. Existing single
 * strings render exactly as before — one tag, no change in
 * output.
 */

function renderRichText(
  content: RichText,
  className?: string,
  as: "p" | "h2" = "p"
) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return paragraphs.map((paragraph, index) =>
    as === "h2" ? (
      <h2 key={index} className={className}>
        {paragraph}
      </h2>
    ) : (
      <p key={index} className={className}>
        {paragraph}
      </p>
    )
  );
}

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  /*
   * =========================================================
   * ARCHITECTURE GRID CHILDREN
   * =========================================================
   *
   * `addGridUnder` contains the titles of architecture
   * sections that should be displayed as 3-grid cards under
   * their parent section.
   *
   * Example:
   *
   * {
   *   title: "System Architecture",
   *   addGridUnder: [
   *     "Communication",
   *     "API Design",
   *     "Database Architecture",
   *   ]
   * }
   *
   * The sections themselves remain normal architecture
   * sections in the data. They are simply removed from the
   * alternating list when they are being used as grid cards.
   */

  const gridChildTitles = new Set(
    project.architecture.flatMap(
      (section) => section.addGridUnder ?? []
    )
  );

  /*
   * Only architecture sections that are NOT being used as
   * children of another section remain in the main
   * alternating architecture list.
   */
  const architectureSections = project.architecture.filter(
    (section) => !gridChildTitles.has(section.title)
  );

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

          {renderRichText(
            project.overview,
            "case-study-overview-text"
          )}

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

            {renderRichText(
              project.problem,
              "editorial-text"
            )}

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

            {renderRichText(
              project.whyIChoseIt,
              "editorial-text"
            )}

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

            {renderRichText(
              project.research,
              "editorial-text"
            )}

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

            {renderRichText(
              project.designProcess,
              "editorial-text"
            )}

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


          {/* =================================================
              ARCHITECTURE LIST

              The original alternating architecture behavior
              is preserved:

              index 0  → normal
              index 1  → reversed
              index 2  → normal
              index 3  → reversed

              This means the existing image-left/text-right
              and text-left/image-right swapping is unchanged.
              ================================================= */}

          <div className="architecture-list">

            {architectureSections.map(
              (section, index) => {

                const reversed = index % 2 !== 0;

                /*
                 * Find the architecture sections requested by
                 * this section's `addGridUnder` property.
                 *
                 * The order here is exactly the order defined
                 * inside `addGridUnder`.
                 */
                const gridChildren =
                  section.addGridUnder
                    ?.map((title) =>
                      project.architecture.find(
                        (item) => item.title === title
                      )
                    )
                    .filter(
                      (
                        item
                      ): item is ProjectArchitectureSection =>
                        Boolean(item)
                    ) ?? [];

                return (
                  <div
                    key={section.title}
                    className="architecture-section-wrapper"
                  >

                    {/* =========================================
                        MAIN ARCHITECTURE SECTION
                        ========================================= */}

                    <article
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

                        {renderRichText(
                          section.description
                        )}

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


                    {/* =========================================
                        OPTIONAL 3-GRID

                        Only appears when the current section
                        contains:

                        addGridUnder: [
                          "...",
                          "...",
                          "..."
                        ]

                        The title and description come from
                        the referenced architecture sections.
                        ========================================= */}

                    {gridChildren.length > 0 && (

                      <div className="architecture-grid">

                        {gridChildren.map((child) => (

                          <div
                            key={`${section.title}-${child.title}`}
                            className="architecture-grid-item"
                          >

                            <h4>
                              {child.title}
                            </h4>

                            {renderRichText(
                              child.description
                            )}

                          </div>

                        ))}

                      </div>

                    )}

                  </div>
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

          {renderRichText(
            project.results,
            "results-title",
            "h2"
          )}

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

            {renderRichText(
              project.whatILearned,
              "learning-text"
            )}

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
                className="explore-link explore-link-primary"
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

          {renderRichText(
            project.reflection,
            "reflection-text"
          )}

        </div>

      </section>

      <Footer />

    </main>
  );
}