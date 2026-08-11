import Section from "@/components/Section";
import { projects } from "@/lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-100">
        <Section title="Projects">
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                <div
                    key={index}
                    className="border border-gray-200 p-6 rounded-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 cursor-pointer"
                >
                    <h3 className="text-xl font-medium">
                    {project.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                    {project.description}
                    </p>
                </div>
                ))}
            </div>
        </Section>
    </section>
    
  );
}
