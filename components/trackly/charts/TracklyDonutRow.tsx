import TracklyDonutChart from "./TracklyDonutChart";
import styles from "./TracklyDonutRow.module.css";

export type DonutStat = {
  percent?: number;
  center?: string;
  emphasis: string;
  text: string;
};

type Props = {
  items: DonutStat[];
  source?: string;
};

export default function TracklyDonutRow({ items, source }: Props) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.row}>
        {items.map((item) => (
          <li className={styles.item} key={`${item.emphasis}-${item.text}`}>
            <TracklyDonutChart
              center={item.center}
              percent={item.percent}
              size="md"
            />
            <div className={styles.copy}>
              <p className={styles.headline}>
                <span className={styles.headlineEm}>{item.emphasis}</span> {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {source ? <p className={styles.source}>{source}</p> : null}
    </div>
  );
}
