import chartStyles from "./TracklyCharts.module.css";
import styles from "./TracklyCausalDiagram.module.css";

const gaps = [
  { label: "Loss of control", sub: "No carrier choice, no ETA" },
  { label: "No identity check", sub: "No proof at drop-off" },
  { label: "No escalation", sub: "No one to reach" },
];

const emotions = ["Anxiety", "Helplessness", "Anger"];

export default function TracklyCausalDiagram() {
  return (
    <figure className={styles.root}>

      <div className={styles.diagram} aria-hidden="true">
        <div className={styles.layer}>
          <span className={styles.layerLabel}>System gaps</span>
          <div className={styles.gapRow}>
            {gaps.map((gap) => (
              <div className={styles.gapNode} key={gap.label}>
                <span className={`${chartStyles.pillRisk} ${styles.gapPill}`}>
                  {gap.label}
                </span>
                <span className={styles.nodeSub}>{gap.sub}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.connector}>
          <span className={styles.arrowDown}>↓</span>
        </div>

        <div className={styles.layer}>
          <span className={styles.layerLabel}>User outcomes</span>
          <div className={styles.emotionRow}>
            {emotions.map((emotion) => (
              <span className={chartStyles.pillSoft} key={emotion}>
                {emotion}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.connector}>
          <span className={styles.arrowDown}>↓</span>
        </div>

        <div className={styles.outcome}>
          <span className={`${chartStyles.pillRed} ${styles.breakdown}`}>
            Trust breakdown
          </span>
        </div>
      </div>

      <p className={styles.caption}>
        <span className={styles.captionCapsule}>
          System gaps compound into anxiety, helplessness, and anger, ending in
          trust breakdown when users cannot verify or escalate.
        </span>
      </p>
    </figure>
  );
}
