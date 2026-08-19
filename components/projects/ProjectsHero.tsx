import { projects } from "@/data/projects";

export default function ProjectsHero() {
  return (
    <section className="projects-hero">

      <div className="projects-container">

        <h1 className="projects-title">
          What ends debate 
          <br />
          <em>is demonstration.</em>
        </h1>

        <p className="projects-introduction">
          I’ve spent this portfolio telling you about how I think and what I value: the engineering beneath the surface, thoughtful architecture, robust systems, and the belief that good software is about more than simply making code work. I told you of my passion for storytelling, and my desire to bring to life my imagination.
        </p>

        <p className="projects-introduction">
          The best way to know whether I mean it is to look at what I’ve built.
        </p>

        <p className="projects-introduction">
          Here, you’ll find projects spanning software architecture, backend engineering, application development, creative technology, and immersive experiences. More than a collection of finished products, they are demonstrations of how I think, how I solve problems, and how I build. Welcome, to <em>My World!</em>
        </p>

        <div className="projects-count">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </div>

      </div>

    </section>
  );
}