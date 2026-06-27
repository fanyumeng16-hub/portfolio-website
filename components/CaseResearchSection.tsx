export type CaseResearchBlock = {
  id: string;
  title?: string;
  subtitle?: string;
  body: string;
  src: string;
  alt: string;
};

type Props = {
  id: string;
  title: string;
  intro: string;
  introQuote?: string;
  blocks: CaseResearchBlock[];
};

export default function CaseResearchSection({
  id,
  title,
  intro,
  introQuote,
  blocks,
}: Props) {
  return (
    <section className="case-prose-section" id={id}>
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{title}</h3>
        <p className="case-prose-body">{intro}</p>
        {introQuote ? (
          <blockquote className="case-research-quote">
            &ldquo;{introQuote}&rdquo;
          </blockquote>
        ) : null}

        <ol className="case-research-blocks">
          {blocks.map((block) => (
            <li className="case-research-block" id={block.id} key={block.id}>
              <div className="case-research-split">
                <div className="case-research-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="case-research-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="case-research-arrow" aria-hidden="true" />
                <div className="case-research-copy">
                  {block.title ? (
                    <h4 className="case-prose-subtitle">{block.title}</h4>
                  ) : null}
                  {block.subtitle ? (
                    <p className="case-research-kicker">{block.subtitle}</p>
                  ) : null}
                  {block.body.split("\n\n").map((paragraph, index) => (
                    <p className="case-prose-body" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
