import chartStyles from "./TracklyCharts.module.css";
import styles from "./TracklyBusinessCase.module.css";

const SCALE_MAX = 74_700;

type CostBar = {
  label: string;
  low: number;
  high: number;
  variant: "red" | "navy" | "blue";
};

const inactionCosts: CostBar[] = [
  {
    label: "Failed-delivery direct cost",
    low: 17_200,
    high: 17_200,
    variant: "red",
  },
  {
    label: "Customer support load",
    low: 27_600,
    high: 57_500,
    variant: "navy",
  },
];

const offsetBars: CostBar[] = [
  {
    label: "Reduced escalation cost (30%)",
    low: 5_160,
    high: 5_160,
    variant: "blue",
  },
  {
    label: "Reduced support tickets (40%)",
    low: 11_000,
    high: 23_000,
    variant: "blue",
  },
];

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function formatRange(low: number, high: number) {
  if (low === high) {
    return formatMoney(low);
  }
  return `${formatMoney(low)} – ${formatMoney(high)}`;
}

function CostBarRow({ item }: { item: CostBar }) {
  const lowPct = (item.low / SCALE_MAX) * 100;
  const highPct = (item.high / SCALE_MAX) * 100;

  return (
    <li className={styles.barRow}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>{item.label}</span>
        <span className={styles.barValue}>
          {formatRange(item.low, item.high)}
        </span>
      </div>
      <div className={styles.barTrack} aria-hidden="true">
        {item.low === item.high ? (
          <div
            className={`${styles.barFill} ${styles[item.variant]}`}
            style={{ width: `${highPct}%` }}
          />
        ) : (
          <>
            <div
              className={`${styles.barFill} ${styles[item.variant]}`}
              style={{ width: `${lowPct}%` }}
            />
            <div
              className={`${styles.barRange} ${styles[`${item.variant}Soft`]}`}
              style={{
                left: `${lowPct}%`,
                width: `${highPct - lowPct}%`,
              }}
            />
          </>
        )}
      </div>
    </li>
  );
}

export default function TracklyBusinessCase() {
  return (
    <div className={styles.root}>
      <ul className={styles.scalePills} aria-label="Model assumptions">
        <li className={chartStyles.pillSoft}>10,000 orders / month</li>
        <li className={chartStyles.pillSoft}>~1,000 delivery exceptions (10%)</li>
        <li className={chartStyles.pillSoft}>Industry benchmark inputs</li>
      </ul>

      <section className={styles.block}>
        <h4 className={styles.blockTitle}>The Cost of Doing Nothing</h4>
        <p className={styles.blockLead}>
          Recurring monthly cost of an unresolved trust gap at illustrative
          scale.
        </p>
        <ul className={styles.barList}>
          {inactionCosts.map((item) => (
            <CostBarRow item={item} key={item.label} />
          ))}
        </ul>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Recurring monthly cost</span>
            <span className={`${styles.summaryValue} ${styles.summaryRisk}`}>
              $44,800 – $74,700
            </span>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryLabel}>
              Potential monthly churn loss
            </span>
            <span className={`${styles.summaryValue} ${styles.summaryRisk}`}>
              $30,000 – $180,000
            </span>
            <span className={styles.summaryNote}>
              300–600 customers lost / month · $100–$300 LTV each
            </span>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <h4 className={styles.blockTitle}>What Trackly Could Offset</h4>
        <p className={styles.blockLead}>
          Conservative assumptions: 30% fewer escalations · 40% fewer support
          tickets.
        </p>
        <ul className={styles.barList}>
          {offsetBars.map((item) => (
            <CostBarRow item={item} key={item.label} />
          ))}
        </ul>
        <div className={styles.summaryGrid}>
          <div className={`${styles.summaryCard} ${styles.summaryCardAccent}`}>
            <span className={styles.summaryLabel}>Estimated monthly savings</span>
            <span className={`${styles.summaryValue} ${styles.summaryPositive}`}>
              $16,000 – $28,000
            </span>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <h4 className={styles.blockTitle}>Weighed Against Operating Cost</h4>
        <p className={styles.blockLead}>
          Monthly run-rate vs. one-time deployment at the same order volume.
        </p>
        <div className={styles.compareGrid}>
          <div className={styles.compareCard}>
            <span className={styles.compareLabel}>Monthly operating cost</span>
            <span className={styles.compareValue}>$5,300 – $14,200</span>
            <span className={styles.compareNote}>
              IoT connectivity · app maintenance · agent staffing
            </span>
          </div>
          <div className={styles.compareCard}>
            <span className={styles.compareLabel}>One-time deployment</span>
            <span className={styles.compareValue}>$65,000 – $180,000</span>
            <span className={styles.compareNote}>
              Hardware · initial app build
            </span>
          </div>
          <div className={`${styles.compareCard} ${styles.compareCardHighlight}`}>
            <span className={styles.compareLabel}>Net monthly benefit</span>
            <span className={styles.compareValue}>$2,000 – $22,000</span>
            <span className={styles.compareNote}>
              Payback in roughly 3–10 months
            </span>
          </div>
        </div>

        <div className={styles.equation} aria-hidden="true">
          <span className={styles.equationPill}>Savings</span>
          <span className={styles.equationOp}>−</span>
          <span className={styles.equationPill}>Operating</span>
          <span className={styles.equationOp}>=</span>
          <span className={`${styles.equationPill} ${styles.equationResult}`}>
            Net benefit
          </span>
        </div>
      </section>
    </div>
  );
}
