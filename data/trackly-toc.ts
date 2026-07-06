import { CaseTocSection } from "@/components/CaseToc";

/** Trackly 侧栏目录：12 个核心章节，与页面 DOM 顺序一致 */
export function buildTracklyTocSections(): CaseTocSection[] {
  return [
    { id: "case-intro", label: "Introduction", indexLabel: "01" },
    { id: "trackly-context", label: "Problem", indexLabel: "02" },
    { id: "trackly-approach", label: "Approach", indexLabel: "03" },
    { id: "trackly-research", label: "Research", indexLabel: "04" },
    { id: "trackly-analysis", label: "Analysis", indexLabel: "05" },
    { id: "trackly-insight-detail", label: "Insight", indexLabel: "06" },
    { id: "trackly-competitive", label: "Competitive", indexLabel: "07" },
    { id: "trackly-design-direction", label: "Design", indexLabel: "08" },
    { id: "trackly-final-concept", label: "Final Concept", indexLabel: "09" },
    { id: "trackly-usability", label: "Usability", indexLabel: "10" },
    { id: "trackly-prototype", label: "Prototype", indexLabel: "11" },
    { id: "trackly-business", label: "Business", indexLabel: "12" },
  ];
}
