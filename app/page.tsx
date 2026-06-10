import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </main>
  );
}