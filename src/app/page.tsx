import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimationSection from "@/components/AnimationSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Obras from "@/components/Obras";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink text-bone">
      <Header />
      <Hero />
      <AnimationSection />
      <About />
      <Services />
      <Obras />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
