import TracklyConfidenceChart from "./TracklyConfidenceChart";
import TracklyHorizontalBars from "./TracklyHorizontalBars";
import styles from "./TracklyUsabilityResults.module.css";

type Props = {
  trustBefore?: number;
  trustAfter?: number;
  trustMax?: number;
};

const seqEase = [
  { label: "Task 1 · Review details", value: 6.4, max: 7, display: "6.4" },
  { label: "Task 2 · Locker pickup", value: 6.1, max: 7, display: "6.1" },
  { label: "Task 3 · Report issue", value: 5.7, max: 7, display: "5.7", variant: "sky" as const },
];

const findingFrequency = [
  { label: "Call courier first", value: 6, max: 9, display: "6/9", variant: "navy" as const },
  { label: "Report felt cold", value: 5, max: 9, display: "5/9", variant: "blue" as const },
  { label: "Get Direction missed", value: 4, max: 9, display: "4/9", variant: "blue" as const },
  { label: "Issue categories", value: 3, max: 9, display: "3/9", variant: "sky" as const },
  { label: "Scan extra step", value: 2, max: 9, display: "2/9", variant: "sky" as const },
];

export default function TracklyUsabilityResults({
  trustBefore = 3,
  trustAfter = 4.5,
  trustMax = 7,
}: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <h4 className={styles.panelTitle}>Trust score</h4>
        <TracklyConfidenceChart
          after={trustAfter}
          before={trustBefore}
          label={`Package safety confidence: ${trustBefore} → ${trustAfter} (1 = not safe at all · ${trustMax} = very safe)`}
          max={trustMax}
        />
      </div>

      <div className={styles.panel}>
        <TracklyHorizontalBars
          caption="SEQ mean ratings: most participants rated tasks easy to very easy (1 = very difficult · 7 = very easy)."
          items={seqEase}
          title="Task ease (SEQ)"
        />
      </div>

      <div className={`${styles.panel} ${styles.panelWide}`}>
        <TracklyHorizontalBars
          caption="Participants who raised each theme during moderated sessions (n = 8–9)."
          items={findingFrequency}
          title="Friction themes raised"
        />
      </div>
    </div>
  );
}
