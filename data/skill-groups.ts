export type SkillGroup = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ux",
    number: "1",
    title: "UX Research & Design",
    subtitle: "Research / Systems / Visual Tools",
    skills: [
      "User Research",
      "Journey Mapping",
      "Ecosystem Mapping",
      "Service Blueprint",
      "Usability Testing",
      "Figma",
      "Adobe Creative Suite",
      "After Effects",
      "Photoshop",
    ],
  },
  {
    id: "immersive",
    number: "2",
    title: "Physical & Immersive Interaction",
    subtitle: "Games / Narrative / Embedded Systems",
    skills: [
      "Game-Based Interaction",
      "Narrative Systems",
      "Game UI Integration",
      "Unity",
      "Processing",
      "Arduino",
    ],
  },
  {
    id: "modeling",
    number: "3",
    title: "3D Modeling & Physical Prototyping",
    subtitle: "Sculpt / Print / Fabrication",
    skills: ["FDM Slicing", "Rhino", "Nomad Sculpt", "Cura"],
  },
];
