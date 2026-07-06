import CaseHero from "@/components/CaseHero";
import CaseNavbar from "@/components/CaseNavbar";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import ProjectTitle from "@/components/ProjectTitle";
import {
  MedicalBrandSpatialSection,
  MedicalDecisionSection,
  MedicalEvaluationSection,
  MedicalOnboardingSection,
  MedicalOutcomeSection,
  MedicalProblemSection,
} from "@/components/medical/MedicalSections";
import { MedicalInsightSection } from "@/components/medical/MedicalInsightSection";
import { MedicalResearchSection } from "@/components/medical/MedicalResearchSection";
import { MedicalUserTestingSection } from "@/components/medical/MedicalUserTestingSection";
import {
  medicalHero,
  medicalOverviewVideo,
  medicalSpec,
  medicalUserTesting,
} from "@/data/medical-content";
import { CaseTocSection } from "@/components/CaseToc";

const medicalSections: CaseTocSection[] = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Video" },
  { id: "mayo-problem", label: "Problem Identification" },
  {
    id: "mayo-decision",
    label: "The Decision",
    children: [
      { id: "mayo-standards", label: "Design Standards" },
    ],
  },
  { id: "mayo-research", label: "Research" },
  { id: "mayo-insight", label: "Insight" },
  { id: "mayo-brand-spatial", label: "UI Design" },
  { id: "mayo-onboarding", label: "Onboarding" },
  { id: "mayo-evaluation", label: "Evaluation System" },
  {
    id: "mayo-user-testing",
    label: "Usability Testing",
    children: medicalUserTesting.timeline.map((round) => ({
      id: round.id,
      label: round.siteLabel,
    })),
  },
  { id: "mayo-outcome", label: "Outcome" },
];

const medicalTitle = <ProjectTitle title="MAYO CLINIC × SCADpro" />;

export default function MedicalProjectPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-medical"
      sections={medicalSections}
      tocTheme="light"
      nav={<CaseNavbar projectId="medical" />}
      hero={
        <CaseHero
          title={medicalTitle}
          subtitle={medicalHero.subtitle}
          intro={medicalHero.intro}
          spec={medicalSpec}
          sectionId="case-intro"
        />
      }
    >
      <CaseOverviewSection title="Video" media={medicalOverviewVideo} />

      <MedicalProblemSection />

      <MedicalDecisionSection />
      <MedicalResearchSection />
      <MedicalInsightSection />
      <MedicalBrandSpatialSection />
      <MedicalOnboardingSection />
      <MedicalEvaluationSection />
      <MedicalUserTestingSection />

      <MedicalOutcomeSection />
    </CaseTemplateLayout>
  );
}
