import Link from "next/link";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import { getProject } from "@/data/projects";

const arcanaProject = getProject("arcana")!;

const arcanaSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
];

export default function ArcanaPage() {
  return (
    <main className="case-page case-page-with-toc">
      <CaseToc sections={arcanaSections} />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">THE ARCANA / 2025</span>
      </header>

      <CaseHero
        title="The Arcana"
        subtitle="AI Tarot Experience"
        tags={arcanaProject.tags}
        intro="The Arcana is an AI-powered tarot experience that blends symbolic ritual with conversational intelligence—helping users explore reflection, intuition, and narrative through a digitally reimagined reading practice."
        image="/images/arcana.jpg"
        imageAlt="The Arcana AI tarot experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>Product Design / UX / Interaction Design</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Figma / AI Prototyping / Visual Design</p>
          </div>
          <div>
            <span>Focus</span>
            <p>AI Tarot / Conversational UX / Symbolic Interface</p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            The Arcana reframes tarot as a guided dialogue between user and AI—
            preserving the mystery and symbolism of traditional readings while
            making interpretation accessible, personal, and responsive to context.
          </p>
          <p>
            The experience spans card presentation, reading flows, and AI-generated
            narrative layers—designing interaction patterns that feel ritualistic
            without losing clarity, and building trust through tone, pacing, and
            visual language rooted in archetypal imagery.
          </p>
        </div>
      </section>
    </main>
  );
}
