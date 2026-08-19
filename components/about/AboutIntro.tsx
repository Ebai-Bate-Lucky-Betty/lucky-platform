import { aboutPage } from "@/data/about";

export default function AboutIntro() {
  const { intro } = aboutPage;

  return (
    <section className="about-intro">
      <div className="about-container">

        <h1 className="about-intro-title">
          {intro.title}
        </h1>

        <p className="about-intro-description">
          {intro.description}
        </p>

      </div>
    </section>
  );
}