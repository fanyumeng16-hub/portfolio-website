import type { CSSProperties, ReactNode } from "react";
import TracklyAudienceScene from "@/components/trackly/TracklyAudienceScene";
import TracklyBadge from "@/components/trackly/TracklyBadge";
import TracklyCompareTable from "@/components/trackly/TracklyCompareTable";
import TracklyCompetitiveMatrix from "@/components/trackly/TracklyCompetitiveMatrix";
import TracklyCompetitivePanel from "@/components/trackly/TracklyCompetitivePanel";
import TracklyDataTable from "@/components/trackly/TracklyDataTable";
import TracklyDecorRow from "@/components/trackly/TracklyDecorRow";
import TracklyIconCardGrid from "@/components/trackly/TracklyIconCardGrid";
import TracklyFindingPanel from "@/components/trackly/TracklyFindingPanel";
import TracklyFinalConceptCapabilities from "@/components/trackly/TracklyFinalConceptCapabilities";
import TracklyInterviewPanel from "@/components/trackly/TracklyInterviewPanel";
import TracklyStatsRow from "@/components/trackly/TracklyStatsRow";
import TracklyMediaBlock from "@/components/trackly/TracklyMediaBlock";
import TracklySectionVisual from "@/components/trackly/charts/TracklySectionVisual";
import { TracklyInsightIcon } from "@/components/trackly/TracklyIcons";
import type {
  TracklyBullet,
  TracklyHighlight,
  TracklyProseSection as TracklySection,
} from "@/data/trackly-sections";
import { tracklyNarrativeSections } from "@/data/trackly-sections";
import styles from "./TracklyProseSections.module.css";

function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className={styles.titleHighlight}>{highlight}</span>
      {after}
    </>
  );
}

function HighlightGrid({
  items,
  className,
}: {
  items: TracklyHighlight[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li className={styles.highlight} key={item.label}>
          <div className={styles.highlightCopy}>
            <p className={styles.highlightLabel}>{item.label}</p>
            <p className={styles.highlightBody}>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: TracklyBullet[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li className={styles.bullet} key={item.text}>
          <span className={styles.bulletDot} aria-hidden="true" />
          <span className={styles.bulletText}>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function CapabilityItem({
  item,
  index,
}: {
  item: TracklyHighlight;
  index: number;
}) {
  return (
    <div
      className={styles.capability}
      style={{ "--i": index } as CSSProperties}
    >
      <div className={styles.capabilityCopy}>
        <TracklyBadge variant="navy">{item.label}</TracklyBadge>
        <p className={styles.capabilityBody}>{item.body}</p>
      </div>
    </div>
  );
}

function CapabilityBridge() {
  return (
    <div aria-hidden className={styles.capabilityBridge}>
      <span className={styles.capabilityBridgeLine} />
      <span className={styles.capabilityBridgeArrow}>→</span>
      <span className={styles.capabilityBridgeLine} />
    </div>
  );
}

function CapabilityBlock({
  capabilities,
}: {
  capabilities: TracklyHighlight[];
}) {
  if (capabilities.length === 2) {
    return (
      <div className={styles.capabilityPair}>
        <CapabilityItem index={0} item={capabilities[0]} />
        <CapabilityBridge />
        <CapabilityItem index={1} item={capabilities[1]} />
      </div>
    );
  }

  if (!capabilities.length) {
    return null;
  }

  return (
    <ul className={styles.capabilities}>
      {capabilities.map((item, index) => (
        <li
          className={styles.capability}
          key={item.label}
          style={{ "--i": index } as CSSProperties}
        >
          <div className={styles.capabilityCopy}>
            <TracklyBadge variant="navy">{item.label}</TracklyBadge>
            <p className={styles.capabilityBody}>{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SectionVisuals({
  visuals,
  metric,
}: {
  visuals?: TracklySection["visuals"];
  metric?: TracklySection["metric"];
}) {
  if (!visuals?.length) {
    return null;
  }

  return (
    <>
      {visuals.map((visual, index) => (
        <div
          className={`${styles.visual} ${styles.visualChart}`}
          key={visual}
          style={{ "--i": index } as CSSProperties}
        >
          <TracklySectionVisual metric={metric} visual={visual} />
        </div>
      ))}
    </>
  );
}

type Subsection = NonNullable<TracklySection["subsections"]>[number];

function SubsectionBlock({
  subsection,
  index,
}: {
  subsection: Subsection;
  index: number;
}) {
  const isFindingCard = subsection.findingCard === true;

  return (
    <div
      className={
        [
          subsection.titleCapsule
            ? `${styles.subsection} ${styles.subsectionCenter}`
            : styles.subsection,
          isFindingCard ? styles.findingCard : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      style={{ "--stagger": index } as CSSProperties}
    >
      {subsection.findingPanel ? (
        <TracklyFindingPanel
          compact={isFindingCard}
          observation={subsection.lead}
          title={subsection.title}
          {...subsection.findingPanel}
        />
      ) : (
        <>
      <div
        className={
          subsection.titleCapsule
            ? styles.subsectionHeadCenter
            : styles.subsectionHead
        }
      >
        <h4
          className={
            subsection.titleCapsule ? styles.subtitleCapsule : styles.subtitle
          }
        >
          {subsection.title}
        </h4>
      </div>

      {subsection.lead ? (
        <p className={styles.lead}>{subsection.lead}</p>
      ) : null}

      {subsection.paragraphs?.map((paragraph) => (
        <p className={styles.body} key={paragraph}>
          {paragraph}
        </p>
      ))}

      {subsection.pointCards?.length ? (
        <TracklyIconCardGrid
          columns={subsection.pointCardsColumns ?? 1}
          items={subsection.pointCards}
        />
      ) : null}

      {subsection.bullets?.length ? (
        <BulletList items={subsection.bullets} />
      ) : null}

      {subsection.compare ? (
        <TracklyCompareTable {...subsection.compare} />
      ) : null}

      {subsection.highlights?.length ? (
        <HighlightGrid
          className={styles.subsectionHighlights}
          items={subsection.highlights}
        />
      ) : null}

      {subsection.quotes?.length ? (
        <ul className={styles.quotes}>
          {subsection.quotes.map((quote, quoteIndex) => (
            <li
              className={
                quoteIndex === subsection.highlightQuoteIndex
                  ? `${styles.quoteBubble} ${styles.quoteBubbleAccent}`
                  : styles.quoteBubble
              }
              key={quote}
            >
              &ldquo;{quote}&rdquo;
            </li>
          ))}
        </ul>
      ) : null}

      {subsection.hmw ? <p className={styles.hmw}>{subsection.hmw}</p> : null}
        </>
      )}
    </div>
  );
}

function FindingGrid({
  cards,
  stacks,
}: {
  cards: Subsection[];
  stacks?: number[][];
}) {
  const stackStarts = new Map(
    (stacks ?? []).map((indices) => [indices[0], indices]),
  );
  const stackedMembers = new Set((stacks ?? []).flat());

  return (
    <div className={styles.findingGrid}>
      {cards.map((subsection, index) => {
        if (stackedMembers.has(index) && !stackStarts.has(index)) {
          return null;
        }

        if (stackStarts.has(index)) {
          const indices = stackStarts.get(index)!;
          return (
            <div className={styles.findingColumnStack} key={`stack-${index}`}>
              {indices.map((stackIndex) => (
                <SubsectionBlock
                  index={stackIndex}
                  key={cards[stackIndex].title}
                  subsection={cards[stackIndex]}
                />
              ))}
            </div>
          );
        }

        return (
          <SubsectionBlock
            index={index}
            key={subsection.title}
            subsection={subsection}
          />
        );
      })}
    </div>
  );
}

function DecorWrap({
  decor,
  children,
}: {
  decor?: TracklySection["decor"];
  children: ReactNode;
}) {
  if (!decor) {
    return children;
  }

  return (
    <TracklyDecorRow
      imageAlt={decor.imageAlt}
      imageSrc={decor.imageSrc}
      side={decor.side}
    >
      {children}
    </TracklyDecorRow>
  );
}

function usesDecorOverlay(section: TracklySection) {
  return Boolean(
    section.decor &&
      (section.cards?.length || section.highlights?.length) &&
      !section.stats?.length &&
      !section.pointCards?.length,
  );
}

export function TracklyProseSection({ sectionId }: { sectionId: string }) {
  const section = tracklyNarrativeSections.find((item) => item.id === sectionId);
  if (!section) {
    return null;
  }

  const decorOverlay = usesDecorOverlay(section);
  const capabilitiesBeforeVisuals = section.id === "trackly-final-concept";
  const usabilitySummary =
    section.statsRow &&
    section.stats?.length &&
    section.visuals?.includes("confidence-chart");
  const visuals = usabilitySummary
    ? section.visuals?.filter((visual) => visual !== "confidence-chart")
    : section.visuals;

  return (
    <section className={styles.section} id={section.id}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <TracklyBadge>{section.kicker}</TracklyBadge>
          {section.title && !section.titleAfterVisuals ? (
            <h3 className={styles.title}>
              {renderTitle(section.title, section.titleHighlight)}
            </h3>
          ) : null}
        </div>

        {section.lead &&
        !(section.competitiveLayout && section.bullets?.length) &&
        !section.finalConceptLayout ? (
          <p
            className={
              [
                styles.lead,
                section.leadWide ? styles.leadWide : "",
                section.leadAccent ? styles.leadAccent : "",
                section.leadPanelAlign ? styles.leadPanelAlign : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            {section.lead}
          </p>
        ) : null}

        {section.mediaBlocks?.map((block) => (
          <TracklyMediaBlock key={block.title} {...block} />
        ))}

        {section.interviewSplit ? (
          <TracklyInterviewPanel {...section.interviewSplit} />
        ) : null}

        {section.pointCards?.length && !section.stats?.length ? (
          <TracklyIconCardGrid
            columns={section.pointCardsColumns ?? 3}
            items={section.pointCards}
          />
        ) : null}

        {usabilitySummary ? (
          <div className={styles.usabilitySummary}>
            <TracklyStatsRow items={section.stats!} />
            <div className={styles.usabilityChart}>
              <TracklySectionVisual
                metric={section.metric}
                visual="confidence-chart"
              />
            </div>
          </div>
        ) : section.stats?.length && !section.interviewSplit && section.statsRow ? (
          <TracklyStatsRow items={section.stats} />
        ) : null}

        {section.pointCards?.length && section.stats?.length ? (
          <div className={styles.labeledBlock}>
            {section.pointCardsLabel ? (
              <h4 className={styles.blockLabel}>{section.pointCardsLabel}</h4>
            ) : null}
            <TracklyIconCardGrid
              columns={section.pointCardsColumns ?? 3}
              items={section.pointCards}
            />
          </div>
        ) : null}

        {section.pills?.length && !section.interviewSplit ? (
          <ul className={styles.pills}>
            {section.pills.map((pill) => (
              <li className={styles.pill} key={pill}>
                {pill}
              </li>
            ))}
          </ul>
        ) : null}

        {section.audienceScene ? <TracklyAudienceScene /> : null}

        {capabilitiesBeforeVisuals && section.capabilities?.length ? (
          section.finalConceptLayout ? (
            <TracklyFinalConceptCapabilities
              capabilities={section.capabilities}
              illustration={section.capabilityIllustration}
            />
          ) : (
            <>
              <CapabilityBlock capabilities={section.capabilities} />
              {section.capabilityIllustration ? (
                <div className={styles.capabilityScene}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={section.capabilityIllustration.alt}
                    className={styles.capabilitySceneArt}
                    decoding="async"
                    loading="lazy"
                    src={section.capabilityIllustration.src}
                  />
                </div>
              ) : null}
            </>
          )
        ) : null}

        {!capabilitiesBeforeVisuals ? (
          <SectionVisuals metric={section.metric} visuals={visuals} />
        ) : null}

        {section.title && section.titleAfterVisuals ? (
          <div className={styles.transition}>
            <h3 className={styles.title}>
              {renderTitle(section.title, section.titleHighlight)}
            </h3>
            {section.transitionLead ? (
              <p className={styles.transitionLead}>{section.transitionLead}</p>
            ) : null}
          </div>
        ) : null}

        {section.competitiveLayout && section.bullets?.length ? (
          <TracklyCompetitivePanel
            {...section.competitiveLayout}
            bullets={section.bullets}
            lead={section.lead}
          />
        ) : section.bullets?.length ? (
          <BulletList items={section.bullets} />
        ) : null}

        {section.competitiveMatrix ? (
          <TracklyCompetitiveMatrix {...section.competitiveMatrix} />
        ) : null}

        {section.paragraphs?.map((paragraph) => (
          <p className={styles.body} key={paragraph}>
            {paragraph}
          </p>
        ))}

        {section.cards?.length ? (
          <DecorWrap decor={decorOverlay ? section.decor : undefined}>
            <ul
              className={
                section.plainCards
                  ? `${styles.cards} ${styles.cardsPlain}`
                  : styles.cards
              }
            >
              {section.cards.map((card, index) => (
                <li
                  className={styles.card}
                  key={card.label}
                  style={{ "--i": index } as CSSProperties}
                >
                  <TracklyInsightIcon className={styles.cardIcon} name={card.icon} />
                  <p className={styles.cardLabel}>{card.label}</p>
                  <p className={styles.cardBody}>{card.body}</p>
                  {card.links?.length ? (
                    <p className={styles.cardLinks}>
                      <span className={styles.cardLinksLabel}>Led to</span>
                      {card.links.map((link, linkIndex) => (
                        <span key={link.id}>
                          {linkIndex > 0 ? (
                            <span className={styles.cardLinkSep} aria-hidden="true">
                              ·
                            </span>
                          ) : null}
                          <a className={styles.cardLink} href={`#${link.id}`}>
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </DecorWrap>
        ) : null}

        {section.highlights?.length ? (
          <DecorWrap decor={decorOverlay ? section.decor : undefined}>
            <HighlightGrid className={styles.highlights} items={section.highlights} />
          </DecorWrap>
        ) : null}

        {capabilitiesBeforeVisuals ? (
          <div
            className={
              section.finalConceptLayout ? styles.finalConceptTech : undefined
            }
          >
            <SectionVisuals metric={section.metric} visuals={visuals} />
          </div>
        ) : null}

        {!capabilitiesBeforeVisuals && section.capabilities?.length ? (
          <CapabilityBlock capabilities={section.capabilities} />
        ) : null}

        {section.metric && !section.visuals?.includes("confidence-chart") ? (
          <div className={styles.metric}>
            <div className={styles.metricValues}>
              <span className={styles.metricBefore}>{section.metric.before}</span>
              <span className={styles.metricArrow} aria-hidden="true">
                →
              </span>
              <span className={styles.metricAfter}>{section.metric.after}</span>
            </div>
            <p className={styles.metricLabel}>{section.metric.label}</p>
          </div>
        ) : null}

        {section.compare &&
        !section.competitiveLayout &&
        !section.competitiveMatrix ? (
          <TracklyCompareTable {...section.compare} />
        ) : null}

        {section.subsections?.length ? (
          section.findingLayout ? (
            <div className={styles.findingLayout}>
              {section.subsections.some((s) => !s.findingCard) ? (
                <div className={styles.findingIntroStack}>
                  {section.subsections
                    .filter((s) => !s.findingCard)
                    .map((subsection, index) => (
                      <SubsectionBlock
                        index={index}
                        key={subsection.title}
                        subsection={subsection}
                      />
                    ))}
                </div>
              ) : null}
              {section.subsections.some((s) => s.findingCard) ? (
                <FindingGrid
                  cards={section.subsections.filter((s) => s.findingCard)}
                  stacks={section.findingCardStacks}
                />
              ) : null}
            </div>
          ) : (
            <div
              className={
                section.subsectionGrid ? styles.subsectionGrid : undefined
              }
            >
              {section.subsections.map((subsection, index) => (
                <SubsectionBlock
                  index={index}
                  key={subsection.title}
                  subsection={subsection}
                />
              ))}
            </div>
          )
        ) : null}

        {section.dataTable ? <TracklyDataTable {...section.dataTable} /> : null}

        {section.note ? <p className={styles.note}>{section.note}</p> : null}
      </div>
    </section>
  );
}
