import styles from "./TracklyDataTable.module.css";

export type DataTableData = {
  caption?: string;
  headers: string[];
  rows: string[][];
  highlightRowMatchers?: string[];
};

type Props = DataTableData;

function rowHighlighted(
  row: string[],
  matchers?: string[],
) {
  if (!matchers?.length) {
    return false;
  }
  const label = row[0]?.toLowerCase() ?? "";
  return matchers.some((matcher) => label.includes(matcher.toLowerCase()));
}

export default function TracklyDataTable({
  caption,
  headers,
  rows,
  highlightRowMatchers,
}: Props) {
  return (
    <figure className={styles.figure}>
      {caption ? (
        <figcaption className={styles.caption}>
          <span className={styles.captionPill}>{caption}</span>
        </figcaption>
      ) : null}
      <div className={styles.wrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                className={
                  rowHighlighted(row, highlightRowMatchers)
                    ? styles.rowHighlight
                    : undefined
                }
                key={row.join("|")}
              >
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
