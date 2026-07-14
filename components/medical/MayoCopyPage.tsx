import type { ReactNode } from "react";
import Image from "next/image";
import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import {
  mayocopyClientBrief,
  mayocopyCrossFunctionalIntro,
  mayocopyCrossFunctionalItems,
  mayocopyDecisionMatrix,
  mayocopyDecisionMatrixIntro,
  mayocopyDesignDimensions,
  mayocopyMainFeatures,
  mayocopyBlsIntro,
  mayocopyDefinedProblems,
  mayocopyEvaluationFramework,
  mayocopyEvaluationReport,
  mayocopyEvaluationRubric,
  mayocopySensorToScreen,
  mayocopyFinalConcept,
  mayocopyFinalUI,
  mayocopyImpactIntro,
  mayocopyImpactTimeEfficiency,
  mayocopyImpactTrust,
  mayocopyIndustryResearchIntro,
  mayocopyIndustryResearchSections,
  mayocopyLimitations,
  mayocopyMyRoleCards,
  mayocopyOnboardingIntro,
  mayocopyOnboardingOpening,
  mayocopyOnboardingStages,
  mayocopyOpeningMedia,
  mayocopyOverallInsightCards,
  mayocopyOverallInsightIntro,
  mayocopyPrimaryPainPoints,
  mayocopyPrimaryResearchIntro,
  mayocopyPrimaryResearchTracks,
  mayocopyResearchNote,
  mayocopyProblemStatement,
  mayocopyResearchBuildCards,
  mayocopyTechnicalResearchIntro,
  mayocopyTechnicalResearchSections,
  mayocopyUserFlow,
  mayocopyUserFlowAssessment,
  mayocopyUserFlowDiagram,
  mayocopyUserFlowEvaluation,
  mayocopyUserFlowOnboarding,
  mayocopySuccessCriteriaRevisited,
  mayocopyUsabilityRound1,
  mayocopyUsabilityRound2,
  mayocopyUsabilityTestingIntro,
  mayocopyVisualResearchIntro,
  mayocopyVisualResearchSections,
  mayocopyWhatsNext,
  mayocopyConcept,
  mayocopyConceptFigure,
} from "@/data/mayocopy-content";
import styles from "./MayoCopyPage.module.css";

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className={styles.sectionHeader}>
      {index ? <span className={styles.headingIndex}>{index}</span> : null}
      <div className={styles.headingLine}>
        <h2>{title}</h2>
      </div>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}

function ChapterSection({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section} id={id}>
      <SectionHeader index={index} title={title} subtitle={subtitle} />
      <SectionBody>{children}</SectionBody>
    </section>
  );
}

function H2Section({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${styles.subsection}${className ? ` ${className}` : ""}`} id={id}>
      <h3 className={styles.subsectionTitle}>{title}</h3>
      {children}
    </div>
  );
}

/** 标题组下方直接衔接的说明区：文字、图片、图表等均可 */
function SectionLeadText({ children }: { children: ReactNode }) {
  return <p className={styles.sectionLeadText}>{children}</p>;
}

/** H2 子章节内的居中描述：粗标题 + 细正文 */
function SubsectionLead({ title, body }: { title: string; body: string }) {
  return (
    <div className={styles.subsectionLead}>
      <p className={styles.subsectionLeadTitle}>{title}</p>
      <p className={styles.subsectionLeadBody}>{body}</p>
    </div>
  );
}

/** 有分章节时使用 */
function SectionBody({ children }: { children: ReactNode }) {
  return <div className={styles.sectionBody}>{children}</div>;
}

/** 无分章节时，标题组下方直接主内容（距标题组 110px） */
function SectionContent({ children }: { children: ReactNode }) {
  return <div className={styles.sectionContent}>{children}</div>;
}

function Subsection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.subsection}>
      {title ? <h3 className={styles.subsectionTitle}>{title}</h3> : null}
      {children}
    </div>
  );
}

function ContentStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${styles.contentStack}${className ? ` ${className}` : ""}`}>{children}</div>;
}

function DesignDimensionIcon({ type }: { type: "brand" | "scene" | "function" }) {
  if (type === "brand") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
        <path d="M4 7l8 4 8-4M12 11v10" />
      </svg>
    );
  }

  if (type === "scene") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z" />
      <path d="m9.5 12.5 2 2 4-4.5" />
    </svg>
  );
}

function RoleCardsGrid({ cards }: { cards: typeof mayocopyMyRoleCards }) {
  return (
    <ul className={`${styles.problemGrid} ${styles.roleCardGrid}`}>
      {cards.map((card) => (
        <ProblemTextCard key={card.title} title={card.title} body={card.body} filled />
      ))}
    </ul>
  );
}

function QuoteCard({
  children,
  cite,
  tail = "right",
}: {
  children: string;
  cite: string;
  tail?: "left" | "right";
}) {
  return (
    <blockquote
      className={`${styles.quoteCard} ${
        tail === "left" ? styles.quoteCardTailLeft : styles.quoteCardTailRight
      }`}
    >
      <svg
        className={styles.quoteCardOutline}
        viewBox="0 0 717 118"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M1 1H681V60L716 82L681 86V117H1Z" />
      </svg>
      <p>“{children}”</p>
      <cite>{cite}</cite>
    </blockquote>
  );
}

function PrimaryResearchTrack({
  title,
  fields,
  quotes,
  image,
}: {
  title: string;
  fields: readonly { label: string; value: string }[];
  quotes: readonly { quote: string; cite: string; tail: "left" | "right" }[];
  image: { src: string; alt: string; width: number; height: number };
  imageSide?: "left" | "right";
}) {
  return (
    <article className={styles.researchTrack}>
      <h3 className={styles.subsectionTitle}>{title}</h3>
      <figure className={styles.researchTrackHero}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.researchTrackHeroImage}
          sizes="(max-width: 900px) 100vw, min(1069px, 100vw)"
        />
        {fields.length ? (
          <dl className={styles.researchTrackHeroMeta}>
            {fields.map((field) => (
              <div key={field.label} className={styles.researchTrackHeroMetaItem}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </figure>
      {quotes.length ? (
        <div className={styles.researchTrackQuotes}>
          {quotes.map((item) => (
            <QuoteCard key={`${item.cite}-${item.quote}`} cite={item.cite} tail={item.tail}>
              {item.quote}
            </QuoteCard>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function SecondaryResearchSection({
  title,
  body,
  images,
  imageSide = "left",
  showRubric,
  mediaVariant = "default",
}: {
  title: string;
  body: string;
  images?: readonly {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit?: string;
    objectPosition?: string;
  }[];
  imageSide?: "left" | "right";
  showRubric?: boolean;
  mediaVariant?: "default" | "industry";
}) {
  const [primaryImage, ...extraImages] = images ?? [];

  return (
    <article
      className={`${styles.secondarySection}${
        mediaVariant === "industry" ? ` ${styles.secondarySectionIndustry}` : ""
      }`}
    >
      {primaryImage ? (
        <TextMediaRow
          title={title}
          body={body}
          image={primaryImage}
          imageSide={mediaRowSide(imageSide, 0)}
          variant={mediaVariant}
        />
      ) : (
        <>
          <h4 className={styles.secondarySectionTitle}>{title}</h4>
          <p className={styles.secondarySectionBody}>{body}</p>
        </>
      )}
      {extraImages.map((image, index) => (
        <TextMediaRow
          key={image.src}
          image={image}
          imageSide={mediaRowSide(imageSide, index + 1)}
          variant={mediaVariant}
        />
      ))}
      {showRubric ? <RubricTable rubric={mayocopyEvaluationRubric} showIntro={false} /> : null}
    </article>
  );
}

function InsightDecisionCard({
  insight,
  decision,
  why,
}: {
  insight: string;
  decision: string;
  why: string;
}) {
  return (
    <li className={styles.insightDecisionCard}>
      <p className={styles.insightDecisionLine}>
        <strong>Insight.</strong> {insight}
      </p>
      <p className={styles.insightDecisionLine}>
        <strong>Decision.</strong> {decision}
      </p>
      <p className={styles.insightDecisionLine}>
        <strong>Why.</strong> {why}
      </p>
    </li>
  );
}

function DesignDimensionCard({
  icon,
  title,
  body,
}: {
  icon: "brand" | "scene" | "function";
  title: string;
  body: string;
}) {
  return (
    <li>
      <span className={styles.featureIcon}>
        <DesignDimensionIcon type={icon} />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

function ProblemStatementText({ segments }: { segments: typeof mayocopyProblemStatement }) {
  return (
    <p className={styles.problemStatementText}>
      {segments.map((segment, index) =>
        "bold" in segment && segment.bold ? (
          <strong key={index}>{segment.text}</strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function ProblemStatCard({
  stat,
  title,
  body,
}: {
  stat: string;
  title: string;
  body: string;
}) {
  return (
    <li className={`${styles.problemCard} ${styles.problemCardWithStat} ${styles.problemCardAutoHeight}`}>
      <div className={styles.problemCardTitleGroup}>
        <strong className={styles.problemCardStat}>{stat}</strong>
        <h3 className={styles.problemCardTitle}>{title}</h3>
      </div>
      <p className={styles.problemCardBody}>{body}</p>
    </li>
  );
}

function ProblemTextCard({
  title,
  body,
  filled = false,
}: {
  title: string;
  body: string;
  filled?: boolean;
}) {
  return (
    <li
      className={`${styles.problemCard} ${styles.problemCardNoStat} ${styles.problemCardAutoHeight}${
        filled ? ` ${styles.problemCardFilled}` : ""
      }`}
    >
      <div className={styles.problemCardTitleGroup}>
        <h3 className={styles.problemCardTitle}>{title}</h3>
      </div>
      <p className={styles.problemCardBody}>{body}</p>
    </li>
  );
}

function RubricTable({
  rubric,
  showIntro = true,
}: {
  rubric: typeof mayocopyEvaluationRubric;
  showIntro?: boolean;
}) {
  return (
    <div className={styles.rubricWrap}>
      {showIntro ? <p className={styles.rubricIntro}>{rubric.intro}</p> : null}
      <div className={styles.rubricTableWrap}>
        <table className={styles.rubricTable}>
          <thead>
            <tr>
              <th scope="col">Module</th>
              <th scope="col">Parameter</th>
              <th scope="col">Threshold</th>
            </tr>
          </thead>
          <tbody>
            {rubric.modules.map((module) =>
              module.parameters.map((parameter, index) => (
                <tr key={`${module.id}-${parameter.name}`}>
                  {index === 0 ? (
                    <th scope="rowgroup" rowSpan={module.parameters.length} className={styles.rubricModuleCell}>
                      {module.label}
                    </th>
                  ) : null}
                  <th scope="row">{parameter.name}</th>
                  <td>{parameter.threshold}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TextMediaRow({
  title,
  body,
  fields,
  image,
  imageSide = "left",
  variant = "default",
}: {
  title?: string;
  body?: string | readonly string[];
  fields?: readonly { label: string; value: string }[];
  image: {
    src?: string;
    videoSrc?: string;
    clipStart?: number;
    clipEnd?: number;
    alt: string;
    width: number;
    height: number;
    credit?: string;
    objectPosition?: string;
  };
  imageSide?: "left" | "right";
  variant?: "default" | "industry" | "stage" | "panel";
}) {
  const hasCopy = Boolean(title || body || fields?.length);
  const isReverse = imageSide === "right";
  const bodyParagraphs = Array.isArray(body) ? body : body ? [body] : [];

  return (
    <article
      className={`${styles.researchMediaRow}${
        isReverse ? ` ${styles.researchMediaRowReverse}` : ""
      }${variant === "industry" ? ` ${styles.researchMediaRowIndustry}` : ""}${
        variant === "stage" ? ` ${styles.researchMediaRowStage}` : ""
      }${variant === "panel" ? ` ${styles.researchMediaRowPanel}` : ""}`}
    >
      <figure className={styles.researchMediaFigure}>
        {image.videoSrc ? (
          <CaseAutoplayVideo
            src={image.videoSrc}
            alt={image.alt}
            className={styles.researchMediaImage}
            clipStart={image.clipStart}
            clipEnd={image.clipEnd}
          />
        ) : image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={styles.researchMediaImage}
            style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
            sizes="(max-width: 760px) 100vw, 511px"
          />
        ) : null}
        {image.credit ? (
          <figcaption className={styles.researchMediaCaption}>{image.credit}</figcaption>
        ) : null}
      </figure>
      {hasCopy ? (
        <div className={styles.researchMediaCopy}>
          {title ? <h4>{title}</h4> : null}
          {fields?.length ? (
            <dl className={styles.researchMediaFields}>
              {fields.map((field) => (
                <div key={field.label} className={styles.researchMediaFieldGroup}>
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {bodyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function mediaRowSide(base: "left" | "right", row: number): "left" | "right" {
  const isEven = row % 2 === 0;
  return base === "left" ? (isEven ? "left" : "right") : isEven ? "right" : "left";
}

function decisionMatrixColumnClass(column: {
  id: string;
  verdict?: "selected" | "rejected";
}) {
  const classes: string[] = [];

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

function DecisionDirection({ title, body }: { title: string; body: string }) {
  return (
    <article className={styles.decisionDirection}>
      <h4>{title}</h4>
      <p>{body}</p>
    </article>
  );
}

function DecisionMatrixTable({ matrix }: { matrix: typeof mayocopyDecisionMatrix }) {
  const { columns, criteria } = matrix;

  return (
    <div className={styles.decisionMatrixWrap}>
      <table className={styles.decisionMatrix}>
        <thead>
          <tr>
            <th scope="col" className={styles.decisionMatrixCorner} />
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className={`${styles.decisionMatrixColHead} ${decisionMatrixColumnClass(column)}`}
              >
                <span className={styles.decisionMatrixColTitle}>{column.shortLabel}</span>
                <span
                  className={`${styles.decisionVerdict} ${
                    column.verdict === "selected"
                      ? styles.decisionVerdictSelected
                      : styles.decisionVerdictRejected
                  }`}
                >
                  {column.verdict === "selected" ? "Selected" : "Rejected"}
                </span>
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
                className={`${styles.decisionMatrixDescCell} ${decisionMatrixColumnClass(column)}`}
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
                const cell = criterion.values[column.id as keyof typeof criterion.values];
                const columnClass = decisionMatrixColumnClass(column);

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
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div className={`${styles.flowArrow}${className ? ` ${className}` : ""}`} aria-hidden="true">
      <span className={styles.flowArrowLine} />
      <span className={styles.flowArrowHead} />
    </div>
  );
}

function FlowNode({
  title,
  subtitle,
  variant = "entry",
}: {
  title: string;
  subtitle?: string;
  variant?: "entry" | "stage" | "assessment" | "result" | "highlight";
}) {
  return (
    <div
      className={`${styles.flowNode} ${
        variant === "stage"
          ? styles.flowNodeStage
          : variant === "assessment"
            ? styles.flowNodeAssessment
            : variant === "result"
              ? styles.flowNodeResult
              : variant === "highlight"
                ? styles.flowNodeHighlight
                : styles.flowNodeEntry
      }`}
    >
      <p className={styles.flowNodeTitle}>{title}</p>
      {subtitle ? <p className={styles.flowNodeSubtitle}>{subtitle}</p> : null}
    </div>
  );
}

function UserFlowArrow() {
  return (
    <div className={styles.userFlowArrow} aria-hidden="true">
      <svg viewBox="0 0 16 32" className={styles.userFlowArrowSvg}>
        <line x1="8" y1="2" x2="8" y2="24" className={styles.userFlowArrowShaft} />
        <polygon points="8,30 3,22 13,22" className={styles.userFlowArrowHead} />
      </svg>
    </div>
  );
}

function MayoUserFlowDiagram({ diagram }: { diagram: typeof mayocopyUserFlowDiagram }) {
  const stage4Index = diagram.stages.length - 1;
  const bypassTargetY = 118 + stage4Index * 104;

  return (
    <figure className={styles.userFlowDiagram} aria-label="Certification user flow diagram">
      <div className={styles.userFlowCanvas}>
        <div className={styles.userFlowStack}>
          <FlowNode title={diagram.greeting} />
          <UserFlowArrow />
          <div className={styles.userFlowDecisionBlock}>
            <FlowNode
              title={diagram.decision.title}
              subtitle={diagram.decision.subtitle}
              variant="highlight"
            />
            <div className={styles.userFlowBranchRow}>
              <span className={styles.userFlowBranchNo}>{diagram.decision.noLabel}</span>
              <span className={styles.userFlowBranchYes}>{diagram.decision.yesLabel}</span>
            </div>
          </div>
          <UserFlowArrow />
          <div className={styles.userFlowStageZone}>
            <svg
              className={styles.userFlowBypassSvg}
              viewBox="0 0 88 520"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="mayoUserFlowArrowHead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <polygon points="0 0, 8 4, 0 8" className={styles.userFlowBypassArrowHead} />
                </marker>
              </defs>
              <path
                d={`M 10 28 H 70 V ${bypassTargetY} H 18`}
                className={styles.userFlowBypassPath}
                markerEnd="url(#mayoUserFlowArrowHead)"
              />
            </svg>
            <div className={styles.userFlowStageList}>
              {diagram.stages.map((stage, index) => (
                <div key={stage.title} className={styles.userFlowStageItem}>
                  <FlowNode
                    title={stage.title}
                    subtitle={stage.subtitle}
                    variant="stage"
                  />
                  {index < diagram.stages.length - 1 ? <UserFlowArrow /> : null}
                </div>
              ))}
            </div>
          </div>
          <UserFlowArrow />
          <FlowNode
            title={diagram.startTest.title}
            subtitle={diagram.startTest.subtitle}
            variant="highlight"
          />
          <UserFlowArrow />
          <FlowNode
            title={diagram.chooseAssessment.title}
            subtitle={diagram.chooseAssessment.subtitle}
            variant="assessment"
          />
          <UserFlowArrow />
          <FlowNode
            title={diagram.assessmentResult.title}
            subtitle={diagram.assessmentResult.subtitle}
            variant="result"
          />
        </div>
      </div>
    </figure>
  );
}

function FlowSectionFigure({
  image,
}: {
  image: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <figure className={styles.userFlowFigure}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={styles.userFlowFigureImage}
        sizes="(max-width: 760px) 100vw, 884px"
      />
    </figure>
  );
}

function TimeEfficiencySection({
  lead,
  comparisons,
}: {
  lead: string;
  comparisons: typeof mayocopyImpactTimeEfficiency.comparisons;
}) {
  return (
    <ContentStack className={styles.timeEfficiencySection}>
      <SectionLeadText>{lead}</SectionLeadText>
      <ul className={styles.timeEfficiencyCompare}>
        {comparisons.map((item) => (
          <li key={item.id} className={styles.timeEfficiencyCompareCol}>
            <article
              className={`${styles.timeEfficiencyCompareItem}${
                item.id === "result"
                  ? ` ${styles.timeEfficiencyCompareItemFilled} ${styles.timeEfficiencyCompareItemFeatured}`
                  : ` ${styles.timeEfficiencyCompareItemOutlined}`
              }`}
            >
              <p className={styles.timeEfficiencyCompareLabel}>{item.label}</p>
              <p className={styles.timeEfficiencyCompareValue}>{item.value}</p>
              {"detail" in item && item.detail ? (
                <p className={styles.timeEfficiencyCompareDetail}>{item.detail}</p>
              ) : null}
            </article>
            <p className={styles.timeEfficiencyCompareBody}>{item.body}</p>
          </li>
        ))}
      </ul>
    </ContentStack>
  );
}

function SuccessCriteriaCards({
  intro,
  items,
}: {
  intro: string;
  items: typeof mayocopySuccessCriteriaRevisited.items;
}) {
  return (
    <div className={styles.successCriteriaWrap}>
      <SectionLeadText>{intro}</SectionLeadText>
      <ul className={styles.successCriteriaGrid}>
        {items.map((item) => (
          <li key={item.id} className={`${styles.successCriteriaCard} ${styles.successCriteriaCardFilled}`}>
            <h3 className={styles.successCriteriaCardTitle}>{item.label}</h3>
            <p className={styles.successCriteriaCardBody}>
              <strong>Target.</strong> {item.target}
            </p>
            <p className={styles.successCriteriaCardBody}>
              <strong>Outcome.</strong> {item.outcome}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImpactTrustSection({
  quotes,
  summary,
  photos,
}: {
  quotes: typeof mayocopyImpactTrust.quotes;
  summary: string;
  photos: typeof mayocopyImpactTrust.photos;
}) {
  return (
    <ContentStack className={styles.impactTrustSection}>
      <div className={styles.impactTrustQuotes}>
        {quotes.map((item) => (
          <QuoteCard key={item.cite} cite={item.cite} tail={item.tail}>
            {item.quote}
          </QuoteCard>
        ))}
      </div>
      <SectionLeadText>{summary}</SectionLeadText>
      <div className={styles.impactTrustPhotos}>
        {photos.map((photo) => (
          <figure key={photo.src} className={styles.fieldPhotoFigure}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className={styles.fieldPhotoImage}
              sizes="(max-width: 760px) 100vw, 442px"
            />
            {photo.caption ? (
              <figcaption className={styles.fieldPhotoCaption}>{photo.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </ContentStack>
  );
}

function LimitationGrid({
  items,
}: {
  items: typeof mayocopyLimitations;
}) {
  return (
    <div className={styles.limitationGrid}>
      {items.map((item, index) => (
        <article key={item.id} className={styles.limitationCard}>
          <span className={styles.limitationIndex}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className={styles.limitationContent}>
            <h4 className={styles.limitationTitle}>{item.title}</h4>
            <p className={styles.limitationBody}>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function WhatsNextGrid({
  items,
}: {
  items: typeof mayocopyWhatsNext;
}) {
  return (
    <div className={styles.whatsNextGrid}>
      {items.map((item, index) => (
        <article key={item.id} className={styles.whatsNextCard}>
          <span className={styles.whatsNextIndex}>{String(index + 1).padStart(2, "0")}</span>
          <h4 className={styles.whatsNextTitle}>{item.title}</h4>
          <p className={styles.whatsNextBody}>{item.body}</p>
        </article>
      ))}
    </div>
  );
}


function FinalConceptVideo({
  video,
}: {
  video: { videoId: string; title: string };
}) {
  return (
    <figure className={styles.finalConceptVideo}>
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=0&playsinline=1`}
        title={video.title}
        className={styles.finalConceptVideoPlayer}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </figure>
  );
}

function CopySubsections({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className={styles.researchMediaCopy}>
      {items.map((item) => (
        <div key={item.title} className={styles.researchMediaCopyBlock}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function MayoSensorFlowDiagram({
  diagram,
}: {
  diagram: typeof mayocopySensorToScreen.diagram;
}) {
  return (
    <figure
      className={styles.sensorFlowDiagram}
      aria-label="Sensing chain from candidate action to evaluator report"
    >
      <div className={styles.sensorFlowStack}>
        <div className={styles.sensorFlowSingle}>
          <FlowNode title={diagram.source.title} subtitle={diagram.source.subtitle} />
        </div>
        <UserFlowArrow />
        <div className={styles.sensorFlowPair}>
          {diagram.sensors.map((sensor) => (
            <FlowNode
              key={sensor.title}
              title={sensor.title}
              subtitle={sensor.subtitle}
            />
          ))}
        </div>
        <UserFlowArrow />
        <div className={styles.sensorFlowSingle}>
          <FlowNode
            title={diagram.evaluation.title}
            subtitle={diagram.evaluation.subtitle}
          />
        </div>
        <UserFlowArrow />
        <div className={styles.sensorFlowSingle}>
          <FlowNode title={diagram.verdict.title} />
        </div>
        <UserFlowArrow />
        <div className={styles.sensorFlowPair}>
          {diagram.outputs.map((output) => (
            <FlowNode
              key={output.title}
              title={output.title}
              subtitle={output.subtitle}
              variant={output.variant}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}

function SensorToScreenSection({
  sections,
  image,
  diagram,
}: {
  sections: typeof mayocopySensorToScreen.sections;
  image: typeof mayocopySensorToScreen.hardware;
  diagram: typeof mayocopySensorToScreen.diagram;
}) {
  return (
    <ContentStack className={styles.industryResearchStack}>
      <div className={styles.testingRoundCardRow}>
        {sections.map((section) => (
          <TestingRoundHighlightCard
            key={section.title}
            label={section.title}
            body={section.body}
          />
        ))}
      </div>
      <figure className={styles.researchTrackHero}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.researchTrackHeroImage}
          sizes="(max-width: 900px) 100vw, min(1069px, 100vw)"
        />
        {image.caption ? (
          <figcaption className={styles.conceptHeroCredit}>{image.caption}</figcaption>
        ) : null}
      </figure>
      <MayoSensorFlowDiagram diagram={diagram} />
    </ContentStack>
  );
}

function ResearchCardGrid({
  sections,
}: {
  sections: readonly {
    title: string;
    body: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
      credit?: string;
      objectPosition?: string;
    };
  }[];
}) {
  return (
    <ul className={styles.industryResearchGrid}>
      {sections.map((section) => (
        <li key={section.title} className={styles.industryResearchCard}>
          <figure className={styles.industryResearchCardFigure}>
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className={styles.industryResearchCardImage}
              style={
                section.image.objectPosition
                  ? { objectPosition: section.image.objectPosition }
                  : undefined
              }
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            {section.image.credit ? (
              <figcaption className={styles.industryResearchCardCredit}>
                {section.image.credit}
              </figcaption>
            ) : null}
          </figure>
          <TestingRoundHighlightCard label={section.title} body={section.body} />
        </li>
      ))}
    </ul>
  );
}

function TestingRoundTextCard({ label, body }: { label: string; body: string }) {
  return (
    <article className={styles.testingRoundCard}>
      <h4 className={styles.testingRoundLabel}>{label}</h4>
      <p className={styles.testingRoundBody}>{body}</p>
    </article>
  );
}

function TestingRoundHighlightCard({ label, body }: { label: string; body: string }) {
  return (
    <article className={styles.testingRoundHighlightCard}>
      <h4 className={styles.testingRoundHighlightLabel}>{label}</h4>
      <p className={styles.testingRoundHighlightBody}>{body}</p>
    </article>
  );
}

function UsabilityTestingRound({
  round,
}: {
  round: typeof mayocopyUsabilityRound1 | typeof mayocopyUsabilityRound2;
}) {
  const methodologyImage =
    "methodologyImage" in round ? round.methodologyImage : undefined;

  return (
    <ContentStack className={styles.usabilityTestingRound}>
      <div className={styles.testingRoundCardRow}>
        <TestingRoundTextCard label="Purpose" body={round.purpose} />
        <TestingRoundTextCard label="Methodology" body={round.methodology} />
      </div>
      {methodologyImage ? (
        <figure className={styles.testingRoundFullWidthFigure}>
          <Image
            src={methodologyImage.src}
            alt={methodologyImage.alt}
            width={methodologyImage.width}
            height={methodologyImage.height}
            className={styles.testingRoundFullWidthImage}
            sizes="(max-width: 760px) 100vw, 884px"
          />
          {"caption" in methodologyImage && methodologyImage.caption ? (
            <figcaption className={styles.fieldPhotoCaption}>{methodologyImage.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
      <div className={styles.testingRoundCardRow}>
        <TestingRoundHighlightCard label="Findings" body={round.findings} />
        <TestingRoundHighlightCard label="Changes" body={round.changes} />
      </div>
      <FlowSectionFigure image={round.changesImage} />
    </ContentStack>
  );
}

function FieldPhotoFigure({
  photo,
}: {
  photo: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  };
}) {
  return (
    <figure className={styles.fieldPhotoFigure}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className={styles.fieldPhotoImage}
        sizes="(max-width: 760px) 100vw, 884px"
      />
      {photo.caption ? (
        <figcaption className={styles.fieldPhotoCaption}>{photo.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function FieldVideoFigure({
  media,
}: {
  media: {
    videoSrc: string;
    alt: string;
    width: number;
    height: number;
  };
}) {
  return (
    <figure className={styles.fieldPhotoFigure}>
      <CaseAutoplayVideo
        src={media.videoSrc}
        alt={media.alt}
        className={styles.fieldPhotoImage}
      />
    </figure>
  );
}

function EmphasisQuote({
  children,
  attribution,
}: {
  children: string;
  attribution?: string;
}) {
  return (
    <figure className={styles.emphasisQuote}>
      {attribution ? (
        <figcaption className={styles.emphasisQuoteAttribution}>{attribution}</figcaption>
      ) : null}
      <div className={styles.emphasisQuoteBody}>
        <span className={styles.emphasisQuoteMark} aria-hidden="true">
          “
        </span>
        <blockquote className={styles.emphasisQuoteText}>
          <p>{children}</p>
        </blockquote>
        <span className={styles.emphasisQuoteMark} aria-hidden="true">
          ”
        </span>
      </div>
    </figure>
  );
}

function OpeningMediaStack({
  items,
}: {
  items: typeof mayocopyOpeningMedia;
}) {
  return (
    <ContentStack className={styles.openingMediaStack}>
      {items.map((item) => {
        const key = item.type === "video" ? item.videoSrc : item.src;
        return (
          <figure key={key} className={styles.openingMediaFigure}>
            {item.type === "video" ? (
              <CaseAutoplayVideo
                src={item.videoSrc}
                alt={item.alt}
                className={styles.openingMediaAsset}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={styles.openingMediaAsset}
                sizes="(max-width: 900px) 100vw, min(1069px, 100vw)"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            )}
            {item.overlay ? (
              <dl className={styles.openingMediaOverlay}>
                <div className={styles.openingMediaOverlayItem}>
                  <dt>{item.overlay.label}</dt>
                  <dd>{item.overlay.value}</dd>
                </div>
              </dl>
            ) : null}
          </figure>
        );
      })}
    </ContentStack>
  );
}

export default function MayoCopyPage({ withSiteHero = false }: { withSiteHero?: boolean }) {
  return (
    <div className={`${styles.page}${withSiteHero ? ` ${styles.pageWithSiteHero}` : ""}`}>
      <main className={styles.artboard}>
        <OpeningMediaStack items={mayocopyOpeningMedia} />

        <ChapterSection id="mayocopy-ch01-overview" index="01" title="My Role">
          <RoleCardsGrid cards={mayocopyMyRoleCards} />
        </ChapterSection>

        <ChapterSection id="mayocopy-ch02-problem" index="02" title="Problem">
          <H2Section id="mayocopy-client-brief" title="Client-Provided Brief">
            <ContentStack>
              <EmphasisQuote>{mayocopyClientBrief.quote}</EmphasisQuote>
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-defined-problem" title="Defined Problem">
            <ContentStack className={styles.industryResearchStack}>
              <div className={styles.blsIntroLead}>
                <h3 className={styles.blsIntroTitle}>{mayocopyBlsIntro.title}</h3>
                <p className={styles.blsIntroBody}>{mayocopyBlsIntro.body}</p>
              </div>
              <figure className={styles.blsIntroFigure}>
                <Image
                  src={mayocopyBlsIntro.image.src}
                  alt={mayocopyBlsIntro.image.alt}
                  width={mayocopyBlsIntro.image.width}
                  height={mayocopyBlsIntro.image.height}
                  className={styles.blsIntroImage}
                  sizes="100vw"
                />
              </figure>
              <ul className={styles.problemGrid}>
                {mayocopyDefinedProblems.map((problem) => (
                  <li
                    key={problem.stat}
                    className={`${styles.problemCard} ${styles.problemCardWithStat}`}
                  >
                    <div className={styles.problemCardTitleGroup}>
                      <strong className={styles.problemCardStat}>{problem.stat}</strong>
                      <h3 className={styles.problemCardTitle}>{problem.title}</h3>
                    </div>
                    <p className={styles.problemCardBody}>{problem.body}</p>
                  </li>
                ))}
              </ul>
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-problem-statement" title="Problem Statement">
            <ProblemStatementText segments={mayocopyProblemStatement} />
          </H2Section>

          <H2Section id="mayocopy-primary-research" title="Primary Research">
            <ContentStack>
              <SectionLeadText>{mayocopyPrimaryResearchIntro}</SectionLeadText>
              {mayocopyPrimaryResearchTracks.map((track) => (
                <PrimaryResearchTrack key={track.id} {...track} />
              ))}
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-primary-insight" title="Primary Research Insight">
            <ContentStack className={styles.industryResearchStack}>
              <FlowSectionFigure image={mayocopyResearchNote} />
              <p className={styles.painPointsLabel}>Three Pain Points</p>
              <ul className={styles.problemGrid}>
                {mayocopyPrimaryPainPoints.map((point, index) => (
                  <ProblemStatCard
                    key={point.title}
                    stat={String(index + 1)}
                    title={point.title}
                    body={point.body}
                  />
                ))}
              </ul>
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-industry-research" title="Industry Research">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyIndustryResearchIntro}</SectionLeadText>
              <ResearchCardGrid sections={mayocopyIndustryResearchSections} />
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch03-opportunity" index="03" title="Opportunity Statement">
          <H2Section id="mayocopy-decision-matrix" title="Decision Matrix">
            <ContentStack>
              <SectionLeadText>{mayocopyDecisionMatrixIntro}</SectionLeadText>
              <DecisionMatrixTable matrix={mayocopyDecisionMatrix} />
            </ContentStack>
          </H2Section>
          <H2Section id="mayocopy-concept" title="Concept">
            <ContentStack className={styles.industryResearchStack}>
              <p className={styles.conceptLead}>{mayocopyConcept.lead}</p>
              <figure className={styles.researchTrackHero}>
                <Image
                  src={mayocopyConceptFigure.src}
                  alt={mayocopyConceptFigure.alt}
                  width={mayocopyConceptFigure.width}
                  height={mayocopyConceptFigure.height}
                  className={styles.researchTrackHeroImage}
                  sizes="(max-width: 900px) 100vw, min(1069px, 100vw)"
                />
                <dl className={styles.conceptPointsRow}>
                  {mayocopyConcept.points.map((point) => (
                    <div key={point.label} className={styles.conceptPoint}>
                      <dt>{point.label}</dt>
                      <dd>{point.value}</dd>
                    </div>
                  ))}
                </dl>
                {mayocopyConceptFigure.credit ? (
                  <figcaption className={styles.conceptHeroCredit}>
                    {mayocopyConceptFigure.credit}
                  </figcaption>
                ) : null}
              </figure>
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch04-solution-research" index="04" title="Solution Research">
          <H2Section id="mayocopy-visual-research" title="Visual Research">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyVisualResearchIntro}</SectionLeadText>
              <ResearchCardGrid sections={mayocopyVisualResearchSections} />
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-technical-research" title="Technical Research">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyTechnicalResearchIntro}</SectionLeadText>
              <ResearchCardGrid sections={mayocopyTechnicalResearchSections} />
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-overall-insight" title="Overall Insight">
            <ContentStack>
              <SectionLeadText>{mayocopyOverallInsightIntro}</SectionLeadText>
              <ul className={styles.insightDecisionGrid}>
                {mayocopyOverallInsightCards.map((card) => (
                  <InsightDecisionCard key={card.insight} {...card} />
                ))}
              </ul>
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch05-design-decisions" index="05" title="Design Decisions">
          <H2Section id="mayocopy-research-build" title="Research → Build">
            <ContentStack>
              <ul className={`${styles.problemGrid} ${styles.problemGridThree}`}>
                {mayocopyResearchBuildCards.map((card) => (
                  <ProblemTextCard key={card.title} title={card.title} body={card.body} filled />
                ))}
              </ul>
            </ContentStack>
          </H2Section>
          <H2Section id="mayocopy-three-design-dimensions" title="Three Design Dimensions">
            <ContentStack>
              <ul className={styles.featureGrid}>
                {mayocopyDesignDimensions.map((dimension) => (
                  <DesignDimensionCard
                    key={dimension.id}
                    icon={dimension.icon}
                    title={dimension.title}
                    body={dimension.body}
                  />
                ))}
              </ul>
            </ContentStack>
          </H2Section>
          <H2Section id="mayocopy-main-features" title="Main Features">
            <ContentStack className={styles.industryResearchStack}>
              <ResearchCardGrid sections={mayocopyMainFeatures} />
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch06-user-flow" index="06" title="User Flow & Wireframes">
          <H2Section id="mayocopy-user-flow" title="User Flow">
            <ContentStack className={styles.userFlowSection}>
              <SectionLeadText>{mayocopyUserFlow.intro}</SectionLeadText>
              <FlowSectionFigure image={mayocopyUserFlow.figure} />
              <MayoUserFlowDiagram diagram={mayocopyUserFlowDiagram} />
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-user-flow-onboarding" title="Onboarding">
            <ContentStack className={styles.industryResearchStack}>
              <EmphasisQuote>{mayocopyUserFlowOnboarding.prompt}</EmphasisQuote>
              <SectionLeadText>{mayocopyUserFlowOnboarding.body}</SectionLeadText>
              <SectionLeadText>{mayocopyUserFlowOnboarding.retryNote}</SectionLeadText>
              <FlowSectionFigure image={mayocopyUserFlowOnboarding.image} />
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-user-flow-assessment" title="Assessment">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyUserFlowAssessment.body}</SectionLeadText>
              <FlowSectionFigure image={mayocopyUserFlowAssessment.image} />
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-user-flow-evaluation" title="Evaluation">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyUserFlowEvaluation.body}</SectionLeadText>
              <FlowSectionFigure image={mayocopyUserFlowEvaluation.image} />
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection
          id="mayocopy-ch07-onboarding"
          index="07"
          title="Onboarding"
          subtitle={mayocopyOnboardingIntro}
        >
          <ContentStack className={styles.industryResearchStack}>
            {mayocopyOnboardingOpening.map((image) =>
              "overlay" in image && image.overlay ? (
                <figure key={image.src} className={styles.researchTrackHero}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={styles.researchTrackHeroImage}
                    sizes="(max-width: 900px) 100vw, min(1069px, 100vw)"
                  />
                  <dl className={styles.researchTrackHeroMeta}>
                    <div className={styles.researchTrackHeroMetaItem}>
                      <dt>{image.overlay.label}</dt>
                      <dd>{image.overlay.value}</dd>
                    </div>
                  </dl>
                </figure>
              ) : (
                <FlowSectionFigure key={image.src} image={image} />
              ),
            )}
          </ContentStack>

          <H2Section id="mayocopy-four-progressive-stages" title="Four Progressive Stages">
            <ContentStack className={styles.industryResearchStack}>
              {mayocopyOnboardingStages.stages.map((stage, index) => (
                <TextMediaRow
                  key={stage.title}
                  title={stage.title}
                  body={stage.body}
                  image={stage.image}
                  imageSide={mediaRowSide("left", index)}
                  variant="panel"
                />
              ))}
              <TextMediaRow
                title={mayocopyOnboardingStages.pauseCheck.title}
                body={mayocopyOnboardingStages.pauseCheck.body}
                image={mayocopyOnboardingStages.pauseCheck.image}
                imageSide={mediaRowSide("left", mayocopyOnboardingStages.stages.length)}
                variant="panel"
              />
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch08-evaluation" index="08" title="Evaluation System">
          <H2Section id="mayocopy-evaluation-framework" title="Evaluation Framework">
            <FlowSectionFigure image={mayocopyEvaluationFramework.image} />
          </H2Section>

          <H2Section id="mayocopy-sensor-to-screen" title="From Sensor to Screen">
            <SensorToScreenSection
              sections={mayocopySensorToScreen.sections}
              image={mayocopySensorToScreen.hardware}
              diagram={mayocopySensorToScreen.diagram}
            />
          </H2Section>

          <H2Section id="mayocopy-report-interface" title="Report Interface">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyEvaluationReport.body}</SectionLeadText>
              {mayocopyEvaluationReport.images.map((image) => (
                <FlowSectionFigure key={image.src} image={image} />
              ))}
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch09-usability-testing" index="09" title="Usability Testing">
          <SectionLeadText>{mayocopyUsabilityTestingIntro}</SectionLeadText>
          <H2Section id="mayocopy-round-1" title="Round 1 — Internal Readability Testing">
            <UsabilityTestingRound round={mayocopyUsabilityRound1} />
          </H2Section>

          <H2Section id="mayocopy-round-2" title="Round 2 — On-Site at Mayo Clinic Jacksonville">
            <UsabilityTestingRound round={mayocopyUsabilityRound2} />
          </H2Section>

          <H2Section id="mayocopy-cross-functional" title="Cross-Functional Alignment">
            <ContentStack className={styles.industryResearchStack}>
              <SubsectionLead
                title={mayocopyCrossFunctionalIntro.title}
                body={mayocopyCrossFunctionalIntro.body}
              />
              {mayocopyCrossFunctionalItems.map((item, index) => (
                <TextMediaRow
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  image={item.image}
                  imageSide={mediaRowSide("left", index)}
                  variant="industry"
                />
              ))}
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch10-final-ui" index="10" title="Final UI">
          <H2Section id="mayocopy-final-ui" title="Final UI">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyFinalUI.intro}</SectionLeadText>
              {mayocopyFinalUI.screens.map((screen) => (
                <article key={screen.id} className={styles.wireframeGroup}>
                  <h4 className={styles.wireframeGroupTitle}>{screen.label}</h4>
                  <FlowSectionFigure image={screen.image} />
                </article>
              ))}
            </ContentStack>
          </H2Section>

          <H2Section id="mayocopy-final-concept" title="Final Concept">
            <ContentStack className={styles.industryResearchStack}>
              <SectionLeadText>{mayocopyFinalConcept.body}</SectionLeadText>
              <FinalConceptVideo video={mayocopyFinalConcept.video} />
            </ContentStack>
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch11-impact" index="11" title="Impact">
          <SectionLeadText>{mayocopyImpactIntro}</SectionLeadText>
          <H2Section id="mayocopy-time-efficiency" title="Time Efficiency">
            <TimeEfficiencySection
              lead={mayocopyImpactTimeEfficiency.lead}
              comparisons={mayocopyImpactTimeEfficiency.comparisons}
            />
          </H2Section>

          <H2Section id="mayocopy-trust-experience" title="Trust & Experience">
            <ImpactTrustSection
              quotes={mayocopyImpactTrust.quotes}
              summary={mayocopyImpactTrust.summary}
              photos={mayocopyImpactTrust.photos}
            />
          </H2Section>

          <H2Section id="mayocopy-success-revisited" title="Success Criteria Revisited">
            <SuccessCriteriaCards
              intro={mayocopySuccessCriteriaRevisited.intro}
              items={mayocopySuccessCriteriaRevisited.items}
            />
          </H2Section>
        </ChapterSection>

        <ChapterSection id="mayocopy-ch12-reflection" index="12" title="Reflection">
          <H2Section id="mayocopy-limitations" title="Limitations">
            <LimitationGrid items={mayocopyLimitations} />
          </H2Section>
          <H2Section id="mayocopy-whats-next" title="What's Next">
            <WhatsNextGrid items={mayocopyWhatsNext} />
          </H2Section>
        </ChapterSection>
      </main>
    </div>
  );
}
