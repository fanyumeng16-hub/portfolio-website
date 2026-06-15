import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ConnectDraw from "@/components/ConnectDraw";
import SiteFooter from "@/components/SiteFooter";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ConnectDraw />
      <SiteFooter />
    </main>
  );
}