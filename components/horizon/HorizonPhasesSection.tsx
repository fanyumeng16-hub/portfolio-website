import HorizonFigure from "@/components/horizon/HorizonFigure";
import type { HorizonPhase } from "@/data/horizon-sections";
import styles from "@/app/projects/horizon/horizon.module.css";

type Props = {
  phases: HorizonPhase[];
};

export default function HorizonPhasesSection({ phases }: Props) {
  return (
    <section className="case-prose-section" id="horizon-phases">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Four Phases</h3>
        <div className={styles.phasesList}>
          {phases.map((phase) => (
            <article
              key={phase.n}
              id={`horizon-phase-${phase.n}`}
              className={styles.phaseItem}
            >
              <div className={styles.phaseHeader}>
                <span className="case-section-label">Phase {phase.n}</span>
                <h4 className="case-prose-subtitle">
                  {phase.title}
                  {phase.optional ? (
                    <span className={styles.phaseOptionalTag}>Optional</span>
                  ) : null}
                </h4>
              </div>

              <HorizonFigure src={phase.image} alt={phase.imageAlt} />

              <div className={styles.phasePanel}>
                {[
                  { label: "Objective", value: phase.objective },
                  { label: "Key Interaction", value: phase.interaction },
                  { label: "Environment", value: phase.environment },
                ].map(({ label, value }) => (
                  <div key={label} className={styles.phaseDetail}>
                    <span className="case-section-label">{label}</span>
                    <p className="case-prose-body">{value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
