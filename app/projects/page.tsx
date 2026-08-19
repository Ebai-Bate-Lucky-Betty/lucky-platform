"use client";

import { useState } from "react";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsSearch from "@/components/projects/ProjectsSearch";
import ProjectsCategory from "@/components/projects/ProjectsCategory";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <Navbar />
      <main className="projects-page">

        <ProjectsHero />

        <ProjectsSearch
          onSearch={setSearchQuery}
        />

        <ProjectsCategory
          searchQuery={searchQuery}
        />

      </main>
    
    <Footer />
    </>
    
  );
}