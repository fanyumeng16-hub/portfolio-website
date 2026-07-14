import { CaseTocSection } from "@/components/CaseToc";

export const mayocopySections: CaseTocSection[] = [
  { id: "case-intro", label: "Introduction" },
  {
    id: "mayocopy-ch01-overview",
    label: "My Role",
    indexLabel: "01",
  },
  {
    id: "mayocopy-ch02-problem",
    label: "Problem",
    indexLabel: "02",
    children: [
      { id: "mayocopy-client-brief", label: "Client Brief" },
      { id: "mayocopy-defined-problem", label: "Defined Problem" },
      { id: "mayocopy-problem-statement", label: "Problem Statement" },
      { id: "mayocopy-primary-research", label: "Primary Research" },
      { id: "mayocopy-primary-insight", label: "Primary Insight" },
      { id: "mayocopy-industry-research", label: "Industry Research" },
    ],
  },
  {
    id: "mayocopy-ch03-opportunity",
    label: "Opportunity",
    indexLabel: "03",
    children: [
      { id: "mayocopy-decision-matrix", label: "Decision Matrix" },
      { id: "mayocopy-concept", label: "Concept" },
    ],
  },
  {
    id: "mayocopy-ch04-solution-research",
    label: "Solution Research",
    indexLabel: "04",
    children: [
      { id: "mayocopy-visual-research", label: "Visual Research" },
      { id: "mayocopy-technical-research", label: "Technical Research" },
      { id: "mayocopy-overall-insight", label: "Overall Insight" },
    ],
  },
  {
    id: "mayocopy-ch05-design-decisions",
    label: "Design Decisions",
    indexLabel: "05",
    children: [
      { id: "mayocopy-research-build", label: "Research → Build" },
      { id: "mayocopy-three-design-dimensions", label: "Three Dimensions" },
      { id: "mayocopy-main-features", label: "Main Features" },
    ],
  },
  {
    id: "mayocopy-ch06-user-flow",
    label: "User Flow",
    indexLabel: "06",
    children: [
      { id: "mayocopy-user-flow", label: "Flow Diagram" },
      { id: "mayocopy-user-flow-onboarding", label: "Onboarding" },
      { id: "mayocopy-user-flow-assessment", label: "Assessment" },
      { id: "mayocopy-user-flow-evaluation", label: "Evaluation" },
    ],
  },
  {
    id: "mayocopy-ch07-onboarding",
    label: "Onboarding",
    indexLabel: "07",
    children: [
      { id: "mayocopy-four-progressive-stages", label: "Four Stages" },
    ],
  },
  {
    id: "mayocopy-ch08-evaluation",
    label: "Evaluation",
    indexLabel: "08",
    children: [
      { id: "mayocopy-evaluation-framework", label: "Framework" },
      { id: "mayocopy-sensor-to-screen", label: "Sensor to Screen" },
      { id: "mayocopy-report-interface", label: "Report Interface" },
    ],
  },
  {
    id: "mayocopy-ch09-usability-testing",
    label: "Usability",
    indexLabel: "09",
    children: [
      { id: "mayocopy-round-1", label: "Round 1" },
      { id: "mayocopy-round-2", label: "Round 2" },
      { id: "mayocopy-cross-functional", label: "Cross-Functional" },
    ],
  },
  {
    id: "mayocopy-ch10-final-ui",
    label: "Final UI",
    indexLabel: "10",
    children: [
      { id: "mayocopy-final-ui", label: "Screens" },
      { id: "mayocopy-final-concept", label: "Final Concept" },
    ],
  },
  {
    id: "mayocopy-ch11-impact",
    label: "Impact",
    indexLabel: "11",
    children: [
      { id: "mayocopy-time-efficiency", label: "Time Efficiency" },
      { id: "mayocopy-trust-experience", label: "Trust & Experience" },
      { id: "mayocopy-success-revisited", label: "Success Criteria" },
    ],
  },
  {
    id: "mayocopy-ch12-reflection",
    label: "Reflection",
    indexLabel: "12",
    children: [
      { id: "mayocopy-limitations", label: "Limitations" },
      { id: "mayocopy-whats-next", label: "What's Next" },
    ],
  },
];
