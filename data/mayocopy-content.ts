import { medicalResearch } from "@/data/medical-detail";

export const mayocopyHero = {
  subtitle: "Designing a Mixed Reality BLS Certification System for Clinical Scale",
  intro:
    "A Mayo Clinic × SCADpro collaboration to build MR BLS certification at clinical scale — 28 evaluators, 400+ nurses, every assessment one-on-one in person, without lowering rigor. From Jacksonville field research through on-device and on-site testing, I owned gesture vocabulary, the full certification flow, visual system end to end, and both usability rounds.",
} as const;

export const mayocopyOpeningMedia = [
  {
    type: "image" as const,
    src: "/images/mayo-opening-hero.png",
    alt: "Candidate reviewing a BLS Assessment Report in Mixed Reality on a Meta Quest headset",
    width: 2170,
    height: 1098,
    overlay: {
      label: "Assessment Report",
      value: "Post-session results reviewed in MR",
    },
  },
  {
    type: "image" as const,
    src: "/images/mayo-opening-kit.png",
    alt: "Mayo Clinic MR BLS certification kit with CPR manikin, Meta Quest 3, and carry case",
    width: 1442,
    height: 808,
    overlay: {
      label: "Certification Kit",
      value: "Quest 3, manikin, and portable carry case",
    },
  },
  {
    type: "image" as const,
    src: "/images/mayo-opening-scenario.png",
    alt: "Two headset users performing CPR and BVM with a virtual agent overlay in Mixed Reality",
    width: 1734,
    height: 876,
    overlay: {
      label: "Live Scenario",
      value: "CPR and BVM with a virtual agent in passthrough",
    },
  },
  {
    type: "video" as const,
    videoSrc: "/images/mayo-opening.mp4",
    alt: "Opening demo of the Mixed Reality BLS certification experience",
    width: 1920,
    height: 1080,
    overlay: {
      label: "Experience Demo",
      value: "End-to-end MR BLS certification walkthrough",
    },
  },
] as const;

export const mayocopySpec = [
  { label: "Timeline", value: "10 Weeks" },
  { label: "Team", value: "20-Person Interdisciplinary Team" },
  { label: "Platform", value: "Meta Quest 3 + Custom CPR Manikin" },
  { label: "Scale", value: "28 Evaluators, 400+ Candidates a Year" },
];

export const mayocopyMyRoleCards = [
  {
    title: "Full certification user flow.",
    body: "Built the complete path from onboarding through assessment.",
  },
  {
    title: "Visual system, wireframe to hi-fi.",
    body: "Owned the design end to end, low-fi through final UI.",
  },
  {
    title: "Usability testing, both rounds.",
    body: "Ran on-device and on-site testing at Mayo Clinic Jacksonville.",
  },
] as const;

export const mayocopyClientBrief = {
  quote:
    "The certification process feels like it takes too much staff time, but there is no precise definition of the problem beyond that feeling.",
} as const;

export const mayocopyDefinedProblems = [
  {
    stat: "28 : 400",
    title: "28 evaluators, 400+ candidates a year.",
    body: "Hiring cannot close that gap.",
  },
  {
    stat: "12+",
    title: "12+ checkpoints per assessment.",
    body: "Depth, hand placement, pad alignment, all live, all at once.",
  },
  {
    stat: "1:1",
    title: "1:1 format is fixed.",
    body: "One-on-one, in person. Cannot be parallelized.",
  },
] as const;

export const mayocopyBlsIntro = {
  title: "What BLS Certification Is",
  body: "Mayo's annual nursing credential: CPR, BVM, and AED on a manikin, scored one-on-one across 17 clinical parameters.",
  image: {
    src: "/images/mayoBrief.png",
    alt: "Illustration of nurses queued in a hospital corridor outside a BLS certification room",
    width: 2170,
    height: 1098,
  },
} as const;

export const mayocopyPrimaryResearchTracks = [
  {
    id: "interviews",
    title: "Stakeholder Interviews",
    fields: [
      { label: "Sample:", value: "14 Evaluators" },
      { label: "Duration:", value: "30 min each" },
      { label: "Location:", value: "Mayo Clinic, Jacksonville" },
    ],
    quotes: [
      {
        quote:
          "We don't have enough evaluators to keep up with volume. Hiring more is not a realistic lever for us.",
        cite: "BLS Program Lead",
        tail: "right" as const,
      },
      {
        quote:
          "Every assessment is still one-to-one. That format protects rigor, and it also locks our capacity.",
        cite: "Clinical Supervisor",
        tail: "left" as const,
      },
      {
        quote:
          "If the system misses an error a live evaluator would catch, we cannot put it in front of candidates.",
        cite: "Simulation Educator",
        tail: "right" as const,
      },
    ],
    imageSide: "left" as const,
    image: {
      src: "/images/mayo-research.png",
      alt: "Design team and Mayo Clinic clinical staff observing BLS certification in a hospital simulation room",
      width: 1776,
      height: 937,
    },
  },
  {
    id: "hands-on",
    title: "Hands-On BLS Practice",
    fields: [
      { label: "Sample:", value: "4 Nurse Candidates, observed by 1 Evaluator" },
      { label: "Duration:", value: "30 min each" },
      { label: "Location:", value: "Mayo Clinic, Jacksonville" },
    ],
    quotes: [],
    imageSide: "right" as const,
    image: {
      src: "/images/mayo-research2.png",
      alt: "Hands-on BLS equipment practice with AED electrode pads during on-site fieldwork",
      width: 1922,
      height: 1082,
    },
  },
] as const;

export const mayocopyPrimaryResearchIntro =
  "On-site primary research at Mayo Clinic Jacksonville, through stakeholder interviews and hands-on BLS practice observation.";

export const mayocopyResearchNote = {
  src: "/images/mayo/research-note.png",
  alt: "Research notes from primary research — clustered observations across setup, pairing, interaction, spatial boundaries, and environment",
  width: 2096,
  height: 1332,
} as const;

export const mayocopyPrimaryPainPoints = [
  {
    title: "Capacity is structurally capped.",
    body: "28 evaluators vs 400+ candidates a year. The 1:1 format is the ceiling—hiring won't close it.",
  },
  {
    title: "Attention can't cover every checkpoint.",
    body: "12+ live checkpoints. Managing the room and the clock, evaluators miss subtle errors.",
  },
  {
    title: "The technology itself can fail.",
    body: "Quest 3 passthrough has a hard contrast threshold. Past it, UI vanishes under clinical lighting.",
  },
] as const;

export const mayocopyProblemStatement = [
  { text: "Mayo Clinic needs a way to certify " },
  { text: "400+ nurses a year", bold: true },
  { text: " against the " },
  { text: "same clinical rigor as an in-person evaluator", bold: true },
  { text: ", " },
  { text: "without adding headcount", bold: true },
  { text: ", " },
  { text: "without asking one person to track more than human attention allows", bold: true },
  { text: ", and " },
  {
    text: "without introducing a technology that fails silently under real hospital lighting",
    bold: true,
  },
  { text: "." },
] as const;

export const mayocopyIndustryResearchIntro =
  "Desk research into how certification and training programs generally address the evaluator capacity problem, conducted before any direction was selected.";

export const mayocopyIndustryResearchSections = [
  {
    title: "More Evaluators.",
    body: "Most programs hire more evaluators. Certification-grade judgment takes months to build—capacity scales with cost, not volume.",
    image: {
      src: "/images/mayo/Industry%20Research-1.jpg",
      alt: "Industry research on hiring and training additional certification evaluators",
      width: 1066,
      height: 800,
    },
  },
  {
    title: "Physical Manikin.",
    body: "Sensor manikins give strong real-time feedback. Sessions still need one evaluator each, so capacity is unchanged.",
    image: {
      src: "/images/mayo/Industry%20Research-2.jpg",
      alt: "Industry research on sensor-equipped physical manikins for skills training",
      width: 960,
      height: 960,
    },
  },
  {
    title: "Remote Video.",
    body: "Remote video cuts venue dependency. Evaluators still assess one candidate at a time, with lower spatial accuracy.",
    image: {
      src: "/images/mayo/Industry%20Research-3.png",
      alt: "Industry research on remote video assessment in certification programs",
      width: 2414,
      height: 1370,
    },
  },
  {
    title: "Mixed Reality.",
    body: "Common in skills practice, rare for high-volume certification. Most tools train once, not assess at scale.",
    image: {
      src: "/images/mayo/Industry%20Research-4.jpg",
      alt: "Nursing students using Oculus headsets to simulate hospital patient treatment in VR",
      credit: "Nursing students using Oculus headsets for hospital patient simulation.",
      width: 511,
      height: 366,
      objectPosition: "center 35%",
    },
  },
] as const;

export const mayocopyVisualResearchIntro =
  "Establishing the tone the interface has to carry into a high-stakes moment.";

export const mayocopyVisualResearchSections = [
  {
    title: "Brand.",
    body: "Mayo's tone across touchpoints: confident, reassuring, never clinical or cold.",
    image: {
      src: "/images/mayo-visual%20research.png",
      alt: "Brand and design language research board covering Mayo Clinic identity, web and social touchpoints, and clinical case references",
      width: 511,
      height: 366,
    },
  },
  {
    title: "VR UI.",
    body: "Spatial UI patterns for passthrough MR—depth, contrast, and hand-reachable controls that stay readable in clinical light.",
    image: {
      src: "/images/mayo/vr-ui-research.png",
      alt: "VR UI research board of spatial interface patterns, passthrough panels, and hand interaction references",
      width: 1586,
      height: 1290,
    },
  },
] as const;

export const mayocopyTechnicalResearchIntro =
  "Mapping the hard limits, hardware and clinical, that the design couldn't design around.";

export const mayocopyTechnicalResearchSections = [
  {
    title: "Spatial / VR.",
    body: "Quest 3 passthrough has a hard contrast threshold. Past it, UI disappears under clinical lighting.",
    image: {
      src: "/images/mayo-brand-research3.png",
      alt: "Spatial UI readability research comparing contrast and color systems in passthrough MR environments on device",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Clinical Standards.",
    body: "BVM and AED equipment, hand interactions per BLS step, mapped into measurable parameters.",
    image: {
      src: "/images/mayo-Basic%20research.png",
      alt: "BVM and AED asset research boards mapping equipment references, hand interactions, and clinical specifications",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Competitor Research.",
    body: "Existing MR training tools trade usability for feature volume. None built for credentialing.",
    image: {
      src: "/images/mayo-screens.png",
      alt: "MR training UI flows benchmarked against credentialing-stage assessment requirements",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Evaluation Rubric.",
    body: "17 parameters across CPR, BVM, and AED define the pass/fail bar—and what the system must observe to match it.",
    image: {
      src: "/images/Evaluation%20System.png",
      alt: "BLS evaluation rubric screenshot mapping CPR, BVM, and AED tasks to pass/fail criteria and clinical metrics",
      width: 511,
      height: 366,
    },
  },
] as const;

export const mayocopyEvaluationRubric = medicalResearch.evaluationRubric;

export const mayocopyOverallInsightIntro =
  "How each research constraint became a specific, testable design choice.";

export const mayocopyOverallInsightCards = [
  {
    insight: "One evaluator can't track depth, placement, and pad alignment at once.",
    decision: "Spatial MR with parallel checkpoint tracking.",
    why: "Captures every spatial parameter without adding evaluator headcount.",
  },
  {
    insight: "Nurses are clinically ready, but MR fluency varies.",
    decision: "Four progressive onboarding stages before assessment begins.",
    why: "Device learning can't compete with BLS recall under observation.",
  },
] as const;

export const mayocopyResearchBuildCards = [
  {
    title: "Mayo's tone is confident, never clinical.",
    body: "The certification tool had to earn the same trust as every other Mayo touchpoint.",
  },
  {
    title: "One evaluator can't track everything at once.",
    body: "Depth, placement, and pad alignment happen simultaneously. A person can't.",
  },
  {
    title: "Certification needs proof, not impressions.",
    body: "17 parameters, structured into reports evaluators actually trust.",
  },
] as const;

export const mayocopyDesignDimensions = [
  {
    id: "brand",
    title: "Brand Consistency.",
    body: "Mayo's visual language, not a decorative overlay.",
    icon: "brand" as const,
  },
  {
    id: "scene",
    title: "Scene Adaptation.",
    body: "Legible in passthrough, under real clinical lighting.",
    icon: "scene" as const,
  },
  {
    id: "function",
    title: "Functional Purpose.",
    body: "Real-time feedback with certification-grade credibility.",
    icon: "function" as const,
  },
] as const;

export const mayocopyMainFeatures = [
  {
    title: "Gesture Vocabulary.",
    body: "Each BLS step maps to one specific gesture—physical object actions and system UI—not generic point-and-click.",
    image: {
      src: "/images/mayo-icon.png",
      alt: "Gesture icon vocabulary for MR onboarding and BLS interactions including click, rotate, press, CPR, BVM, and AED",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Near-Field Feedback.",
    body: "A glow activates as fingers approach an object, teaching pinch-to-interact before candidates rely on memory alone.",
    image: {
      src: "/images/mayo-ui.png",
      alt: "Near-field glow feedback on an MR interface object before pinch-to-interact selection",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Voice-Guided Onboarding.",
    body: "Narration guides each step on top of visual gesture teaching, so instruction doesn't depend on reading mid-task.",
    image: {
      src: "/images/mayo-onboardingitem.png",
      alt: "Voice-guided MR onboarding prompts layered on gesture teaching screens",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Mayo Blue Readability.",
    body: "Mayo's signature blue anchors the color system for high-contrast legibility in clinical settings.",
    image: {
      src: "/images/mayo-brand-styleguide.png",
      alt: "Mayo Clinic MR visual style guide with Mayo Blue typography, color, and spatial UI components",
      width: 511,
      height: 366,
    },
  },
] as const;

export const mayocopyUserFlow = {
  intro:
    "The certification journey has three parts: Onboarding, Assessment, and Evaluation. Everything branches from one question at the start, and both branches converge before Assessment begins.",
  figure: {
    src: "/images/mayo/user-flow.png",
    alt: "User flow overview across Onboarding, Assessment, and Evaluation",
    width: 2892,
    height: 808,
  },
} as const;

export const mayocopyUserFlowDiagram = {
  greeting: "Hi, candidate",
  decision: {
    title: "Have you experienced MR?",
    subtitle: "Self-report at entry",
    noLabel: "No",
    yesLabel: "Yes, skip to stage 4",
  },
  stages: [
    {
      title: "Stage 1, system setup",
      subtitle: "Device and room calibration",
    },
    {
      title: "Stage 2, basic hand gesture",
      subtitle: "Grab, move, release",
    },
    {
      title: "Stage 3, BLS hand gesture",
      subtitle: "Push, rotate, place, retry on timeout",
    },
    {
      title: "Stage 4, applied practice",
      subtitle: "Applied and evaluate, retry on timeout",
    },
  ],
  startTest: {
    title: "Start test",
    subtitle: "Both paths converge here",
  },
  chooseAssessment: {
    title: "Choose assessment section",
    subtitle: "CPR, then BVM, then AED",
  },
  assessmentResult: {
    title: "Assessment result",
    subtitle: "Evaluation report generated",
  },
} as const;

export const mayocopyUserFlowOnboarding = {
  prompt: "Have you experienced MR before?",
  body:
    "The branch point. No routes through all four stages in sequence, system setup, basic hand gesture, BLS hand gesture, applied practice and evaluation. Yes skips straight to Stage 4, since returning candidates already have gesture fluency and only need to demonstrate readiness before the real test begins.",
  retryNote:
    "Each gesture stage carries its own retry loop, if a task isn't completed in time, the candidate retries that stage rather than restarting the whole sequence.",
  image: {
    src: "/images/onboarding%20steps.png",
    alt: "Onboarding flow through four progressive stages from system setup to applied practice",
    width: 2658,
    height: 838,
  },
} as const;

export const mayocopyUserFlowAssessment = {
  body:
    "Once Start Test is confirmed, candidates choose an assessment section and move through three modules in sequence, CPR, then BVM, then AED, each with its own UI transition. This is where the 17-parameter rubric and the gesture vocabulary from onboarding get applied to the real certification sequence.",
  image: {
    src: "/images/List%20of%20Hand%20Interactions%20in%20each%20BLS%20Steps.png",
    alt: "List of hand interactions mapped to each BLS step across CPR, BVM, and AED modules",
    width: 3402,
    height: 1090,
  },
} as const;

export const mayocopyUserFlowEvaluation = {
  body:
    "The sequence ends in an assessment result, generated into an evaluator-facing report. This is the same report structure covered in detail in 08 Evaluation System.",
  image: {
    src: "/images/Incomplete%20Tasks.png",
    alt: "Evaluation report interface showing assessment results and incomplete BLS tasks",
    width: 1920,
    height: 1080,
  },
} as const;

export const mayocopyWireframes = {
  intro:
    "Low-fidelity wireframes for all three parts, Onboarding, Assessment, Evaluation, built before any visual system was applied, to lock information architecture and interaction logic first.",
  groups: [
    {
      id: "onboarding",
      label: "Onboarding",
      placeholder: "Low-fidelity wireframe — Onboarding",
    },
    {
      id: "assessment",
      label: "Assessment",
      placeholder: "Low-fidelity wireframe — Assessment",
    },
    {
      id: "evaluation",
      label: "Evaluation",
      placeholder: "Low-fidelity wireframe — Evaluation",
    },
  ],
} as const;

export const mayocopyOnboardingIntro =
  "Required because nurses enter with uneven MR fluency.";

export const mayocopyOnboardingOpening = [
  {
    src: "/images/mayo-onbrording%20flow.png",
    alt: "Onboarding flow diagram from MR experience check through gesture training, applied practice, and CPR/BVM/AED assessment",
    width: 1920,
    height: 1080,
    overlay: {
      label: "Onboarding flow",
      value: "Four stages before BLS assessment begins",
    },
  },
  {
    src: "/images/mayo-4.jpg",
    alt: "Six-step MR BLS onboarding flow from setup to evaluation readiness",
    width: 1920,
    height: 1080,
  },
] as const;

export const mayocopyOnboardingStages = {
  pauseCheck: {
    title: "Pause Check, Device vs. Clinical Gap",
    body:
      "A check runs throughout onboarding: if a candidate doesn't respond within the expected window, the system asks whether the pause is device unfamiliarity or a technical issue, and opens a feedback channel. That distinction matters, it keeps a slow start on the headset from being mistaken for a clinical skill gap once the real assessment begins.",
    image: {
      src: "/images/mayo-screens.png",
      alt: "Onboarding pause check asking whether delay is device unfamiliarity or a technical issue before assessment begins",
      width: 1920,
      height: 1080,
    },
  },
  stages: [
    {
      title: "Stage 1, System Setup",
      body:
        "Room scan, controller pairing, manikin alignment. Required once, regardless of MR experience, since passthrough legibility depends on getting this right before anything else runs.",
      image: {
        videoSrc: "/videos/We%20observed%202.mov",
        alt: "System Setup stage showing room scan, controller pairing, and manikin alignment in passthrough MR",
        width: 511,
        height: 366,
      },
    },
    {
      title: "Stage 2, Basic Hand Gesture",
      body:
        "Grab, move, release, taught on familiar objects, not clinical ones.",
      image: {
        videoSrc: "/videos/Mr%20basic.mov",
        alt: "Basic hand gesture stage teaching grab, move, and release on everyday objects",
        width: 511,
        height: 366,
      },
    },
    {
      title: "Stage 3, BLS Hand Gesture",
      body:
        "Push, rotate, place, now applied to BLS-specific motions. Each step has a timed task, if not completed in time, the candidate retries that step rather than restarting the stage.",
      image: {
        videoSrc: "/videos/bls%20Interaction.mov",
        alt: "BLS hand gesture stage applying push, rotate, and place to CPR, BVM, and AED actions",
        width: 511,
        height: 366,
      },
    },
    {
      title: "Stage 4, Applied Practice and Evaluate",
      body:
        "Full gesture sequence rehearsed under low-stakes conditions, with a readiness check before Start Test unlocks. Candidates with prior MR experience skip directly here, since Stages 1 through 3 teach fluency they already have.",
      image: {
        videoSrc: "/videos/applied%20practice.mov",
        alt: "Applied practice and evaluate stage rehearsing the full gesture sequence before assessment",
        width: 511,
        height: 366,
      },
    },
  ],
} as const;

export const mayocopyEvaluationFramework = {
  body:
    "Mayo Clinic's certification requirements distilled into 17 evaluation steps, each cross-validated with Mayo clinical staff. Steps are grouped into three modules, CPR, BVM, AED, the same structure candidates learn in Onboarding and move through in Assessment.",
  image: {
    src: "/images/Evaluation%20System.png",
    alt: "BLS evaluation framework mapping 17 certification parameters across CPR, BVM, and AED modules with clinical thresholds",
    width: 2340,
    height: 870,
  },
} as const;

export const mayocopySensorToScreen = {
  sections: [
    {
      title: "Manikin hardware",
      body:
        "A ToF sensor tracks compression depth in real time. Spring-and-foam recoil gives realistic feedback. A QR code locks the virtual agent to the physical form.",
    },
    {
      title: "Dual sensing paths",
      body:
        "Quest 3 hand tracking and the manikin ToF sensor feed one evaluation system. Each reading checks against the rubric — only pass/fail reaches the screen.",
    },
  ],
  hardware: {
    src: "/images/mayo-6.jpg",
    alt: "Manikin hardware breakdown showing spring-and-foam recoil, ToF compression sensor, QR code registration, and drawer maintenance design",
    width: 1920,
    height: 1080,
    caption: "Manikin internals: spring-and-foam recoil, ToF depth sensor, and QR registration.",
  },
  diagram: {
    source: {
      title: "Candidate acts on manikin",
      subtitle: "Virtual agent registered via QR code",
    },
    sensors: [
      {
        title: "Hand tracking, Quest 3",
        subtitle: "e.g. AED pad contact on body",
      },
      {
        title: "ToF sensor, in manikin",
        subtitle: "Compression depth, real time",
      },
    ],
    evaluation: {
      title: "Data evaluation system",
      subtitle: "Checked against 1 of 17 thresholds",
    },
    verdict: { title: "Pass / fail determined" },
    outputs: [
      {
        title: "Real-time feedback",
        subtitle: "Shown live during assessment",
        variant: "assessment" as const,
      },
      {
        title: "Evaluator report",
        subtitle: "Structured, interpreted result",
        variant: "result" as const,
      },
    ],
  },
} as const;

export const mayocopyEvaluationReport = {
  body:
    "The report surfaces incomplete tasks by module first, then drills into CPR, ventilation, and AED specifics, so an evaluator can see exactly where a step fell short without re-watching the full session.",
  images: [
    {
      src: "/images/Incomplete%20Tasks.png",
      alt: "Evaluation report overview highlighting incomplete BLS tasks grouped by CPR, BVM, and AED modules",
      width: 1920,
      height: 1080,
    },
    {
      src: "/images/Incomplete%20Tasks-1.png",
      alt: "Evaluation report detail view drilling into CPR, ventilation, and AED task specifics",
      width: 1920,
      height: 1080,
    },
  ],
} as const;

export const mayocopyUsabilityTestingIntro =
  "Two rounds: internal readability validation on device, then on-site testing with Mayo Clinic's nursing team.";

export const mayocopyUsabilityRound1 = {
  purpose:
    "Validate the real-time feedback standard specifically, confirm color and contrast choices hold up under real Quest 3 passthrough conditions, not just Figma previews.",
  methodology:
    "Recruited test participants compared style candidates across real environment backgrounds and lighting conditions, on-device.",
  findings:
    "Contrast that read clearly in Figma failed against real clinical backgrounds. Flat-screen previews were not a reliable substitute for on-device testing.",
  changes:
    "Narrowed down to the strongest visual candidates before bringing anything to Round 2, so on-site testing evaluated a refined system, not raw options.",
  changesImage: {
    src: "/images/we%20change-1.png",
    alt: "Figma UI preview compared with the same screen rendered in Quest 3 passthrough against a clinical background",
    width: 1502,
    height: 856,
  },
  methodologyImage: {
    src: "/images/mayo/IMG_9853.jpg",
    alt: "Nurse practicing an MR interaction task during on-site usability testing at Mayo Clinic Jacksonville",
    caption: "Task-based scenario with think-aloud protocol.",
    width: 4032,
    height: 3024,
  },
} as const;

export const mayocopyUsabilityRound2 = {
  purpose:
    "Confirm the full flow, onboarding through assessment, could be completed without device friction interfering with clinical performance. Also validate whether the system's pass/fail judgment matched a certified evaluator's, step by step.",
  methodology:
    "Mayo Clinic's nursing team tested on-site, including candidates with no prior MR experience. A certified BLS evaluator scored each session live alongside the system, checking all 17 parameters in parallel.",
  findings:
    "Nurses with zero MR background completed the full flow without the device itself becoming the obstacle. Across all 17 steps, the evaluator's judgment and the system's judgment matched every time, zero conflicts.",
  changes:
    "Findings fed into iteration on information architecture, gesture guidance, and the visual system, closing the gap between what Figma predicted and what the headset actually delivered.",
  changesImage: {
    src: "/images/we%20change-1.png",
    alt: "Figma UI preview compared with the same screen rendered in Quest 3 passthrough against a clinical background",
    width: 1502,
    height: 856,
  },
  methodologyImage: {
    src: "/images/mayo/IMG_9832.jpg",
    alt: "Nurse in MR headset during on-site testing while an observer reviews the session on a laptop",
    caption: "Evaluator alongside a live MR certification session.",
    width: 5712,
    height: 4284,
  },
} as const;

export const mayocopyFinalUI = {
  intro:
    "Final design system across the physical kit, interaction ecosystem, and BLS assessment interface.",
  screens: [
    {
      id: "training-system",
      label: "Training System",
      image: {
        src: "/images/mayo-5.jpg",
        alt: "Final Mayo Clinic BLS training kit with manikin, Meta Quest 3, and carry case",
        width: 1920,
        height: 1080,
      },
    },
    {
      id: "experience-overview",
      label: "Final Design Overview",
      image: {
        src: "/images/mayo-11.jpg",
        alt: "Final design overview showing manikin, UI design, 3D models, onboarding, visual quality, and evaluation report",
        width: 1920,
        height: 1080,
      },
    },
    {
      id: "bls-assessment",
      label: "BLS Assessment Interaction",
      image: {
        src: "/images/mayo-8.jpg",
        alt: "Final AED assessment interaction design with control callouts and workflow references",
        width: 1920,
        height: 1080,
      },
    },
  ],
} as const;

export const mayocopyFinalConcept = {
  body: "The complete experience, onboarding through certification, demonstrated end to end.",
  video: {
    videoId: "q8XeJHdjQ1I",
    title: "Final Concept — Full Certification Flow",
  },
} as const;

export const mayocopySuccessCriteria = [
  {
    id: "time",
    label: "Time efficiency",
    target: "Complete BLS certification within Mayo's 10-minute cap.",
  },
  {
    id: "accuracy",
    label: "Credentialing accuracy",
    target: "All 17 parameters align with certified evaluator judgment.",
  },
  {
    id: "adoption",
    label: "Trust & adoption",
    target: "Nurses with zero MR experience complete the full certification flow.",
  },
] as const;

export const mayocopyImpactIntro =
  "Measured outcomes from Round 2 on-site testing against the success criteria defined before build.";

export const mayocopyImpactTimeEfficiency = {
  lead:
    "Round 2 on-site timing: MR certification against Mayo's 10-minute cap and the conventional one-to-one benchmark.",
  comparisons: [
    {
      id: "baseline",
      label: "Industry one-to-one BLS",
      value: "20–45 min",
      body:
        "One certified evaluator per candidate, in person. Every step observed live — capacity scales with evaluator headcount, not certification volume.",
    },
    {
      id: "limit",
      label: "Mayo hard limit",
      value: "10 min",
      body:
        "Non-negotiable client constraint from day one: the full experience — onboarding through assessment — could not exceed 10 minutes without lowering rigor.",
    },
    {
      id: "result",
      label: "MR certification flow",
      value: "8 min",
      detail: "3 min onboarding + 5 min assessment",
      body:
        "Same 17 evaluation steps, with automated real-time feedback replacing live evaluator observation during the session. Delivered under Mayo's cap.",
    },
  ],
} as const;

export const mayocopyImpactTrust = {
  quotes: [
    {
      quote:
        "I'd never worn a headset before today. Once onboarding walked me through the gestures, I wasn't thinking about the device — I was thinking about the steps.",
      cite: "Nurse candidate, no prior MR experience",
      tail: "right" as const,
    },
    {
      quote:
        "What I needed to see was whether a nurse could get through certification without the technology getting in the way. They did.",
      cite: "Certified BLS evaluator",
      tail: "left" as const,
    },
    {
      quote:
        "The feedback felt immediate enough to course-correct in the moment, not after someone flags it in a debrief.",
      cite: "Clinical educator, Mayo Clinic Jacksonville",
      tail: "right" as const,
    },
  ],
  summary:
    "Round 2 met Mayo's adoption bar: nurses with no MR background completed onboarding through assessment, and clinical staff on site gave consistently positive feedback on clarity, pacing, and whether the headset interfered with performance — it didn't.",
  photos: [
    {
      src: "/images/mayo/IMG_9832.jpg",
      alt: "Nurse in MR headset during on-site testing while an observer reviews the session on a laptop",
      caption: "On-site certification session at Mayo Clinic Jacksonville.",
      width: 5712,
      height: 4284,
    },
    {
      src: "/images/mayo-3.jpg",
      alt: "Mayo Clinic staff reviewing the MR certification experience during final presentation",
      caption: "Final presentation and staff review.",
      width: 1920,
      height: 1080,
    },
  ],
} as const;

export const mayocopySuccessCriteriaRevisited = {
  intro: "Pre-build targets mapped to measured Round 2 outcomes.",
  items: [
    {
      id: "time",
      label: "Time efficiency",
      target: "Complete BLS certification within Mayo's 10-minute cap.",
      outcome:
        "8 minutes total — 3 min onboarding, 5 min assessment — inside the cap with headroom to spare.",
      status: "met" as const,
    },
    {
      id: "accuracy",
      label: "Credentialing accuracy",
      target: "All 17 parameters align with certified evaluator judgment.",
      outcome:
        "17 steps, zero conflicts — system and evaluator pass/fail calls matched every time on site.",
      status: "met" as const,
    },
    {
      id: "adoption",
      label: "Trust & adoption",
      target: "Nurses with zero MR experience complete the full certification flow.",
      outcome:
        "MR-novice nurses completed onboarding through assessment without device friction becoming the bottleneck.",
      status: "met" as const,
    },
  ],
} as const;

export const mayocopyLimitations = [
  {
    id: "passthrough",
    title: "Passthrough still has an environment ceiling.",
    body:
      "Contrast testing found a hard legibility threshold on Quest 3. The current system works within tested lighting conditions, it hasn't been validated against every clinical environment Mayo operates in, brighter trauma bays, dimmer overnight units.",
  },
  {
    id: "aed-placement",
    title: "AED placement is a simplification, not the real technique.",
    body:
      "Three valid placement zones stand in for true anterior-posterior pad placement, because MR couldn't simulate a real reach-around. Clinically accepted, but it's an approximation the system carries permanently, not a temporary workaround.",
  },
] as const;

export const mayocopyWhatsNext = [
  {
    id: "remote-mode",
    title: "Remote mode.",
    body:
      "Extend the current on-site MR flow to remote certification, letting Mayo run assessments without requiring evaluators and candidates in the same physical location.",
  },
  {
    id: "multi-user",
    title: "Multi-user mode.",
    body:
      "Support multiple candidates or a candidate-evaluator pair in the same MR session simultaneously, moving beyond the current single-user architecture.",
  },
] as const;

export const mayocopyCrossFunctionalIntro = {
  title: "Clinical review confirmed, not revised.",
  body: "17 parameters reviewed by Mayo's clinical team before entering the rubric. Thresholds held as written.",
} as const;

export const mayocopyCrossFunctionalItems = [
  {
    title: "AED placement, technical limit.",
    body: "Correct technique needs one pad front, one pad back. MR couldn't simulate a real reach-around. Resolved with three valid placement zones, confirmed acceptable by Mayo's clinical partner.",
    image: {
      src: "/images/mayo-ui.png",
      alt: "AED pad placement UI showing three valid placement zones as an interim MR solution",
      width: 511,
      height: 366,
    },
  },
  {
    title: "Workflow aligned before handoff.",
    body: "Pipeline, stage ownership, deliverable format (Unity-ready asset vs. static image) set with the technical team upfront. Every handoff tested against target before sign-off.",
    image: {
      src: "/images/mayo-unityscreen.png",
      alt: "Unity workflow screen showing technical handoff and asset delivery pipeline",
      width: 511,
      height: 366,
    },
  },
] as const;

export const mayocopyDecisionMatrixIntro =
  "Based on the dimensions research surfaced, staffing dependency, venue requirements, long-term cost, real-time feedback, and clinical fidelity, we evaluated four directions against each.";

export const mayocopyDecisionMatrix = {
  columns: [
    {
      id: "more-evaluators",
      shortLabel: "More Evaluators",
      description: "Baseline fix.",
      verdict: "rejected" as const,
    },
    {
      id: "manikin",
      shortLabel: "Physical Manikin",
      description: "Upgraded hardware, real-time feedback built in.",
      verdict: "rejected" as const,
    },
    {
      id: "remote",
      shortLabel: "Remote Video",
      description: "Lower cost, no new hardware per site.",
      verdict: "rejected" as const,
    },
    {
      id: "mr",
      shortLabel: "Mixed Reality",
      description: "Portable, reusable, real-time spatial feedback.",
      verdict: "selected" as const,
    },
  ],
  criteria: [
    {
      id: "staffing",
      label: "Staffing Dependency",
      type: "boolean" as const,
      values: {
        "more-evaluators": { meets: false },
        manikin: { meets: false },
        remote: { meets: true },
        mr: { meets: true },
      },
    },
    {
      id: "portability",
      label: "Venue Requirements",
      type: "boolean" as const,
      values: {
        "more-evaluators": { meets: false },
        manikin: {
          meets: false,
          note: "Portable hardware, but assessment setup and supervisor staffing still need a fixed venue.",
        },
        remote: { meets: true },
        mr: { meets: true },
      },
    },
    {
      id: "cost",
      label: "Long-term Cost",
      type: "boolean" as const,
      values: {
        "more-evaluators": { meets: false },
        manikin: { meets: false },
        remote: { meets: true },
        mr: { meets: true },
      },
    },
    {
      id: "feedback",
      label: "Real-time Feedback",
      type: "boolean" as const,
      values: {
        "more-evaluators": { meets: true },
        manikin: { meets: true },
        remote: { meets: false },
        mr: { meets: true },
      },
    },
    {
      id: "fidelity",
      label: "Clinical Fidelity",
      type: "assessment" as const,
      values: {
        "more-evaluators": { text: "Same model; more staff changes nothing." },
        manikin: { text: "Sensors miss spatial checkpoints." },
        remote: { text: "Camera cannot verify depth or placement." },
        mr: { text: "Spatial tracking captures depth, rate, and placement." },
      },
    },
  ],
} as const;

export const mayocopyConcept = {
  lead: "We decided to use Mixed Reality.",
  points: [
    {
      label: "Real-time spatial tracking",
      value: "Matches live BLS checkpoints in depth, rate, and placement",
    },
    {
      label: "Scales without more staff",
      value: "Covers 400+ candidates a year without adding evaluators",
    },
    {
      label: "Portable, venue-independent",
      value: "No fixed room dependency that remote video still requires",
    },
  ],
} as const;

export const mayocopyConceptFigure = {
  src: "/images/mayo/mayo-medstar-vr.webp",
  alt: "ER doctors training with virtual reality headsets at MedStar",
  credit: "MedStar plans to train ER doctors using virtual reality. Photograph by Evy Mages.",
  width: 1024,
  height: 683,
} as const;
