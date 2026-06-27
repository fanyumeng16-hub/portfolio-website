import { CaseHighlight } from "@/data/medical-content";
import CaseHighlightGrid from "@/components/CaseHighlightGrid";

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
        <CaseHighlightGrid highlights={highlights} />
      </div>
    </section>
  );
}
