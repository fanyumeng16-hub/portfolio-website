import CaseOnboardingInsightCards from "@/components/CaseOnboardingInsightCards";
import { ReactNode } from "react";
import { CaseBrandUISubsection } from "@/data/medical-content";

type Props = {
  id: string;
  title: string;
  subsections: CaseBrandUISubsection[];
};

function BrandUISplit({
  images,
  children,
}: {
  images: { src: string; alt: string }[];
  children: ReactNode;
}) {
  return (
    <div className="case-research-split">
      <div className="case-research-media">
        {images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="case-research-image case-brand-ui-split-image"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <div className="case-research-arrow" aria-hidden="true" />
      <div className="case-research-copy">{children}</div>
    </div>
  );
}

function BrandUIStack({ subsection }: { subsection: CaseBrandUISubsection }) {
  return (
    <div className="case-brand-ui-stack">
      <header className="case-brand-ui-stack-header">
        <h4 className="case-prose-subtitle">{subsection.title}</h4>
        <p className="case-research-kicker">{subsection.subtitle}</p>
      </header>

      {subsection.paragraphs.map((paragraph, paragraphIndex) => (
        <p className="case-prose-body" key={paragraphIndex}>
          {paragraph}
        </p>
      ))}

      {subsection.images?.length ? (
        <div
          className={`case-brand-ui-stack-media${
            subsection.images.length > 1 ? " case-brand-ui-stack-media--pair" : ""
          }`}
        >
          {subsection.images.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="case-brand-ui-stack-image"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      ) : null}

      {subsection.tailParagraphs?.map((paragraph, paragraphIndex) => (
        <p className="case-prose-body" key={`tail-${paragraphIndex}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function CaseBrandUISection({ id, title, subsections }: Props) {
  return (
    <section className="case-prose-section case-brand-ui-section" id={id}>
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{title}</h3>

        <ol className="case-brand-ui-subsections">
          {subsections.map((subsection) => {
            const isStack = subsection.layout === "stack";

            return (
              <li
                className="case-brand-ui-subsection"
                id={subsection.id}
                key={subsection.id}
              >
                {isStack ? (
                  <BrandUIStack subsection={subsection} />
                ) : subsection.images?.length ? (
                  <BrandUISplit images={subsection.images}>
                    <h4 className="case-prose-subtitle">{subsection.title}</h4>
                    <p className="case-research-kicker">{subsection.subtitle}</p>
                    {subsection.paragraphs.map((paragraph, paragraphIndex) => (
                      <p className="case-prose-body" key={paragraphIndex}>
                        {paragraph}
                      </p>
                    ))}
                    {subsection.closingParagraph && !subsection.closingImage ? (
                      <p className="case-prose-body">{subsection.closingParagraph}</p>
                    ) : null}
                  </BrandUISplit>
                ) : null}

                {subsection.tailParagraphs?.length ? (
                  <div className="case-brand-ui-standalone-copy">
                    {subsection.tailParagraphs.map((paragraph, paragraphIndex) => (
                      <p className="case-prose-body" key={`tail-${paragraphIndex}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {subsection.keywords?.length ? (
                  <p className="case-brand-ui-keywords" aria-label="Brand keywords">
                    {subsection.keywords.map((keyword, keywordIndex) => (
                      <span className="case-brand-ui-keyword" key={keyword}>
                        {keywordIndex > 0 ? (
                          <span
                            className="case-brand-ui-keyword-sep"
                            aria-hidden="true"
                          >
                            /
                          </span>
                        ) : null}
                        {keyword}
                      </span>
                    ))}
                  </p>
                ) : null}

                {subsection.findings?.length ? (
                  <div className="case-brand-ui-findings-block">
                    {subsection.findingsHeading ? (
                      <h4 className="case-prose-subtitle">{subsection.findingsHeading}</h4>
                    ) : null}
                    {subsection.findingsIntro ? (
                      <p className="case-prose-body case-brand-ui-findings-intro">
                        {subsection.findingsIntro}
                      </p>
                    ) : null}
                    <CaseOnboardingInsightCards insights={subsection.findings} />
                  </div>
                ) : null}

                {!isStack && subsection.closingImage ? (
                  <BrandUISplit images={[subsection.closingImage]}>
                    {subsection.closingParagraph ? (
                      <p className="case-prose-body">{subsection.closingParagraph}</p>
                    ) : null}
                  </BrandUISplit>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
