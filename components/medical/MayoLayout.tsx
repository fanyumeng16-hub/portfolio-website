import type { ReactNode } from "react";
import styles from "./MayoLayout.module.css";

export function MayoNarrativeBeat({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.beat} id={id}>
      <div className={styles.beatInner}>{children}</div>
    </section>
  );
}

export function MayoBlock({
  id,
  children,
  className,
  wide,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  const classes = [
    "mayo-layout-block",
    styles.block,
    wide ? styles.blockWide : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
}

export function MayoBlockHeader({
  index,
  title,
  kicker,
  kickerDeep,
  kickerAccent,
}: {
  index?: string;
  title?: string;
  kicker?: string;
  kickerDeep?: boolean;
  kickerAccent?: boolean;
}) {
  const kickerClass = kickerAccent
    ? styles.kickerAccent
    : kickerDeep
      ? styles.kickerDeep
      : styles.kicker;

  if (index && title) {
    return (
      <header className={styles.header}>
        <div className={styles.titlePrimaryRow}>
          <span className={styles.titleIndex}>{index}</span>
          <h4 className={styles.title}>{title}</h4>
        </div>
        {kicker ? <p className={kickerClass}>{kicker}</p> : null}
      </header>
    );
  }

  return (
    <header className={styles.header}>
      {title ? <h4 className={styles.title}>{title}</h4> : null}
      {kicker ? <p className={kickerClass}>{kicker}</p> : null}
    </header>
  );
}

export function MayoStatGrid({ children }: { children: ReactNode }) {
  return <ul className={styles.statGrid}>{children}</ul>;
}

export function MayoStatCard({
  stat,
  label,
  body,
}: {
  stat: string;
  label: string;
  body: string;
}) {
  return (
    <li className={styles.statCard}>
      <p className={styles.statValue}>{stat}</p>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statBody}>{body}</p>
    </li>
  );
}

export function MayoInfoCard({
  title,
  body,
  footerLeft,
  footerRight,
}: {
  title: string;
  body?: string;
  footerLeft?: string;
  footerRight?: string;
}) {
  return (
    <article className={styles.infoCard}>
      <h5 className={styles.infoCardTitle}>{title}</h5>
      {body ? <p className={styles.infoCardBody}>{body}</p> : null}
      {footerLeft || footerRight ? (
        <div className={styles.infoCardFooter}>
          <span>{footerLeft ?? ""}</span>
          <span>{footerRight ?? ""}</span>
        </div>
      ) : null}
    </article>
  );
}

export function MayoQuoteCard({ quote, cite }: { quote: string; cite?: string }) {
  return (
    <blockquote className={styles.quoteCard}>
      <p className={styles.quoteCardText}>&ldquo;{quote}&rdquo;</p>
      {cite ? <cite className={styles.quoteCardCite}>{cite}</cite> : null}
    </blockquote>
  );
}

export function MayoMosaicImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.mosaicImage}${className ? ` ${className}` : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}

type BentoStep = {
  id: string;
  title: string;
  cardBody?: string;
  footerLeft?: string;
  footerRight?: string;
  quote?: string;
  quoteAttribution?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function MayoBentoPrimaryResearch({ steps }: { steps: BentoStep[] }) {
  const interviews = steps.find((step) => step.id === "interviews");
  const handsOn = steps.find((step) => step.id === "hands-on");

  if (!interviews || !handsOn) {
    return null;
  }

  return (
    <div className={styles.researchGrid}>
      <MayoInfoCard
        title={interviews.title}
        body={interviews.cardBody}
        footerLeft={interviews.footerLeft}
        footerRight={interviews.footerRight}
      />
      <div className={styles.researchStack}>
        <MayoQuoteCard quote={interviews.quote ?? ""} cite={interviews.quoteAttribution} />
        {interviews.imageSrc ? (
          <MayoMosaicImage src={interviews.imageSrc} alt={interviews.imageAlt ?? ""} />
        ) : null}
      </div>
      <div className={styles.researchStack}>
        {handsOn.imageSrc ? (
          <MayoMosaicImage src={handsOn.imageSrc} alt={handsOn.imageAlt ?? ""} />
        ) : null}
        <MayoQuoteCard quote={handsOn.quote ?? ""} cite={handsOn.quoteAttribution} />
      </div>
      <MayoInfoCard
        title={handsOn.title}
        body={handsOn.cardBody}
        footerLeft={handsOn.footerLeft}
        footerRight={handsOn.footerRight}
      />
    </div>
  );
}

type InsightContrastItem = { id: string; label: string };

export function MayoInsightContrast({
  ruledOutTitle,
  discoveredTitle,
  ruledOut,
  discovered,
}: {
  ruledOutTitle: string;
  discoveredTitle: string;
  ruledOut: InsightContrastItem[];
  discovered: InsightContrastItem[];
}) {
  return (
    <div className={styles.insightContrast}>
      <div className={styles.insightContrastHeader}>
        <h5 className={styles.insightContrastHeadingRuled}>{ruledOutTitle}</h5>
        <span className={styles.insightContrastHeaderGap} aria-hidden="true" />
        <h5 className={styles.insightContrastHeadingDiscovered}>{discoveredTitle}</h5>
      </div>
      <ul className={styles.insightContrastRows}>
        {ruledOut.map((item, index) => (
          <li className={styles.insightContrastRow} key={item.id}>
            <div className={styles.insightRuledBox}>
              <p className={styles.insightRuledText}>{item.label}</p>
            </div>
            <span className={styles.insightArrow} aria-hidden="true">
              <svg viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 4H28"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M24 1L32 4L24 7"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.insightDiscoveredBox}>
              <p className={styles.insightDiscoveredText}>
                {discovered[index]?.label ?? ""}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MayoStaircase({ children }: { children: ReactNode }) {
  return <ol className={styles.staircase}>{children}</ol>;
}

export function MayoStaircaseStep({
  index,
  title,
  body,
  step,
}: {
  index: string;
  title: string;
  body: string;
  step: number;
}) {
  return (
    <li
      className={styles.staircaseStep}
      style={{ "--mayo-stair-step": step } as React.CSSProperties}
    >
      <div className={styles.staircaseBar}>
        <span className={styles.staircaseIndex}>{index}</span>
        <span className={styles.staircaseBarTitle}>{title}</span>
      </div>
      <p className={styles.staircaseBody}>{body}</p>
    </li>
  );
}

export function MayoFeatureGrid({ children }: { children: ReactNode }) {
  return <ul className={styles.featureGrid}>{children}</ul>;
}

export function MayoFeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <li className={styles.featureCard}>
      <span className={styles.featureIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 19L19 5M19 5H9M19 5V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h5 className={styles.featureTitle}>{title}</h5>
      <p className={styles.featureBody}>{body}</p>
    </li>
  );
}

export function MayoScaleWrap({ children }: { children: ReactNode }) {
  return <div className={styles.scaleWrap}>{children}</div>;
}

export { styles as mayoLayoutStyles };
