import Navbar from "@/components/layout/Navbar";

import JourneyIntro from "@/components/journey/JourneyIntro";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import JourneyClosing from "@/components/journey/JourneyClosing";
import Footer from "@/components/layout/Footer";

export default function JourneyPage() {
  return (
    <>
      <Navbar />

      <main>
        <JourneyIntro />
        <JourneyTimeline />
        <JourneyClosing />
      </main>

      <Footer />
    </>
  );
}
