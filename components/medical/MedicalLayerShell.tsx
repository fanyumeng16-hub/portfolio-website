import type { ReactNode } from "react";
import styles from "./MedicalSections.module.css";

type Props = {
  label: string;
  purpose?: string;
  children: ReactNode;
  anchorId?: string;
  className?: string;
  variant?: "default" | "panel" | "flush";
};

/** H2 subsection within a numbered chapter */
export function MedicalLayerShell({
  label,
  purpose,
  children,
  anchorId,
  className,
  variant = "default",
}: Props) {
  const layerClass = [
    styles.medicalLayer,
    variant === "flush" ? styles.medicalLayerFlush : "",
    variant === "panel" ? styles.medicalLayerPanelWrap : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={layerClass} id={anchorId}>
      <div className={styles.medicalLayerHead}>
        <h3 className={styles.medicalH2}>{label}</h3>
      </div>
      {variant === "panel" ? (
        <div className={styles.medicalLayerPanel}>
          <div className={styles.medicalLayerBody}>
            {purpose ? <p className={styles.medicalLayerPurpose}>{purpose}</p> : null}
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.medicalLayerBody}>
          {purpose ? <p className={styles.medicalLayerPurpose}>{purpose}</p> : null}
          {children}
        </div>
      )}
    </div>
  );
}

export function MedicalProse({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={`${styles.medicalProse}${className ? ` ${className}` : ""}`}>{children}</p>
  );
}

export function MedicalPlaceholder({ children }: { children: ReactNode }) {
  return <div className={styles.contentPlaceholder}>{children}</div>;
}

export function MedicalTrackLabel({ children }: { children: ReactNode }) {
  return <p className={styles.deepDiveTrackLabel}>{children}</p>;
}
