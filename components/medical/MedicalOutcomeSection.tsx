import { medicalOutcome } from "@/data/medical-content";
import {
  MedicalOutcomeAccuracyComparison,
  MedicalOutcomeTimeComparison,
} from "./MedicalOutcomeComparison";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

export function MedicalOutcomeSection({ embedded }: { embedded?: boolean } = {}) {
  const { title, closing, qualitative } = medicalOutcome;

  const content = (
    <div className={styles.medicalLayers}>
      <MedicalLayerShell label="Time Efficiency" anchorId={embedded ? "mayo-outcome" : undefined}>
        <MedicalOutcomeTimeComparison />
      </MedicalLayerShell>

      <MedicalLayerShell label="Credentialing Accuracy">
        <MedicalOutcomeAccuracyComparison />
      </MedicalLayerShell>

      <MedicalLayerShell label="Trust & Experience">
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
  );

  if (embedded) {
    return content;
  }

  return (
    <MedicalSection id="mayo-outcome" title={title}>
      {content}
    </MedicalSection>
  );
}
