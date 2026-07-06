import { medicalEvaluatorComparison } from "@/data/medical-content";
import { MedicalFieldPhotoGrid } from "./MedicalFieldPhotoGrid";
import styles from "./MedicalSections.module.css";

export default function MedicalEvaluatorAlignment() {
  const { paragraphs, photos } = medicalEvaluatorComparison;

  return (
    <div className={styles.evaluatorValidationBlock}>
      <div className={styles.evaluatorValidationCopy}>
        {paragraphs.map((paragraph) => (
          <p className="case-prose-body" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      {photos?.length ? <MedicalFieldPhotoGrid photos={photos} /> : null}
    </div>
  );
}
