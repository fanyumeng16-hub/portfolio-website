"use client";

import Link from "next/link";
import CaseBrandUISection from "@/components/CaseBrandUISection";
import CaseUserTestingTimeline from "@/components/CaseUserTestingTimeline";
import CaseConstraintGrid from "@/components/CaseConstraintGrid";
import CaseDetailSection from "@/components/CaseDetailSection";
import CaseResearchSection from "@/components/CaseResearchSection";
import CaseHero from "@/components/CaseHero";
import CaseHighlightGrid from "@/components/CaseHighlightGrid";
import CaseOnboardingEverydayBlock from "@/components/CaseOnboardingEverydayBlock";
import CaseOnboardingInsightCards from "@/components/CaseOnboardingInsightCards";
import CaseOnboardingInteractive from "@/components/CaseOnboardingInteractive";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseProseSection from "@/components/CaseProseSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import ProjectTitle from "@/components/ProjectTitle";
import ProtectedProjectLock from "@/components/ProtectedProjectLock";
import {
  medicalBrandUI,
  medicalChallenge,
  medicalHero,
  medicalOnboarding,
  medicalOverviewVideo,
  medicalRole,
  medicalSpec,
  medicalUserTesting,
} from "@/data/medical-content";
import { CaseTocSection } from "@/components/CaseToc";
import {
  medicalEvaluationSection,
  medicalResearch,
  medicalSegmentSection,
} from "@/data/medical-detail";
import { getProject } from "@/data/projects";

const medicalProject = getProject("medical")!;

const PASSWORD = "mayo";

const medicalSections: CaseTocSection[] = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
  { id: "mayo-role", label: "My Role" },
  { id: "mayo-challenge", label: "Challenge" },
  { id: "mayo-research", label: "Research" },
  {
    id: "mayo-brand-ui",
    label: "Brand & UI",
    children: medicalBrandUI.subsections.map((subsection) => ({
      id: subsection.id,
      label: `${subsection.title} · ${subsection.subtitle}`,
    })),
  },
  {
    id: "mayo-onboarding",
    label: "Onboarding",
    children: medicalOnboarding.stages.map((stage) => ({
      id: stage.id,
      label: `${stage.label} · ${stage.title}`,
    })),
  },
  { id: "mayo-segment", label: "Segment" },
  { id: "mayo-evaluation", label: "Evaluation" },
  {
    id: "mayo-user-testing",
    label: "Usability Test",
    children: medicalUserTesting.timeline.map((round) => ({
      id: round.id,
      label: `${round.roundLabel} · ${round.title}`,
    })),
  },
];

const medicalTitle = <ProjectTitle title="MAYO CLINIC × SCADpro" />;

function MedicalCaseContent() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-medical"
      sections={medicalSections}
      tocTheme="light"
      nav={
        <header className="case-nav">
          <Link href="/" className="case-back">
            BACK TO WORK
          </Link>
          <span className="case-nav-title">MAYO CLINIC × SCADpro / 2025</span>
        </header>
      }
      hero={
        <CaseHero
          title={medicalTitle}
          subtitle={medicalHero.subtitle}
          tags={medicalProject.tags}
          intro={medicalHero.intro}
          image="/images/medical.jpg"
          imageAlt="Mayo Clinic SCADpro mixed reality BLS certification system"
        />
      }
    >
      <CaseOverviewSection
        body={medicalHero.intro}
        spec={medicalSpec}
        media={medicalOverviewVideo}
      />

      <CaseProseSection
        id="mayo-role"
        title={medicalRole.title}
        paragraphs={medicalRole.paragraphs}
      >
        <CaseHighlightGrid highlights={medicalRole.highlights} />
      </CaseProseSection>

      <CaseProseSection id="mayo-challenge" title={medicalChallenge.title}>
        <CaseConstraintGrid constraints={medicalChallenge.constraints} />
      </CaseProseSection>

      <CaseResearchSection
        id="mayo-research"
        title={medicalResearch.title}
        intro={medicalResearch.intro}
        introQuote={medicalResearch.introQuote}
        blocks={medicalResearch.blocks}
      />

      <CaseBrandUISection
        id="mayo-brand-ui"
        title={medicalBrandUI.title}
        subsections={medicalBrandUI.subsections}
      />

      <section className="case-prose-section" id="mayo-onboarding">
        <div className="case-prose-inner">
          <h3 className="case-prose-title">{medicalOnboarding.title}</h3>
          <p className="case-prose-body">{medicalOnboarding.intro}</p>
          <CaseOnboardingInsightCards insights={medicalOnboarding.insights} />
          <CaseOnboardingEverydayBlock block={medicalOnboarding.everydayBlock} />
          <div className="case-onboarding-stage-intro">
            {medicalOnboarding.stageIntro.map((paragraph, index) => (
              <p className="case-prose-body" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <CaseOnboardingInteractive stages={medicalOnboarding.stages} />
        </div>
      </section>

      <CaseDetailSection section={medicalSegmentSection} />
      <CaseDetailSection section={medicalEvaluationSection} />

      <CaseUserTestingTimeline
        id="mayo-user-testing"
        title={medicalUserTesting.title}
        intro={medicalUserTesting.intro}
        timeline={medicalUserTesting.timeline}
      />
    </CaseTemplateLayout>
  );
}

export default function MedicalProjectPage() {
  return (
    <ProtectedProjectLock
      password={PASSWORD}
      showPasswordHint
      lockTheme="light"
      pageClassName="case-page-medical case-page-template"
      hero={{
        title: medicalTitle,
        subtitle: medicalHero.subtitle,
        tags: medicalProject.tags,
        intro: medicalHero.intro,
        image: "/images/medical.jpg",
        imageAlt: "Mayo Clinic SCADpro mixed reality BLS certification system",
      }}
    >
      <MedicalCaseContent />
    </ProtectedProjectLock>
  );
}
