import type { CSSProperties } from "react";
import { TracklyInsightIcon } from "@/components/trackly/TracklyIcons";
import type { TracklyInsightIconKey } from "@/components/trackly/TracklyIcons";
import styles from "./TracklyStatCards.module.css";

export type StatCard = {
  value: string;
  label: string;
  icon?: TracklyInsightIconKey;
};

type Props = {
  items: StatCard[];
};

export default function TracklyStatCards({ items }: Props) {
  return (
    <ul className={styles.grid}>
      {items.map((item, index) => (
        <li
          className={styles.card}
          key={item.label}
          style={{ "--i": index } as CSSProperties}
        >
          {item.icon ? (
            <TracklyInsightIcon className={styles.icon} name={item.icon} />
          ) : null}
          <span className={styles.value}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
