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
      <div className={styles.figureGrid}>
        <HorizonFigure
          src={horizonIntroduction.market.image}
          alt={horizonIntroduction.market.imageAlt}
          label={horizonIntroduction.market.label}
          caption={horizonIntroduction.market.text}
        />
        <HorizonFigure
          src={horizonIntroduction.horizon.image}
          alt={horizonIntroduction.horizon.imageAlt}
          label={horizonIntroduction.horizon.label}
          caption={horizonIntroduction.horizon.text}
        />
      </div>
    </CaseProseSection>
  );
}

export function HorizonGoalSection() {
  return (
    <section className="case-prose-section" id="horizon-goal">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Goal</h3>
        <div className={styles.goalGrid}>
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
        <HorizonFigure src={horizonGoal.image} alt={horizonGoal.imageAlt} />
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
              <span className="case-section-label">{source}</span>
              <p className="case-prose-body">{text}</p>
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
        {horizonDecisions.items.map(({ title, desc }) => (
          <article key={title} className={styles.decisionCard}>
            <h4 className="case-prose-subtitle">{title}</h4>
            <p className="case-prose-body">{desc}</p>
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
        <ol className={styles.flowList}>
          {horizonFlow.steps.map((step) => (
            <li key={step.id} className={styles.flowItem} id={step.id}>
              <span className={styles.flowLabel}>{step.label}</span>
              <span className={styles.flowDesc}>{step.desc}</span>
              {step.optional ? (
                <span className={styles.flowOptional}>Optional</span>
              ) : null}
            </li>
          ))}
        </ol>
        <HorizonFigure
          src={horizonMapImage.src}
          alt={horizonMapImage.alt}
          label="Mission Map"
          caption="Surface zones connect the station, shelter, and resource collection areas across the mission layout."
        />
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
        <p className="case-prose-body">{horizonInteraction.body}</p>
        {horizonInteraction.paragraphs.map((paragraph) => (
          <p className="case-prose-body" key={paragraph}>
            {paragraph}
          </p>
        ))}
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
        <h3 className="case-prose-title">Testing & Outlook</h3>
        <div className={styles.testingGrid}>
          <div>
            <h4 className="case-prose-subtitle">{horizonTesting.headline}</h4>
            <p className="case-prose-body">{horizonTesting.body}</p>
            <p className={`case-prose-body ${styles.testingOutcome}`}>
              {horizonTesting.outcome}
            </p>
          </div>
          <HorizonFigure
            src={horizonTesting.image}
            alt={horizonTesting.imageAlt}
          />
        </div>
        <div className={styles.futureList}>
          <span className="case-section-label">Future Directions</span>
          {horizonTesting.future.map(({ id, title, desc }) => (
            <article key={id} className={styles.futureItem} id={`horizon-future-${id}`}>
              <h4 className="case-prose-subtitle">{title}</h4>
              <p className="case-prose-body">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
