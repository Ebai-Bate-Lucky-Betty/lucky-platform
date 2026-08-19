import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import TechnicalSide from "@/components/about/TechnicalSide";
import CreativeSide from "@/components/about/CreativeSide";
import Philosophy from "@/components/about/Philosophy";
import Vision from "@/components/about/Vision";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutIntro />
        <TechnicalSide />
        <CreativeSide />
        <Philosophy />
        <Vision />
      </main>

      <Footer />
    </>
  );
}