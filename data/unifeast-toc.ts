import { CaseTocSection } from "@/components/CaseToc";

/** Flat TOC — continuous numbering, DOM scroll order */
export function buildUniFeastTocSections(): CaseTocSection[] {
  return [
    { id: "case-intro", label: "Introduction", indexLabel: "01" },
    { id: "unifeast-cover", label: "Cover", indexLabel: "02" },
    { id: "unifeast-market-research", label: "Market Research", indexLabel: "03" },
    { id: "unifeast-user-interviews", label: "User Interviews", indexLabel: "04" },
    { id: "unifeast-interview-insight", label: "Interview Insight", indexLabel: "05" },
    { id: "unifeast-need-finding", label: "Need Finding", indexLabel: "06" },
    { id: "unifeast-empathy-mapping", label: "Empathy Mapping", indexLabel: "07" },
    { id: "unifeast-problem-statement", label: "Problem Statement", indexLabel: "08" },
    { id: "unifeast-user-flow", label: "User Flow", indexLabel: "09" },
    { id: "unifeast-usability-test", label: "Usability Test", indexLabel: "10" },
    { id: "unifeast-style-guide", label: "Style Guide", indexLabel: "11" },
    { id: "unifeast-mid-fi", label: "Mid Fi", indexLabel: "12" },
    { id: "unifeast-hi-fi", label: "Hi Fi", indexLabel: "13" },
    { id: "unifeast-final-mockup", label: "Final Mockup", indexLabel: "14" },
  ];
}
