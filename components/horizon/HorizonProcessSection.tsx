import HorizonFigure from "@/components/horizon/HorizonFigure";
import { horizonProcessGroups } from "@/data/horizon-process";
import styles from "@/app/projects/horizon/horizon.module.css";

export default function HorizonProcessSection() {
  return (
    <section className="case-prose-section" id="horizon-process">
      <div className="case-prose-inner">
        <h3 className="case-prose-title">Development Process</h3>
        <p className="case-prose-body">
          From terrain blocking to station assembly and in-headset validation, the
          build moved through three linked pipelines before the final mission
          experience.
        </p>

        <div className={styles.processGroups}>
          {horizonProcessGroups.map((group) => (
            <section
              key={group.id}
              className={styles.processGroup}
              id={group.id}
            >
              <div className={styles.processGroupHeader}>
                <h4 className="case-prose-subtitle">{group.title}</h4>
                <p className="case-prose-body">{group.summary}</p>
              </div>

              <div
                className={`${styles.processGrid} ${
                  group.columns === 2
                    ? styles.processGridCols2
                    : group.columns === 3
                      ? styles.processGridCols3
                      : group.columns === 4
                        ? styles.processGridCols4
                        : ""
                }`.trim()}
              >
                {group.steps.map((step) => (
                  <article
                    key={step.id}
                    className={styles.processCard}
                    id={`${group.id}-${step.id}`}
                  >
                    <HorizonFigure
                      src={step.image}
                      alt={step.imageAlt}
                      label={step.title}
                      caption={step.caption}
                    />
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
