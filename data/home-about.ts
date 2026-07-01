export type AboutTextPart = {
  text: string;
  bold?: boolean;
};

export type AboutParagraph = AboutTextPart[];

export const homeAboutParagraphs: AboutParagraph[] = [
  [
    { text: "I'm YM, a UX " },
    { text: "designer", bold: true },
    { text: ", and interaction " },
    { text: "designer", bold: true },
    { text: " based in Savannah, Georgia." },
  ],
  [
    { text: "My work spans XR, healthcare, and digital systems, from clinical MR training to interactive rehabilitation and museum experiences." },
  ],
  [
    { text: "Outside the studio, I ride a " },
    { text: "motorcycle", bold: true },
    { text: ", read " },
    { text: "tarot", bold: true },
    { text: ", and chase the kind of ideas that only show up at midnight." },
  ],
];
