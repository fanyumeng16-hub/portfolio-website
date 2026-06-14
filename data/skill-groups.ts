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
    number: "01",
    title: "UX Research & Design",
    subtitle: "Research, systems, and product thinking",
    skills: [
      "User Research",
      "Journey Mapping",
      "Service Blueprint",
      "Usability Testing",
      "Information Architecture",
      "Conversational UX",
      "Figma",
      "Adobe Creative Suite",
    ],
  },
  {
    id: "immersive",
    number: "02",
    title: "Immersive & Spatial Interaction",
    subtitle: "XR, AR, installation, and real-time systems",
    skills: [
      "XR / MR Experience",
      "AR Interaction",
      "Spatial UI",
      "Installation Design",
      "Unity",
      "Game-Based Interaction",
      "Narrative Systems",
      "Arduino",
    ],
  },
  {
    id: "modeling",
    number: "03",
    title: "3D & Physical Prototyping",
    subtitle: "Modeling, fabrication, and hardware",
    skills: [
      "Rhino",
      "Nomad Sculpt",
      "FDM Slicing",
      "Cura",
      "Physical Prototyping",
      "Hardware Integration",
    ],
  },
];
