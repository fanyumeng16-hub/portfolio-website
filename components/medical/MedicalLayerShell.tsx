import type { ReactNode } from "react";
import styles from "./MedicalSections.module.css";

type Props = {
  index: string;
  label: string;
  purpose?: string;
  children: ReactNode;
  anchorId?: string;
  className?: string;
};

export function MedicalLayerShell({
  index,
  label,
  purpose,
  children,
  anchorId,
  className,
}: Props) {
  return (
    <div
      className={`${styles.medicalLayer}${className ? ` ${className}` : ""}`}
      id={anchorId}
    >
      <div className={styles.medicalLayerHead}>
        <span className={styles.medicalLayerIndex}>{index}</span>
        <h4 className={styles.medicalLayerLabel}>{label}</h4>
      </div>
      <div className={styles.medicalLayerBody}>
        {purpose ? <p className={styles.medicalLayerPurpose}>{purpose}</p> : null}
        {children}
      </div>
    </div>
  );
}
