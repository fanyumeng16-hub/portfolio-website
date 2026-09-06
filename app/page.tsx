import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import HomeFishLayer from "@/components/HomeFishLayer";

export default function Home() {
  return (
    <main className="home-page">
      <HomeFishLayer />
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
