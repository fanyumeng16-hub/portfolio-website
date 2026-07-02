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
        <div className={styles.phasesList}>
          {phases.map((phase) => (
            <article
              key={phase.n}
              id={`horizon-phase-${phase.n}`}
              className={styles.phaseItem}
            >
              <div className={styles.phaseHeader}>
                <h3 className="case-prose-subtitle">
                  {phase.title}
                  {phase.optional ? (
                    <span className={styles.phaseOptionalTag}>Optional</span>
                  ) : null}
                </h3>
              </div>

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

              <p className={`case-prose-body ${styles.phaseSummary}`}>
                {phase.summary}
              </p>

              <div
                className={`${styles.phaseGallery} ${
                  phase.images.length === 3
                    ? styles.phaseGalleryCols3
                    : styles.phaseGalleryCols2
                } ${phase.n === "03" ? styles.phaseGalleryUniform : ""}`}
              >
                {phase.images.map((image) => (
                  <HorizonFigure
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

