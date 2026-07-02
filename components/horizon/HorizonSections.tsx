import CaseProseSection from "@/components/CaseProseSection";
import HorizonFigure from "@/components/horizon/HorizonFigure";
import {
  horizonDecisions,
  horizonFlow,
  horizonGoal,
  horizonInteraction,
  horizonIntroduction,
  horizonMapImage,
  horizonResearch,
  horizonTesting,
  horizonUIComponents,
} from "@/data/horizon-sections";
import styles from "@/app/projects/horizon/horizon.module.css";

export function HorizonContextSection() {
  return (
    <CaseProseSection
      id="horizon-context"
      title={horizonIntroduction.headline}
      paragraphs={[horizonIntroduction.audience]}
    >
      <div className={styles.contextGrid}>
        {horizonIntroduction.highlights.map((item) => (
          <article className={styles.contextCard} key={item.stat}>
            <span className="case-section-label">{item.stat}</span>
            <h4 className={styles.contextLabel}>{item.label}</h4>
            <p className={styles.contextDesc}>{item.description}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.imageAlt}
              className={styles.contextImage}
              loading="lazy"
              decoding="async"
            />
          </article>
        ))}
      </div>
    </CaseProseSection>
  );
}

export function HorizonGoalSection() {
  return (
    <section className="case-prose-section" id="horizon-goal">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Goal</h3>
        <div className={styles.goalLayout}>
          <div className={styles.goalCopy}>
            <div className={styles.goalCell}>
              <span className="case-section-label">Problem</span>
              <p className="case-prose-body">
                {horizonGoal.problem.replace(horizonGoal.problemEmphasis, "")}
                <em className={styles.goalEmphasis}>
                  {horizonGoal.problemEmphasis}
                </em>
              </p>
            </div>
            <div className={styles.goalCell}>
              <span className="case-section-label">Goal</span>
              <p className="case-prose-body">
                {horizonGoal.goal.split(horizonGoal.goalHighlight)[0]}
                <span className={styles.goalHighlight}>
                  {horizonGoal.goalHighlight}
                </span>
                {horizonGoal.goal.split(horizonGoal.goalHighlight)[1]}
              </p>
            </div>
          </div>
          <div className={styles.goalMedia}>
            <HorizonFigure
              src={horizonGoal.image}
              alt={horizonGoal.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HorizonResearchSection() {
  return (
    <section className="case-prose-section" id="horizon-research">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{horizonResearch.headline}</h3>
        <ul className={styles.researchList}>
          {horizonResearch.insights.map(({ source, text }) => (
            <li key={source} className={styles.researchItem}>
              <blockquote className={styles.researchQuote}>
                <p>&ldquo;{text}&rdquo;</p>
                <footer className={styles.researchQuoteFooter}>
                  <cite className="case-section-label">{source}</cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HorizonDecisionsSection() {
  return (
    <CaseProseSection
      id="horizon-decisions"
      title="Design Decisions"
      paragraphs={[horizonDecisions.intro]}
    >
      <div className={styles.decisionsGrid}>
        {horizonDecisions.items.map((item) => (
          <article key={item.label} className={styles.decisionCard}>
            <span className="case-section-label">{item.label}</span>
            <h4 className={styles.decisionTitle}>{item.title}</h4>
            <p className="case-prose-body">{item.desc}</p>
          </article>
        ))}
      </div>
    </CaseProseSection>
  );
}

export function HorizonFlowSection() {
  return (
    <section className="case-prose-section" id="horizon-flow">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Experience Flow</h3>
        <p className="case-prose-body">{horizonFlow.intro}</p>
        <div className={styles.flowTimeline}>
          {horizonFlow.steps.map((step, index) => (
            <div key={step.id} className={styles.flowTimelineGroup}>
              <article className={styles.flowCard} id={step.id}>
                <div className={styles.flowCardHeader}>
                  <span className="case-section-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.optional ? (
                    <span className={styles.flowOptional}>Optional</span>
                  ) : null}
                </div>
                <h4 className={styles.flowCardTitle}>{step.label}</h4>
                <p className={styles.flowCardDesc}>{step.desc}</p>
              </article>
              <div
                className={`${styles.flowArrow} ${
                  index < horizonFlow.steps.length - 1
                    ? ""
                    : styles.flowArrowSpacer
                }`.trim()}
                aria-hidden="true"
              >
                <span className={styles.flowArrowIcon} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.flowMap}>
          <h4 className={`case-prose-subtitle ${styles.flowMapTitle}`}>
            Mission Map
          </h4>
          <p className={`case-prose-body ${styles.flowMapBody}`}>
            Surface zones connect the station, shelter, and resource collection
            areas across the mission layout.
          </p>
          <HorizonFigure
            src={horizonMapImage.src}
            alt={horizonMapImage.alt}
          />
        </div>
      </div>
    </section>
  );
}

export function HorizonUISection() {
  return (
    <section className="case-prose-section" id="horizon-ui">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">UI System</h3>
        <div className={styles.uiGrid}>
          {horizonUIComponents.map((component) => (
            <article
              key={component.id}
              className={styles.uiCard}
              id={`horizon-ui-${component.id}`}
            >
              <HorizonFigure
                src={component.image}
                alt={component.imageAlt}
              />
              <div className={styles.uiCardCopy}>
                <div className={styles.uiCardHeader}>
                  <h4 className="case-prose-subtitle">{component.title}</h4>
                  <span className="case-section-label">{component.tag}</span>
                </div>
                <p className="case-prose-body">{component.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HorizonInteractionSection() {
  return (
    <section className="case-prose-section" id="horizon-interaction">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{horizonInteraction.headline}</h3>
        <div className={styles.interactionGrid}>
          {horizonInteraction.points.map((point, index) => (
            <article className={styles.interactionCard} key={point.title}>
              <span className="case-section-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="case-section-label">{point.title}</span>
              <p className="case-prose-body">{point.text}</p>
            </article>
          ))}
        </div>
        <HorizonFigure
          src={horizonInteraction.image}
          alt={horizonInteraction.imageAlt}
        />
      </div>
    </section>
  );
}

export function HorizonTestingSection() {
  return (
    <section className="case-prose-section" id="horizon-testing">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Testing & Future</h3>

        <div className={styles.testingPlan}>
          <section className={styles.testingSection}>
            <h4 className="case-prose-subtitle">{horizonTesting.headline}</h4>
            <p className="case-prose-body">{horizonTesting.methodology}</p>
            <dl className={styles.testingMetaGrid}>
              {horizonTesting.meta.map((item) => (
                <div key={item.label} className={styles.testingMetaCell}>
                  <dt className="case-section-label">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.testingSection}>
            <h4 className={`case-prose-subtitle ${styles.testingSectionTitle}`}>
              Outcomes
            </h4>
            <div className={styles.testingOutcomeList}>
              {horizonTesting.findings.map((finding) => (
                <article key={finding.id} className={styles.testingOutcomeRow}>
                  <p className={styles.testingOutcomeValue}>{finding.value}</p>
                  <div className={styles.testingOutcomeCopy}>
                    <p className={styles.testingOutcomeLabel}>{finding.label}</p>
                    <p className="case-prose-body">{finding.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.testingSection}>
            <h4 className={`case-prose-subtitle ${styles.testingSectionTitle}`}>
              Participant Voice
            </h4>
            <blockquote className={styles.testingQuote}>
              <p className={styles.testingQuoteText}>
                &ldquo;{horizonTesting.quote.text}&rdquo;
              </p>
              <p className={styles.testingQuoteDetail}>
                {horizonTesting.quote.detail}
              </p>
            </blockquote>
          </section>

          <section className={styles.testingSection}>
            <h4 className="case-prose-subtitle">
              {horizonTesting.adjustments.headline}
            </h4>
            <p className="case-prose-body">{horizonTesting.adjustments.intro}</p>
            <div className={styles.adjustmentsCards}>
              {horizonTesting.adjustments.items.map((item, index) => (
                <article key={item.id} className={styles.adjustmentCard}>
                  <div className={styles.adjustmentCardHeader}>
                    <span className={styles.adjustmentCardIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h5 className={styles.adjustmentCardTitle}>{item.title}</h5>
                  </div>
                  <div className={styles.adjustmentCardRow}>
                    <span className={styles.adjustmentTag}>Finding</span>
                    <p className="case-prose-body">{item.finding}</p>
                  </div>
                  <div className={styles.adjustmentCardRow}>
                    <span className={styles.adjustmentTag}>Change</span>
                    <p className="case-prose-body">{item.change}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.futureSection}>
          <h4 className={`case-prose-subtitle ${styles.futureHeading}`}>
            Future Directions
          </h4>
          <div className={styles.futureGrid}>
            {horizonTesting.future.map(({ id, title, desc }) => (
              <article
                key={id}
                className={styles.futureCard}
                id={`horizon-future-${id}`}
              >
                <span className="case-section-label">{title}</span>
                <p className="case-prose-body">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
