import Link from "next/link";
import CaseFeatures from "@/components/CaseFeatures";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import CaseYouTubeSection from "@/components/CaseYouTubeSection";
import MarsMapInteractive from "@/components/MarsMapInteractive";
import { horizonGallery } from "@/data/horizon-gallery";
import { horizonFeatures } from "@/data/horizon-features";
import { horizonMapHotspots } from "@/data/horizon-map";
import { getProject } from "@/data/projects";
import { buildCaseTocSections } from "@/lib/case-toc";

const horizonProject = getProject("horizon")!;

const horizonSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
    { id: "case-modules", label: "Modules" },
    { id: "case-map", label: "Mission Map" },
  ],
  { groups: horizonGallery }
).concat([{ id: "case-video", label: "Video" }]);

export default function HorizonPage() {
  return (
    <main className="case-page case-page-horizon case-page-with-toc">
      <CaseToc sections={horizonSections} />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">HORIZON / 2026</span>
      </header>

      <CaseHero
        title="Horizon"
        subtitle="Mars Exploration Simulation"
        tags={horizonProject.tags}
        intro="Horizon is a high-fidelity XR simulation grounded in planetary science, designed to transform complex space agency procedures into an immersive training experience for living and working on the Red Planet."
        image="/images/horizon-cover.jpg"
        imageAlt="Horizon Mars Exploration Simulation"
        coverIntrinsic
        coverWidth={11814}
        coverHeight={6075}
        priority
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>Interaction Design / XR Experience / Visual System</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Unity / Figma / XR Prototype</p>
          </div>
          <div>
            <span>Focus</span>
            <p>Training Simulation / Scientific Workflow / Immersive Learning</p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            The journey begins within the Habitat, where users are briefed on
            mission objectives and acclimated to the environmental context.
            This guided preparation transitions into Surface Travel, where users
            navigate the Martian terrain through a rover.
          </p>
          <p>
            Rather than a simplified mechanic, the control system adapts the
            logic of real extraterrestrial vehicle operations, accounting for
            reduced gravity, complex terrain, and mission pressure.
          </p>
        </div>
      </section>

      <CaseFeatures
        heading={horizonFeatures.heading}
        subheading={horizonFeatures.subheading}
        features={horizonFeatures.features}
      />

      <section className="case-map-section" id="case-map">
        <div className="case-map-inner">
          <MarsMapInteractive
            image="/images/horizon-1.jpg"
            imageAlt="Horizon Mars map with mission zones"
            hotspots={horizonMapHotspots}
          />
        </div>
      </section>

      <CaseGallery groups={horizonGallery} />

      <CaseYouTubeSection videoId="DhFCdTm7l5Q" />
    </main>
  );
}
