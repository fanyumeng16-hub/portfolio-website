"use client";

import CaseNavbar from "@/components/CaseNavbar";
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
  { label: "Focus", value: "Mardi Gras / Installation / AR / Guest UI" },
  { label: "Tools", value: "Figma / Unity / AR Prototype / Physical Prototype" },
];

const universalIntro = `In collaboration with Universal, SCADpro reimagined the spectacle of Mardi Gras through physical installations, augmented reality, and interface design, translating parade energy, ritual, and play into an immersive guest experience that extends beyond the parade route.

The project pairs environmental set pieces with device-based AR interactions and a guest-facing UI tuned for high-energy festival contexts, balancing the chaos of carnival with clarity for guests navigating story, rewards, and spatial moments across the park.`;

function UniversalCaseContent() {
  return (
    <main className="case-page case-page-universal case-page-with-toc">
      <CaseToc sections={universalSections} />

      <CaseNavbar projectId="universal" />

      <CaseHero
        title={universalTitle}
        subtitle="Mardi Gras Installation & AR Experience"
        spec={universalSpec}
        intro={universalIntro}
        image="/images/universal.jpg"
        imageAlt="Universal SCADpro Mardi Gras installation and AR experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            Universal × SCADpro explores how the rhythm and ritual of Mardi Gras
            can extend beyond the parade route, pairing environmental installations
            with AR layers and a guest-facing UI that guides discovery, delight,
            and spectacle across the park experience.
          </p>
          <p>
            The project spans physical set pieces, device-based AR interactions,
            and interface patterns tuned for high-energy festival contexts,
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
      passwordNote="This project cannot be shared publicly due to NDA."
      projectId="universal"
      lockTheme="dark"
      pageClassName="case-page-universal"
      hero={{
        title: universalTitle,
        subtitle: "Mardi Gras Installation & AR Experience",
        spec: universalSpec,
        intro: universalIntro,
        image: "/images/universal.jpg",
        imageAlt: "Universal SCADpro Mardi Gras installation and AR experience",
      }}
    >
      <UniversalCaseContent />
    </ProtectedProjectLock>
  );
}
