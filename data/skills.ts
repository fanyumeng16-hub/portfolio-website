export type SkillCategory = {
  id: string;
  label: string;
};

export type SkillCategoryId = "ux" | "immersive" | "modeling";

export type SkillNode = {
  id: string;
  label: string;
  category: SkillCategoryId;
  icon: string;
  x: number;
  y: number;
  isHub?: boolean;
};

export type SkillEdge = {
  from: string;
  to: string;
};

export type SkillZone = {
  id: SkillCategoryId;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export const skillCategories: SkillCategory[] = [
  { id: "ux", label: "UX Research & Design" },
  { id: "immersive", label: "Physical & Immersive Interaction" },
  { id: "modeling", label: "3D Modeling & Physical Prototyping" },
];

export const skillZones: SkillZone[] = [
  { id: "ux", cx: 252, cy: 142, rx: 225, ry: 108 },
  { id: "immersive", cx: 94, cy: 302, rx: 94, ry: 112 },
  { id: "modeling", cx: 418, cy: 302, rx: 96, ry: 112 },
];

export const skillNodes: SkillNode[] = [
  {
    id: "ux",
    label: "UX Research & Design",
    category: "ux",
    icon: "ux",
    x: 252,
    y: 58,
    isHub: true,
  },
  {
    id: "immersive",
    label: "Physical & Immersive Interaction",
    category: "immersive",
    icon: "immersive",
    x: 86,
    y: 334,
    isHub: true,
  },
  {
    id: "modeling",
    label: "3D Modeling & Physical Prototyping",
    category: "modeling",
    icon: "modeling",
    x: 418,
    y: 334,
    isHub: true,
  },

  { id: "user-research", label: "User Research", category: "ux", icon: "research", x: 114, y: 130 },
  { id: "journey-mapping", label: "Journey Mapping", category: "ux", icon: "journey", x: 158, y: 146 },
  { id: "ecosystem-mapping", label: "Ecosystem Mapping", category: "ux", icon: "ecosystem", x: 202, y: 158 },
  { id: "service-blueprint", label: "Service Blueprint", category: "ux", icon: "blueprint", x: 248, y: 166 },
  { id: "usability-testing", label: "Usability Testing", category: "ux", icon: "testing", x: 298, y: 158 },
  { id: "figma", label: "Figma", category: "ux", icon: "figma", x: 130, y: 194 },
  { id: "adobe", label: "Adobe Creative Suite", category: "ux", icon: "adobe", x: 186, y: 206 },
  { id: "after-effects", label: "After Effects", category: "ux", icon: "after-effects", x: 242, y: 212 },
  { id: "photoshop", label: "Photoshop", category: "ux", icon: "photoshop", x: 302, y: 202 },

  { id: "game-interaction", label: "Game-Based Interaction", category: "immersive", icon: "game", x: 34, y: 238 },
  { id: "narrative-systems", label: "Narrative Systems", category: "immersive", icon: "narrative", x: 58, y: 282 },
  { id: "game-ui", label: "Game UI Integration", category: "immersive", icon: "ui", x: 74, y: 368 },
  { id: "unity", label: "Unity", category: "immersive", icon: "unity", x: 118, y: 214 },
  { id: "processing", label: "Processing", category: "immersive", icon: "processing", x: 134, y: 274 },
  { id: "arduino", label: "Arduino", category: "immersive", icon: "arduino", x: 110, y: 378 },

  { id: "fdm-slicing", label: "FDM Slicing", category: "modeling", icon: "slicing", x: 470, y: 238 },
  { id: "rhino", label: "Rhino", category: "modeling", icon: "rhino", x: 434, y: 274 },
  { id: "nomad-sculpt", label: "Nomad Sculpt", category: "modeling", icon: "sculpt", x: 466, y: 316 },
  { id: "cura", label: "Cura", category: "modeling", icon: "cura", x: 404, y: 368 },
];

const uxSkills = [
  "user-research",
  "journey-mapping",
  "ecosystem-mapping",
  "service-blueprint",
  "usability-testing",
  "figma",
  "adobe",
  "after-effects",
  "photoshop",
];

const immersiveSkills = [
  "game-interaction",
  "narrative-systems",
  "game-ui",
  "unity",
  "processing",
  "arduino",
];

const modelingSkills = ["fdm-slicing", "rhino", "nomad-sculpt", "cura"];

function hubEdges(hubId: string, skillIds: string[]): SkillEdge[] {
  return skillIds.map((skillId) => ({ from: hubId, to: skillId }));
}

function chainEdges(ids: string[]): SkillEdge[] {
  return ids.slice(0, -1).map((id, index) => ({
    from: id,
    to: ids[index + 1],
  }));
}

export const skillEdges: SkillEdge[] = [
  ...hubEdges("ux", uxSkills),
  ...hubEdges("immersive", immersiveSkills),
  ...hubEdges("modeling", modelingSkills),
  ...chainEdges(uxSkills.slice(0, 5)),
  ...chainEdges(uxSkills.slice(5)),
  ...chainEdges(immersiveSkills.slice(0, 3)),
  ...chainEdges(immersiveSkills.slice(3)),
  ...chainEdges(modelingSkills),
];

export function getSkillNode(id: string) {
  const node = skillNodes.find((item) => item.id === id);
  if (!node) throw new Error(`Unknown skill node: ${id}`);
  return node;
}
