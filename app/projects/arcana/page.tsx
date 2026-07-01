import CaseNavbar from "@/components/CaseNavbar";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";

const arcanaSpec = [
  { label: "Role", value: "Product Design / UX / Interaction Design" },
  { label: "Tools", value: "Figma / AI Prototyping / Visual Design" },
  { label: "Focus", value: "AI Tarot / Conversational UX / Symbolic Interface" },
];

const arcanaSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
];

export default function ArcanaPage() {
  return (
    <main className="case-page case-page-with-toc">
      <CaseToc sections={arcanaSections} />

      <CaseNavbar projectId="arcana" />

      <CaseHero
        title="The Arcana"
        subtitle="AI Tarot Experience"
        spec={arcanaSpec}
        intro="The Arcana is an AI-powered tarot experience that blends symbolic ritual with conversational intelligence, helping users explore reflection, intuition, and narrative through a digitally reimagined reading practice."
        image="/images/arcana.jpg"
        imageAlt="The Arcana AI tarot experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            The Arcana reframes tarot as a guided dialogue between user and AI,
            preserving the mystery and symbolism of traditional readings while
            making interpretation accessible, personal, and responsive to context.
          </p>
          <p>
            The experience spans card presentation, reading flows, and AI-generated
            narrative layers. The design focuses on interaction patterns that feel ritualistic
            without losing clarity, and building trust through tone, pacing, and
            visual language rooted in archetypal imagery.
          </p>
        </div>
      </section>
    </main>
  );
}
