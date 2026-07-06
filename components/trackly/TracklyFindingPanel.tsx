import styles from "./TracklyFindingPanel.module.css";

type Stat = { value: string; label: string };
type Quote = { text: string; accent?: boolean };

export type TracklyFindingPanelData = {
  contextLabel?: string;
  pills?: string[];
  stats?: Stat[];
  quotes?: Quote[];
  adopted?: string;
  illustrationSrc?: string;
  illustrationAlt?: string;
};

type Props = TracklyFindingPanelData & {
  title: string;
  observation?: string;
  compact?: boolean;
};

function FindingTitle({ title }: { title: string }) {
  const split = title.split("\n");

  if (split.length >= 2) {
    const [index, ...rest] = split;

    return (
      <h4 className={styles.title}>
        <span className={styles.titleIndex}>{index}</span>
        <span className={styles.titleSubject}>{rest.join(" ")}</span>
      </h4>
    );
  }

  return (
    <h4 className={styles.title}>
      <span className={styles.titlePlain}>{title}</span>
    </h4>
  );
}

export default function TracklyFindingPanel({
  title,
  observation,
  contextLabel = "What we observed",
  pills = [],
  stats = [],
  quotes = [],
  adopted,
  illustrationSrc,
  illustrationAlt,
  compact = false,
}: Props) {
  const showTop = pills.length > 0 || illustrationSrc;
  const showSplit = stats.length > 0 || quotes.length > 0 || adopted;
  const statsOnly = stats.length > 0 && !quotes.length && !adopted;
  const stackEvidence =
    compact || (!illustrationSrc && !statsOnly && showSplit);

  return (
    <article
      className={`${styles.panel} ${compact ? styles.panelCompact : ""}`.trim()}
    >
      <header className={styles.header}>
        <FindingTitle title={title} />
        {observation ? (
          <p className={styles.observation}>{observation}</p>
        ) : null}
      </header>

      {showTop ? (
        <div
          className={
            illustrationSrc ? styles.context : styles.contextNoArt
          }
        >
          <div className={styles.contextCopy}>
            <p className={styles.contextLabel}>{contextLabel}</p>
            {pills.length ? (
              <ul className={styles.pills}>
                {pills.map((pill) => (
                  <li className={styles.pill} key={pill}>
                    {pill}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {illustrationSrc ? (
            <div className={styles.art}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={illustrationAlt ?? ""}
                className={styles.illustration}
                decoding="async"
                loading="lazy"
                src={illustrationSrc}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {showSplit ? (
        statsOnly ? (
          <ul className={styles.statsRow}>
            {stats.map((stat) => (
              <li className={styles.stat} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        ) : (
        <div
          className={stackEvidence ? styles.splitStacked : styles.split}
        >
          {stats.length ? (
            <ul className={styles.stats}>
              {stats.map((stat) => (
                <li className={styles.stat} key={stat.label}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.statsPlaceholder} aria-hidden="true" />
          )}

          <div className={styles.evidence}>
            {quotes.length ? (
              <ul className={styles.quotes}>
                {quotes.map((quote, index) => (
                  <li
                    className={
                      quote.accent ?? index === 0
                        ? `${styles.quote} ${styles.quoteAccent}`
                        : styles.quote
                    }
                    key={quote.text}
                  >
                    &ldquo;{quote.text}&rdquo;
                  </li>
                ))}
              </ul>
            ) : null}
            {adopted ? (
              <p className={styles.adopted}>
                <span className={styles.adoptedLabel}>Adopted</span>
                {adopted}
              </p>
            ) : null}
          </div>
        </div>
        )
      ) : null}
    </article>
  );
}
