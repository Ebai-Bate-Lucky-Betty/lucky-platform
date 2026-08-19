import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Transition from "@/components/home/Transition";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <SelectedWork />
        <Transition />
      </main>

      <Footer />
    </>
  );
}

