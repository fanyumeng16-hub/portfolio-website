export type MarsMapHotspot = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  width: number;
  height: number;
  annotationAlign: "left" | "right" | "top";
};

export const horizonMapHotspots: MarsMapHotspot[] = [
  {
    id: "station",
    label: "Mars Station",
    description:
      "The central operational hub for mission coordination, crew operations, and long-term habitation across the Martian surface.",
    x: 0.812,
    y: 0.074,
    width: 0.128,
    height: 0.248,
    annotationAlign: "left",
  },
  {
    id: "shelter",
    label: "Emergency Shelter",
    description:
      "A backup habitat module designed for emergency protocols, safety redundancy, and rapid response during mission-critical events.",
    x: 0.318,
    y: 0.288,
    width: 0.128,
    height: 0.248,
    annotationAlign: "right",
  },
  {
    id: "resource",
    label: "Resource Collection Area",
    description:
      "A field operations zone for scouting terrain, identifying resource-rich sites, and collecting geological samples under mission pressure.",
    x: 0.445,
    y: 0.66,
    width: 0.128,
    height: 0.248,
    annotationAlign: "top",
  },
];
