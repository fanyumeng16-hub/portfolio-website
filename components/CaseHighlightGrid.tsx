import { CaseHighlight } from "@/data/medical-content";

type Props = {
  highlights: CaseHighlight[];
  className?: string;
};

export default function CaseHighlightGrid({
  highlights,
  className = "",
}: Props) {
  return (
    <div className={`case-highlights-grid case-highlights-grid--embedded ${className}`.trim()}>
      {highlights.map((item) => (
        <article className="case-highlight" key={`${item.stat}-${item.label}`}>
          <p className="case-highlight-stat">{item.stat}</p>
          <h4 className="case-highlight-label">{item.label}</h4>
          <p className="case-highlight-desc">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
