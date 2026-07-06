import CaseOnboardingGestureCards from "@/components/CaseOnboardingGestureCards";
import CaseOnboardingStages from "@/components/CaseOnboardingStages";
import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import MedicalEvaluatorAlignment from "@/components/medical/MedicalEvaluatorAlignment";
import {
  medicalDecision,
  medicalEvaluation,
  medicalEvaluatorComparison,
  medicalOnboarding,
  medicalUIDesign,
  medicalUserTesting,
} from "@/data/medical-content";
import { MedicalProblemSection } from "./MedicalProblemSection";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export { MedicalProblemSection };

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
}: Omit<UIDesignSplitItem, "label">) {
  return (
    <div className={styles.uiDesignSolutionSplit}>
      <figure className={styles.uiDesignSolutionSplitFigure}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={imageClassName ?? styles.uiDesignResearchImage}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className={styles.uiDesignSolutionSplitCopy}>
        <h6 className={styles.uiDesignSolutionSplitTitle}>{title}</h6>
        <p className={styles.uiDesignSolutionSplitBody}>{body}</p>
      </div>
    </div>
  );
}

export function MedicalBrandSpatialSection() {
  const {
    title,
    intro,
    dimensions,
    userFlow,
    targetDefinition,
    solutions,
    testingBridge,
    iconSheet,
    screensOverview,
  } = medicalUIDesign;
  const round2IconFinding = medicalUserTesting.timeline[1]?.findings[0];
  const round2IconVideo =
    round2IconFinding && "videoSrc" in round2IconFinding
      ? round2IconFinding.videoSrc
      : undefined;

  return (
    <MedicalSection id="mayo-brand-spatial" title={title} intro={intro}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell index="01" label="Three UI Dimensions">
          <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
            {dimensions.map((dimension) => (
              <li className={styles.medicalCard} key={dimension.id}>
                <h5 className={styles.medicalCardTitle}>{dimension.title}</h5>
                <p className={styles.medicalCardBody}>{dimension.body}</p>
              </li>
            ))}
          </ul>
        </MedicalLayerShell>

        <MedicalLayerShell index="02" label={userFlow.label}>
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

        <MedicalLayerShell index="03" label="Target UI Definition">
          <p className={styles.uiDesignDefinition}>{targetDefinition}</p>
        </MedicalLayerShell>

        <MedicalLayerShell index="04" label="Design Solutions">
          <p className={styles.uiDesignSolutionsLead}>{solutions.lead}</p>
        </MedicalLayerShell>

        {solutions.candidates.map((image, index) => (
          <MedicalLayerShell
            index={String(5 + index).padStart(2, "0")}
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

        <MedicalLayerShell index="06" label={iconSheet.label}>
          <UIDesignSolutionSplit
            title={iconSheet.title}
            body={iconSheet.body}
            src={iconSheet.src}
            alt={iconSheet.alt}
            imageClassName={styles.uiDesignIconSheetImage}
          />
        </MedicalLayerShell>

        <MedicalLayerShell index="07" label={screensOverview.label}>
          <UIDesignSolutionSplit
            title={screensOverview.title}
            body={screensOverview.body}
            src={screensOverview.src}
            alt={screensOverview.alt}
          />
        </MedicalLayerShell>

        <MedicalLayerShell index="08" label={solutions.applied.label}>
          <p className={styles.uiDesignSolutionIntro}>{solutions.applied.body}</p>
          {solutions.applied.images.map((image, imageIndex) => (
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
              {imageIndex === 0 && round2IconVideo ? (
                <CaseAutoplayVideo
                  className={styles.uiDesignFinalUiVideo}
                  src={round2IconVideo}
                  alt={round2IconFinding?.alt ?? ""}
                />
              ) : null}
            </div>
          ))}
        </MedicalLayerShell>

        <MedicalLayerShell index="09" label="Validation">
          <p className={styles.uiDesignTestingBody}>{testingBridge.body}</p>
          <a className={styles.uiDesignTestingLink} href={`#${testingBridge.anchorId}`}>
            {testingBridge.anchorLabel} →
          </a>
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

function decisionMatrixColumnClass(
  column: { id: string; verdict?: "selected" | "rejected" },
  styles: Record<string, string>,
) {
  if (column.id === "baseline") {
    return styles.decisionMatrixColBaselineBg;
  }
  if (column.verdict === "selected") {
    return styles.decisionMatrixColSelected;
  }
  return "";
}

export function MedicalDecisionSection() {
  const {
    title,
    intro,
    principle,
    matrix,
    matrixNote,
    matrixBridge,
    standardsIntro,
    standards,
  } = medicalDecision;
  const { columns, criteria } = matrix;

  return (
    <MedicalSection id="mayo-decision" title={title} intro={intro}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell index="01" label="Evaluation Principle">
          <ul className={styles.problemPoints}>
            {principle.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </MedicalLayerShell>

        <MedicalLayerShell
          index="02"
          label="Decision Matrix"
          className={styles.medicalLayerFullWidth}
        >
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
          <p className={styles.matrixNote}>{matrixNote}</p>
          <p className={styles.matrixBridge}>{matrixBridge}</p>
        </MedicalLayerShell>

        <MedicalLayerShell
          index="03"
          label="Design Standards"
          anchorId="mayo-standards"
        >
          <p className="case-prose-body">{standardsIntro}</p>
          <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
            {standards.map((item) => (
              <li className={`${styles.medicalCard} ${styles.medicalCardWide}`} key={item.id}>
                <StandardIcon type={item.icon} />
                <h4 className={styles.medicalCardTitle}>{item.title}</h4>
                <p className={styles.medicalCardBody}>{item.body}</p>
                <p className={styles.standardRisk}>{item.risk}</p>
              </li>
            ))}
          </ul>
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
        <MedicalLayerShell index="01" label="Design Method">
          <p className="case-prose-body">{designMethodLead}</p>
          <CaseOnboardingGestureCards cards={gestureCards} />
        </MedicalLayerShell>

        <MedicalLayerShell index="02" label="Four Progressive Stages">
          <p className="case-prose-body">{stagesIntro}</p>
          <CaseOnboardingStages stages={stages} />
        </MedicalLayerShell>

        <MedicalLayerShell index="03" label="AED: Dual-channel Input">
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
        <MedicalLayerShell index="01" label="Evaluation Framework">
          <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols2}`}>
            {framework.map((item) => (
              <li className={styles.medicalCard} key={item.id}>
                <h4 className={styles.medicalCardTitle}>{item.title}</h4>
                <p className={styles.medicalCardBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        </MedicalLayerShell>

        <MedicalLayerShell index="02" label="Report Interface">
          <p className="case-prose-body">{reportIntro}</p>
          <CaseOnboardingStages stages={reportViews} />
        </MedicalLayerShell>

        <MedicalLayerShell index="03" label={validationTitle}>
          <MedicalEvaluatorAlignment />
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}

export { MedicalOutcomeSection } from "./MedicalOutcomeSection";
