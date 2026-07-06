import { medicalInsight } from "@/data/medical-content";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export function MedicalInsightSection() {
  const { title, intro, lead, rows } = medicalInsight;

  return (
    <MedicalSection id="mayo-insight" title={title} intro={intro}>
      <MedicalLayerShell index="01" label="Derived Directions">
        <p className={styles.insightCorrespondenceLead}>{lead}</p>

        <ul className={styles.insightCorrespondence} aria-label="Research to build direction map">
          {rows.map((row) => (
            <li className={styles.insightCorrespondenceRow} key={row.id}>
              <div className={styles.insightCorrespondenceTakeaway}>
                <span className={styles.insightCorrespondenceLabel}>Research</span>
                <span className={styles.insightCorrespondenceTakeawayTitle}>
                  {row.research}
                </span>
                <p className={styles.insightCorrespondenceNote}>{row.researchNote}</p>
              </div>
              <span className={styles.insightCorrespondenceArrow} aria-hidden="true">
                →
              </span>
              <div className={styles.insightCorrespondenceDirections}>
                {row.builds.map((build) => (
                  <a
                    className={styles.insightCorrespondenceDirection}
                    href={`#${build.anchorId}`}
                    key={build.id}
                  >
                    <span className={styles.insightCorrespondenceLabel}>Build</span>
                    <span className={styles.insightCorrespondenceDirectionTitle}>
                      <span className={styles.insightCorrespondenceOrder}>{build.order}</span>
                      {build.title}
                    </span>
                    <p className={styles.insightCorrespondenceNote}>{build.body}</p>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </MedicalLayerShell>
    </MedicalSection>
  );
}
