"use client";

import Link from "next/link";
import CaseDetailSection from "@/components/CaseDetailSection";
import CaseEditorial from "@/components/CaseEditorial";
import CaseHero from "@/components/CaseHero";
import CaseHighlights from "@/components/CaseHighlights";
import CaseToc from "@/components/CaseToc";
import CaseYouTubeSection from "@/components/CaseYouTubeSection";
import ProjectTitle from "@/components/ProjectTitle";
import ProtectedProjectLock from "@/components/ProtectedProjectLock";
import {
  medicalHighlights,
  medicalJourney,
  medicalOverview,
} from "@/data/medical-content";
import {
  medicalContextDetail,
  medicalDetailSections,
} from "@/data/medical-detail";
import { getProject } from "@/data/projects";

const medicalProject = getProject("medical")!;

const PASSWORD = "mayo";

const medicalSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
  { id: "case-highlights", label: "Impact" },
  { id: "mayo-journey", label: "Context" },
  { id: "case-video", label: "Video" },
  { id: "mayo-onboarding", label: "Onboarding" },
  { id: "mayo-manikin", label: "Manikin" },
  { id: "mayo-bls-interaction", label: "BLS Interaction" },
  { id: "mayo-evaluation", label: "Evaluation" },
];

const medicalTitle = <ProjectTitle title="MAYO CLINIC × SCADpro" />;

function MedicalCaseContent() {
  return (
    <main className="case-page case-page-light case-page-medical case-page-with-toc">
      <CaseToc sections={medicalSections} theme="light" />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">MAYO CLINIC × SCADpro / 2025</span>
      </header>

      <CaseHero
        title={medicalTitle}
        subtitle="Mixed Reality BLS Assessment Platform"
        tags={medicalProject.tags}
        intro="In partnership with Mayo Clinic, SCADpro reimagined how nursing staff complete Basic Life Support certification—transforming a process limited by scarce evaluators and physical mannequins into an immersive, rigorous, and scalable mixed-reality assessment."
        image="/images/medical.jpg"
        imageAlt="Mayo Clinic SCADpro mixed reality BLS training system"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>{medicalOverview.role}</p>
          </div>
          <div>
            <span>Tools</span>
            <p>{medicalOverview.tools}</p>
          </div>
          <div>
            <span>Focus</span>
            <p>{medicalOverview.focus}</p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          {medicalOverview.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <CaseHighlights highlights={medicalHighlights} />

      <CaseEditorial
        sectionId="mayo-journey"
        label={medicalJourney.label}
        headline={medicalJourney.headline}
        blocks={medicalJourney.blocks}
      />

      <CaseDetailSection section={medicalContextDetail} />

      <CaseYouTubeSection
        videoId="q8XeJHdjQ1I"
        label="Project Video"
        title="Mixed Reality BLS Assessment Overview"
      />

      {medicalDetailSections.map((section) => (
        <CaseDetailSection key={section.id} section={section} />
      ))}
    </main>
  );
}

export default function MedicalProjectPage() {
  return (
    <ProtectedProjectLock
      password={PASSWORD}
      lockTheme="light"
      pageClassName="case-page-medical"
      hero={{
        title: medicalTitle,
        subtitle: "Mixed Reality BLS Assessment Platform",
        tags: medicalProject.tags,
        intro:
          "In partnership with Mayo Clinic, SCADpro reimagined how nursing staff complete Basic Life Support certification through immersive mixed reality.",
        image: "/images/medical.jpg",
        imageAlt: "Mayo Clinic SCADpro mixed reality BLS training system",
      }}
    >
      <MedicalCaseContent />
    </ProtectedProjectLock>
  );
}
