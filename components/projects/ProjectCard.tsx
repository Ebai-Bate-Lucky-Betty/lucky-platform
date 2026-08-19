import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <article className="project-card-inner">

        {/* IMAGE */}

        <div className="project-card-visual">

          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="project-card-image"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : (
            <div className="project-card-placeholder">
              <span>{project.category}</span>
            </div>
          )}

        </div>

        {/* CONTENT */}

        <div className="project-card-content">

          <div className="project-card-top">

            <div className="project-card-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <h2 className="project-card-title">
              {project.title}
            </h2>

            <p className="project-card-description">
              {project.description}
            </p>

          </div>

          {/* TECHNOLOGIES */}

          <div className="project-card-bottom">

            <div className="project-card-technologies">
              {project.technologies.map((technologies) => (
                <span key={technologies.name}>
                  {technologies.name}
                </span>
              ))}
            </div>

            <span className="project-card-link">
              View case study
              <span>↗</span>
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}