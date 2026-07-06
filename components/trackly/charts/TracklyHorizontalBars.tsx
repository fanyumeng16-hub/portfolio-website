import styles from "./TracklyHorizontalBars.module.css";

export type BarItem = {
  label: string;
  value: number;
  max: number;
  display?: string;
  variant?: "navy" | "blue" | "sky";
};

type Props = {
  title: string;
  caption?: string;
  items: BarItem[];
  className?: string;
};

export default function TracklyHorizontalBars({
  title,
  caption,
  items,
  className,
}: Props) {
  return (
    <figure className={`${styles.figure} ${className ?? ""}`.trim()}>
      <figcaption className={styles.title}>{title}</figcaption>
      <ul className={styles.list}>
        {items.map((item) => {
          const pct = Math.min(100, (item.value / item.max) * 100);
          const variant = item.variant ?? "blue";

          return (
            <li className={styles.row} key={item.label}>
              <span className={styles.label}>{item.label}</span>
              <div className={styles.track} aria-hidden="true">
                <div
                  className={`${styles.fill} ${styles[variant]}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className={styles.value}>
                {item.display ?? item.value}
              </span>
            </li>
          );
        })}
      </ul>
      {caption ? (
        <p className={styles.caption}>
          <span className={styles.captionCapsule}>{caption}</span>
        </p>
      ) : null}
    </figure>
  );
}
