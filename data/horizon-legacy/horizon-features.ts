import { CaseFeature } from "@/components/CaseFeatures";

export const horizonFeatures = {
  heading: "Experience Modules",
  subheading: "Core simulation modules for Mars mission training",
  features: [
    {
      title: "Habitat Briefing",
      description:
        "The journey begins within the Habitat, where users are briefed on mission objectives and acclimated to the environmental context before stepping onto the surface.",
      icon: "habitat",
    },
    {
      title: "Surface Travel",
      description:
        "Users transition into hands-on exploration, navigating the Martian terrain through a rover designed to reflect the complexity of real extraterrestrial mobility.",
      icon: "rover",
    },
    {
      title: "Mission Operations",
      description:
        "Vehicle control adapts the logic of space agency procedures, accounting for reduced gravity, uneven terrain, and the pressure of mission-critical decisions.",
      icon: "operations",
    },
  ] satisfies CaseFeature[],
};
