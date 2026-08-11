import Section from "@/components/Section";

export default function About() {
  return (
     <section id="about" className="border-t border-gray-100">
        <Section title="About Me">
            <p className="text-lg text-gray-700 leading-relaxed">
                I am a creative technologist who enjoys building digital systems
                that combine logic, design, and storytelling. My work focuses on
                crafting meaningful user experiences through code.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                I am currently exploring software engineering, creative computing,
                and interactive design with the goal of building impactful products
                and research-driven projects.
            </p>
        </Section>
     </section>
    
  );
}

