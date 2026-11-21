import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <SelectedWork />
        <Experience />
        <Skills />
        <CallToAction />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
