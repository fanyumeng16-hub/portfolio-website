export type CollaborationTheme = {
  id: string;
  words: [string, string];
  line: string;
};

export const collaborationThemes: CollaborationTheme[] = [
  {
    id: "immersive-clinical",
    words: ["Immersive", "Clinical"],
    line: "What would it take for a training environment to feel rigorous enough for real workflows, yet still breathable in the moment of use?",
  },
  {
    id: "recovery-play",
    words: ["Recovery", "Play"],
    line: "How might support for the body also become something people want to return to together, rather than simply endure?",
  },
  {
    id: "exhibit-path",
    words: ["Exhibit", "Path"],
    line: "If history lives in a room, how do we help visitors find their own way through it without losing the thread?",
  },
  {
    id: "simulation-field",
    words: ["Simulation", "Field"],
    line: "When a distant environment has to be rehearsed on Earth, which details matter enough to carry into the hand?",
  },
  {
    id: "installation-augment",
    words: ["Installation", "Augment"],
    line: "Where should the physical space end and the layered experience begin, so neither feels like an afterthought?",
  },
  {
    id: "visitor-guide",
    words: ["Visitor", "Guide"],
    line: "What does guidance look like when it respects curiosity more than compliance, especially in unfamiliar systems?",
  },
  {
    id: "wellness-critique",
    words: ["Wellness", "Critique"],
    line: "When calm is packaged and sold, what responsibility does design have to name what is quietly being traded away?",
  },
  {
    id: "habit-momentum",
    words: ["Habit", "Momentum"],
    line: "How do we design for long-term consistency without making every missed day feel like a small personal failure?",
  },
];

export function pickCollaborationTheme(): CollaborationTheme {
  const index = Math.floor(Math.random() * collaborationThemes.length);
  return collaborationThemes[index];
}
