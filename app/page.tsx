import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import { portfolioData } from "@/lib/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <section id="hero" className="px-10 py-20">
          <Hero data={portfolioData} />
        </section>

        <div className="py-10">
          <About />
        </div>

        <div className="py-10">
          <Projects />
        </div>
      </div>
    </main>
  );
}