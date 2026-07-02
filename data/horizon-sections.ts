export type HorizonResearchInsight = {
  source: string;
  text: string;
};

export type HorizonContextHighlight = {
  stat: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type HorizonDecision = {
  label: string;
  title: string;
  desc: string;
};

export type HorizonFlowStep = {
  id: string;
  label: string;
  desc: string;
  optional?: boolean;
};

export type HorizonPhaseImage = {
  src: string;
  alt: string;
};

export type HorizonPhase = {
  n: string;
  title: string;
  objective: string;
  interaction: string;
  environment: string;
  summary: string;
  images: HorizonPhaseImage[];
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

export type HorizonTestingMetaItem = {
  label: string;
  value: string;
};

export type HorizonTestingFinding = {
  id: string;
  value: string;
  label: string;
  note: string;
};

export type HorizonTestingQuote = {
  text: string;
  detail: string;
};

export type HorizonTestingAdjustment = {
  id: string;
  title: string;
  finding: string;
  change: string;
};

export const horizonMapImage = {
  src: "/images/horizon-1.jpg",
  alt: "Horizon Mars mission map with operational zones",
};

export const horizonIntroduction = {
  headline: "Between NASA and YouTube",
  audience:
    "Target audience: science museum visitors, space enthusiasts, people who deserve to feel what planetary exploration actually weighs.",
  highlights: [
    {
      stat: "01",
      label: "Existing Market",
      description:
        "NASA-grade training systems built for astronauts, or low-immersion WebXR experiences that feel like a 360° documentary.",
      image: "/images/Between NASA and YouTube 1.png",
      imageAlt: "Existing Mars VR market reference showing low-immersion canyon landscape",
    },
    {
      stat: "02",
      label: "Our Position",
      description:
        "High immersion, scientific accuracy, and accessibility for the general public. The space between the extremes.",
      image: "/images/Between NASA and YouTube2.png",
      imageAlt: "Horizon positioning between NASA-grade training and low-immersion WebXR",
    },
    {
      stat: "03",
      label: "Design Focus",
      description:
        "Make invisible Martian hazards physically perceivable for museum audiences, not astronaut trainees.",
      image: "/images/Between NASA and YouTube3.png",
      imageAlt: "Horizon design focus on perceivable Martian hazards for museum visitors",
    },
  ] satisfies HorizonContextHighlight[],
};

export const horizonGoal = {
  problem:
    "The most dangerous conditions on Mars (radiation, pressure loss, oxygen depletion) are invisible and abstract. Existing media tells you they exist. Nothing makes you feel them.",
  problemEmphasis: "Nothing makes you feel them.",
  goal: "Design a high-immersion VR experience that makes these invisible hazards physically perceivable for general public audiences, not astronaut trainees.",
  goalHighlight: "physically perceivable",
  image: "/images/Goal.png",
  imageAlt: "Horizon goal diagram contrasting abstract hazards with embodied VR perception",
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
      label: "01",
      title: "Embody the invisible",
      desc: "Use VR's presence to make unfelt dangers felt. Radiation, pressure, and oxygen are each translated into a perceptible spatial signal.",
    },
    {
      label: "02",
      title: "Diegetic everything",
      desc: "All UI lives inside the world. Nothing breaks the surface. HUD anchored in helmet. Controls on the wrist. Consoles in the habitat.",
    },
    {
      label: "03",
      title: "Real physics, real scale",
      desc: "38% Martian gravity. Smooth locomotion. Distance means something. Scale is the medium; it cannot be faked or compressed.",
    },
    {
      label: "04",
      title: "Agency over punishment",
      desc: "Users choose to take risks. The weight comes from the decision, not the penalty. Consequence is earned, never imposed.",
    },
  ] satisfies HorizonDecision[],
};

export const horizonFlow: {
  intro: string;
  steps: HorizonFlowStep[];
} = {
  intro:
    "The experience moves from station briefing into two surface missions, then closes with a debrief back at Mars Station.",
  steps: [
    {
      id: "lobby",
      label: "Lobby",
      desc: "Orientation & mission briefing",
    },
    { id: "p1", label: "Rover Driving", desc: "Traverse the surface route" },
    { id: "p2", label: "Surface Collection", desc: "Gather mission samples" },
    { id: "return", label: "Station Return", desc: "Mission debrief" },
  ],
};

export const horizonPhases: HorizonPhase[] = [
  {
    n: "01",
    title: "Lobby",
    objective:
      "Receive mission context and understand the operational plan before leaving the habitat.",
    interaction:
      "Review mission objectives, environmental readouts, and briefing materials at the station console.",
    environment: "Controlled interior. Systems nominal. Full briefing available.",
    summary:
      "Players orient themselves inside Mars Station, review the mission scope, and prepare for the surface operations ahead.",
    images: [
      {
        src: "/images/horizon-2.jpg",
        alt: "Horizon Mars Station exterior overview",
      },
      {
        src: "/images/horizon-3.jpg",
        alt: "Horizon Mars Station lobby interior before surface deployment",
      },
    ],
  },
  {
    n: "02",
    title: "Rover Driving",
    objective:
      "Navigate the rover across the Martian surface to reach assigned mission zones.",
    interaction:
      "Drive with helmet HUD guidance and mission waypoints on the wrist panel.",
    environment: "Open terrain. Moderate dust. Oxygen reserves stable during transit.",
    summary:
      "Players traverse exposed Martian terrain in the rover, using spatial UI to stay oriented as they move between surface objectives.",
    images: [
      {
        src: "/images/horizon-4.jpg",
        alt: "Horizon rover driving mission on the Martian surface",
      },
      {
        src: "/images/horizon-11.jpg",
        alt: "VR user playtesting Horizon Mars frontier interaction zone",
      },
    ],
  },
  {
    n: "03",
    title: "Surface Collection",
    objective:
      "Locate and collect geological samples across the assigned surface zone.",
    interaction:
      "Geological scanner: trigger, aim, hold for reading and sample confirmation.",
    environment: "Dust haze building. UV index climbing. Oxygen at 72%.",
    summary:
      "On the open Martian surface, players use a geological scanner to locate, read, and collect samples while environmental conditions begin to shift.",
    images: [
      {
        src: "/images/horizon-5.jpg",
        alt: "Horizon resource collection and sample extraction",
      },
      {
        src: "/images/horizon-process-geological-scan.jpg",
        alt: "Horizon geological sample scanner with distance markers",
      },
    ],
  },
  {
    n: "04",
    title: "Station Return",
    objective:
      "Return to Mars Station and complete the mission debrief with collected data.",
    interaction:
      "Upload findings at the station console and review mission performance with the crew.",
    environment: "Interior systems active. Mission data syncing. Debrief in progress.",
    summary:
      "Players return to the habitat, review what they gathered on the surface, and close the mission with a structured debrief at the station.",
    images: [
      {
        src: "/images/horizon-6.jpg",
        alt: "Horizon Mars Station exterior at mission return",
      },
      {
        src: "/images/horizon-9.jpg",
        alt: "Horizon VR rover interface and driving experience",
      },
      {
        src: "/images/horizon-7.jpg",
        alt: "Horizon station interior during mission debrief",
      },
      {
        src: "/images/horizon-8.jpg",
        alt: "Horizon station communications and mission reporting interface",
      },
    ],
  },
];

export const horizonUIComponents: HorizonUIComponent[] = [
  {
    id: "hud",
    title: "Helmet HUD",
    desc: "Real-time O₂, radiation, and temperature overlay: always readable within Quest 3's safe FOV zone, never obstructive.",
    tag: "Always-on · Diegetic",
    image: "/images/horizon-10.jpg",
    imageAlt: "Horizon first-person driving experience with helmet HUD",
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

export type HorizonInteractionPoint = {
  title: string;
  text: string;
};

export const horizonInteraction = {
  headline: "Interaction Design",
  points: [
    {
      title: "Dual Input & Task Flow",
      text: "Every interaction supports both controller and hand tracking input. Tasks move through assigned, active, and resolved states, communicated through visual signals only, without audio dependency for museum environments.",
    },
    {
      title: "Controller Input",
      text: "Controller input uses button triggers with haptic confirmation: precise, binary feedback with low latency.",
    },
    {
      title: "Hand Tracking",
      text: "Hand tracking relies on spatial gesture recognition, where visual feedback substitutes for haptics: higher presence, lower precision.",
    },
    {
      title: "Diegetic Objects",
      text: "Geological scanners, resource collectors, and station systems each operate as physical diegetic objects: approached, activated, and read in the world.",
    },
  ] satisfies HorizonInteractionPoint[],
  image: "/images/horizon-3.jpg",
  imageAlt: "Horizon Mars Station lobby interior",
};

export const horizonTesting = {
  headline: "User Testing",
  methodology:
    "Internal team testing and external trial sessions with invited users. Each session included an unguided first use phase, task based scenarios, and a brief post session interview.",
  meta: [
    { label: "Participants", value: "N=12" },
    { label: "Team mix", value: "4 internal / 8 external" },
    { label: "Session length", value: "15 to 20 min" },
  ] satisfies HorizonTestingMetaItem[],
  findings: [
    {
      id: "completion",
      value: "92%",
      label: "Task completion",
      note: "Failures were attributed to controller tracking issues, not UI comprehension.",
    },
    {
      id: "legibility",
      value: "11/12",
      label: "UI legibility",
      note: "Identified the primary UI element's function within 10 seconds, unprompted.",
    },
    {
      id: "gesture",
      value: "9/12",
      label: "Gesture discovery",
      note: "Activated the wrist panel within the first 3 attempts, average time under 8 seconds.",
    },
    {
      id: "confidence",
      value: "4.3/5",
      label: "Interface confidence",
      note: "Self reported score collected immediately after the unguided first use phase.",
    },
  ] satisfies HorizonTestingFinding[],
  quote: {
    text: "Part of the environment",
    detail:
      "A recurring theme in post session interviews: participants described the interface as feeling embedded in the world rather than overlaid on top of it.",
  } satisfies HorizonTestingQuote,
  adjustments: {
    headline: "Design Adjustments",
    intro:
      "Findings from three rounds of iteration informed the following changes before final build.",
    items: [
      {
        id: "hitbox",
        title: "Wrist panel hitbox",
        finding: "Controller tracking caused missed grabs during core wrist panel tasks.",
        change:
          "Increased the activation hitbox by roughly 30%, reducing missed interactions in the next round.",
      },
      {
        id: "cueing",
        title: "Peripheral cueing",
        finding:
          "One participant hesitated before the first wrist glance due to weak peripheral cueing.",
        change:
          "Added a subtle edge light pulse on spawn, fading after first use to avoid persistent HUD read.",
      },
      {
        id: "diegetic",
        title: "Diegetic consistency",
        finding:
          "Participants praised the UI for feeling embedded in the environment rather than overlaid.",
        change:
          "Preserved material and lighting choices instead of adding higher contrast chrome that would break diegesis.",
      },
      {
        id: "onboarding",
        title: "Environmental onboarding",
        finding:
          "External participants scored slightly lower on first exposure than internal team members.",
        change:
          "Introduced the wrist panel through incidental environmental storytelling instead of a tutorial prompt.",
      },
    ] satisfies HorizonTestingAdjustment[],
  },
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
