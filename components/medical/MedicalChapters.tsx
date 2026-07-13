import CaseOnboardingGestureCards from "@/components/CaseOnboardingGestureCards";
import CaseOnboardingStages from "@/components/CaseOnboardingStages";
import MedicalEvaluatorAlignment from "@/components/medical/MedicalEvaluatorAlignment";
import { MedicalChapter } from "@/components/medical/MedicalChapter";
import {
  MedicalLayerShell,
  MedicalPlaceholder,
  MedicalProse,
} from "@/components/medical/MedicalLayerShell";
import { OverviewSpecGrid } from "@/components/medical/MedicalOverviewBlocks";
import {
  DecisionMatrixContent,
  DesignRationaleList,
  DesignStandardsContent,
  MedicalDeepDiveOverviewSection,
  MedicalFinalDeliverablesSection,
  MedicalResearchDetailSection,
  ThreeUiDimensionsContent,
  UserFlowContent,
} from "@/components/medical/MedicalSections";
import {
  MedicalClientBriefSection,
  MedicalDefinedProblemsSection,
  MedicalPrimaryResearchSection,
  MedicalResearchInsightSection,
  MedicalResearchSynthesisSection,
} from "@/components/medical/MedicalProblemSection";
import { MedicalInsightSection } from "@/components/medical/MedicalInsightSection";
import { MedicalOutcomeSection } from "@/components/medical/MedicalOutcomeSection";
import { TestingRoundLayer } from "@/components/medical/MedicalUserTestingSection";
import {
  MayoBlock,
  MayoBlockHeader,
  MayoNarrativeBeat,
  MayoStatCard,
  MayoStatGrid,
} from "@/components/medical/MayoLayout";
import {
  medicalCrossFunctionalAlignment,
  medicalDecision,
  medicalEvaluation,
  medicalOnboarding,
  medicalOverviewChapter,
  medicalReflection,
  medicalRole,
  medicalSpec,
  medicalSuccessCriteria,
  medicalSuccessCriteriaRevisited,
  medicalUserTesting,
} from "@/data/medical-content";
import styles from "./MedicalSections.module.css";

function SuccessCriteriaContent({
  intro,
  items,
  valueKey,
}: {
  intro: string;
  items: { id: string; label: string; target?: string; result?: string }[];
  valueKey: "target" | "result";
}) {
  const isPlaceholder = intro.includes("[To be completed]");

  return (
    <>
      {isPlaceholder ? (
        <MedicalPlaceholder>
          <MedicalProse>{intro}</MedicalProse>
        </MedicalPlaceholder>
      ) : (
        <MedicalProse>{intro}</MedicalProse>
      )}
      <ul className={styles.successCriteriaGrid}>
        {items.map((item) => (
          <li className={styles.successCriteriaCard} key={item.id}>
            <span className={styles.successCriteriaCardLabel}>{item.label}</span>
            <p className={styles.successCriteriaCardValue}>{item[valueKey]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function MedicalRoleBeat() {
  return (
    <MayoNarrativeBeat id="mayo-my-role">
      <MayoBlock>
        <MayoBlockHeader title={medicalRole.title} />
        <p className="case-prose-body">{medicalRole.body}</p>
        <MayoStatGrid>
          {medicalRole.highlights.map((item) => (
            <MayoStatCard
              key={item.label}
              stat={item.stat}
              label={item.label}
              body={item.description}
            />
          ))}
        </MayoStatGrid>
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

function MedicalCrossFunctionalBeat() {
  return (
    <MayoNarrativeBeat id="mayo-cross-functional">
      <MayoBlock>
        <MayoBlockHeader title={medicalCrossFunctionalAlignment.title} />
        <MedicalPlaceholder>
          <MedicalProse>{medicalCrossFunctionalAlignment.body}</MedicalProse>
        </MedicalPlaceholder>
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

function MedicalOpportunityLayers() {
  return (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label="Decision Matrix" anchorId="mayo-decision" className={styles.medicalLayerFullWidth}>
        <DecisionMatrixContent />
      </MedicalLayerShell>
      <MedicalLayerShell label="Design Standards" anchorId="mayo-standards">
        <DesignStandardsContent />
      </MedicalLayerShell>
      <MedicalLayerShell label={medicalSuccessCriteria.title} anchorId="mayo-success-criteria">
        <SuccessCriteriaContent
          intro={medicalSuccessCriteria.intro}
          items={medicalSuccessCriteria.items}
          valueKey="target"
        />
      </MedicalLayerShell>
    </div>
  );
}

function MedicalDesignDecisionsLayers() {
  return (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label="Decision Rationale" anchorId="mayo-decision-rationale">
        <DesignRationaleList />
      </MedicalLayerShell>
      <MedicalInsightSection embedded />
      <MedicalLayerShell label="Three UI Dimensions" anchorId="mayo-ui-dimensions">
        <ThreeUiDimensionsContent />
      </MedicalLayerShell>
    </div>
  );
}

function MedicalOnboardingLayers() {
  const { dualChannelInput, designMethodLead, gestureCards, stagesIntro, stages } = medicalOnboarding;

  return (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label="Design Method" anchorId="mayo-onboarding">
        {designMethodLead ? <p className="case-prose-body">{designMethodLead}</p> : null}
        <CaseOnboardingGestureCards cards={gestureCards} />
      </MedicalLayerShell>
      <MedicalLayerShell label="Four Progressive Stages">
        {stagesIntro ? <p className="case-prose-body">{stagesIntro}</p> : null}
        <CaseOnboardingStages stages={stages} />
      </MedicalLayerShell>
      <MedicalLayerShell label="AED: Dual-Channel Input">
        <p className="case-prose-body">{dualChannelInput.problem}</p>
        <p className={`case-prose-body ${styles.onboardingSolution}`}>{dualChannelInput.solution}</p>
      </MedicalLayerShell>
    </div>
  );
}

function MedicalEvaluationLayers() {
  const { framework, reportIntro, reportViews } = medicalEvaluation;

  return (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label="Evaluation Framework" anchorId="mayo-evaluation">
        <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols2}`}>
          {framework.map((item) => (
            <li className={styles.medicalCard} key={item.id}>
              <p className={styles.medicalCardTitle}>{item.title}</p>
              <p className={styles.medicalCardBody}>{item.body}</p>
            </li>
          ))}
        </ul>
      </MedicalLayerShell>
      <MedicalLayerShell label="Report Interface">
        {reportIntro ? <p className="case-prose-body">{reportIntro}</p> : null}
        <CaseOnboardingStages stages={reportViews} />
      </MedicalLayerShell>
      <MedicalLayerShell label="On-Site Evaluator Alignment">
        <MedicalEvaluatorAlignment />
      </MedicalLayerShell>
    </div>
  );
}

function MedicalImpactSuccessRevisited() {
  return (
    <MedicalLayerShell
      label={medicalSuccessCriteriaRevisited.title}
      anchorId="mayo-success-revisited"
    >
      <SuccessCriteriaContent
        intro={medicalSuccessCriteriaRevisited.intro}
        items={medicalSuccessCriteriaRevisited.items}
        valueKey="result"
      />
    </MedicalLayerShell>
  );
}

export function MedicalOverviewChapter() {
  return (
    <MedicalChapter
      id="mayo-ch01-overview"
      index={medicalOverviewChapter.index}
      title={medicalOverviewChapter.title}
    >
      <OverviewSpecGrid rows={medicalSpec} />
      <p className={styles.overviewLead}>{medicalOverviewChapter.summary}</p>
      <MedicalRoleBeat />
    </MedicalChapter>
  );
}

export function MedicalProblemChapter() {
  return (
    <MedicalChapter id="mayo-ch02-problem" index="02" title="Problem">
      <MedicalClientBriefSection />
      <MedicalDefinedProblemsSection />
    </MedicalChapter>
  );
}

export function MedicalResearchChapter() {
  return (
    <MedicalChapter id="mayo-ch03-research" index="03" title="Research">
      <MedicalPrimaryResearchSection />
      <MedicalResearchSynthesisSection />
      <MedicalResearchInsightSection />
      <MedicalDeepDiveOverviewSection />
      <MedicalResearchDetailSection embedded />
      <MedicalCrossFunctionalBeat />
    </MedicalChapter>
  );
}

export function MedicalOpportunityChapter() {
  const { intro } = medicalDecision;

  return (
    <MedicalChapter
      id="mayo-ch04-opportunity"
      index="04"
      title="Opportunity Statement"
      intro={intro}
    >
      <MedicalOpportunityLayers />
    </MedicalChapter>
  );
}

export function MedicalDesignDecisionsChapter() {
  return (
    <MedicalChapter id="mayo-ch05-design-decisions" index="05" title="Design Decisions">
      <MedicalDesignDecisionsLayers />
    </MedicalChapter>
  );
}

export function MedicalUserFlowChapter() {
  return (
    <MedicalChapter id="mayo-ch06-user-flow" index="06" title="User Flow & Wireframes">
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label="User Flow" anchorId="mayo-flow-wireframes">
          <UserFlowContent />
        </MedicalLayerShell>
      </div>
    </MedicalChapter>
  );
}

export function MedicalOnboardingChapter() {
  const { origin } = medicalOnboarding;

  return (
    <MedicalChapter id="mayo-ch07-onboarding" index="07" title="Onboarding" intro={origin}>
      <MedicalOnboardingLayers />
    </MedicalChapter>
  );
}

export function MedicalEvaluationChapter() {
  return (
    <MedicalChapter id="mayo-ch08-evaluation" index="08" title="Evaluation System">
      <MedicalEvaluationLayers />
    </MedicalChapter>
  );
}

export function MedicalUsabilityTestingChapter() {
  const { intro, timeline } = medicalUserTesting;

  return (
    <MedicalChapter id="mayo-ch09-usability-testing" index="09" title="Usability Testing" intro={intro}>
      <div className={styles.medicalLayers}>
        {timeline.map((round) => (
          <TestingRoundLayer key={round.id} round={round} />
        ))}
      </div>
    </MedicalChapter>
  );
}

export function MedicalFinalUiChapter() {
  return (
    <MedicalChapter id="mayo-ch10-final-ui" index="10" title="Final UI">
      <MedicalFinalDeliverablesSection embedded />
    </MedicalChapter>
  );
}

export function MedicalImpactChapter() {
  return (
    <MedicalChapter id="mayo-ch11-impact" index="11" title="Impact">
      <MedicalOutcomeSection embedded />
      <div className={styles.medicalLayers}>
        <MedicalImpactSuccessRevisited />
      </div>
    </MedicalChapter>
  );
}

export function MedicalReflectionChapter() {
  return (
    <MedicalChapter
      id="mayo-ch12-reflection"
      index={medicalReflection.index}
      title={medicalReflection.title}
    >
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label={medicalReflection.limitations.title}>
          <MedicalPlaceholder>
            <MedicalProse>{medicalReflection.limitations.body}</MedicalProse>
          </MedicalPlaceholder>
        </MedicalLayerShell>
        <MedicalLayerShell label={medicalReflection.whatsNext.title}>
          <MedicalPlaceholder>
            <MedicalProse>{medicalReflection.whatsNext.body}</MedicalProse>
          </MedicalPlaceholder>
        </MedicalLayerShell>
      </div>
    </MedicalChapter>
  );
}
