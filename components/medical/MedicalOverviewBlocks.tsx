import type { CaseSpecRow } from "@/data/medical-content";
import styles from "./MedicalSections.module.css";

export function OverviewSpecGrid({ rows }: { rows: CaseSpecRow[] }) {
  return (
    <ul className={styles.overviewSpecGrid}>
      {rows.map((row) => (
        <li className={styles.overviewSpecCard} key={row.label}>
          <span className={styles.overviewSpecLabel}>{row.label}</span>
          <span className={styles.overviewSpecValue}>{row.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function RoleStatGrid({
  items,
}: {
  items: { stat: string; label: string; description: string }[];
}) {
  return (
    <ul className={styles.roleStatGrid}>
      {items.map((item) => (
        <li className={styles.roleStatCard} key={item.label}>
          <span className={styles.roleStatValue}>{item.stat}</span>
          <span className={styles.roleStatLabel}>{item.label}</span>
          <p className={styles.roleStatBody}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
