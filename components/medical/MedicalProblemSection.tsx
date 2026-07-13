import type { ReactNode } from "react";
import { medicalProblemIdentification } from "@/data/medical-content";
import MedicalProblemScaleVisual from "./MedicalProblemScaleVisual";
import {
  MayoBentoPrimaryResearch,
  MayoBlock,
  MayoBlockHeader,
  MayoFeatureCard,
  MayoFeatureGrid,
  MayoInsightContrast,
  MayoNarrativeBeat,
  MayoScaleWrap,
  MayoStatCard,
  MayoStatGrid,
} from "./MayoLayout";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

type ClientLayer = {
  id: string;
  index: string;
  label: string;
  quote: string;
  followUp?: string;
  researchAreas?: { id: string; title: string }[];
  briefImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

type FieldworkStep = {
  id: string;
  title: string;
  detail?: string;
  cardBody?: string;
  footerLeft?: string;
  footerRight?: string;
  quote?: string;
  quoteAttribution?: string;
  belowImages?: { src: string; alt: string }[];
};

type FieldworkLayer = {
  id: string;
  index: string;
  label: string;
  location: string;
  timeline: FieldworkStep[];
};

type InsightItem = {
  id: string;
  label: string;
};

type InsightGroup = {
  title: string;
  items: InsightItem[];
};

type FindingsLayer = {
  id: string;
  index: string;
  label: string;
  synthesis: {
    patternsStep: { body: string };
  };
  discovered: InsightGroup;
  ruledOut: InsightGroup;
};

type DefinedProblemsLayer = {
  id: string;
  label: string;
  kicker?: string;
  scaleVisual?: {
    evaluatorCount: number;
    evaluatorLabel: string;
    counterpartCount: number;
    counterpartLabel: string;
    counterpartType: "people" | "checklist";
  };
  items: {
    id: string;
    stat: string;
    statLabel: string;
    body: string;
  }[];
};

function ProblemLayerShell({
  label,
  purpose,
  children,
  anchorId,
  className,
}: {
  label: string;
  purpose?: string;
  children: ReactNode;
  anchorId?: string;
  className?: string;
}) {
  return (
    <MedicalLayerShell
      label={label}
      purpose={purpose}
      anchorId={anchorId}
      className={className}
    >
      {children}
    </MedicalLayerShell>
  );
}

function toBentoSteps(steps: FieldworkStep[]) {
  return steps.map((step) => ({
    id: step.id,
    title: step.title,
    cardBody: step.cardBody,
    footerLeft: step.footerLeft,
    footerRight: step.footerRight,
    quote: step.quote,
    quoteAttribution: step.quoteAttribution,
    imageSrc: step.belowImages?.[0]?.src,
    imageAlt: step.belowImages?.[0]?.alt,
  }));
}

function ClientBriefContent({ clientLayer }: { clientLayer: ClientLayer }) {
  return (
    <>
      <blockquote className={styles.problemBriefQuote}>
        <p>&ldquo;{clientLayer.quote}&rdquo;</p>
      </blockquote>
      {clientLayer.followUp ? (
        <div className={styles.problemBriefAreas}>
          <p className={styles.problemBriefFollowUp}>{clientLayer.followUp}</p>
          {clientLayer.researchAreas?.length ? (
            <ul
              className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols4} ${styles.problemBriefAreaGrid}`}
            >
              {clientLayer.researchAreas.map((area) => (
                <li className={`${styles.medicalCard} ${styles.problemBriefAreaCard}`} key={area.id}>
                  <h4 className={styles.medicalCardTitle}>{area.title}</h4>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {clientLayer.briefImage ? (
        <figure className={styles.problemBriefFigure}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={clientLayer.briefImage.src}
            alt={clientLayer.briefImage.alt}
            className={styles.problemBriefImage}
            loading="lazy"
            decoding="async"
          />
          {clientLayer.briefImage.caption ? (
            <figcaption className={styles.problemBriefCaption}>
              {clientLayer.briefImage.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </>
  );
}

/** Client brief — Mayo narrative beat (used inside numbered chapters) */
export function MedicalClientBriefSection() {
  const { layers } = medicalProblemIdentification;
  const [clientLayer] = layers as [ClientLayer, FieldworkLayer, FindingsLayer, DefinedProblemsLayer];

  return (
    <MayoNarrativeBeat id="mayo-problem">
      <MayoBlock>
        <MayoBlockHeader index={clientLayer.index} title={clientLayer.label} />
        <ClientBriefContent clientLayer={clientLayer} />
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

export function MedicalProblemStatementSection() {
  const { problemStatement, layers } = medicalProblemIdentification;
  const [clientLayer] = layers as [ClientLayer, FieldworkLayer, FindingsLayer, DefinedProblemsLayer];

  return (
    <MedicalSection id="mayo-problem" title={problemStatement.title}>
      <div className={styles.medicalLayers}>
        <ProblemLayerShell label={clientLayer.label}>
          <ClientBriefContent clientLayer={clientLayer} />
        </ProblemLayerShell>
      </div>
    </MedicalSection>
  );
}

export function MedicalDefinedProblemsSection() {
  const { layers } = medicalProblemIdentification;
  const [, , , definedProblemsLayer] = layers as [
    ClientLayer,
    FieldworkLayer,
    FindingsLayer,
    DefinedProblemsLayer,
  ];

  return (
    <MayoNarrativeBeat id="mayo-defined">
      <MayoBlock id={definedProblemsLayer.id}>
        <MayoBlockHeader
          title={definedProblemsLayer.label}
          kicker={definedProblemsLayer.kicker}
          kickerAccent
        />
        <MayoStatGrid>
          {definedProblemsLayer.items.map((item) => (
            <MayoStatCard
              key={item.id}
              stat={item.stat}
              label={item.statLabel}
              body={item.body}
            />
          ))}
        </MayoStatGrid>
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

export function MedicalPrimaryResearchSection() {
  const { layers } = medicalProblemIdentification;
  const [, fieldworkLayer] = layers as [ClientLayer, FieldworkLayer, FindingsLayer, DefinedProblemsLayer];

  return (
    <MayoNarrativeBeat id="mayo-onsite">
      <MayoBlock>
        <MayoBlockHeader
          title={fieldworkLayer.label}
          kicker={fieldworkLayer.location}
          kickerAccent
        />
        <MayoBentoPrimaryResearch steps={toBentoSteps(fieldworkLayer.timeline)} />
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

/** @deprecated Use MedicalPrimaryResearchSection */
export function MedicalOnsiteResearchSection() {
  return <MedicalPrimaryResearchSection />;
}

export function MedicalResearchSynthesisSection() {
  const { layers } = medicalProblemIdentification;
  const [, , findingsLayer] = layers as [
    ClientLayer,
    FieldworkLayer,
    FindingsLayer,
    DefinedProblemsLayer,
  ];

  return (
    <MayoNarrativeBeat id="mayo-synthesis">
      <MayoBlock>
        <MayoBlockHeader

          title={findingsLayer.label}
          kicker={findingsLayer.synthesis.patternsStep.body}
        />
        <MayoInsightContrast
          ruledOutTitle={findingsLayer.ruledOut.title}
          discoveredTitle={findingsLayer.discovered.title}
          ruledOut={findingsLayer.ruledOut.items}
          discovered={findingsLayer.discovered.items}
        />
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

export function MedicalResearchInsightSection() {
  const { researchInsight, layers } = medicalProblemIdentification;
  const [, , , definedProblemsLayer] = layers as [
    ClientLayer,
    FieldworkLayer,
    FindingsLayer,
    DefinedProblemsLayer,
  ];

  return (
    <MayoNarrativeBeat id="mayo-research-insight">
      <MayoBlock>
        <MayoBlockHeader title={researchInsight.title} kicker={researchInsight.kicker} />
        {definedProblemsLayer.scaleVisual ? (
          <MayoScaleWrap>
            <MedicalProblemScaleVisual {...definedProblemsLayer.scaleVisual} />
          </MayoScaleWrap>
        ) : null}
        <MayoFeatureGrid>
          {definedProblemsLayer.items.map((item) => (
            <MayoFeatureCard key={item.id} title={item.statLabel} body={item.body} />
          ))}
        </MayoFeatureGrid>
      </MayoBlock>
    </MayoNarrativeBeat>
  );
}

/** @deprecated Use split sections above */
export function MedicalProblemSection() {
  return (
    <>
      <MedicalProblemStatementSection />
      <MedicalDefinedProblemsSection />
      <MedicalPrimaryResearchSection />
      <MedicalResearchSynthesisSection />
      <MedicalResearchInsightSection />
    </>
  );
}
