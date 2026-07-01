import { CaseTocSection } from "@/components/CaseToc";

/** Flat TOC — continuous numbering, DOM scroll order */
export function buildMassieTocSections(): CaseTocSection[] {
  return [
    { id: "case-intro", label: "Introduction", indexLabel: "01" },
    { id: "massie-video", label: "Video", indexLabel: "02" },
    { id: "massie-4", label: "Massie Analysis", indexLabel: "03" },
    { id: "massie-12", label: "Case Study", indexLabel: "04" },
    { id: "massie-18", label: "Primary Research", indexLabel: "05" },
    { id: "massie-31", label: "Concepts", indexLabel: "06" },
    { id: "massie-32", label: "Premium Package", indexLabel: "07" },
    { id: "massie-35", label: "Style Guide", indexLabel: "08" },
    { id: "massie-36", label: "Exhibit Graphics", indexLabel: "09" },
    { id: "massie-40", label: "Interactive Tablet", indexLabel: "10" },
    { id: "massie-42", label: "Slide Show", indexLabel: "11" },
    { id: "massie-43", label: "Narration Audio", indexLabel: "12" },
  ];
}
