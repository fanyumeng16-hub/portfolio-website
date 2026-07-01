import type { CaseSpecRow } from "@/data/medical-content";

export const horizonHero = {
  subtitle: "UI + Spatial + Interaction Design",
  intro:
    "A high-immersion VR experience that makes the invisible hazards of Mars (radiation, pressure loss, oxygen depletion) physically perceivable. Built for the general public, not astronaut trainees.",
};

export const horizonSpec: CaseSpecRow[] = [
  { label: "Platform", value: "Meta Quest 3" },
  { label: "Engine", value: "Unity" },
  { label: "Duration", value: "3 Weeks" },
  { label: "Team", value: "4 Persons" },
];

export const horizonOverviewBody =
  "The journey begins within the Habitat, where users are briefed on mission objectives and acclimated to the environmental context. This guided preparation transitions into Surface Travel, where users navigate the Martian terrain through a rover. Rather than a simplified mechanic, the control system adapts the logic of real extraterrestrial vehicle operations, accounting for reduced gravity, complex terrain, and mission pressure.";

export const horizonOverviewVideo = {
  type: "youtube" as const,
  videoId: "DhFCdTm7l5Q",
  title: "Horizon Mars Exploration Simulation",
};
