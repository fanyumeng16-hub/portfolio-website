import styles from "./TracklyCompareTable.module.css";

export type CompareTableRow = {
  topic: string;
  left: string;
  right: string;
};

export type CompareTableData = {
  leftHeader: string;
  rightHeader: string;
  rows: CompareTableRow[];
};

type Props = CompareTableData;

export default function TracklyCompareTable({
  leftHeader,
  rightHeader,
  rows,
}: Props) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.topicCol} scope="col" />
            <th className={styles.leftCol} scope="col">
              <span className={styles.headerPillLeft}>{leftHeader}</span>
            </th>
            <th className={styles.rightCol} scope="col">
              <span className={styles.headerPillRight}>{rightHeader}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.topic}>
              <th className={styles.topicCell} scope="row">
                <span className={styles.topicPill}>{row.topic}</span>
              </th>
              <td className={styles.leftCell}>
                <span className={`${styles.mobileLabel} ${styles.mobileLabelLeft}`}>
                  {leftHeader}
                </span>
                <span className={styles.cellCapsuleLeft}>{row.left}</span>
              </td>
              <td className={styles.rightCell}>
                <span className={`${styles.mobileLabel} ${styles.mobileLabelRight}`}>
                  {rightHeader}
                </span>
                <span className={styles.cellCapsuleRight}>{row.right}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
