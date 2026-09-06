export type TextSpan = {
  text: string;
  highlight?: boolean;
};

export type AboutStoryBeat =
  | { kind: "heading"; text: string; tone?: "default" | "muted" }
  | { kind: "date"; text: string }
  | { kind: "paragraph"; spans: TextSpan[] }
  | { kind: "loading" };

/** Figma 235:1721 — Education → Explore typed narrative */
export const aboutEducationBeats: AboutStoryBeat[] = [
  { kind: "heading", text: "Education" },
  { kind: "date", text: "09/08/2018" },
  {
    kind: "paragraph",
    spans: [
      { text: "Yumeng's path started with a degree in Digital Media Art from " },
      { text: "Xiamen University", highlight: true },
      { text: "." },
    ],
  },
  {
    kind: "paragraph",
    spans: [
      { text: "Followed by a role at " },
      { text: "AVATR", highlight: true },
      {
        text: " designing UI and game systems, including the subscription and in-game store experience.",
      },
    ],
  },
  {
    kind: "paragraph",
    spans: [
      { text: "Working on a live product with a real player base taught her " },
      {
        text: "how directly design decisions shape both user behavior and business outcomes",
        highlight: true,
      },
      { text: "." },
    ],
  },
  { kind: "loading" },
];

export const aboutExploreBeats: AboutStoryBeat[] = [
  { kind: "heading", text: "EXPORE" },
  {
    kind: "paragraph",
    spans: [
      {
        text: "It also convinced her that as AI takes over more of the execution layer in design work, judgment will only become more valuable.",
      },
    ],
  },
  {
    kind: "paragraph",
    spans: [
      {
        text: "That belief led her to SCAD for a Master's in Interactive Design and Game Development, where she's deepened her focus on ",
      },
      { text: "XR", highlight: true },
      { text: " and " },
      { text: "spatial interaction", highlight: true },
      {
        text: " while teaching herself Claude Code and Cursor to independently design and ",
      },
      { text: "build Devlop, an iOS camera app", highlight: true },
      {
        text: ", proving she could use AI to sharpen her judgment rather than be replaced by it.",
      },
    ],
  },
];

export const aboutNowSpans: TextSpan[] = [
  { text: "Today she focuses on " },
  { text: "product design and UX/UI", highlight: true },
  { text: ", with an ongoing thread into XR and spatial interaction." },
];

/** Previously hidden Work projects shown under Past WORKS */
export const aboutPastWorkIds = ["outloop", "heartbits", "ora"] as const;

/** NOW / still working on… cards */
export const aboutNowProjectIds = ["devlop", "pawpawn"] as const;

export function spansToPlain(spans: TextSpan[]) {
  return spans.map((span) => span.text).join("");
}

export function sliceSpans(spans: TextSpan[], charCount: number): TextSpan[] {
  const result: TextSpan[] = [];
  let remaining = charCount;

  for (const span of spans) {
    if (remaining <= 0) break;
    if (remaining >= span.text.length) {
      result.push(span);
      remaining -= span.text.length;
    } else {
      result.push({ text: span.text.slice(0, remaining), highlight: span.highlight });
      remaining = 0;
    }
  }

  return result;
}
