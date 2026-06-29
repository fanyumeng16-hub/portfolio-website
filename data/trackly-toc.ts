import { CaseTocSection } from "@/components/CaseToc";

/** Trackly 侧栏目录（与页面 DOM 顺序一致） */
export function buildTracklyTocSections(): CaseTocSection[] {
  return [
    { id: "case-intro", label: "Introduction" },
    { id: "trackly-goal", label: "Goal" },
    {
      id: "trackly-research",
      label: "Research",
      children: [
        { id: "trackly-methodology", label: "Secondary Research" },
        { id: "trackly-interviews", label: "Interview" },
      ],
    },
    { id: "trackly-insight", label: "Research Insight", indexLabel: "04" },
    { id: "trackly-hmw", label: "Problem Identify", indexLabel: "05" },
    { id: "trackly-ideation", label: "Ideation", indexLabel: "06" },
    { id: "trackly-design-process", label: "Final Concept", indexLabel: "07" },
    { id: "trackly-sitemap", label: "Sitemap", indexLabel: "08" },
    { id: "trackly-midfi", label: "Mid Fidelity", indexLabel: "09" },
    { id: "trackly-style", label: "Style Guide", indexLabel: "10" },
    { id: "trackly-prototype", label: "Prototype", indexLabel: "11" },
  ];
}
