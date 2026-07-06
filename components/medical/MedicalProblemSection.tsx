import type { ReactNode } from "react";
import { medicalProblemIdentification } from "@/data/medical-content";
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

type TimelineImage = {
  src: string;
  alt: string;
  caption: string;
};

type FieldworkMetric = {
  label: string;
  value: string;
};

type FieldworkStep = {
  id: string;
  title: string;
  detail: string;
  metrics?: FieldworkMetric[];
  metricsSummary?: FieldworkMetric;
  quote?: string;
  quoteAttribution?: string;
  metricsInline?: string;
  quoteInline?: string;
  compact?: boolean;
  sideImages?: TimelineImage[];
  belowImages?: TimelineImage[];
};

function FieldworkMetrics({ step }: { step: FieldworkStep }) {
  const metrics = step.metrics ?? [];
  const isBreakdown = Boolean(step.metricsSummary);
  const metricCount = metrics.length;
  const isPair = !isBreakdown && metricCount === 2;
  const isTriple = !isBreakdown && metricCount === 3;

  if (!isBreakdown && metricCount === 0) {
    return null;
  }

  return (
    <div className={styles.problemTimelineMetricsBlock}>
      {step.metricsSummary ? (
        <div className={styles.problemTimelineMetric}>
          <span className={styles.problemTimelineMetricLabel}>{step.metricsSummary.label}</span>
          <span className={styles.problemTimelineMetricValue}>{step.metricsSummary.value}</span>
        </div>
      ) : null}
      <div
        className={`${styles.problemTimelineMetricsGrid}${
          isBreakdown ? ` ${styles.problemTimelineMetricsGridBreakdown}` : ""
        }${isPair ? ` ${styles.problemTimelineMetricsGridPair}` : ""}${
          isTriple ? ` ${styles.problemTimelineMetricsGridTriple}` : ""
        }`}
      >
        {metrics.map((metric) => {
          const isCount = /^\d+\+?$/.test(metric.value.trim());

          return (
            <div className={styles.problemTimelineMetric} key={metric.label}>
              <span className={styles.problemTimelineMetricLabel}>{metric.label}</span>
              <span
                className={`${styles.problemTimelineMetricValue}${
                  isCount ? ` ${styles.problemTimelineMetricValueCount}` : ""
                }`}
              >
                {metric.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type FieldworkLayer = {
  id: string;
  index: string;
  label: string;
  purpose?: string;
  location: string;
  locationIcon: string;
  timeline: FieldworkStep[];
};

type InsightItem = {
  id: string;
  label: string;
  body?: string;
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
    intro: string;
    insightsStep: { stat: string; title: string };
    patternsStep: { stat: string; title: string; body: string };
  };
  discovered: InsightGroup;
  ruledOut: InsightGroup;
};

type DefinedProblemsLayer = {
  id: string;
  index: string;
  label: string;
  scaleImage?: {
    src: string;
    alt: string;
  };
  items: {
    id: string;
    stat: string;
    statLabel: string;
    body: string;
  }[];
};

function ProblemInsightPanels({
  discovered,
  ruledOut,
}: {
  discovered: InsightGroup;
  ruledOut: InsightGroup;
}) {
  return (
    <div className={styles.problemInsightContrast}>
      <section
        className={`${styles.problemInsightPanel} ${styles.problemInsightPanelDiscovered}`}
      >
        <h5 className={styles.problemInsightPanelTitle}>{discovered.title}</h5>
        <ul className={styles.problemInsightList}>
          {discovered.items.map((item) => (
            <li className={styles.problemInsightItem} key={item.id}>
              <span
                className={`${styles.problemInsightIcon} ${styles.problemInsightIconDiscovered}`}
                aria-hidden="true"
              >
                ✓
              </span>
              <div className={styles.problemInsightCopy}>
                <p className={styles.problemInsightLabel}>{item.label}</p>
                {item.body ? (
                  <p className={styles.problemInsightBody}>{item.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.problemInsightPanel} ${styles.problemInsightPanelRuledOut}`}
      >
        <h5 className={styles.problemInsightPanelTitle}>{ruledOut.title}</h5>
        <ul className={styles.problemInsightList}>
          {ruledOut.items.map((item) => (
            <li className={styles.problemInsightItem} key={item.id}>
              <span
                className={`${styles.problemInsightIcon} ${styles.problemInsightIconRuledOut}`}
                aria-hidden="true"
              >
                ✕
              </span>
              <div className={styles.problemInsightCopy}>
                <p className={styles.problemInsightLabel}>{item.label}</p>
                {item.body ? (
                  <p className={styles.problemInsightBody}>{item.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ProblemLayerShell({
  index,
  label,
  purpose,
  children,
  anchorId,
  className,
}: {
  index: string;
  label: string;
  purpose?: string;
  children: ReactNode;
  anchorId?: string;
  className?: string;
}) {
  return (
    <MedicalLayerShell
      index={index}
      label={label}
      purpose={purpose}
      anchorId={anchorId}
      className={className}
    >
      {children}
    </MedicalLayerShell>
  );
}

function FieldworkTimeline({ steps }: { steps: FieldworkStep[] }) {
  return (
    <ol className={styles.problemTimeline}>
      {steps.map((step, index) => (
        <li
          className={`${styles.problemTimelineItem}${
            step.sideImages?.length ? ` ${styles.problemTimelineItemWithMedia}` : ""
          }`}
          key={step.id}
        >
          <div className={styles.problemTimelineMarker} aria-hidden="true">
            <span className={styles.problemTimelineDot} />
            {index < steps.length - 1 ? <span className={styles.problemTimelineLine} /> : null}
          </div>
          <div
            className={
              step.sideImages?.length
                ? styles.problemTimelineRowWithMedia
                : styles.problemTimelineContent
            }
          >
            <div className={styles.problemTimelineContent}>
              <h5 className={styles.problemTimelineTitle}>{step.title}</h5>
              {step.compact && step.metricsInline && step.quoteInline ? (
                <div className={styles.problemTimelineCompactRow}>
                  <p className={styles.problemTimelineMetricsInline}>{step.metricsInline}</p>
                  <p className={styles.problemTimelineQuoteInline}>{step.quoteInline}</p>
                </div>
              ) : (
                <>
                  {step.metricsInline ? (
                    <p className={styles.problemTimelineMetricsInline}>{step.metricsInline}</p>
                  ) : (
                    <FieldworkMetrics step={step} />
                  )}
                  {step.detail ? (
                    <p className={styles.problemTimelineDetail}>{step.detail}</p>
                  ) : null}
                  {step.quote ? (
                    <blockquote className={styles.problemQuote}>
                      <p>&ldquo;{step.quote}&rdquo;</p>
                      {step.quoteAttribution ? (
                        <cite className={styles.problemQuoteCite}>{step.quoteAttribution}</cite>
                      ) : null}
                    </blockquote>
                  ) : null}
                </>
              )}
              {step.belowImages?.length ? (
                <div className={styles.problemTimelineBelowMedia}>
                  {step.belowImages.map((image) => (
                    <figure className={styles.problemTimelineBelowFigure} key={image.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={styles.problemTimelineBelowImage}
                        loading="lazy"
                        decoding="async"
                      />
                      {image.caption ? (
                        <figcaption className={styles.problemTimelineBelowCaption}>
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
            {step.sideImages?.length ? (
              <div className={styles.problemTimelineSideMedia}>
                {step.sideImages.map((image) => (
                  <figure className={styles.problemTimelineSideFigure} key={image.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.problemTimelineSideImage}
                      loading="lazy"
                      decoding="async"
                    />
                    {image.caption ? (
                      <figcaption className={styles.problemTimelineSideCaption}>
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function MedicalProblemSection() {
  const { title, layers } = medicalProblemIdentification;
  const [clientLayer, fieldworkLayer, findingsLayer, definedProblemsLayer] = layers as [
    ClientLayer,
    FieldworkLayer,
    FindingsLayer,
    DefinedProblemsLayer,
  ];

  return (
    <MedicalSection id="mayo-problem" title={title}>
      <div className={styles.medicalLayers}>
        <ProblemLayerShell index={clientLayer.index} label={clientLayer.label}>
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
        </ProblemLayerShell>

        <ProblemLayerShell
          index={fieldworkLayer.index}
          label={fieldworkLayer.label}
          purpose={fieldworkLayer.purpose}
        >
          <p className={styles.problemLocation}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fieldworkLayer.locationIcon}
              alt=""
              className={styles.problemLocationIcon}
              width={18}
              height={22}
              aria-hidden="true"
            />
            <span>{fieldworkLayer.location}</span>
          </p>
          <FieldworkTimeline steps={fieldworkLayer.timeline} />
        </ProblemLayerShell>

        <ProblemLayerShell index={findingsLayer.index} label={findingsLayer.label}>
          <p className={styles.problemSynthesisIntro}>{findingsLayer.synthesis.intro}</p>
          <ol className={styles.problemSynthesisFlow}>
            <li className={styles.problemTimelineItem}>
              <div className={styles.problemTimelineMarker} aria-hidden="true">
                <span className={styles.problemTimelineDot} />
                <span className={styles.problemTimelineLine} />
              </div>
              <div className={styles.problemTimelineContent}>
                <h5 className={styles.problemTimelineTitle}>
                  <span className={styles.problemSynthesisStepStat}>
                    {findingsLayer.synthesis.insightsStep.stat}
                  </span>{" "}
                  {findingsLayer.synthesis.insightsStep.title}
                </h5>
                <ProblemInsightPanels
                  discovered={findingsLayer.discovered}
                  ruledOut={findingsLayer.ruledOut}
                />
              </div>
            </li>
            <li className={styles.problemTimelineItem}>
              <div className={styles.problemTimelineMarker} aria-hidden="true">
                <span className={styles.problemTimelineDot} />
              </div>
              <div className={styles.problemTimelineContent}>
                <h5 className={styles.problemTimelineTitle}>
                  <span className={styles.problemSynthesisStepStat}>
                    {findingsLayer.synthesis.patternsStep.stat}
                  </span>{" "}
                  {findingsLayer.synthesis.patternsStep.title}
                </h5>
                <p className={styles.problemPatternsIntro}>
                  {findingsLayer.synthesis.patternsStep.body}
                </p>
                {definedProblemsLayer.scaleImage ? (
                  <figure className={styles.problemScaleFigure}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={definedProblemsLayer.scaleImage.src}
                      alt={definedProblemsLayer.scaleImage.alt}
                      className={styles.problemScaleImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ) : null}
              </div>
            </li>
          </ol>
        </ProblemLayerShell>

        <ProblemLayerShell
          index={definedProblemsLayer.index}
          label={definedProblemsLayer.label}
          anchorId={definedProblemsLayer.id}
        >
          <ul className={styles.problemDefinedGrid}>
            {definedProblemsLayer.items.map((item) => (
              <li className={styles.problemDefinedCard} key={item.id}>
                <p className={styles.problemDefinedStat}>{item.stat}</p>
                <p className={styles.problemDefinedStatLabel}>{item.statLabel}</p>
                <p className={styles.problemDefinedBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        </ProblemLayerShell>
      </div>
    </MedicalSection>
  );
}
