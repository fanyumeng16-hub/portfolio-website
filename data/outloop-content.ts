import type { CaseSpecRow } from "@/data/medical-content";

export const outloopHero = {
  subtitle: "Multi-Modal Mind Offboarding System",
  intro:
    "For Gen Z students, the end of a study session does not mean the end of cognitive load. Outloop is a structured offboarding system for the mind, intervening before rumination quietly builds toward burnout.",
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

export const outloopOverviewBody = [
  "Rumination loops, unresolved anxiety, and the inability to disengage from performance pressure accumulate in the narrow window between work and rest, often before burnout is ever recognized.",
  "Grounded in the Triple Network Model, Outloop intervenes at three layers: helping users name and classify unresolved thoughts, redirecting attention from internal loops to present-moment physical sensation, and using sound to activate the parasympathetic nervous system when cognitive energy is lowest.",
  "This is not a wellness app. It is a structured offboarding system for the mind.",
].join("\n\n");
