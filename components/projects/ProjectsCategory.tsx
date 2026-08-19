"use client";

import { useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectsCategoryProps = {
  searchQuery?: string;
};

export default function ProjectsCategory({
  searchQuery = "",
}: ProjectsCategoryProps) {
  /*
   * =====================================================
   * GROUP PROJECTS BY CATEGORY
   * =====================================================
   */

  const categories = useMemo(() => {
    const grouped = new Map<string, typeof projects>();

    projects.forEach((project) => {
      const existing = grouped.get(project.category);

      if (existing) {
        existing.push(project);
      } else {
        grouped.set(project.category, [project]);
      }
    });

    return Array.from(grouped.entries());
  }, []);

  /*
   * =====================================================
   * SEARCH QUERY
   * =====================================================
   */

  const normalizedQuery = searchQuery.trim().toLowerCase();

  /*
   * =====================================================
   * CHECK WHETHER A PROJECT MATCHES THE SEARCH
   * =====================================================
   */

  const projectMatchesSearch = (project: (typeof projects)[number]) => {
    if (!normalizedQuery) {
      return true;
    }

    return (
      project.category
        .toLowerCase()
        .includes(normalizedQuery) ||
      project.title
        .toLowerCase()
        .includes(normalizedQuery) ||
      project.description
        .toLowerCase()
        .includes(normalizedQuery) ||
      project.technologies.some((technology) =>
        technology.name
          .toLowerCase()
          .includes(normalizedQuery)
      )
    );
  };

  /*
   * =====================================================
   * FILTERED CATEGORIES
   * =====================================================
   */

  const filteredCategories = categories
    .map(([category, categoryProjects]) => {
      const filteredProjects = categoryProjects.filter(
        projectMatchesSearch
      );

      return {
        category,
        projects: filteredProjects,
      };
    })
    .filter(
      ({ projects: categoryProjects }) =>
        categoryProjects.length > 0
    );

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <section className="projects-category-section">
      <div className="projects-container">

        {filteredCategories.map(
          ({ category, projects: categoryProjects }) => (
            <section
              key={category}
              id={category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}
              className="project-category"
            >

              <div className="project-category-heading">
                <div>
                  <p className="project-category-eyebrow">
                    CATEGORY
                  </p>

                  <h2 className="project-category-title">
                    {category}
                  </h2>
                </div>
              </div>

              <div className="project-category-list">
                {categoryProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                  />
                ))}
              </div>

            </section>
          )
        )}

        {normalizedQuery &&
          filteredCategories.length === 0 && (
            <div className="projects-no-results">
              <p>No projects found.</p>

              <span>
                Try searching for another category, technology, or
                project.
              </span>
            </div>
          )}

      </div>
    </section>
  );
}