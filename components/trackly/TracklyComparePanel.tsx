import { TracklyInsightIcon } from "@/components/trackly/TracklyIcons";
import type { TracklyInsightIconKey } from "@/components/trackly/TracklyIcons";
import TracklyIconCard, { type IconCardItem } from "./TracklyIconCard";
import styles from "./TracklyComparePanel.module.css";

export type CompareSide = {
  title: string;
  icon?: TracklyInsightIconKey;
  variant?: "default" | "accent" | "muted";
  items: IconCardItem[];
};

type Props = {
  left: CompareSide;
  right: CompareSide;
};

function CompareColumn({ side }: { side: CompareSide }) {
  const columnClass =
    side.variant === "accent"
      ? styles.columnAccent
      : side.variant === "muted"
        ? styles.columnMuted
        : styles.columnDefault;

  return (
    <div className={`${styles.column} ${columnClass}`}>
      <div className={styles.columnHead}>
        {side.icon ? (
          <TracklyInsightIcon className={styles.columnIcon} name={side.icon} />
        ) : null}
        <h4 className={styles.columnTitle}>{side.title}</h4>
      </div>
      <ul className={styles.columnList}>
        {side.items.map((item) => (
          <li key={item.label}>
            <TracklyIconCard item={item} variant="compact" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TracklyComparePanel({ left, right }: Props) {
  return (
    <div className={styles.panel}>
      <CompareColumn side={left} />
      <span className={styles.divider} aria-hidden="true">
        vs
      </span>
      <CompareColumn side={right} />
    </div>
  );
}
