import { medicalDimensionResearch } from "./medical-content";

export type AnnotatedMedia = {
  id?: string;
  layout: "stack" | "split";
  mediaSide?: "left" | "right";
  title?: string;
  subtitle?: string;
  body?: string;
  src?: string;
  videoSrc?: string;
  autoPlay?: boolean;
  videos?: { src: string; alt: string; autoPlay?: boolean }[];
  mediaRow?: { src?: string; videoSrc?: string; alt: string; autoPlay?: boolean }[];
  images?: { src: string; alt: string }[];
  alt?: string;
};

export type MedicalDetailSection = {
  id: string;
  title?: string;
  kicker?: string;
  intro?: string;
  introQuote?: string;
  introPoints?: string[];
  validation?: {
    title: string;
    body: string;
  };
  headerLayout?: "stack" | "split";
  mediaRatio?: "equal" | "wide";
  items: AnnotatedMedia[];
};

export const medicalDemoVideo = {
  src: "/videos/mayo-cpr.mp4",
  alt: "Full mixed reality BLS operation demonstration from onboarding through evaluation",
  title: "Operation Demo",
  caption: "Full workflow demonstration across onboarding and BLS evaluation.",
};

export const medicalResearch = {
  title: "Deep-dive Research",
  kicker: "Opportunity-driven Research",
  dimensionsLead:
    "Targeted research across four dimensions—each feeding a specific design requirement.",
  dimensions: [
    {
      id: "user",
      index: "01",
      title: "User Research",
      body: "MR fluency and real-time feedback during certification.",
    },
    {
      id: "clinical",
      index: "02",
      title: "Clinical Standards",
      body: "BLS rubric as measurable compression, ventilation, and AED parameters.",
    },
    {
      id: "competitor",
      index: "03",
      title: "Competitor Research",
      body: "Where MR training tools trade usability for feature volume.",
    },
    {
      id: "rubric",
      index: "04",
      title: "Evaluation Rubric",
      body: "17 parameters across CPR, BVM, and AED.",
    },
  ],
  dimensionResearch: medicalDimensionResearch,
  lines: [
    {
      id: "user-research",
      title: "User Research",
      purpose: "Nurses are clinically ready; MR fluency varies.",
      persona: {
        name: "Jordan M.",
        photo: {
          src: "/images/mayo/mayo-user-research.png",
          alt: "A nurse in blue scrubs attending to a patient in a bright clinical setting.",
        },
        demographics: [
          { icon: "role", label: "Role", value: "RN · BLS candidate" },
          { icon: "location", label: "Site", value: "Mayo Clinic Jacksonville" },
        ],
        bio: "Confident in BLS, new to MR. Under observation, spatial UI competes with clinical recall.",
        wants: [
          "Real-time correction during assessment",
          "Device learning before clinical stakes",
        ],
      },
    },
    {
      id: "clinical-standards",
      title: "Clinical Standards Research",
      purpose: "Map BLS requirements into quantifiable certification parameters.",
      images: [
        {
          src: "/images/mayo-Basic%20research.png",
          alt: "BVM and AED asset research boards mapping equipment references, hand interactions, and clinical specifications",
          caption: "BVM and AED equipment research.",
        },
        {
          src: "/images/List%20of%20Hand%20Interactions%20in%20each%20BLS%20Steps.png",
          alt: "Hand interaction inventory mapped to each BLS certification step across CPR, BVM, and AED segments",
          caption: "Hand interactions per BLS step.",
        },
      ],
    },
    {
      id: "competitor-research",
      title: "Competitor Research",
      purpose: "Benchmark MR training tools at certification scale.",
    },
  ],
  evaluationRubric: {
    intro: "17 parameters across three modules.",
    modules: [
      {
        id: "cpr",
        label: "CPR",
        stepCount: 7,
        parameters: [
          { name: "Compression depth", threshold: "2 to 2.4 in" },
          { name: "Compression rate", threshold: "100 to 120 /min" },
          { name: "Hand placement", threshold: "Lower sternum" },
          { name: "Chest recoil", threshold: "Full release" },
          { name: "Compression fraction", threshold: "≥ 80%" },
          { name: "Cycle timing", threshold: "30:2 ratio" },
          { name: "Rotation readiness", threshold: "Minimal pause" },
        ],
      },
      {
        id: "bvm",
        label: "BVM",
        stepCount: 5,
        parameters: [
          { name: "Mask seal", threshold: "C-E grip" },
          { name: "Ventilation volume", threshold: "Clinical window" },
          { name: "Ventilation rate", threshold: "10 to 12 /min" },
          { name: "Ventilation timing", threshold: "Post-compression pause" },
          { name: "Airway alignment", threshold: "Head-tilt chin-lift" },
        ],
      },
      {
        id: "aed",
        label: "AED",
        stepCount: 5,
        parameters: [
          { name: "Power on", threshold: "Within time window" },
          { name: "Pad placement, anterior", threshold: "Correct landmark" },
          { name: "Pad placement, posterior", threshold: "Correct landmark" },
          { name: "Clear & shock", threshold: "Verbal + visual confirm" },
          { name: "Post-shock CPR", threshold: "Immediate resume" },
        ],
      },
    ],
  },
};

export const medicalSegmentSection: MedicalDetailSection = {
  id: "mayo-segment",
  title: "Segment",
  intro:
    "The BLS assessment unfolds across three segments: CPR compression, BVM ventilation, and AED operation. Each maps to real Mayo Clinic certification parameters, from compression depth and ventilation timing to electrode placement and shock delivery.\n\nEvery step was co-validated with Mayo Clinic clinical staff against the actual BLS credentialing rubric before any UI was finalized.",
  items: [
    {
      id: "mayo-segment-rubric",
      layout: "stack",
      src: "/images/List%20of%20Hand%20Interactions%20in%20each%20BLS%20Steps.png",
      alt: "BLS evaluation rubric mapping hand interactions to each certification step across CPR, BVM, and AED segments",
    },
    {
      id: "mayo-cpr-compression",
      layout: "split",
      mediaSide: "left",
      title: "CPR Compression",
      body: "Compression depth, rate, and hand placement are tracked in real time against clinical thresholds. Visual feedback surfaces during the assessment to guide correction without breaking the flow of the procedure.",
      videoSrc: "/videos/cpr.mov",
      autoPlay: true,
      alt: "CPR compression module with real-time depth, rate, and hand placement feedback on the manikin",
    },
    {
      id: "mayo-bvm-ventilation",
      layout: "split",
      mediaSide: "left",
      title: "BVM Ventilation",
      body: "Ventilation timing and mask seal are evaluated within the clinical window required for real certification. The interaction is designed around the physical motion of BVM use: grip, seal, squeeze, without substituting the gesture for something easier but clinically inaccurate.",
      videoSrc: "/videos/BVM.mov",
      autoPlay: true,
      alt: "BVM ventilation module evaluating mask seal and ventilation timing through physical BVM motion",
    },
    {
      id: "mayo-aed-operation",
      layout: "split",
      mediaSide: "left",
      title: "AED Operation",
      body: "Electrode placement presented a specific design problem: placing back electrodes on a virtual patient would require physically rotating the model, an action with no haptic feedback in MR, which breaks clinical realism at a critical moment. I replaced the physical gesture with an explicit UI selection interface. The affordance is clear; the clinical accuracy is preserved.",
      videoSrc: "/videos/aed.mp4",
      autoPlay: true,
      alt: "AED operation interface with ZOLL defibrillator control layout",
    },
    {
      id: "mayo-dual-input",
      layout: "stack",
      body: "Dual-channel input mirrors how real emergency response works. Buttons serve as the primary, reliable input path. Voice recognition acts as a secondary channel that preserves the feel of real emergency communication without depending on it.",
    },
  ],
};

export const medicalEvaluationSection: MedicalDetailSection = {
  id: "mayo-evaluation",
  title: "Evaluation System",
  kicker: "Evaluation System Design",
  introPoints: [
    "17 evaluation steps, each verified with Mayo clinical staff to match real certification requirements.",
    "Reports organized by module (CPR / BVM / AED) with drill-down to the specific step that failed.",
  ],
  validation: {
    title: "Validation",
    body: "During Round 2 on-site testing, a certified human evaluator scored each session live alongside the system. System judgments were compared directly against the evaluator's judgments. This proves the logic is not merely plausible, but aligned with human evaluators on accuracy.",
  },
  items: [
    {
      id: "mayo-incomplete-tasks",
      layout: "stack",
      title: "Incomplete Tasks Overview",
      body: "Module-level view of which BLS steps still need correction before certification sign-off.",
      src: "/images/Incomplete%20Tasks.png",
      alt: "Evaluation report overview highlighting incomplete BLS tasks by module",
    },
    {
      id: "mayo-incomplete-tasks-detail",
      layout: "stack",
      title: "Incomplete Tasks Detail",
      body: "Drill-down into CPR, ventilation, and AED segments with parameter-level feedback.",
      src: "/images/Incomplete%20Tasks-1.png",
      alt: "Detailed incomplete tasks view for CPR and AED evaluation segments",
    },
    {
      id: "mayo-full-report",
      layout: "stack",
      title: "Full Evaluation Report",
      body: "Complete credentialing report consolidating performance across all 17 steps.",
      src: "/images/Full%20Report.png",
      alt: "Full BLS evaluation report with module scores and clinical parameter feedback",
    },
  ],
};

export const medicalBrandSection: MedicalDetailSection = {
  id: "mayo-brand",
  title: "Brand & UI System",
  intro:
    "AR overlays composite over real-world backgrounds in real time. A color palette that reads clearly on a white artboard becomes illegible against a beige hospital wall. Contrast ratios that pass accessibility checks in Figma fail in a room with mixed lighting. Translating Mayo Clinic's institutional visual standards, designed for print and web, into a system that held up in physical space required building and testing from scratch.",
  headerLayout: "split",
  items: [
    {
      id: "mayo-figma-vs-device",
      layout: "split",
      mediaSide: "left",
      title: "The Problem No One Mentions in Flat UI",
      body: "The same interface reads differently in Figma and on Quest 3 over real hospital environments. Design decisions had to be validated in-headset, not on a white artboard.",
      src: "/images/mayo-5.jpg",
      alt: "Figma design compared against Quest 3 render in a clinical environment",
    },
  ],
};

export const medicalOutcomeVideo = {
  videoId: "q8XeJHdjQ1I",
  label: "Promo Video",
  title: "Mixed Reality BLS Certification System",
};
