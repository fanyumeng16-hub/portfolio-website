import styles from "./TracklyInterviewPanel.module.css";

type Stat = { value: string; label: string };
type Quote = { text: string; accent?: boolean };

type Props = {
  criteriaLabel?: string;
  illustrationSrc: string;
  illustrationAlt: string;
  pills: string[];
  stats: Stat[];
  quotes: Quote[];
};

export default function TracklyInterviewPanel({
  criteriaLabel = "Participant criteria",
  illustrationSrc,
  illustrationAlt,
  pills,
  stats,
  quotes,
}: Props) {
  return (
    <div className={styles.panel}>
      <div className={styles.criteria}>
        <div className={styles.criteriaCopy}>
          <h4 className={styles.criteriaTitle}>{criteriaLabel}</h4>
          <ul className={styles.criteriaPills}>
            {pills.map((pill) => (
              <li className={styles.criteriaPill} key={pill}>
                {pill}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.criteriaArt}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={illustrationAlt}
            className={styles.illustration}
            decoding="async"
            loading="lazy"
            src={illustrationSrc}
          />
        </div>
      </div>

      <div className={styles.split}>
        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li className={styles.stat} key={stat.label}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>

        <ul className={styles.quotes}>
          {quotes.map((quote) => (
            <li
              className={
                quote.accent
                  ? `${styles.quote} ${styles.quoteAccent}`
                  : styles.quote
              }
              key={quote.text}
            >
              &ldquo;{quote.text}&rdquo;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
