export type EditorialBlock = {
  title: string;
  paragraphs: string[];
};

export type CaseHighlight = {
  stat: string;
  label: string;
  description: string;
};

export const medicalOverview = {
  role: "Interaction Design / MR Experience / Hardware Integration",
  tools: "Unity / Meta Quest 3 / Figma / Physical Prototype",
  focus: "BLS Assessment / Onboarding / Hand Interaction / Evaluation",
  paragraphs: [
    "Our mission is to help save lives by transforming how healthcare professionals train, assess, and prepare for critical moments. Nursing staff at Mayo Clinic must complete in-person Basic Life Support assessments, but only 28 evaluators serve more than 400 nursing staff—while physical mannequins remain scarce.",
    "In partnership with Mayo Clinic, SCADpro built a mixed-reality BLS platform that pairs a sensor-enabled CPR manikin with Quest 3 simulation—delivering rigorous assessment through room scanning, hand tracking, voice guidance, spatial onboarding, and automated performance reporting.",
  ],
};

export const medicalHighlights: CaseHighlight[] = [
  {
    stat: "28",
    label: "evaluators for 400+ nursing staff",
    description:
      "In-person BLS certification depends on a small evaluator pool serving hundreds of clinicians across Mayo Clinic—creating scheduling bottlenecks and limiting training throughput.",
  },
  {
    stat: "6",
    label: "phases from setup to assessment",
    description:
      "A structured onboarding sequence guides users from MR setup and gesture practice through manikin calibration, spatial navigation, and readiness checks before formal evaluation.",
  },
  {
    stat: "1",
    label: "integrated training kit",
    description:
      "A custom CPR manikin, Meta Quest 3 headset, and portable carry case form one deployable system—unifying hardware, software, and evaluation logic for clinical environments.",
  },
];

export const medicalJourney = {
  label: "Our Journey",
  headline:
    "Reimagining how healthcare professionals train, assess, and prepare for critical moments.",
  blocks: [
    {
      title: "The Problem",
      paragraphs: [
        "Basic Life Support assessments still require in-person evaluation with physical mannequins—yet evaluator capacity and equipment availability cannot keep pace with demand. Limited time, high training standards, and clinical workflow constraints compound the challenge.",
      ],
    },
    {
      title: "Our Approach",
      paragraphs: [
        "This collaboration set out to streamline certification through a mixed-reality experience that is immersive, accessible, scalable, and clinically rigorous—preserving Mayo Clinic standards while reducing dependency on scarce physical resources.",
      ],
    },
  ] satisfies EditorialBlock[],
};
