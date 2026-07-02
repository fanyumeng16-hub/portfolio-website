export type HorizonProcessStep = {
  id: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
};

export type HorizonProcessGroup = {
  id: string;
  title: string;
  summary: string;
  columns?: 2 | 3 | 4;
  steps: HorizonProcessStep[];
};

/** Behind-the-scenes pipeline: terrain, station build, in-engine systems */
export const horizonProcessGroups: HorizonProcessGroup[] = [
  {
    id: "horizon-process-terrain",
    title: "Terrain Pipeline",
    summary:
      "Surface scale starts in sculpting, moves through shader exploration, then becomes a drivable Mars route in Unity.",
    columns: 3,
    steps: [
      {
        id: "terrain-sculpt",
        title: "Base Terrain Sculpt",
        caption: "Initial heightmap and landform blocking in Blender before export to Unity.",
        image: "/images/horizon-process-terrain-sculpt.jpg",
        imageAlt: "Blender terrain sculpt for the Horizon Mars surface",
      },
      {
        id: "terrain-hologram",
        title: "Hologram Shader Pass",
        caption: "URP hologram material used to validate elevation reads and contour clarity at scale.",
        image: "/images/horizon-process-hologram-shader.jpg",
        imageAlt: "Unity URP hologram shader preview of Mars terrain",
      },
      {
        id: "terrain-driving",
        title: "Spline Driving Route",
        caption: "Final terrain assembly with spline-based road stamping and XR rig placement for in-vehicle testing.",
        image: "/images/horizon-process-terrain-driving.jpg",
        imageAlt: "Unity Mars driving terrain with spline road and XR rig",
      },
    ],
  },
  {
    id: "horizon-process-station",
    title: "Station Build",
    summary:
      "Modular sci-fi facility assets are assembled into the Mars base, refuge interior, and mission support layout.",
    columns: 2,
    steps: [
      {
        id: "station-assembly",
        title: "Modular Hub Assembly",
        caption: "Sci-fi facility modules connected in-scene to form the station circulation spine.",
        image: "/images/horizon-process-station-assembly.jpg",
        imageAlt: "Unity scene assembling modular Horizon Mars station modules",
      },
      {
        id: "refuge-interior",
        title: "Refuge Interior",
        caption: "Living quarters, workstations, and support systems staged inside the habitat interior.",
        image: "/images/horizon-process-refuge-interior.jpg",
        imageAlt: "Horizon refuge interior with bunks and mission systems",
      },
      {
        id: "mars-base",
        title: "Mars Base on Surface",
        caption: "Domes, hangar, and rover bay integrated into the final surface environment.",
        image: "/images/horizon-process-mars-base.jpg",
        imageAlt: "Horizon Mars base with domes and rover hangar in Unity",
      },
      {
        id: "asset-layout",
        title: "Asset Integration",
        caption: "Environment props, rover, comms dish, and habitat pieces positioned for final scene polish.",
        image: "/images/horizon-process-asset-layout.jpg",
        imageAlt: "Horizon Mars base asset layout with rover and solar array",
      },
    ],
  },
  {
    id: "horizon-process-systems",
    title: "Systems & Interaction",
    summary:
      "In-engine interaction systems connect field scanning, vehicle operation, and headset playtesting.",
    columns: 3,
    steps: [
      {
        id: "geological-scan",
        title: "Geological Scanner",
        caption: "Distance-marked sample reads with material classification for the survey phase.",
        image: "/images/horizon-process-geological-scan.jpg",
        imageAlt: "Horizon geological sample scanner interface with distance markers",
      },
      {
        id: "driving-hud",
        title: "Driving HUD",
        caption: "Diegetic helmet HUD for O₂, radiation, and mission timing during surface traversal.",
        image: "/images/horizon-10.jpg",
        imageAlt: "Horizon first-person driving experience with helmet HUD",
      },
      {
        id: "vr-playtest",
        title: "VR Playtest",
        caption: "Headset testing at Site 42 interaction zone to validate spatial UI and mission prompts.",
        image: "/images/horizon-11.jpg",
        imageAlt: "VR user playtesting Horizon Mars frontier interaction zone",
      },
    ],
  },
];
