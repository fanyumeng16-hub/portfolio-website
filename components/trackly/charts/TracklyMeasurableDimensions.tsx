import TracklyHorizontalBars from "./TracklyHorizontalBars";
import styles from "./TracklyMeasurableDimensions.module.css";

const emotionStages = [
  { label: "Order", value: 28 },
  { label: "Transit", value: 38 },
  { label: "Out for delivery", value: 88, peak: true },
  { label: "Attempt", value: 52 },
  { label: "Resolution", value: 68 },
];

const behaviors = [
  {
    label: "Call to confirm status",
    value: 7,
    max: 9,
    display: "7/9",
    variant: "navy" as const,
  },
  {
    label: "Check tracking repeatedly",
    value: 6,
    max: 9,
    display: "6/9",
    variant: "blue" as const,
  },
  {
    label: "Prefer face-to-face signing",
    value: 5,
    max: 9,
    display: "5/9",
    variant: "sky" as const,
  },
];

export default function TracklyMeasurableDimensions() {
  const maxEmotion = Math.max(...emotionStages.map((s) => s.value));

  return (
    <div className={styles.root}>
      <figure className={styles.panel}>
        <figcaption className={styles.panelTitle}>
          Emotional response
        </figcaption>
        <ul className={styles.emotionChart} aria-label="Emotional intensity by delivery stage">
          {emotionStages.map((stage) => (
            <li className={styles.emotionCol} key={stage.label}>
              <div className={styles.emotionBarTrack}>
                <div
                  className={
                    stage.peak ? styles.emotionBarPeak : styles.emotionBar
                  }
                  style={{ height: `${(stage.value / maxEmotion) * 100}%` }}
                />
              </div>
              <span className={styles.emotionValue}>{stage.value}</span>
              <span className={styles.emotionLabel}>{stage.label}</span>
            </li>
          ))}
        </ul>
        <p className={styles.caption}>
          <span className={styles.captionCapsule}>
            Anxiety peaks around delivery-start, not evenly distributed across
            the timeline.
          </span>
        </p>
      </figure>

      <TracklyHorizontalBars
        className={styles.panel}
        caption="Self-initiated verification behaviors observed across 8–9 interview participants."
        items={behaviors}
        title="Behavioral tendency"
      />
    </div>
  );
}
