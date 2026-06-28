"use client";

import CaseBackLink from "@/components/CaseBackLink";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import ProtectedProjectLock from "@/components/ProtectedProjectLock";

const PASSWORD = "universal";

const universalSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
];

const universalTitle = <ProjectTitle title="UNIVERSAL × SCADpro" />;

const universalSpec = [
  { label: "Role", value: "Interaction Design / AR Experience / UI Design" },
  { label: "Tools", value: "Figma / Unity / AR Prototype / Physical Prototype" },
  { label: "Focus", value: "Mardi Gras / Installation / Augmented Reality / Guest UI" },
];

function UniversalCaseContent() {
  return (
    <main className="case-page case-page-universal case-page-with-toc">
      <CaseToc sections={universalSections} />

      <header className="case-nav">
        <CaseBackLink />
        <span className="case-nav-title">UNIVERSAL × SCADpro / 2025</span>
      </header>

      <CaseHero
        title={universalTitle}
        subtitle="Mardi Gras Installation & AR Experience"
        spec={universalSpec}
        intro="In collaboration with Universal, SCADpro reimagined the spectacle of Mardi Gras through physical installations, augmented reality, and interface design—translating parade energy, ritual, and play into an immersive guest experience."
        image="/images/universal.jpg"
        imageAlt="Universal SCADpro Mardi Gras installation and AR experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            Universal × SCADpro explores how the rhythm and ritual of Mardi Gras
            can extend beyond the parade route—pairing environmental installations
            with AR layers and a guest-facing UI that guides discovery, delight,
            and spectacle across the park experience.
          </p>
          <p>
            The project spans physical set pieces, device-based AR interactions,
            and interface patterns tuned for high-energy festival contexts—
            balancing the chaos of carnival with clarity for guests navigating
            story, rewards, and spatial moments.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function UniversalProjectPage() {
  return (
    <ProtectedProjectLock
      password={PASSWORD}
      lockTheme="dark"
      pageClassName="case-page-universal"
      hero={{
        title: universalTitle,
        subtitle: "Mardi Gras Installation & AR Experience",
        spec: universalSpec,
        intro:
          "In collaboration with Universal, SCADpro reimagined Mardi Gras through physical installations, augmented reality, and interface design.",
        image: "/images/universal.jpg",
        imageAlt: "Universal SCADpro Mardi Gras installation and AR experience",
      }}
    >
      <UniversalCaseContent />
    </ProtectedProjectLock>
  );
}
