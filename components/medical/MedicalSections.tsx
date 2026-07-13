import CaseOnboardingGestureCards from "@/components/CaseOnboardingGestureCards";
import CaseOnboardingStages from "@/components/CaseOnboardingStages";
import MedicalEvaluatorAlignment from "@/components/medical/MedicalEvaluatorAlignment";
import {
  medicalDecision,
  medicalDesignRationales,
  medicalEvaluation,
  medicalEvaluatorComparison,
  medicalFinalVideo,
  medicalIteration,
  medicalOnboarding,
  medicalUIDesign,
} from "@/data/medical-content";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MayoTextMediaSplit } from "./MayoTextMediaSplit";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export {
  MedicalProblemSection,
  MedicalClientBriefSection,
  MedicalProblemStatementSection,
  MedicalDefinedProblemsSection,
  MedicalPrimaryResearchSection,
  MedicalOnsiteResearchSection,
  MedicalResearchSynthesisSection,
  MedicalResearchInsightSection,
} from "./MedicalProblemSection";

type UIDesignSplitItem = {
  label: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  imageClassName?: string;
};

function UIDesignSolutionSplit({
  title,
  body,
  src,
  alt,
  imageClassName,
  mediaSide = "left",
}: Omit<UIDesignSplitItem, "label"> & { mediaSide?: "left" | "right" }) {
  return (
    <MayoTextMediaSplit
      mediaSide={mediaSide}
      image={{ src, alt, className: imageClassName ?? styles.uiDesignResearchImage }}
    >
      <p className={styles.mayoTextMediaSplitBody}>
        <strong className="mayoBodyEm">{title}</strong>
        {" — "}
        {body}
      </p>
    </MayoTextMediaSplit>
  );
}

export function DesignRationaleList() {
  return (
    <ul className={styles.designRationaleList}>
      {medicalDesignRationales.map((item) => (
        <li className={styles.designRationaleItem} key={item.id}>
          <p className="case-prose-body">
            <span className="mayoBodyLabel">Insight</span> {item.insight}
          </p>
          <p className="case-prose-body">
            <span className="mayoBodyLabel">Decision</span> {item.decision}
          </p>
          <p className="case-prose-body">
            <span className="mayoBodyLabel">Why</span> {item.why}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function MedicalFlowWireframesSection() {
  const { flowWireframes, dimensions, userFlow, targetDefinition, solutions } = medicalUIDesign;

  return (
    <MedicalSection
      id="mayo-flow-wireframes"
      title={flowWireframes.title}
    >
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label="Decision Rationale">
          <DesignRationaleList />
        </MedicalLayerShell>

        <MedicalLayerShell label="Three UI Dimensions">
          <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
            {dimensions.map((dimension) => (
              <li className={styles.medicalCard} key={dimension.id}>
                <p className={styles.medicalCardTitle}>{dimension.title}</p>
                <p className={styles.medicalCardBody}>{dimension.body}</p>
              </li>
            ))}
          </ul>
        </MedicalLayerShell>

        <MedicalLayerShell label={userFlow.label}>
          <figure className={styles.flowFigure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={userFlow.src}
              alt={userFlow.alt}
              className={styles.flowFigureImage}
              loading="lazy"
              decoding="async"
            />
            {userFlow.caption ? (
              <figcaption className={styles.figureCaption}>{userFlow.caption}</figcaption>
            ) : null}
          </figure>
        </MedicalLayerShell>

        {targetDefinition ? (
          <MedicalLayerShell label="Target UI Definition">
            <p className={styles.uiDesignDefinition}>{targetDefinition}</p>
          </MedicalLayerShell>
        ) : null}

        {solutions.lead ? (
          <MedicalLayerShell label="Design Solutions">
            <p className={styles.uiDesignSolutionsLead}>{solutions.lead}</p>
          </MedicalLayerShell>
        ) : null}
      </div>
    </MedicalSection>
  );
}

export function MedicalUIScreensSection() {
  const { screens, solutions, iconSheet, screensOverview } = medicalUIDesign;

  return (
    <MedicalSection id="mayo-ui-screens" title={screens.title}>
      <div className={styles.medicalLayers}>
        {solutions.candidates.map((image, index) => (
          <MedicalLayerShell

            label={image.label}
            key={image.src}
          >
            <figure className={styles.uiDesignResearchFigure}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className={styles.uiDesignResearchImage}
                loading="lazy"
                decoding="async"
              />
              {image.caption ? (
                <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
              ) : null}
            </figure>
          </MedicalLayerShell>
        ))}

        <MedicalLayerShell

          label={iconSheet.label}
        >
          <UIDesignSolutionSplit
            title={iconSheet.title}
            body={iconSheet.body}
            src={iconSheet.src}
            alt={iconSheet.alt}
            imageClassName={styles.uiDesignIconSheetImage}
          />
        </MedicalLayerShell>

        <MedicalLayerShell

          label={screensOverview.label}
        >
          <UIDesignSolutionSplit
            title={screensOverview.title}
            body={screensOverview.body}
            src={screensOverview.src}
            alt={screensOverview.alt}
          />
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

export function MedicalIterationSection() {
  const { title, intro, items } = medicalIteration;

  return (
    <MedicalSection id="mayo-iteration" title={title} intro={intro}>
      <ul className={styles.iterationList}>
        {items.map((item, index) => (
          <li className={styles.iterationItem} key={item.id}>
            <p className={styles.iterationIndex}>{String(index + 1).padStart(2, "0")}</p>
            <div className={styles.iterationCopy}>
          <p className="case-prose-body">
            <span className="mayoBodyLabel">We observed</span> {item.observed}
          </p>
          <p className="case-prose-body">
            <span className="mayoBodyLabel">We changed</span> {item.changed}
          </p>
            </div>
          </li>
        ))}
      </ul>
    </MedicalSection>
  );
}

export function MedicalFinalDeliverablesSection({ embedded }: { embedded?: boolean } = {}) {
  const { final, solutions } = medicalUIDesign;

  const content = (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label={solutions.applied.label} anchorId={embedded ? "mayo-final" : undefined}>
        <p className={styles.uiDesignSolutionIntro}>{solutions.applied.body}</p>
        {solutions.applied.images.map((image) => (
          <div className={styles.uiDesignFinalUiMedia} key={image.src}>
            <figure className={styles.uiDesignResearchFigure}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className={styles.uiDesignResearchImage}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        ))}
      </MedicalLayerShell>

      <MedicalLayerShell label="Final Concept">
        {medicalFinalVideo.caption ? (
          <p className={styles.finalVideoCaption}>{medicalFinalVideo.caption}</p>
        ) : null}
        <div className="case-overview-youtube">
          <iframe
            className="case-overview-youtube-embed"
            src={`https://www.youtube.com/embed/${medicalFinalVideo.videoId}?autoplay=0&mute=0&playsinline=1`}
            title={medicalFinalVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </MedicalLayerShell>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <MedicalSection id="mayo-final" title={final.title}>
      {content}
    </MedicalSection>
  );
}

/** @deprecated Use MedicalFlowWireframesSection and MedicalUIScreensSection */
export function MedicalBrandSpatialSection() {
  return (
    <>
      <MedicalFlowWireframesSection />
      <MedicalUIScreensSection />
    </>
  );
}

function decisionMatrixColumnClass(
  column: { id: string; verdict?: "selected" | "rejected" },
  styles: Record<string, string>,
) {
  const classes: string[] = [];

  if (column.id === "baseline") {
    classes.push(styles.decisionMatrixColBaselineBg);
  }
  if (column.verdict === "selected") {
    classes.push(styles.decisionMatrixColSelected);
  }
  if (column.id === "mr") {
    classes.push(styles.decisionMatrixColMr);
  }
  if (column.verdict === "rejected") {
    classes.push(styles.decisionMatrixColRejected);
  }

  return classes.join(" ");
}

export function DecisionMatrixContent() {
  const { matrix, matrixNote, matrixBridge } = medicalDecision;
  const { columns, criteria } = matrix;

  return (
    <>
      <div className={styles.decisionMatrixWrap}>
        <table className={styles.decisionMatrix}>
              <thead>
                <tr>
                  <th scope="col" className={styles.decisionMatrixCorner} />
                  {columns.map((column) => (
                    <th
                      key={column.id}
                      scope="col"
                      className={`${styles.decisionMatrixColHead} ${decisionMatrixColumnClass(column, styles)}`}
                    >
                      <span className={styles.decisionMatrixColTitle}>{column.shortLabel}</span>
                      {column.verdict ? (
                        <span
                          className={`${styles.decisionVerdict} ${
                            column.verdict === "selected"
                              ? styles.decisionVerdictSelected
                              : styles.decisionVerdictRejected
                          }`}
                        >
                          {column.verdict === "selected" ? "Selected" : "Rejected"}
                        </span>
                      ) : (
                        <span className={styles.decisionMatrixColBaseline}>Baseline</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className={styles.decisionMatrixDescRow}>
                  <th scope="row" className={styles.decisionMatrixRowLabel}>
                    Description
                  </th>
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className={`${styles.decisionMatrixDescCell} ${decisionMatrixColumnClass(column, styles)}`}
                    >
                      <p>{column.description}</p>
                    </td>
                  ))}
                </tr>
                {criteria.map((criterion) => (
                  <tr key={criterion.id}>
                    <th scope="row" className={styles.decisionMatrixRowLabel}>
                      {criterion.label}
                    </th>
                    {columns.map((column) => {
                      const cell = criterion.values[
                        column.id as keyof typeof criterion.values
                      ];
                      const columnClass = decisionMatrixColumnClass(column, styles);

                      if (!cell) return null;

                      if (criterion.type === "assessment" && "text" in cell) {
                        return (
                          <td
                            key={column.id}
                            className={`${styles.decisionMatrixAssessmentCell} ${columnClass}`}
                          >
                            <p>{cell.text}</p>
                          </td>
                        );
                      }

                      if ("meets" in cell) {
                        return (
                          <td
                            key={column.id}
                            className={`${styles.decisionMatrixCriteriaCell} ${columnClass}`}
                          >
                            <span
                              className={`${styles.matrixMark} ${
                                cell.meets ? styles.matrixMarkYes : styles.matrixMarkNo
                              }`}
                              aria-label={
                                cell.meets
                                  ? `${column.shortLabel} meets ${criterion.label}`
                                  : `${column.shortLabel} does not meet ${criterion.label}`
                              }
                            >
                              {cell.meets ? "✓" : "·"}
                            </span>
                            {"note" in cell && cell.note ? (
                              <p className={styles.decisionMatrixCellNote}>{cell.note}</p>
                            ) : null}
                          </td>
                        );
                      }

                      return null;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {matrixNote ? <p className={styles.matrixNote}>{matrixNote}</p> : null}
          {matrixBridge ? <p className={styles.matrixBridge}>{matrixBridge}</p> : null}
    </>
  );
}

export function DesignStandardsContent() {
  const { standardsIntro, standards } = medicalDecision;

  return (
    <>
      <p className="case-prose-body">{standardsIntro}</p>
      <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
        {standards.map((item) => (
          <li className={`${styles.medicalCard} ${styles.medicalCardWide}`} key={item.id}>
            <StandardIcon type={item.icon} />
            <p className={styles.medicalCardTitle}>{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ThreeUiDimensionsContent() {
  const { dimensions } = medicalUIDesign;

  return (
    <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
      {dimensions.map((dimension) => (
        <li className={styles.medicalCard} key={dimension.id}>
          <p className={styles.medicalCardTitle}>{dimension.title}</p>
          <p className={styles.medicalCardBody}>{dimension.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function UserFlowContent() {
  const { userFlow } = medicalUIDesign;

  return (
    <figure className={styles.flowFigure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={userFlow.src}
        alt={userFlow.alt}
        className={styles.flowFigureImage}
        loading="lazy"
        decoding="async"
      />
      {userFlow.caption ? (
        <figcaption className={styles.figureCaption}>{userFlow.caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** @deprecated Use MedicalOpportunityChapter */
export function MedicalDecisionSection() {
  const { title, intro } = medicalDecision;

  return (
    <MedicalSection id="mayo-decision" title={title} intro={intro}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label="Decision Matrix" className={styles.medicalLayerFullWidth}>
          <DecisionMatrixContent />
        </MedicalLayerShell>
        <MedicalLayerShell label="Design Standards" anchorId="mayo-standards">
          <DesignStandardsContent />
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

function StandardIcon({ type }: { type: "feedback" | "fidelity" | "credentialing" }) {
  if (type === "feedback") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.standardIcon}>
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M14 26c4-8 16-8 20 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "fidelity") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.standardIcon}>
        <rect
          x="10"
          y="8"
          width="28"
          height="32"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M16 18h16M16 24h16M16 30h10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.standardIcon}>
      <path
        d="M24 6l14 6v11c0 9-6 16-14 19-8-3-14-10-14-19V12l14-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l5 5 9-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MedicalOnboardingSection() {
  const {
    title,
    origin,
    dualChannelInput,
    designMethodLead,
    gestureCards,
    stagesIntro,
    stages,
  } = medicalOnboarding;

  return (
    <MedicalSection id="mayo-onboarding" title={title} intro={origin}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label="Design Method">
          {designMethodLead ? (
            <p className="case-prose-body">{designMethodLead}</p>
          ) : null}
          <CaseOnboardingGestureCards cards={gestureCards} />
        </MedicalLayerShell>

        <MedicalLayerShell label="Four Progressive Stages">
          {stagesIntro ? <p className="case-prose-body">{stagesIntro}</p> : null}
          <CaseOnboardingStages stages={stages} />
        </MedicalLayerShell>

        <MedicalLayerShell label="AED: Dual-channel Input">
          <p className="case-prose-body">{dualChannelInput.problem}</p>
          <p className={`case-prose-body ${styles.onboardingSolution}`}>
            {dualChannelInput.solution}
          </p>
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

export function MedicalEvaluationSection() {
  const { title, framework, reportIntro, reportViews } = medicalEvaluation;
  const { title: validationTitle } = medicalEvaluatorComparison;

  return (
    <MedicalSection id="mayo-evaluation" title={title}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell label="Evaluation Framework">
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

        <MedicalLayerShell label={validationTitle}>
          <MedicalEvaluatorAlignment />
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

export { MedicalDeepDiveOverviewSection } from "./MedicalResearchNarrative";
export {
  MedicalResearchDetailSection,
  MedicalResearchSection,
} from "./MedicalResearchSection";
export { MedicalOutcomeSection } from "./MedicalOutcomeSection";
