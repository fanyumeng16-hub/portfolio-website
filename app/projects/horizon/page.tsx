import CaseNavbar from "@/components/CaseNavbar";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import HorizonPhasesSection from "@/components/horizon/HorizonPhasesSection";
import HorizonProcessSection from "@/components/horizon/HorizonProcessSection";
import {
  HorizonContextSection,
  HorizonDecisionsSection,
  HorizonFlowSection,
  HorizonGoalSection,
  HorizonInteractionSection,
  HorizonResearchSection,
  HorizonTestingSection,
  HorizonUISection,
} from "@/components/horizon/HorizonSections";
import { CaseTocSection } from "@/components/CaseToc";
import {
  horizonHero,
  horizonOverviewBody,
  horizonOverviewVideo,
  horizonSpec,
} from "@/data/horizon-content";
import { horizonProcessGroups } from "@/data/horizon-process";
import { horizonPhases } from "@/data/horizon-sections";

const horizonSections: CaseTocSection[] = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
  { id: "horizon-context", label: "Context" },
  { id: "horizon-goal", label: "Goal" },
  { id: "horizon-research", label: "Research" },
  { id: "horizon-decisions", label: "Design Decisions" },
  { id: "horizon-flow", label: "Experience Flow" },
  {
    id: "horizon-phases",
    label: "Phases",
    children: horizonPhases.map((phase) => ({
      id: `horizon-phase-${phase.n}`,
      label: phase.optional ? `${phase.title} (Optional)` : phase.title,
    })),
  },
  { id: "horizon-ui", label: "UI System" },
  { id: "horizon-interaction", label: "Interaction" },
  {
    id: "horizon-process",
    label: "Development Process",
    children: horizonProcessGroups.map((group) => ({
      id: group.id,
      label: group.title,
    })),
  },
  { id: "horizon-testing", label: "Testing & Future" },
];

export default function HorizonPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-horizon"
      sections={horizonSections}
      tocTheme="dark"
      pageTheme="dark"
      nav={<CaseNavbar projectId="horizon" />}
      hero={
        <CaseHero
          title="Horizon"
          subtitle={horizonHero.subtitle}
          intro={horizonHero.intro}
          spec={horizonSpec}
          image="/images/horizon-cover.jpg"
          imageAlt="Horizon Mars Exploration Simulation"
          coverIntrinsic
          coverWidth={11814}
          coverHeight={6075}
          priority
        />
      }
    >
      <CaseOverviewSection body={horizonOverviewBody} media={horizonOverviewVideo} />

      <HorizonContextSection />
      <HorizonGoalSection />
      <HorizonResearchSection />
      <HorizonDecisionsSection />
      <HorizonFlowSection />
      <HorizonPhasesSection phases={horizonPhases} />
      <HorizonUISection />
      <HorizonInteractionSection />
      <HorizonProcessSection />

      <HorizonTestingSection />
    </CaseTemplateLayout>
  );
}
