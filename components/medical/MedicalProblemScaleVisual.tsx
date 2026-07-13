import styles from "./MedicalProblemScaleVisual.module.css";

export type CounterpartType = "people" | "checklist";

export type ScaleVisualState = {
  headline?: string;
  evaluatorCount: number;
  evaluatorLabel: string;
  counterpartCount: number;
  counterpartLabel: string;
  counterpartType: CounterpartType;
  caption?: string;
};

function PersonIcon({ variant }: { variant: "evaluator" | "counterpart" }) {
  return (
    <span
      className={`${styles.person} ${
        variant === "evaluator" ? styles.personEvaluator : styles.personCounterpart
      }`}
      aria-hidden="true"
    >
      <span className={styles.personHead} />
      <span className={styles.personTorso} />
    </span>
  );
}

function ChecklistIcon() {
  return (
    <span className={styles.checklist} aria-hidden="true">
      <span className={styles.checklistSheet} />
      <span className={styles.checklistLine} />
      <span className={styles.checklistLine} />
      <span className={styles.checklistLine} />
    </span>
  );
}

function CounterpartVisual({
  type,
  count,
}: {
  type: CounterpartType;
  count: number;
}) {
  if (type === "checklist") {
    const columns = count <= 6 ? count : count <= 12 ? 6 : 7;

    return (
      <div
        className={styles.checklistGrid}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: count }, (_, index) => (
          <ChecklistIcon key={index} />
        ))}
      </div>
    );
  }

  if (count === 1) {
    return <PersonIcon variant="counterpart" />;
  }

  const columns = count <= 7 ? count : 7;

  return (
    <div
      className={styles.iconGrid}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }, (_, index) => (
        <PersonIcon key={index} variant="counterpart" />
      ))}
    </div>
  );
}

export default function MedicalProblemScaleVisual({
  headline,
  evaluatorCount,
  evaluatorLabel,
  counterpartCount,
  counterpartLabel,
  counterpartType,
  caption,
}: ScaleVisualState) {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.chart}
        role="img"
        aria-label={`${headline ? `${headline} ` : ""}${evaluatorCount} ${evaluatorLabel}, ${counterpartCount} ${counterpartLabel}`}
      >
        {headline ? <p className={styles.headline}>{headline}</p> : null}

        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.columnEvaluator}`}>
            <p className={`${styles.count} ${styles.countEvaluator}`}>{evaluatorCount}</p>
            <p className={`${styles.label} ${styles.labelEvaluator}`}>{evaluatorLabel}</p>
            <PersonIcon variant="evaluator" />
          </div>

          <div className={`${styles.column} ${styles.columnCounterpart}`}>
            <p className={`${styles.count} ${styles.countCounterpart}`}>{counterpartCount}</p>
            <p className={`${styles.label} ${styles.labelCounterpart}`}>{counterpartLabel}</p>
            <CounterpartVisual type={counterpartType} count={counterpartCount} />
          </div>
        </div>
      </div>

      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
