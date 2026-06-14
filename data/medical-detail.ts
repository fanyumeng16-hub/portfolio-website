export type AnnotatedMedia = {
  id?: string;
  layout: "stack" | "split";
  /** For split layout — which side the media sits on */
  mediaSide?: "left" | "right";
  title?: string;
  body: string;
  src?: string;
  videoSrc?: string;
  videos?: { src: string; alt: string }[];
  alt: string;
};

export type MedicalDetailSection = {
  id: string;
  title?: string;
  intro?: string;
  introPoints?: string[];
  /** Title left, intro right — like editorial header */
  headerLayout?: "stack" | "split";
  /** Split items: wide = 2:1 media-to-copy */
  mediaRatio?: "equal" | "wide";
  items: AnnotatedMedia[];
};

export const medicalContextDetail: MedicalDetailSection = {
  id: "mayo-context-media",
  items: [
    {
      id: "mayo-journey",
      layout: "split",
      mediaSide: "left",
      title: "Our Journey",
      body: "Mayo Clinic faces a significant challenge: Basic Life Support assessments still require in-person evaluation, yet only 28 evaluators serve more than 400 nursing staff—while physical mannequins remain limited. This SCADpro collaboration set out to streamline certification through mixed reality.",
      src: "/images/mayo-1.jpg",
      alt: "SCADpro team with CPR training manikins at Mayo Clinic collaboration",
    },
    {
      id: "mayo-constraints",
      layout: "split",
      mediaSide: "right",
      title: "Limited Time Constraints",
      body: "Evaluator availability is stretched across clinical schedules. Nursing staff must coordinate in-person sessions within narrow windows—creating bottlenecks that delay certification and limit how often teams can refresh BLS skills.",
      src: "/images/mayo-2.jpg",
      alt: "Limited time constraints in BLS evaluator workflow",
    },
    {
      id: "mayo-standards",
      layout: "split",
      mediaSide: "left",
      title: "High Training Standards",
      body: "Mayo Clinic maintains rigorous BLS protocols. Any digital alternative must preserve assessment fidelity—compression depth, AED sequencing, ventilation steps—without lowering the clinical bar that protects patient outcomes.",
      src: "/images/mayo-3.jpg",
      alt: "High training standards in clinical simulation environment",
    },
  ],
};

export const medicalDetailSections: MedicalDetailSection[] = [
  {
    id: "mayo-onboarding",
    title: "Structured Onboarding",
    intro:
      "A six-phase onboarding sequence moves users from MR setup to assessment readiness.",
    headerLayout: "split",
    items: [
      {
        layout: "split",
        mediaSide: "left",
        title: "Onboarding Flow",
        body: "The flow sequences MR setup, BLS interaction practice, applied manikin exercises, QR-based spatial calibration, spatial navigation within the training volume, and a final readiness check. Each phase builds on the last so trainees arrive at assessment confident—not overwhelmed by unfamiliar interfaces.",
        src: "/images/mayo-4.jpg",
        alt: "Six-step MR BLS onboarding flow from setup to evaluation readiness",
      },
      {
        layout: "split",
        mediaSide: "right",
        title: "Virtual Agent",
        body: "Virtual medical agents guide users through onboarding with spatial cues, animated behaviors, and voice-triggered interactions. Agents reduce cognitive load by cueing procedural steps and responding to progress—helping trainees acclimate before entering high-stakes BLS scenarios.",
        src: "/images/mayo-7.jpg",
        alt: "Virtual agent wireframe model with head and hand detail views",
      },
    ],
  },
  {
    id: "mayo-manikin",
    title: "Physical Manikin",
    intro:
      "The custom CPR manikin is the physical anchor of the mixed-reality system—pairing tactile feedback with sensor data and spatial calibration.",
    headerLayout: "split",
    mediaRatio: "wide",
    items: [
      {
        layout: "split",
        mediaSide: "left",
        title: "Training System",
        body: "The deployable kit combines a custom CPR manikin, Meta Quest 3 headset, and branded carry case. Hardware, software, and evaluation logic operate as one portable system—compact enough for hospital transport and durable enough for repeated clinical use.",
        src: "/images/mayo-5.jpg",
        alt: "Mayo Clinic BLS training kit with manikin, Meta Quest 3, and carry case",
      },
      {
        layout: "split",
        mediaSide: "right",
        title: "Manikin Hardware",
        body: "Engineered foam and spring mechanics deliver realistic chest recoil. An integrated depth sensor captures compression depth and rate in real time, feeding live feedback into the assessment engine. A maintainable drawer housing protects internal electronics for field servicing.",
        src: "/images/mayo-6.jpg",
        alt: "CPR manikin hardware features including depth sensor and drawer design",
      },
      {
        layout: "stack",
        title: "Spatial Calibration",
        body: "A QR marker on the manikin surface anchors virtual content in physical space. Users scan with Quest 3 to align virtual interfaces, AED models, and instructional overlays precisely onto the training station—ensuring hand interactions register accurately in mixed reality.",
        videos: [
          {
            src: "/videos/mayo-qrcode.mp4",
            alt: "Quest headset scanning the manikin QR code for spatial calibration",
          },
        ],
        alt: "Quest headset scanning the manikin QR code for spatial calibration",
      },
    ],
  },
  {
    id: "mayo-bls-interaction",
    title: "BLS Assessment Interaction",
    intro:
      "Hands-on CPR and AED operation sequenced as one continuous clinical scenario.",
    headerLayout: "split",
    items: [
      {
        layout: "stack",
        title: "CPR Compression Practice",
        body: "On the physical manikin, trainees perform chest compressions with real-time depth and rhythm feedback. Visual cues translate Mayo Clinic compression standards into actionable guidance users can adjust in the moment—bridging physical technique with immersive assessment logic.",
        videoSrc: "/videos/mayo-cpr.mp4",
        alt: "CPR compression practice with real-time depth feedback on the physical manikin",
      },
      {
        layout: "split",
        mediaSide: "left",
        title: "AED Interface Design",
        body: "Hand interaction extends to emergency equipment mapped to ZOLL device logic. Users practice pad placement, power-on sequences, and knob-based controls through hand-tracked gestures—balancing physical fidelity with clear instructional feedback during defibrillation training.",
        src: "/images/mayo-8.jpg",
        alt: "ZOLL AED control interface for defibrillation training interactions",
      },
      {
        layout: "stack",
        title: "AED Interaction Demo",
        body: "CPR and AED are sequenced together as a full resuscitation workflow. After compression practice, users transition into device operation within the same MR session—experiencing the complete BLS protocol as they would in a clinical emergency.",
        videos: [
          {
            src: "/videos/mayo-aed.mp4",
            alt: "Mixed-reality AED interaction demonstration in the BLS assessment",
          },
        ],
        alt: "Mixed-reality AED interaction demonstration in the BLS assessment",
      },
    ],
  },
  {
    id: "mayo-evaluation",
    title: "Evaluation System",
    headerLayout: "split",
    mediaRatio: "wide",
    introPoints: [
      "Structured BLS report surfacing incomplete tasks and improvement areas",
      "Segment-level scoring across CPR, BVM, and AED protocols",
      "Task-level drill-down for compression, ventilation, and device steps",
      "Standardized logic for consistent evaluator review and remediation",
    ],
    items: [
      {
        layout: "split",
        mediaSide: "left",
        title: "Assessment Report",
        body: "A dynamic overview highlights performance gaps across the full BLS scenario—giving candidates and evaluators a shared reference for certification decisions.",
        src: "/images/mayo-9.jpg",
        alt: "BLS assessment report overview with incomplete tasks and improvement areas",
      },
      {
        layout: "split",
        mediaSide: "right",
        title: "Task-Level Detail",
        body: "Incomplete tasks are broken into discrete clinical actions so feedback targets specific behaviors—not generic pass/fail outcomes.",
        src: "/images/mayo-10.jpg",
        alt: "Incomplete tasks detail view for CPR and AED segments",
      },
      {
        layout: "split",
        mediaSide: "left",
        title: "Experience Overview",
        body: "Manikin hardware, onboarding UI, 3D medical models, and evaluation feedback form one integrated assessment ecosystem.",
        src: "/images/mayo-11.jpg",
        alt: "Overview of manikin, UI, onboarding, 3D models, and evaluation report",
      },
    ],
  },
];
