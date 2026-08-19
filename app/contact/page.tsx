import Navbar from "@/components/layout/Navbar";

import ContactIntro from "@/components/contact/ContactIntro";
import ContactLinks from "@/components/contact/ContactLinks";
import ContactForm from "@/components/contact/ContactForm";
import ContactClosing from "@/components/contact/ContactClosing";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>

        <ContactIntro />

        <ContactLinks />

        <ContactForm />

        <ContactClosing />

      </main>

      <Footer />
    </>
  );
}