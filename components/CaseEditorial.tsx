import { EditorialBlock } from "@/data/medical-content";

type Props = {
  sectionId: string;
  label?: string;
  headline: string;
  blocks: EditorialBlock[];
};

export default function CaseEditorial({
  sectionId,
  label,
  headline,
  blocks,
}: Props) {
  return (
    <section className="case-editorial" id={sectionId}>
      <div className="case-editorial-inner">
        {label ? <p className="case-editorial-label">{label}</p> : null}

        <div className="case-editorial-grid">
          <h2 className="case-editorial-headline">{headline}</h2>

          <div className="case-editorial-blocks">
            {blocks.map((block) => (
              <div className="case-editorial-block" key={block.title}>
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph, index) => (
                  <p key={`${block.title}-${index}`}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
