import styles from "./TracklyCompetitiveMatrix.module.css";

export type CompetitiveMatrixColumn = {
  id: string;
  label: string;
  highlight?: boolean;
};

export type CompetitiveMatrixRow = {
  topic: string;
  cells: string[];
  /** Highlight Trackly-only differentiation on this row */
  differentiator?: boolean;
};

export type CompetitiveMatrixData = {
  columns: CompetitiveMatrixColumn[];
  rows: CompetitiveMatrixRow[];
};

type Props = CompetitiveMatrixData;

type ParsedCell =
  | { kind: "yes"; detail?: string }
  | { kind: "no"; detail?: string }
  | { kind: "other"; text: string };

function parseCell(value: string): ParsedCell {
  const trimmed = value.trim();
  const lower = trimmed.toLowerCase();

  if (lower === "yes") {
    return { kind: "yes" };
  }
  if (lower === "no") {
    return { kind: "no" };
  }
  if (lower.startsWith("yes")) {
    const detail = trimmed.replace(/^yes\s*[,—–-]\s*/i, "").trim();
    return { kind: "yes", detail: detail || undefined };
  }
  if (lower.startsWith("no")) {
    const detail = trimmed.replace(/^no\s*[,—–-]\s*/i, "").trim();
    return { kind: "no", detail: detail || undefined };
  }

  return { kind: "other", text: trimmed };
}

function YesIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.25 10.1 8.6 12.45 13.85 7.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function NoIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.15 7.15 12.85 12.85M12.85 7.15 7.15 12.85"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MatrixCellContent({ value }: { value: string }) {
  const parsed = parseCell(value);

  if (parsed.kind === "other") {
    return <>{parsed.text}</>;
  }

  const Icon = parsed.kind === "yes" ? YesIcon : NoIcon;
  const iconClass = parsed.kind === "yes" ? styles.iconYes : styles.iconNo;
  const label = parsed.kind === "yes" ? "Yes" : "No";

  return (
    <span
      className={
        parsed.detail ? styles.cellValueWithDetail : styles.cellValueIconOnly
      }
    >
      <Icon className={iconClass} />
      <span className={styles.visuallyHidden}>{label}</span>
      {parsed.detail ? (
        <span className={styles.cellDetail}>{parsed.detail}</span>
      ) : null}
    </span>
  );
}

function cellTone(value: string, isTrackly: boolean, differentiator?: boolean) {
  const parsed = parseCell(value);
  if (parsed.kind === "other") {
    return undefined;
  }
  if (isTrackly && differentiator && parsed.kind === "yes") {
    return styles.cellHighlight;
  }
  if (!isTrackly && differentiator && parsed.kind === "no") {
    return styles.cellMuted;
  }
  return undefined;
}

export default function TracklyCompetitiveMatrix({
  columns,
  rows,
}: Props) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.topicCol} scope="col">
              Dimension
            </th>
            {columns.map((column) => (
              <th
                className={
                  column.highlight
                    ? `${styles.headCell} ${styles.headHighlight}`
                    : styles.headCell
                }
                key={column.id}
                scope="col"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              className={row.differentiator ? styles.diffRow : undefined}
              key={row.topic}
            >
              <th className={styles.topicCell} scope="row">
                {row.topic}
              </th>
              {row.cells.map((cell, index) => {
                const column = columns[index];
                const isTrackly = Boolean(column?.highlight);
                const parsed = parseCell(cell);
                const iconOnly =
                  parsed.kind !== "other" && !parsed.detail;

                return (
                  <td
                    aria-label={`${column?.label ?? "Column"}: ${cell}`}
                    className={[
                      isTrackly ? styles.tracklyCell : styles.cell,
                      iconOnly ? styles.cellIconOnly : undefined,
                      cellTone(cell, isTrackly, row.differentiator),
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={`${row.topic}-${column?.id ?? index}`}
                  >
                    <span className={styles.mobileLabel}>{column?.label}</span>
                    <MatrixCellContent value={cell} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
