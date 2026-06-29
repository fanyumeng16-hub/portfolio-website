import type { CaseSpecRow } from "@/data/medical-content";

export const horizonHero = {
  subtitle: "Mars Exploration Simulation",
  intro:
    "Horizon is a high-fidelity XR simulation grounded in planetary science, designed to transform complex space agency procedures into an immersive training experience for living and working on the Red Planet.",
};

export const horizonSpec: CaseSpecRow[] = [
  {
    label: "Role",
    value: "Interaction Design / XR Experience / Visual System",
  },
  {
    label: "Tools",
    value: "Unity / Figma / XR Prototype",
  },
  {
    label: "Focus",
    value: "Training Simulation / Scientific Workflow / Immersive Learning",
  },
];

export const horizonOverviewBody =
  "The journey begins within the Habitat, where users are briefed on mission objectives and acclimated to the environmental context. This guided preparation transitions into Surface Travel, where users navigate the Martian terrain through a rover. Rather than a simplified mechanic, the control system adapts the logic of real extraterrestrial vehicle operations, accounting for reduced gravity, complex terrain, and mission pressure.";

export const horizonOverviewVideo = {
  type: "youtube" as const,
  videoId: "DhFCdTm7l5Q",
  title: "Horizon Mars Exploration Simulation",
};
