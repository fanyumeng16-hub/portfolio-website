"use client";

import Link from "next/link";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import ProtectedProjectLock from "@/components/ProtectedProjectLock";
import { getProject } from "@/data/projects";

const universalProject = getProject("universal")!;

const PASSWORD = "universal";

const universalSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
];

const universalTitle = <ProjectTitle title="UNIVERSAL × SCADpro" />;

function UniversalCaseContent() {
  return (
    <main className="case-page case-page-universal case-page-with-toc">
      <CaseToc sections={universalSections} />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">UNIVERSAL × SCADpro / 2025</span>
      </header>

      <CaseHero
        title={universalTitle}
        subtitle="Mardi Gras Installation & AR Experience"
        tags={universalProject.tags}
        intro="In collaboration with Universal, SCADpro reimagined the spectacle of Mardi Gras through physical installations, augmented reality, and interface design—translating parade energy, ritual, and play into an immersive guest experience."
        image="/images/universal.jpg"
        imageAlt="Universal SCADpro Mardi Gras installation and AR experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>Interaction Design / AR Experience / UI Design</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Figma / Unity / AR Prototype / Physical Prototype</p>
          </div>
          <div>
            <span>Focus</span>
            <p>Mardi Gras / Installation / Augmented Reality / Guest UI</p>
          </div>
        </div>

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
        tags: universalProject.tags,
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
