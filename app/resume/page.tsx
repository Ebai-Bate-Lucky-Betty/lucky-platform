import ResumeHero from "@/components/resume/ResumeHero";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeLanguages from "@/components/resume/ResumeLanguages";
import ResumeDownload from "@/components/resume/ResumeDownload";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ResumePage() {
  return (
    <> 
        <Navbar />

        <main className="resume-page">

            <ResumeHero />

            <ResumeEducation />

            <ResumeExperience />

            <ResumeSkills />

            <ResumeLanguages />

            <ResumeDownload />
        </main>

        <Footer />
    </>
    
  );
}

