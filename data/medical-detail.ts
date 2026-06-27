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
  intro?: string;
  introQuote?: string;
  introPoints?: string[];
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
  title: "Research",
  intro:
    "Before any design began, we needed to understand three things: the users, the clinical process, and the existing landscape.",
  introQuote:
    "28 evaluators are responsible for certifying around 400 candidates per year",
  blocks: [
    {
      id: "mayo-research-onsite",
      title: "On-site Fieldwork",
      subtitle: "Contextual Inquiry & Stakeholder Interviews",
      body: "We interviewed nurses and BLS evaluators at Mayo Clinic Jacksonville, observed certification from setup through assessment, and practiced BLS hands-on with a trained instructor.",
      src: "/images/mayo-research.png",
      alt: "Design team and Mayo Clinic clinical staff observing BLS certification in a hospital simulation room",
    },
    {
      id: "mayo-research-practice",
      body: "Practicing the procedure ourselves was deliberate. Compression depth, BVM seal, and attention under pressure gave us a baseline no secondary research could replicate.",
      src: "/images/mayo-research2.png",
      alt: "Hands-on BLS equipment practice with AED electrode pads during on-site fieldwork",
    },
    {
      id: "mayo-research-clinical-standards",
      title: "Clinical Standards",
      subtitle: "Domain Research & Expert Consultation",
      body: "We mapped Mayo Clinic's evaluation rubrics to quantifiable BLS parameters: compression rate, depth, ventilation timing, and electrode placement.",
      src: "/images/Evaluation%20System.png",
      alt: "BLS evaluation rubric mapping CPR, BVM, and AED tasks to quantitative clinical assessment criteria",
    },
    {
      id: "mayo-research-competitive",
      title: "Competitive Landscape",
      subtitle: "Market & Product Audit",
      body: "We audited VR training and medical simulation products across clinical and emergency categories. Most emphasized content volume over usability for MR newcomers. That gap shaped our design direction.",
      src: "/images/mayo-visual%20research.png",
      alt: "Competitive audit of VR training and medical simulation products across clinical and emergency response categories",
    },
  ],
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
  title: "Evaluation System Design",
  intro:
    "The evaluation system translates segment performance into credentialing reports. Standards derived from Mayo Clinic assessment requirements drive what the MR interface visualizes, measures, and surfaces back to clinical staff.",
  headerLayout: "split",
  items: [
    {
      id: "mayo-eval-standards",
      layout: "split",
      mediaSide: "left",
      title: "Evaluation Standards Framework",
      body: "We distilled certification requirements from Mayo Clinic's assessment reports into a structured set of standards, each mapped to parameters the MR system could visualize and measure in real time.",
      src: "/images/Evaluation%20System.png",
      alt: "Evaluation standards derived from Mayo Clinic assessment reports, mapped to visualized and measurable parameters",
    },
    {
      id: "mayo-incomplete-tasks",
      layout: "split",
      mediaSide: "left",
      title: "Incomplete Tasks Overview",
      body: "The evaluation report surfaces incomplete tasks by module, giving nurses and evaluators a clear view of which BLS steps still need correction before certification sign-off.",
      src: "/images/Incomplete%20Tasks.png",
      alt: "Evaluation report overview highlighting incomplete BLS tasks by module",
    },
    {
      id: "mayo-incomplete-tasks-detail",
      layout: "split",
      mediaSide: "left",
      title: "Incomplete Tasks Detail",
      body: "Drill-down views break incomplete tasks into CPR, ventilation, and AED segments so nurses can see exactly which parameters failed against clinical standards.",
      src: "/images/Incomplete%20Tasks-1.png",
      alt: "Detailed incomplete tasks view for CPR and AED evaluation segments",
    },
    {
      id: "mayo-full-report",
      layout: "split",
      mediaSide: "left",
      title: "Full Evaluation Report",
      body: "The complete credentialing report consolidates performance across all 17 steps, module scores, and improvement areas into a single view for Mayo Clinic review.",
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
