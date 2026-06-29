import CaseGallery from "@/components/CaseGallery";
import CaseNavbar from "@/components/CaseNavbar";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import HorizonPhasesSection from "@/components/horizon/HorizonPhasesSection";
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
import { horizonGallery } from "@/data/horizon-gallery";
import { horizonPhases, horizonTesting, horizonUIComponents } from "@/data/horizon-sections";

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
    label: "Four Phases",
    children: horizonPhases.map((phase) => ({
      id: `horizon-phase-${phase.n}`,
      label: phase.title,
    })),
  },
  {
    id: "horizon-ui",
    label: "UI System",
    children: horizonUIComponents.map((component) => ({
      id: `horizon-ui-${component.id}`,
      label: component.title,
    })),
  },
  { id: "horizon-interaction", label: "Interaction" },
  {
    id: "horizon-gallery",
    label: "Gallery",
    children: horizonGallery.map((group) => ({
      id: group.id,
      label: group.title,
    })),
  },
  {
    id: "horizon-testing",
    label: "Testing & Outlook",
    children: horizonTesting.future.map((item) => ({
      id: `horizon-future-${item.id}`,
      label: item.title,
    })),
  },
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

      <div id="horizon-gallery">
        <CaseGallery groups={horizonGallery} />
      </div>

      <HorizonTestingSection />
    </CaseTemplateLayout>
  );
}
