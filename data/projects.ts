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
  hidden?: boolean;
};

function withTags<T extends Omit<Project, "tags">>(project: T): Project {
  return { ...project, tags: getTagsFromIds(project.tagIds) };
}

export const projects: Project[] = [
  withTags({
    id: "medical",
    number: "001",
    year: "2025",
    title: "MAYO CLINIC × SCADpro",
    subtitle: "Mixed Reality Medical Training System",
    tagIds: ["xr-mr", "unity", "ui-ux"],
    category: "XR/MR / Unity / UI/UX",
    description:
      "A Mayo Clinic × SCADpro mixed reality project exploring clinical training workflows, hardware integration, and immersive BLS assessment design.",
    bullets: ["Mixed reality training", "Clinical assessment", "Medical interaction design"],
    image: "/images/medical.jpg",
  }),
  withTags({
    id: "heartbits",
    number: "002",
    year: "2026",
    title: "Heartbits",
    subtitle: "Interactive Rehabilitation Experience",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "An interactive rehabilitation system that turns post-surgery recovery into cooperative family play through safe movement guidance and emotional support.",
    bullets: ["Healthcare interaction", "Family-centered UX", "Motion-guided recovery"],
    image: "/images/heartbits.jpg",
  }),
  withTags({
    id: "outloop",
    number: "003",
    year: "2026",
    title: "Outloop",
    subtitle: "Multi-Modal Mind Offboarding System",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A multi-modal intervention system for the hour between work and sleep — helping Gen Z students disengage from rumination loops through neuroscience-informed interaction design.",
    bullets: [
      "Triple Network Model",
      "Cognitive offboarding",
      "Multi-modal intervention",
    ],
    image: "/images/outloop.png",
  }),
  withTags({
    id: "massie",
    number: "004",
    year: "2025",
    title: "MASSIE HERITAGE CENTER × ScadServe",
    subtitle: "City Plan Exhibit & Visitor Experience",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A Massie Heritage Center × ScadServe collaboration reimagining the City Plan Exhibit—grounded in visitor research, Savannah Grid interpretation, and a Premium Package concept for wayfinding and guided engagement.",
    bullets: [
      "Premium Package concept",
      "Savannah Grid interpretation",
      "Visitor journey research",
    ],
    image: "/images/Massie.jpg",
  }),
  withTags({
    id: "trackly",
    number: "005",
    year: "2026",
    title: "Trackly",
    subtitle: "Habit & Goal Tracking Experience",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A habit and goal tracking experience focused on lightweight daily routines, clear momentum, and mobile UX that reduces friction in long-term consistency.",
    bullets: ["Habit tracking UX", "Goal management flows", "Mobile product design"],
    image: "/images/Trackly.jpg",
  }),
  withTags({
    id: "horizon",
    number: "006",
    year: "2026",
    title: "Horizon",
    subtitle: "Mars Exploration Simulation",
    tagIds: ["xr-mr", "unity", "ui-ux"],
    category: "XR/MR / Unity / UI/UX",
    description:
      "A high-fidelity XR simulation grounded in planetary science, transforming complex extraterrestrial workflows into an immersive training experience.",
    bullets: ["Unity scene building", "XR interaction design", "Scientific simulation"],
    image: "/images/horizon.jpg",
  }),
  withTags({
    id: "universal",
    number: "007",
    year: "2025",
    title: "UNIVERSAL × SCADpro",
    subtitle: "Mardi Gras Installation & AR Experience",
    tagIds: ["xr-mr", "ui-ux"],
    category: "XR/MR / UI/UX",
    description:
      "A Universal × SCADpro Mardi Gras project combining physical installations, augmented reality, and guest UI for immersive festival experiences.",
    bullets: ["Mardi Gras installation", "AR interaction", "Guest-facing UI"],
    image: "/images/universal.jpg",
    hidden: true,
  }),
  withTags({
    id: "ora",
    number: "008",
    year: "2026",
    title: "ORA",
    subtitle: "Speculative Wellness Critique",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A speculative critique disguised as a wellness product—imagining a device that manufactures flow on demand and asking who owns the silence when calm becomes a subscription.",
    bullets: [
      "Critical design narrative",
      "Speculative product fiction",
      "Attention economy critique",
    ],
    image: "/images/ORA.jpg",
    hidden: true,
  }),
  withTags({
    id: "arcana",
    number: "009",
    year: "2025",
    title: "The Arcana",
    subtitle: "AI Tarot Experience",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "An AI-powered tarot experience blending symbolic ritual with conversational intelligence—guiding reflection through digitally reimagined readings.",
    bullets: ["AI tarot readings", "Conversational UX", "Symbolic interface"],
    image: "/images/arcana.jpg",
    hidden: true,
  }),
];

export const visibleProjects = projects.filter((project) => !project.hidden);

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
