import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <SiteFooter />
    </main>
  );
}
