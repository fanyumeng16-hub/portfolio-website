export type HorizonResearchInsight = {
  source: string;
  text: string;
};

export type HorizonDecision = {
  title: string;
  desc: string;
};

export type HorizonFlowStep = {
  id: string;
  label: string;
  desc: string;
  optional?: boolean;
};

export type HorizonPhase = {
  n: string;
  title: string;
  objective: string;
  interaction: string;
  environment: string;
  image: string;
  imageAlt: string;
  optional?: boolean;
};

export type HorizonUIComponent = {
  id: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
  imageAlt: string;
};

export type HorizonFutureItem = {
  id: string;
  title: string;
  desc: string;
};

export const horizonMapImage = {
  src: "/images/horizon-1.jpg",
  alt: "Horizon Mars mission map with operational zones",
};

export const horizonIntroduction = {
  headline: "Between NASA and YouTube",
  market: {
    label: "Existing Market",
    text: "NASA-grade training systems built for astronauts, or low-immersion WebXR experiences that feel like a 360° documentary.",
    image: "/images/horizon-5.jpg",
    imageAlt: "Mars surface environment in existing VR experiences",
  },
  horizon: {
    label: "Horizon",
    text: "High immersion + scientific accuracy + accessible to the general public. The space between the extremes.",
    image: "/images/horizon-2.jpg",
    imageAlt: "Horizon Mars Station exterior overview",
  },
  audience:
    "Target audience: science museum visitors, space enthusiasts, people who deserve to feel what planetary exploration actually weighs.",
};

export const horizonGoal = {
  problem:
    "The most dangerous conditions on Mars (radiation, pressure loss, oxygen depletion) are invisible and abstract. Existing media tells you they exist. Nothing makes you feel them.",
  problemEmphasis: "Nothing makes you feel them.",
  goal: "Design a high-immersion VR experience that makes these invisible hazards physically perceivable for general public audiences, not astronaut trainees.",
  goalHighlight: "physically perceivable",
  image: "/images/horizon-4.jpg",
  imageAlt: "Horizon rover driving across the Martian surface",
};

export const horizonResearch = {
  headline: "Three research-backed reasons for VR",
  insights: [
    {
      source: "PMC · arXiv",
      text: "High-immersion VR significantly outperforms low-immersion environments in both declarative and procedural knowledge acquisition, while increasing presence, intrinsic motivation, and cognitive engagement.",
    },
    {
      source: "NASA · MIT Media Lab",
      text: "VR is the only medium that can reconstruct the scale, isolation, and embodied experience of planetary exploration.",
    },
    {
      source: "Research synthesis",
      text: "Invisible hazards need a spatial layer to become perceivable. A HUD overlay makes abstract parameters readable in context.",
    },
  ] satisfies HorizonResearchInsight[],
};

export const horizonDecisions = {
  intro: "Based on research, four design directions drive everything that follows.",
  items: [
    {
      title: "Embody the invisible",
      desc: "Use VR's presence to make unfelt dangers felt. Radiation, pressure, and oxygen are each translated into a perceptible spatial signal.",
    },
    {
      title: "Diegetic everything",
      desc: "All UI lives inside the world. Nothing breaks the surface. HUD anchored in helmet. Controls on the wrist. Consoles in the habitat.",
    },
    {
      title: "Real physics, real scale",
      desc: "38% Martian gravity. Smooth locomotion. Distance means something. Scale is the medium; it cannot be faked or compressed.",
    },
    {
      title: "Agency over punishment",
      desc: "Users choose to take risks. The weight comes from the decision, not the penalty. Consequence is earned, never imposed.",
    },
  ] satisfies HorizonDecision[],
};

export const horizonFlow = {
  intro:
    "The experience moves from orientation to escalating survival pressure, with an optional fourth phase that introduces unpredictable risk events.",
  steps: [
    { id: "lobby", label: "Lobby", desc: "Orientation & briefing" },
    { id: "tutorial", label: "Tutorial", desc: "Controls & HUD" },
    { id: "p1", label: "Phase 1", desc: "Surface deployment" },
    { id: "p2", label: "Phase 2", desc: "Hazard exposure" },
    { id: "p3", label: "Phase 3", desc: "Critical survival" },
    {
      id: "p4",
      label: "Phase 4",
      desc: "Optional risk event",
      optional: true,
    },
    { id: "return", label: "Station Return", desc: "Mission debrief" },
  ] satisfies HorizonFlowStep[],
};

export const horizonPhases: HorizonPhase[] = [
  {
    n: "01",
    title: "Deployment",
    objective:
      "Exit the habitat and establish a surface perimeter around the landing zone.",
    interaction: "Airlock hand-tracking sequence: grip, twist, push.",
    environment: "Clear visibility. Radiation nominal. Full O₂ reserves.",
    image: "/images/horizon-3.jpg",
    imageAlt: "Horizon Mars Station lobby interior before surface deployment",
  },
  {
    n: "02",
    title: "Survey",
    objective:
      "Locate and scan three geological sample sites across the surface zone.",
    interaction: "Geological scanner: trigger, aim, hold for reading.",
    environment: "Dust haze building. UV index climbing. Oxygen at 72%.",
    image: "/images/horizon-5.jpg",
    imageAlt: "Horizon geological survey and sample scanning on the surface",
  },
  {
    n: "03",
    title: "Extraction",
    objective:
      "Collect resource samples before suit integrity reaches critical threshold.",
    interaction:
      "Resource collector: proximity grab, capacity feedback on HUD.",
    environment: "Storm front approaching. Radiation elevated. O₂ at 41%.",
    image: "/images/horizon-4.jpg",
    imageAlt: "Horizon rover extraction mission on the Martian surface",
  },
  {
    n: "04",
    title: "Contingency",
    objective:
      "Respond to an unscheduled radiation burst or sandstorm event.",
    interaction:
      "Stay and complete the mission, or return to the habitat. The choice carries real consequences.",
    environment:
      "Radiation spike detected. Visibility 12m. O₂ critical.",
    image: "/images/horizon-6.jpg",
    imageAlt: "Horizon emergency shelter exterior during contingency event",
    optional: true,
  },
];

export const horizonUIComponents: HorizonUIComponent[] = [
  {
    id: "hud",
    title: "Helmet HUD",
    desc: "Real-time O₂, radiation, and temperature overlay: always readable within Quest 3's safe FOV zone, never obstructive.",
    tag: "Always-on · Diegetic",
    image: "/images/horizon-9.jpg",
    imageAlt: "Horizon VR rover interface with helmet HUD",
  },
  {
    id: "wrist",
    title: "Wrist Panel",
    desc: "Raise your arm to check mission status. A natural spatial gesture that keeps you present in the world.",
    tag: "Gesture · On-demand",
    image: "/images/horizon-8.jpg",
    imageAlt: "Horizon station communications and mission reporting interface",
  },
  {
    id: "map",
    title: "Navigation Map",
    desc: "Lightweight surface orientation on the wrist panel, sharing the same visual language as the station console map.",
    tag: "Wrist · Spatial",
    image: "/images/horizon-1.jpg",
    imageAlt: "Horizon Mars mission map with operational zones",
  },
  {
    id: "console",
    title: "Diegetic Console",
    desc: "Settings and system access live inside the world as physical consoles: approached, activated, and read in context.",
    tag: "Physical · In-world",
    image: "/images/horizon-7.jpg",
    imageAlt: "Horizon shelter system interior console",
  },
];

export const horizonInteraction = {
  headline: "Interaction Design",
  body: "Every interaction supports both controller and hand tracking input. Tasks move through assigned, active, and resolved states, communicated through visual signals only, without audio dependency for museum environments.",
  paragraphs: [
    "Controller input uses button triggers with haptic confirmation: precise, binary feedback with low latency.",
    "Hand tracking relies on spatial gesture recognition, where visual feedback substitutes for haptics: higher presence, lower precision.",
    "Geological scanners, resource collectors, and station systems each operate as physical diegetic objects: approached, activated, and read in the world.",
  ],
  image: "/images/horizon-3.jpg",
  imageAlt: "Horizon Mars Station lobby interior",
};

export const horizonTesting = {
  headline: "User Testing",
  body: "Internal team testing and external trial sessions with invited users. Initial testing confirmed the readability of the diegetic UI system and the intuitiveness of wrist-panel interaction without guided instruction.",
  outcome:
    "Diegetic UI proved immediately legible. Wrist gesture required no instruction to discover.",
  image: "/images/horizon-6.jpg",
  imageAlt: "Horizon shelter system exterior on the Martian surface",
  future: [
    {
      id: "usability",
      title: "Structured Usability Testing",
      desc: "Task completion rates, error rates, and presence measurement via IPQ scale, particularly for HUD readability under high-pressure conditions.",
    },
    {
      id: "locomotion",
      title: "Locomotion Comfort Calibration",
      desc: "Define safe velocity and acceleration parameters across user tolerance ranges for smooth locomotion with 38% gravity simulation.",
    },
    {
      id: "map",
      title: "Adaptive Map System",
      desc: "Expand beyond a fixed mission layout to procedural terrain or user-defined waypoints with a redesigned information architecture.",
    },
  ] satisfies HorizonFutureItem[],
};
