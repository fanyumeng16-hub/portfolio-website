import type { CaseSpecRow } from "@/data/medical-content";

export const oraHero = {
  subtitle: "Speculative Wellness Critique",
  intro:
    "ORA is a speculative critique disguised as a wellness product. In a near future where attention has become the most contested resource, we imagine a device that reaches into the body's most intimate cavity (the mouth) to manufacture flow on demand.",
  cover: {
    src: "/images/ORA.jpg",
    alt: "ORA speculative wellness device concept",
    width: 1920,
    height: 1080,
  },
};

export const oraSpec: CaseSpecRow[] = [
  {
    label: "Role",
    value: "Concept Development / Critical Narrative / Experience Design",
  },
  {
    label: "Medium",
    value: "Speculative Product / Physical Prototype / Visual System",
  },
  {
    label: "Focus",
    value: "Critical Design / Attention Economy / Wellness Technology",
  },
];

export const oraOverviewBody = [
  "The piece asks: when technology can engineer our inner stillness, who owns the silence? As Big Tech expands from screens into our nervous systems, \"mental wellness\" risks becoming the next frontier of extraction: calm sold back to us as a subscription, focus delivered through a mouthpiece, presence outsourced to an algorithm.",
  "We are not warning against technology itself, but against the quiet trade we are already making: surrendering the difficult, unprofitable, deeply human work of finding our own flow in exchange for frictionless states optimized by someone else's metrics.",
  "ORA is designed to feel seductive, because the most dangerous futures are the ones we willingly walk into. We invite viewers to sit with their own discomfort: would you accept this device? And if your answer hesitates, what does that hesitation tell you about the world we are building?",
].join("\n\n");

export const oraDemoVideoId = "SZPOds-gKLc";
