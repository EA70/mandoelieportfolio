import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import BusinessCTA from "@/components/BusinessCTA";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technos from "@/components/Technos";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Technos />
      <Projects />
      <About />
      <BlogSection />
      <BusinessCTA />
      <Contact />
    </main>
  );
}