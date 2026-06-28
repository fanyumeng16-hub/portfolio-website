import type { CaseSpecRow } from "@/data/medical-content";

export const heartbitsHero = {
  subtitle: "Interactive Rehabilitation Experience",
  intro:
    "Heartbits is a family-centered rehabilitation experience that transforms repetitive rotator cuff recovery into collaborative gameplay. By combining physical therapy movements with emotional support and shared interaction, the system encourages long-term engagement while reducing anxiety throughout the rehabilitation journey.",
};

export const heartbitsSpec: CaseSpecRow[] = [
  {
    label: "Role",
    value: "UX Design / Interaction Design / Visual Guidance",
  },
  {
    label: "Tools",
    value: "Figma / Interactive Prototype / Motion Design",
  },
  {
    label: "Focus",
    value:
      "Interactive Rehabilitation / Emotional Support / Motivation Sustainability",
  },
];

export const heartbitsOverviewBody =
  "Rotator cuff rehabilitation often requires months of repetitive exercise, making it difficult for patients to stay motivated. Heartbits reimagines this process through an interactive game experience where rehabilitation movements directly control in-game actions. Rather than treating recovery as an isolated medical task, the experience invites family members to participate as cooperative players. Physical progress and emotional encouragement become part of the same interaction, creating a more engaging and sustainable recovery process.";

export const heartbitsOverviewVideo = {
  type: "local" as const,
  src: "/videos/heartbits-demo.mp4",
  alt: "Heartbits interactive rehabilitation experience demo",
};
