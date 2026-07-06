import type { CSSProperties } from "react";
import TracklyIconCard, { type IconCardItem } from "./TracklyIconCard";
import styles from "./TracklyIconCardGrid.module.css";

type Props = {
  items: IconCardItem[];
  columns?: 1 | 2 | 3 | 4;
  variant?: "default" | "compact" | "accent";
};

export default function TracklyIconCardGrid({
  items,
  columns = 3,
  variant = "default",
}: Props) {
  const columnClass =
    columns === 1
      ? styles.cols1
      : columns === 2
        ? styles.cols2
        : columns === 4
          ? styles.cols4
          : styles.cols3;

  return (
    <div className={`${styles.grid} ${columnClass}`}>
      {items.map((item, index) => (
        <TracklyIconCard
          item={item}
          key={item.label}
          style={{ "--i": index } as CSSProperties}
          variant={variant}
        />
      ))}
    </div>
  );
}
