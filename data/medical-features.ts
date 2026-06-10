import { CaseFeature } from "@/components/CaseFeatures";

export const medicalFeatures = {
  heading: "Experience Modules",
  subheading: "Key design layers for Mayo Clinic × SCADpro MR training",
  features: [
    {
      title: "Brand Consistency System",
      description:
        "A visual and interaction language that preserves Mayo Clinic's institutional clarity while adapting brand expression to immersive mixed reality environments.",
      icon: "brand",
    },
    {
      title: "MR Training Scenarios",
      description:
        "Scenario-based modules that place learners inside medical training contexts, supporting spatial understanding and hands-on procedural rehearsal.",
      icon: "training",
    },
    {
      title: "Clinical Workflow Integration",
      description:
        "Interaction patterns aligned with real training workflows, helping instructors and learners move between instruction, practice, and evaluation with less friction.",
      icon: "workflow",
    },
  ] satisfies CaseFeature[],
};
