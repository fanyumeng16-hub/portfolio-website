import styles from "./TracklyConfidenceChart.module.css";

type Props = {
  before: number;
  after: number;
  max?: number;
  label?: string;
};

export default function TracklyConfidenceChart({
  before,
  after,
  max = 5,
  label,
}: Props) {
  const scale = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div className={styles.root}>
      <div className={styles.bars}>
        <div className={styles.barGroup}>
          <span className={styles.barLabel}>Before pickup</span>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barBefore}`}
              style={{ width: `${(before / max) * 100}%` }}
            />
          </div>
          <span className={styles.barValue}>{before}</span>
        </div>
        <div className={styles.barGroup}>
          <span className={styles.barLabel}>After pickup</span>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barAfter}`}
              style={{ width: `${(after / max) * 100}%` }}
            />
          </div>
          <span className={styles.barValue}>{after}</span>
        </div>
      </div>

      <div className={styles.scale} aria-hidden="true">
        <span />
        <div className={styles.scaleTicks}>
          {scale.map((tick) => (
            <span className={styles.tick} key={tick}>
              {tick}
            </span>
          ))}
        </div>
        <span />
      </div>
      <p className={styles.caption}>
        <span className={styles.captionCapsule}>
          {label ??
            "Scale: 1 = not safe at all · 5 = very safe"}
        </span>
      </p>
    </div>
  );
}
