import { ProjectTagId, getTagsFromIds } from "./project-tags";

export type Project = {
  id: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  tagIds: ProjectTagId[];
  tags: string[];
  category: string;
  description: string;
  bullets: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "horizon",
    number: "001",
    year: "2026",
    title: "Horizon",
    subtitle: "Mars Exploration Simulation",
    tagIds: ["xr-mr", "unity", "communication", "ux"],
    tags: getTagsFromIds(["xr-mr", "unity", "communication", "ux"]),
    category: "XR / MR / Unity / UX & Interaction / Scientific Communication",
    description:
      "A high-fidelity XR simulation grounded in planetary science, transforming complex extraterrestrial workflows into an immersive training experience.",
    bullets: ["Unity scene building", "XR interaction design", "Scientific simulation"],
    image: "/images/horizon.jpg",
  },
  {
    id: "ora",
    number: "002",
    year: "2026",
    title: "ORA",
    subtitle: "Speculative Wellness Critique",
    tagIds: ["speculative", "healthcare", "ux"],
    tags: getTagsFromIds(["speculative", "healthcare", "ux"]),
    category: "Speculative Design / Healthcare & Wellness / UX",
    description:
      "A speculative critique disguised as a wellness product—imagining a device that manufactures flow on demand and asking who owns the silence when calm becomes a subscription.",
    bullets: [
      "Critical design narrative",
      "Speculative product fiction",
      "Attention economy critique",
    ],
    image: "/images/ORA.jpg",
  },
  {
    id: "medical",
    number: "003",
    year: "2025",
    title: "MAYO CLINIC × SCADpro",
    subtitle: "Mixed Reality Medical Training System",
    tagIds: ["xr-mr", "branding", "ux"],
    tags: getTagsFromIds(["xr-mr", "branding", "ux"]),
    category: "XR / MR / Branding / UX & Interaction",
    description:
      "A Mayo Clinic × SCADpro mixed reality project exploring brand consistency, medical training workflows, and immersive interaction design.",
    bullets: ["Mixed reality training", "Branding system", "Medical interaction design"],
    image: "/images/medical.jpg",
  },
  {
    id: "heartbits",
    number: "004",
    year: "2026",
    title: "Heartbits",
    subtitle: "Interactive Rehabilitation Experience",
    tagIds: ["healthcare", "ux"],
    tags: getTagsFromIds(["healthcare", "ux"]),
    category: "Healthcare & Wellness / UX & Interaction",
    description:
      "An interactive rehabilitation system that turns post-surgery recovery into cooperative family play through safe movement guidance and emotional support.",
    bullets: ["Healthcare interaction", "Family-centered UX", "Motion-guided recovery"],
    image: "/images/heartbits.jpg",
  },
  {
    id: "trackly",
    number: "005",
    year: "2026",
    title: "Trackly",
    subtitle: "Habit & Goal Tracking Experience",
    tagIds: ["ux"],
    tags: getTagsFromIds(["ux"]),
    category: "UX & Interaction / Product Design",
    description:
      "A habit and goal tracking experience focused on lightweight daily routines, clear momentum, and mobile UX that reduces friction in long-term consistency.",
    bullets: ["Habit tracking UX", "Goal management flows", "Mobile product design"],
    image: "/images/Trackly.jpg",
  },
];
