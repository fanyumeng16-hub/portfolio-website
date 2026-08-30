import { ProjectTagId, getTagsFromIds } from "./project-tags";

export type Project = {
  id: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  navLabel: string;
  navHint: string;
  navType: string;
  tagIds: ProjectTagId[];
  tags: string[];
  category: string;
  description: string;
  bullets: string[];
  image: string;
  imageFit?: "cover" | "contain";
  hidden?: boolean;
};

function withTags<T extends Omit<Project, "tags">>(project: T): Project {
  return { ...project, tags: getTagsFromIds(project.tagIds) };
}

export const projects: Project[] = [
  withTags({
    id: "trackly",
    number: "003",
    year: "2026",
    title: "Trackly",
    subtitle: "Package Tracking Experience",
    navLabel: "Trackly",
    navHint: "Package Tracking",
    navType: "APP",
    tagIds: ["ui-ux", "logistics", "delivery"],
    category: "UI/UX / Logistics / Delivery",
    description:
      "A package tracking experience focused on rebuilding trust across the last-mile delivery journey, from research through mobile and locker interfaces.",
    bullets: ["Delivery UX research", "Trust-centered product design", "Mobile & locker flows"],
    image: "/images/Trackly.jpg",
  }),
  withTags({
    id: "medical",
    number: "001",
    year: "2026",
    title: "MAYO CLINIC × SCADpro",
    subtitle: "Mixed Reality Medical Training System",
    navLabel: "Mayo Clinic",
    navHint: "Mixed Reality Training",
    navType: "XR/MR",
    tagIds: ["branding", "ui-ux", "xr-mr", "unity"],
    category: "Branding / UI/UX / XR/MR / Unity",
    description:
      "A Mayo Clinic × SCADpro mixed reality project exploring clinical training workflows, hardware integration, and immersive BLS assessment design.",
    bullets: ["Mixed reality training", "Clinical assessment", "Medical interaction design"],
    image: "/images/medical.jpg",
  }),
  withTags({
    id: "unifeast",
    number: "010",
    year: "2026",
    title: "UniFeast",
    subtitle: "Feast with your Friends",
    navLabel: "UniFeast",
    navHint: "Social Dining",
    navType: "APP",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A campus social dining app that helps friends discover meals, share food moments, and plan group feasts together.",
    bullets: ["Social feed design", "Group dining flows", "Mobile product UI"],
    image: "/images/UniFeast/1.png",
    imageFit: "cover",
  }),
  withTags({
    id: "massie",
    number: "004",
    year: "2025",
    title: "MASSIE HERITAGE CENTER × ScadServe",
    subtitle: "City Plan Exhibit & Visitor Experience",
    navLabel: "Massie",
    navHint: "Visitor Experience",
    navType: "WEB",
    tagIds: ["branding", "ui-ux"],
    category: "Branding / UI/UX",
    description:
      "A Massie Heritage Center × ScadServe collaboration reimagining the City Plan Exhibit: grounded in visitor research, Savannah Grid interpretation, and a Premium Package concept for wayfinding and guided engagement.",
    bullets: [
      "Premium Package concept",
      "Savannah Grid interpretation",
      "Visitor journey research",
    ],
    image: "/images/Massie.jpg",
  }),
  withTags({
    id: "outloop",
    number: "002",
    year: "2026",
    title: "Outloop",
    subtitle: "Multi-Modal Mind Offboarding System",
    navLabel: "Outloop",
    navHint: "Mind Offboarding",
    navType: "APP",
    tagIds: ["ui-ux", "wellness", "offboarding"],
    category: "UI/UX / Wellness / Offboarding",
    description:
      "A multi-modal intervention system for the hour between work and sleep, helping Gen Z students disengage from rumination loops through neuroscience-informed interaction design.",
    bullets: [
      "Triple Network Model",
      "Cognitive offboarding",
      "Multi-modal intervention",
    ],
    image: "/images/outloop.png",
    imageFit: "cover",
    hidden: true,
  }),
  withTags({
    id: "horizon",
    number: "006",
    year: "2026",
    title: "Horizon",
    subtitle: "Mars Exploration Simulation",
    navLabel: "Horizon",
    navHint: "Mars Simulation",
    navType: "APP",
    tagIds: ["xr-mr", "unity", "ui-ux"],
    category: "XR/MR / Unity / UI/UX",
    description:
      "A high-fidelity XR simulation grounded in planetary science, transforming complex extraterrestrial workflows into an immersive training experience.",
    bullets: ["Unity scene building", "XR interaction design", "Scientific simulation"],
    image: "/images/horizon.jpg",
    imageFit: "cover",
  }),
  withTags({
    id: "universal",
    number: "007",
    year: "2025",
    title: "UNIVERSAL × SCADpro",
    subtitle: "Mardi Gras Installation & AR Experience",
    navLabel: "Universal",
    navHint: "Mardi Gras AR",
    navType: "AR",
    tagIds: ["branding", "xr-mr", "ui-ux"],
    category: "Branding / XR/MR / UI/UX",
    description:
      "A Universal × SCADpro Mardi Gras project combining physical installations, augmented reality, and guest UI for immersive festival experiences.",
    bullets: ["Mardi Gras installation", "AR interaction", "Guest-facing UI"],
    image: "/images/universal.jpg",
    hidden: true,
  }),
  withTags({
    id: "heartbits",
    number: "005",
    year: "2026",
    title: "Heartbits",
    subtitle: "Interactive Rehabilitation Experience",
    navLabel: "Heartbits",
    navHint: "Rehabilitation Play",
    navType: "APP",
    tagIds: ["sensor", "ui-ux"],
    category: "Sensor / UI/UX",
    description:
      "An interactive rehabilitation system that turns post-surgery recovery into cooperative family play through safe movement guidance and emotional support.",
    bullets: ["Healthcare interaction", "Family-centered UX", "Motion-guided recovery"],
    image: "/images/heartbits.jpg",
    hidden: true,
  }),
  withTags({
    id: "ora",
    number: "008",
    year: "2026",
    title: "ORA",
    subtitle: "Speculative Wellness Critique",
    navLabel: "ORA",
    navHint: "Wellness Critique",
    navType: "WEB",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "A speculative critique disguised as a wellness product, imagining a device that manufactures flow on demand and asking who owns the silence when calm becomes a subscription.",
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
    navLabel: "Arcana",
    navHint: "AI Tarot",
    navType: "APP",
    tagIds: ["ui-ux"],
    category: "UI/UX",
    description:
      "An AI-powered tarot experience blending symbolic ritual with conversational intelligence, guiding reflection through digitally reimagined readings.",
    bullets: ["AI tarot readings", "Conversational UX", "Symbolic interface"],
    image: "/images/arcana.jpg",
    hidden: true,
  }),
];

export const visibleProjects = projects.filter((project) => !project.hidden);

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
