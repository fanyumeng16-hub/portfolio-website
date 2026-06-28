import type { CaseSpecRow } from "@/data/medical-content";

export const outloopHero = {
  subtitle: "Multi-Modal Mind Offboarding System",
  intro:
    "Outloop is a multi-modal intervention system designed for the hour between work and sleep — the window where the brain refuses to switch off.",
  cover: {
    src: "/images/outloop.png",
    alt: "Outloop multi-modal mind offboarding system",
    width: 1920,
    height: 1254,
  },
};

export const outloopSpec: CaseSpecRow[] = [
  {
    label: "Role",
    value: "UX Design / Interaction Design / Research Synthesis",
  },
  {
    label: "Focus",
    value: "Gen Z Burnout / Cognitive Offboarding / Multi-Modal UX",
  },
];

export const outloopOverviewParagraphs = [
  "For Gen Z students, the end of a study session doesn't mean the end of cognitive load. Rumination loops, unresolved anxiety, and the inability to disengage from performance pressure accumulate in this narrow window, quietly building toward burnout before it's ever recognized.",
  "Grounded in the Triple Network Model, Outloop intervenes at three layers: helping users name and classify unresolved thoughts, redirecting attention from internal loops to present-moment physical sensation, and using sound to activate the parasympathetic nervous system when cognitive energy is lowest.",
  "This is not a wellness app. It's a structured offboarding system for the mind.",
];
