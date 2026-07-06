import type { MetricDeltaCard } from "@/data/medical-content";
import styles from "./MedicalSections.module.css";

export function MedicalMetricDeltaCards({ items }: { items: MetricDeltaCard[] }) {
  return (
    <ul className={styles.metricDeltaCards}>
      {items.map((item) => (
        <li className={styles.metricDeltaCard} key={item.label}>
          <p className={styles.metricDeltaMetric}>
            <span className={styles.metricDeltaPrimary}>
              <span className={styles.metricDeltaValue}>{item.value}</span>
              <span className={styles.metricDeltaUnit}>{item.unit}</span>
            </span>
            <span className={styles.metricDeltaChange} aria-label={`Up ${item.percent} percent`}>
              <span className={styles.metricDeltaChangeArrow} aria-hidden="true">
                ↑
              </span>
              {item.percent}%
            </span>
          </p>
          <p className={styles.metricDeltaLabel}>{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
