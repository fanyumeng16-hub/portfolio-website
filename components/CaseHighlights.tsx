import { CaseHighlight } from "@/data/medical-content";

type Props = {
  sectionId?: string;
  label?: string;
  highlights: CaseHighlight[];
};

export default function CaseHighlights({
  sectionId = "case-highlights",
  label = "Impact",
  highlights,
}: Props) {
  return (
    <section className="case-highlights" id={sectionId}>
      <div className="case-highlights-inner">
        <p className="case-highlights-label">{label}</p>

        <div className="case-highlights-grid">
          {highlights.map((item) => (
            <article className="case-highlight" key={item.stat + item.label}>
              <p className="case-highlight-stat">{item.stat}</p>
              <h3 className="case-highlight-label">{item.label}</h3>
              <p className="case-highlight-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
