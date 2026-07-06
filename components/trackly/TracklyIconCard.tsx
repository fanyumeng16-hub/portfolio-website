import type { CSSProperties } from "react";
import { TracklyInsightIcon } from "@/components/trackly/TracklyIcons";
import type { TracklyInsightIconKey } from "@/components/trackly/TracklyIcons";
import styles from "./TracklyIconCard.module.css";

export type IconCardItem = {
  icon: TracklyInsightIconKey;
  label: string;
  body: string;
};

type Props = {
  item: IconCardItem;
  variant?: "default" | "compact" | "accent";
  className?: string;
  style?: CSSProperties;
};

export default function TracklyIconCard({
  item,
  variant = "default",
  className,
  style,
}: Props) {
  const variantClass =
    variant === "compact"
      ? styles.cardCompact
      : variant === "accent"
        ? styles.cardAccent
        : styles.cardDefault;

  return (
    <article
      className={`${styles.card} ${variantClass} ${className ?? ""}`.trim()}
      style={style}
    >
      <TracklyInsightIcon className={styles.icon} name={item.icon} />
      <div className={styles.copy}>
        <h5 className={styles.label}>{item.label}</h5>
        <p className={styles.body}>{item.body}</p>
      </div>
    </article>
  );
}
