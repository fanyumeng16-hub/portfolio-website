import chartStyles from "./TracklyCharts.module.css";
import styles from "./TracklyProblemScale.module.css";

export default function TracklyProblemScale() {
  return (
    <div className={styles.root}>
      <ul className={styles.facts}>
        <li className={styles.fact}>
          <span className={styles.factValue}>$17.20</span>
          <span className={styles.factLabel}>avg. direct cost per failed delivery</span>
        </li>
        <li className={styles.fact}>
          <span className={styles.factValue}>2.3</span>
          <span className={styles.factLabel}>support interactions per failure</span>
        </li>
        <li className={styles.fact}>
          <span className={styles.factValue}>$12–25</span>
          <span className={styles.factLabel}>cost per support interaction</span>
        </li>
      </ul>
      <ul className={styles.tags}>
        <li className={chartStyles.tag}>Reactive support</li>
        <li className={`${chartStyles.tag} ${chartStyles.tagAlt}`}>Trust breaks at delivery</li>
        <li className={chartStyles.tag}>Marked delivered, nowhere to be found</li>
      </ul>
    </div>
  );
}
