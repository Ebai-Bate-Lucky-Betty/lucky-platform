import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

import { projects } from "@/data/projects";


type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;


  const project = projects.find(
    (project) => project.slug === slug
  );


  if (!project) {
    notFound();
  }


  return (
    <>
      <Navbar />

      <ProjectCaseStudy
        project={project}
      />
    </>
  );
}