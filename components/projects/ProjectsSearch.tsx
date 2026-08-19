"use client";

import { useState } from "react";

type ProjectsSearchProps = {
  onSearch: (query: string) => void;
};

export default function ProjectsSearch({
  onSearch,
}: ProjectsSearchProps) {

  const [value, setValue] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const nextValue = event.target.value;

    setValue(nextValue);
    onSearch(nextValue);
  }

  function clearSearch() {
    setValue("");
    onSearch("");
  }

  return (
    <section className="projects-search-section">

      <div className="projects-container">

        <div className="projects-search">

          <span className="projects-search-icon">
            /
          </span>

          <input
            type="search"
            value={value}
            onChange={handleChange}
            placeholder="Search projects, categories, technologies..."
            aria-label="Search projects"
          />

          {value && (
            <button
              type="button"
              onClick={clearSearch}
              className="projects-search-clear"
              aria-label="Clear search"
            >
              ×
            </button>
          )}

        </div>

      </div>

    </section>
  );
}