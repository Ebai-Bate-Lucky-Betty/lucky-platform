import Link from "next/link";
import Image from "next/image";

import { projects } from "@/data/projects";

export default function SelectedWork() {
  const selectedProjects = projects.filter(
    (project) => project.selectedWork
  );

  return (
    <section className="selected-work">
      <div className="selected-work-inner">

        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              SELECTED WORK
            </p>

            <h2 className="section-title">
              From systems
              <br />
              to <em>experiences.</em>
            </h2>
          </div>

          <p className="section-introduction">
            A selection of work spanning software engineering, creative technology, and immersive experiences.
          </p>
        </div>

        <div className="projects-grid">

          {selectedProjects.map((project, index) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className={`project-card project-card-${index + 1}`}
            >

              <div className="project-visual">

                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="project-image"
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.category}</span>
                  </div>
                )}

                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

              <div className="project-information">

                <div>
                  <p className="project-category">
                    {project.category}
                  </p>
                </div>

                <div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology.name}>
                      {technology.name}
                    </span>
                  ))}
                </div>

              </div>

            </Link>
          ))}

        </div>

        <div className="selected-work-footer">
          <Link
            href="/projects"
            className="view-all-projects"
          >
            View all projects
          </Link>
        </div>

      </div>
    </section>
  );
}