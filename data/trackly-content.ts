export type TracklyBoard = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

const base = "/images/trackly";

/** 01–05：完整设计板，直接铺图，不叠 HTML 文字 */
export const tracklyBoards: TracklyBoard[] = [
  {
    id: "trackly-hero",
    src: `${base}/Trackly01.png`,
    width: 1920,
    height: 1080,
    alt: "Trackly: We are here to track your package",
    priority: true,
  },
  {
    id: "trackly-goal",
    src: `${base}/Trackly02.png`,
    width: 1920,
    height: 1080,
    alt: "Trackly goal: caring about delivery experience",
  },
  {
    id: "trackly-problem",
    src: `${base}/Trackly03.png`,
    width: 1920,
    height: 1080,
    alt: "Research shows people feel distrustful throughout the delivery experience",
  },
  {
    id: "trackly-rq",
    src: `${base}/Trackly04.png`,
    width: 1920,
    height: 1042,
    alt: "Primary research question on last-mile delivery trust",
  },
  {
    id: "trackly-methodology",
    src: `${base}/Trackly05.png`,
    width: 1920,
    height: 3330,
    alt: "Research methodology and quantitative results",
  },
];

export const tracklyHeroBoard = tracklyBoards.find(
  (board) => board.id === "trackly-hero",
)!;

export const tracklyOpeningBoards = tracklyBoards.filter((board) =>
  ["trackly-goal", "trackly-problem"].includes(board.id),
);

export const tracklyResearchBoards = tracklyBoards.filter((board) =>
  ["trackly-rq", "trackly-methodology"].includes(board.id),
);

export const tracklySpec = [
  { label: "Role", value: "UX Design / Interaction Design / Visual System" },
  { label: "Tools", value: "Figma / Prototyping / UI Design" },
  { label: "Focus", value: "Package Tracking / Last-Mile Delivery / Mobile UX" },
];

export const tracklyIntro = [
  "Trackly is a package tracking experience designed to rebuild trust across the last-mile delivery journey. From out-for-delivery anxiety to missed notifications and unclear pickup, users rarely get the clarity they need when a package is closest to arriving.",
  "Through secondary research, interviews, and journey mapping, the project identifies where delivery systems break down and where reassurance should appear. The work moves from problem framing into mobile flows, locker interfaces, and prototype screens built around visibility, security, and support.",
  "This is not just a status tracker. It is a trust-centered response to the gap between shipped, arriving, and actually received.",
].join("\n\n");
