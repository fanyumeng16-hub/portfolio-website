import styles from "./TracklyStatsRow.module.css";

type Stat = { value: string; label: string };

type Props = {
  items: Stat[];
};

/** Trackly06 风格 — 大号数字横排，无卡片底 */
export default function TracklyStatsRow({ items }: Props) {
  return (
    <ul className={styles.row}>
      {items.map((item) => (
        <li className={styles.item} key={item.label}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
