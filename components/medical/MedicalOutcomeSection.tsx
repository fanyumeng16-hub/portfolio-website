import { medicalOutcome } from "@/data/medical-content";
import {
  MedicalOutcomeAccuracyComparison,
  MedicalOutcomeTimeComparison,
} from "./MedicalOutcomeComparison";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export function MedicalOutcomeSection() {
  const { title, closing, qualitative } = medicalOutcome;

  return (
    <MedicalSection id="mayo-outcome" title={title}>
      <div className={styles.medicalLayers}>
        <MedicalLayerShell index="01" label="Time Efficiency">
          <MedicalOutcomeTimeComparison />
        </MedicalLayerShell>

        <MedicalLayerShell index="02" label="Credentialing Accuracy">
          <MedicalOutcomeAccuracyComparison />
        </MedicalLayerShell>

        <MedicalLayerShell index="03" label="Trust & Experience">
          <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols2}`}>
            {qualitative.map((item) => (
              <li className={`${styles.medicalCard} ${styles.medicalCardWide}`} key={item.label}>
                <h4 className={styles.medicalCardTitle}>{item.label}</h4>
                <p className={styles.medicalCardBody}>{item.body}</p>
              </li>
            ))}
          </ul>
          <p className={`case-prose-body ${styles.outcomeClosing}`}>{closing}</p>
        </MedicalLayerShell>
      </div>
    </MedicalSection>
  );
}
