import { medicalOutcome, type OutcomeMatrixCell } from "@/data/medical-content";
import { MedicalMetricDeltaCards } from "./MedicalMetricDeltaCards";
import styles from "./MedicalSections.module.css";

function TimeComparisonMatrix({ cells, unit }: { cells: OutcomeMatrixCell[]; unit: string }) {
  return (
    <div className={styles.outcomeMatrixWrap}>
      <table className={styles.outcomeMatrix}>
        <thead>
          <tr>
            <th scope="col" className={styles.outcomeMatrixCorner}>
              Benchmark
            </th>
            {cells.map((cell) => (
              <th
                scope="col"
                className={
                  cell.role === "result" ? styles.outcomeMatrixHeadResult : undefined
                }
                key={cell.id}
              >
                {cell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className={styles.outcomeMatrixRowLabel}>
              Duration
            </th>
            {cells.map((cell) => (
              <td
                className={
                  cell.role === "result" ? styles.outcomeMatrixCellResult : undefined
                }
                key={cell.id}
              >
                <span className={styles.outcomeMatrixValue}>
                  {cell.value} {unit}
                </span>
                {cell.note ? (
                  <span className={styles.outcomeMatrixNote}>{cell.note}</span>
                ) : null}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function MedicalOutcomeTimeComparison() {
  const { lead, unit, matrix, deltas } = medicalOutcome.timeComparison;

  return (
    <div className={styles.outcomeComparisonBlock}>
      <p className="case-prose-body">{lead}</p>
      <TimeComparisonMatrix cells={matrix} unit={unit} />
      <MedicalMetricDeltaCards items={deltas} />
    </div>
  );
}

export function MedicalOutcomeAccuracyComparison() {
  const { paragraphs } = medicalOutcome.accuracyComparison;

  return (
    <div className={styles.outcomeComparisonBlock}>
      {paragraphs.map((paragraph) => (
        <p className="case-prose-body" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
