export type EditorialBlock = {
  title: string;
  paragraphs: string[];
};

export type CaseHighlight = {
  stat: string;
  label: string;
  description: string;
};

export type CaseSpecRow = {
  label: string;
  value: string;
};

export type CaseConstraint = {
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type CaseStage = {
  label: string;
  title: string;
};

export type FieldSessionPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const medicalOnsiteSessionPhotos = [
  {
    src: "/images/mayo/IMG_9832.jpg",
    alt: "Nurse in MR headset during on-site testing while an observer reviews the session on a laptop",
    caption: "Evaluator alongside a live MR certification session.",
  },
  {
    src: "/images/mayo/IMG_9853.jpg",
    alt: "Nurse practicing an MR interaction task during on-site usability testing",
    caption: "Task-based scenario with think-aloud protocol.",
  },
] satisfies FieldSessionPhoto[];

export const medicalEvaluatorAlignmentPhoto = {
  src: "/images/mayo/IMG_9853.jpg",
  alt: "Nurse practicing an MR interaction task during on-site usability testing",
  caption: "Task-based scenario with think-aloud protocol.",
} satisfies FieldSessionPhoto;

export type CaseTestingMetaItem = {
  label: string;
  value: string;
};

export type CaseFinding = {
  observed?: string;
  changed?: string;
  src?: string;
  videoSrc?: string;
  alt?: string;
};

export type CaseTestingRound = {
  type: "round";
  id: string;
  roundLabel: string;
  purpose: string;
  meta: CaseTestingMetaItem[];
  siteLabel: string;
  videoSrc?: string;
  src?: string;
  alt?: string;
  photos?: FieldSessionPhoto[];
  findings: CaseFinding[];
};

export type CaseTestingTimelineItem = CaseTestingRound;

export const medicalHero = {
  subtitle:
    "Designing a Mixed Reality BLS Certification System for Clinical Scale",
  intro:
    "28 evaluators, 400+ nurses, every assessment one-on-one in person. Build MR certification at clinical scale without lowering rigor.",
  methodology:
    "Same research-driven UX process—final medium is XR/VR.",
};

export const medicalProblemIdentification = {
  problemStatement: {
    title: "Problem Statement",
  },
  definedProblems: {
    title: "Defined Problems",
  },
  onsiteResearch: {
    title: "Primary Research",
  },
  synthesis: {
    title: "Research Synthesis",
  },
  researchInsight: {
    index: "03",
    title: "Research Insight",
    kicker: "Three patterns formalized into the problems above.",
  },
  layers: [
    {
      id: "mayo-problem-client",
      index: "01",
      label: "Client-Provided Brief",
      quote:
        "The BLS certification process feels like it requires too much staff time. We need it optimized, but we do not have a precise problem definition beyond that feeling.",
      researchAreas: [
        { id: "workflow", title: "Workflow mapping" },
        { id: "interviews", title: "Stakeholder interviews" },
        { id: "observation", title: "End-to-end observation" },
        { id: "hands-on", title: "Hands-on BLS practice" },
      ],
      briefImage: {
        src: "/images/mayoBrief.png",
        alt: "Illustration of nurses queued in a hospital corridor outside a BLS certification room, labeled 400 Candidates",
      },
    },
    {
      id: "mayo-problem-fieldwork",
      index: "01",
      label: "Primary Research",
      location: "Mayo Clinic Jacksonville",
      timeline: [
        {
          id: "interviews",
          title: "Stakeholder Interviews",
          cardBody:
            "We simply do not have enough evaluators to keep up with volume.",
          footerLeft: "14 Evaluators",
          footerRight: "30 mins",
          quote:
            "We simply do not have enough evaluators to keep up with volume. Hiring more is not a realistic lever for us.",
          quoteAttribution: "BLS Program Lead",
          belowImages: [
            {
              src: "/images/mayo-research.png",
              alt: "Design team and Mayo Clinic clinical staff observing BLS certification in a hospital simulation room",
              caption: "Observing certification on site.",
            },
          ],
        },
        {
          id: "observation",
          title: "End-to-end flow observation",
          compact: true,
          metricsInline: "6 runs observed · 22 min avg.",
          quoteInline:
            "“One evaluator cannot reliably watch compression depth, hand placement, and AED pad alignment at the same time.” — Senior BLS Evaluator",
        },
        {
          id: "hands-on",
          title: "Hands-On BLS Practice",
          cardBody:
            "Even strong nurses miss subtle form errors when they are also managing the room and the clock.",
          footerLeft: "14 Evaluators",
          footerRight: "30 mins",
          quote:
            "Even strong nurses miss subtle form errors when they are also managing the room and the clock.",
          quoteAttribution: "Clinical Educator",
          belowImages: [
            {
              src: "/images/mayo-research2.png",
              alt: "Hands-on BLS equipment practice with AED electrode pads during on-site fieldwork",
              caption: "Hands-on BLS practice with a trained coach.",
            },
          ],
        },
      ],
      locationIcon: "/images/mayo/location-pin.png",
    },
    {
      id: "mayo-problem-findings",
      index: "02",
      label: "Research Synthesis",
      synthesis: {
        insightsStep: {
          stat: "8",
          title: "insights consolidated",
        },
        patternsStep: {
          stat: "3",
          title: "patterns formalized",
          body: "Three patterns formalized into the problems above.",
        },
      },
      discovered: {
        title: "What we discovered",
        items: [
          { id: "candidate-readiness", label: "Candidates were prepared" },
          { id: "evaluator-scarcity", label: "Evaluators are the scarce resource" },
          { id: "multi-point-observation", label: "Multi-point observation is essential" },
          { id: "format-constraint", label: "The 1:1 format is fixed" },
        ],
      },
      ruledOut: {
        title: "What we ruled out",
        items: [
          { id: "insufficient-competency", label: "Insufficient nurse competency" },
          { id: "format-scales", label: "The format can absorb volume" },
          { id: "parallelize-time", label: "Evaluator time can parallelize" },
          { id: "hiring-fix", label: "Hiring closes the gap" },
        ],
      },
    },
    {
      id: "mayo-problem-defined",
      index: "04",
      label: "Defined Problems",
      kicker: "What is the key problem",
      scaleImage: {
        src: "/images/mayo-problem-scale.png",
        alt: "1 evaluator responsible for certifying 14 candidates, shown as a 1:14 evaluator-to-candidate ratio",
      },
      scaleVisual: {
        evaluatorCount: 1,
        evaluatorLabel: "Evaluator",
        counterpartCount: 14,
        counterpartLabel: "Candidates",
        counterpartType: "people" as const,
      },
      items: [
        {
          id: "staffing-volume",
          stat: "28 : 400",
          statLabel: "Evaluator capacity vs. annual volume",
          body: "28 evaluators for ~400 candidates. Hiring cannot close the gap.",
        },
        {
          id: "observation-fidelity",
          stat: "12+",
          statLabel: "Checkpoints per session",
          body: "One evaluator cannot track depth, placement, and pad alignment at once.",
        },
        {
          id: "format-bottleneck",
          stat: "1:1",
          statLabel: "Required assessment format",
          body: "One-on-one, in person. Cannot parallelize.",
        },
      ],
    },
  ],
};

export const medicalSpec: CaseSpecRow[] = [
  { label: "Timeline", value: "10 Weeks" },
  { label: "Team", value: "20-Person Interdisciplinary Team" },
  { label: "Platform", value: "Meta Quest 3 + Custom CPR Manikin" },
  { label: "Scale", value: "28 Evaluators, 400+ Candidates a Year" },
];

export const medicalOverviewChapter = {
  index: "01",
  title: "Overview",
  summary:
    "28 evaluators, 400+ nurses, every assessment one-on-one in person—same research-driven UX process, final medium XR/VR.",
};

export const medicalCrossFunctionalAlignment = {
  title: "Cross-Functional Alignment",
  body:
    "[To be completed] How we aligned 17 certification parameters with Mayo clinical advisors, and how passthrough readability constraints were communicated to engineering and hardware partners.",
};

export const medicalSuccessCriteria = {
  title: "Success Criteria",
  intro:
    "[To be completed] Success metrics defined before build—so Impact outcomes reflect validated targets, not retroactive justification.",
  items: [
    {
      id: "time",
      label: "Time efficiency",
      target:
        "[To be completed] Complete BLS certification within Mayo's 10-minute cap.",
    },
    {
      id: "accuracy",
      label: "Credentialing accuracy",
      target:
        "[To be completed] All 17 parameters align with certified evaluator judgment.",
    },
    {
      id: "adoption",
      label: "Trust & adoption",
      target:
        "[To be completed] Nurses with zero MR experience complete the full certification flow.",
    },
  ],
};

export const medicalSuccessCriteriaRevisited = {
  title: "Success Criteria Revisited",
  intro:
    "[To be completed] Map Chapter 04 success criteria against measured outcomes from Round 2 testing and on-site evaluator review.",
  items: [
    {
      id: "time",
      label: "Time efficiency",
      result: "[To be completed] Delivered flow vs. 10-minute cap.",
    },
    {
      id: "accuracy",
      label: "Credentialing accuracy",
      result: "[To be completed] Evaluator alignment across 17 steps.",
    },
    {
      id: "adoption",
      label: "Trust & adoption",
      result: "[To be completed] MR-novice nurse completion rate.",
    },
  ],
};

export const medicalReflection = {
  index: "12",
  title: "Reflection",
  limitations: {
    title: "Limitations",
    body:
      "[To be completed] Current constraints—including passthrough instability under extreme clinical lighting—and where the system still depends on controlled test conditions.",
  },
  whatsNext: {
    title: "What's Next",
    body:
      "[To be completed] Post-delivery stage at Mayo Clinic and what we would adjust in a second iteration.",
  },
};

export const medicalOverviewVideo = {
  type: "youtube" as const,
  videoId: "q8XeJHdjQ1I",
  title: "Mixed Reality BLS Certification System",
  autoPlay: true,
};

export const medicalDecision = {
  title: "Opportunity Statement",
  kicker: "Why Mixed Reality",
  intro:
    "Four directions evaluated. Only MR cleared every structural constraint without lowering certification rigor.",
  matrix: {
    columns: [
      {
        id: "baseline",
        label: "Current Process",
        shortLabel: "Current Process",
        description:
          "One-to-one, in-person. Evaluators track depth, placement, and AED alignment live.",
      },
      {
        id: "more-evaluators",
        label: "Current Process + More Evaluators",
        shortLabel: "More Evaluators",
        description: "More headcount does not remove the bottleneck.",
        verdict: "rejected" as const,
      },
      {
        id: "manikin",
        label: "Improved Physical Manikin",
        shortLabel: "Physical Manikin",
        description: "Per-use cost scales. Venue dependence remains.",
        verdict: "rejected" as const,
      },
      {
        id: "remote",
        label: "Remote Video Evaluation",
        shortLabel: "Remote Video",
        description: "Cannot verify pressure or angle in real time.",
        verdict: "rejected" as const,
      },
      {
        id: "mr",
        label: "Mixed Reality",
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
          baseline: { meets: false },
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
          baseline: { meets: false },
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
          baseline: { meets: false },
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
          baseline: { meets: true },
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
          baseline: {
            text: "Validated, but capped by evaluator capacity.",
          },
          "more-evaluators": {
            text: "Same model; more staff changes nothing.",
          },
          manikin: {
            text: "Sensors miss spatial checkpoints.",
          },
          remote: {
            text: "Camera cannot verify depth or placement.",
          },
          mr: {
            text: "Spatial tracking captures depth, rate, and placement.",
          },
        },
      },
    ],
  },
  matrixNote: "",
  matrixBridge: "",
  standardsIntro: "Three requirements the MR system had to prove.",
  standards: [
    {
      id: "feedback",
      icon: "feedback" as const,
      title: "Real-time Feedback",
    },
    {
      id: "fidelity",
      icon: "fidelity" as const,
      title: "Full Clinical Fidelity",
    },
    {
      id: "credentialing",
      icon: "credentialing" as const,
      title: "Credentialing-grade Evaluation",
    },
  ],
};

/** @deprecated Standards live under medicalDecision layer 03 */
export const medicalStandards = {
  title: "The Standards",
  kicker: "Design Standards",
  intro: medicalDecision.standardsIntro,
  standards: medicalDecision.standards,
};

export type MedicalInsightBuild = {
  id: string;
  order: string;
  title: string;
  body: string;
  anchorId: string;
};

export type MedicalInsightRow = {
  id: string;
  research: string;
  researchNote: string;
  builds: MedicalInsightBuild[];
};

export const medicalInsight = {
  title: "Design Decisions",
  rows: [
    {
      id: "brand",
      research: "Brand Research",
      researchNote: "Confident, compassionate, accessible tone.",
      builds: [
        {
          id: "ui",
          order: "02",
          title: "UI Design",
          body: "Full certification flow map.",
          anchorId: "mayo-flow-wireframes",
        },
      ],
    },
    {
      id: "scene",
      research: "Spatial / VR Research",
      researchNote: "Passthrough contrast has hard thresholds.",
      builds: [
        {
          id: "onboarding",
          order: "01",
          title: "Onboarding",
          body: "Gesture vocabulary before clinical stakes.",
          anchorId: "mayo-onboarding",
        },
      ],
    },
    {
      id: "function",
      research: "Functional Research",
      researchNote: "Real-time feedback, certification-grade rigor.",
      builds: [
        {
          id: "feedback",
          order: "03",
          title: "Real-time Feedback",
          body: "Pass/fail during assessment.",
          anchorId: "mayo-final",
        },
        {
          id: "evaluation",
          order: "04",
          title: "Evaluation System",
          body: "17 parameters, evaluator-trusted reports.",
          anchorId: "mayo-evaluation",
        },
      ],
    },
  ] satisfies MedicalInsightRow[],
};

export const medicalUIDesign = {
  flowWireframes: {
    title: "User Flow & Wireframes",
  },
  screens: {
    title: "UI Screens",
  },
  final: {
    title: "Final UI",
  },
  title: "UI Design",
  kicker: "UI Design Direction",
  intro: "",
  dimensions: [
    {
      id: "brand",
      title: "Brand Consistency",
      body: "Mayo visual language, not a decorative overlay.",
    },
    {
      id: "scene",
      title: "Scene Adaptation",
      body: "Legible in passthrough under real clinical lighting.",
    },
    {
      id: "function",
      title: "Functional Purpose",
      body: "Real-time feedback and certification-grade credibility.",
    },
  ],
  userFlow: {
    label: "User Flow",
    src: "/images/mayo-onbrording%20flow.png",
    alt: "Onboarding flow diagram from MR experience check through gesture training, applied practice, and CPR/BVM/AED assessment",
    caption: "Three-stage path for MR novices; experienced users skip to assessment.",
  },
  targetDefinition: "",
  solutions: {
    lead: "",
    candidates: [
      {
        label: "Style Guide",
        src: "/images/mayo-brand-styleguide.png",
        alt: "Mayo Clinic MR visual style guide with typography, color, and spatial UI components",
        caption: "Type, color, and spatial components.",
      },
    ],
    applied: {
      label: "Final UI",
      body: "Nine directions explored. Solution 9 selected after on-device testing and on-site nurse feedback.",
      images: [
        {
          src: "/images/mayo-ui.png",
          alt: "Final MR UI CPR segment screen with spatial navigation prompt in a clinical environment",
        },
        {
          src: "/images/mayo-brand-ui.png",
          alt: "Nine explored MR UI directions with Solution 9 selected as the final Mayo Clinic certification system",
        },
      ],
    },
  },
  iconSheet: {
    label: "Icon",
    title: "Interaction Vocabulary",
    body: "Click, rotate, press—same language from onboarding through CPR, BVM, and AED.",
    src: "/images/mayo-icon.png",
    alt: "Gesture icon vocabulary for MR onboarding and BLS interactions including click, rotate, press, CPR, BVM, and AED",
  },
  screensOverview: {
    label: "Screens",
    title: "Four Progressive Stages",
    body: "Setup → gesture training → applied practice → assessment.",
    src: "/images/mayo-screens.png",
    alt: "MR Basic, BLS Interaction, Applied Practice, and Assessment UI screens across four onboarding stages",
  },
  testingBridge: {
    body: "Two rounds of usability testing followed, internal readability validation first, then on-site testing with real nurses at Mayo Clinic Jacksonville.",
    anchorId: "mayo-user-testing",
    anchorLabel: "Usability Testing",
  },
};

export type MedicalDesignRationale = {
  id: string;
  insight: string;
  decision: string;
  why: string;
};

export const medicalDesignRationales: MedicalDesignRationale[] = [
  {
    id: "spatial-mr",
    insight: "One evaluator cannot track depth, placement, and pad alignment at once.",
    decision: "Spatial MR with parallel checkpoint tracking.",
    why: "Captures spatial parameters without adding evaluator headcount.",
  },
  {
    id: "progressive-onboarding",
    insight: "Nurses are clinically ready but MR-fluency varies.",
    decision: "Four progressive onboarding stages before assessment.",
    why: "Device learning must not compete with BLS recall under observation.",
  },
];

export const medicalIteration = {
  title: "Iteration",
  intro:
    "Usability testing surfaced concrete friction points. Each finding drove a specific design change before the final system was delivered.",
  items: [
    {
      id: "palette-readability",
      observed:
        "Several palette options that read clearly in Figma failed legibility in live Quest 3 renders against real clinical backgrounds.",
      changed:
        "Narrowed to two candidates with consistent on-device readability, then finalized the brand blue system after on-site nurse preference testing.",
    },
    {
      id: "interaction-cues",
      observed:
        "MR zero-experience users showed measurable difficulty at key interaction points—comprehension slowed and operations took longer.",
      changed:
        "Added icon-based and motion-guided cues at unfamiliar interaction points to reduce cognitive load without adding tutorial steps.",
    },
    {
      id: "icon-vocabulary",
      observed:
        "Gesture icons without motion context were misread during the first on-site round.",
      changed:
        "Unified gesture and module icons across onboarding and assessment so nurses read the same interaction language throughout the flow.",
    },
  ],
};

export const medicalFinalVideo = {
  type: "youtube" as const,
  videoId: "q8XeJHdjQ1I",
  title: "Final Concept — Full Certification Flow",
  caption: "Onboarding through BLS evaluation.",
};

export const medicalDimensionResearch = [
  {
    id: "brand",
    label: "Brand",
    body: "Mayo brand tone across social, clinical, and partner touchpoints. Mayo Blue as anchor.",
    image: {
      src: "/images/mayo-brand-research2.png",
      alt: "Mayo Clinic brand audit across social media, presentations, and clinical publications",
      caption: "Brand research across Mayo touchpoints.",
    },
    extraImages: [
      {
        src: "/images/mayo-visual%20research.png",
        alt: "Brand and design language research board covering Mayo Clinic identity, web and social touchpoints, and clinical case references",
        caption: "Brand board: identity, web, social, clinical references.",
      },
    ],
  },
  {
    id: "scene",
    label: "Spatial / VR",
    body: "Quest 3 passthrough: what stays readable over real clinical environments.",
    image: {
      src: "/images/mayo-brand-research3.png",
      alt: "Spatial UI readability research comparing contrast and color systems in passthrough MR environments on device",
      caption: "On-device contrast testing.",
    },
  },
  {
    id: "function",
    label: "Functional",
    body: "Real-time feedback and evaluator-grade certification. Assessment states instantly distinguishable.",
  },
];

/** @deprecated Use medicalUIDesign */
export const medicalBrandSpatial = medicalUIDesign;

export type EvaluatorAlignmentContent = {
  title: string;
  paragraphs: string[];
  photos?: FieldSessionPhoto[];
};

export const medicalEvaluatorComparison = {
  title: "On-site Evaluator Alignment",
  paragraphs: [
    "A certified BLS evaluator sat in on each Round 2 session. System pass/fail calls aligned with clinical judgment across all 17 steps.",
  ],
  photos: [medicalEvaluatorAlignmentPhoto],
} satisfies EvaluatorAlignmentContent;

export type OutcomeMatrixCell = {
  id: string;
  label: string;
  value: number;
  unit: string;
  role?: "baseline" | "limit" | "result";
  note?: string;
};

export type MetricDeltaCard = {
  value: number | string;
  unit: string;
  percent: number;
  label: string;
};

/** @deprecated Use MetricDeltaCard */
export type OutcomeDeltaCard = MetricDeltaCard;

export const medicalOutcome = {
  title: "Impact",
  closing: "Delivered to Mayo Clinic with full operational documentation.",
  timeComparison: {
    lead: "Client cap: 10 min. Delivered flow: 8 min.",
    unit: "min",
    matrix: [
      {
        id: "industry",
        label: "Industry one-to-one BLS",
        value: 32,
        unit: "min",
        role: "baseline",
        note: "20 to 45 min midpoint",
      },
      {
        id: "onsite",
        label: "On-site observation avg.",
        value: 22,
        unit: "min",
        role: "baseline",
      },
      {
        id: "limit",
        label: "Client hard limit",
        value: 10,
        unit: "min",
        role: "limit",
      },
      {
        id: "delivered",
        label: "MR certification flow",
        value: 8,
        unit: "min",
        role: "result",
        note: "3 min onboarding + 5 min assessment",
      },
    ] satisfies OutcomeMatrixCell[],
    deltas: [
      { value: 8, unit: "min", percent: 64, label: "Faster vs on-site average" },
      { value: 8, unit: "min", percent: 75, label: "Faster vs industry midpoint" },
      { value: 8, unit: "min", percent: 20, label: "Headroom under client cap" },
    ] satisfies MetricDeltaCard[],
  },
  accuracyComparison: {
    paragraphs: [
      "Evaluator on-site feedback matched system pass/fail across all 17 steps.",
    ],
  },
  qualitative: [
    {
      label: "Trust",
      body: "Positive feedback from Mayo staff after on-site review.",
    },
    {
      label: "Experience",
      body: "Nurses with zero MR experience completed the full flow.",
    },
  ],
};

export const medicalRole = {
  title: "My Role",
  body:
    "In a 20-person interdisciplinary team, I led brand and spatial experience design—from onboarding architecture through BLS evaluation UI. I owned the four-stage onboarding sequence, mapped all 17 certification parameters to interface checkpoints, and directed two rounds of on-site nurse usability testing.",
  paragraphs: [
    "In a 20-person interdisciplinary team, I led brand and spatial experience design—from onboarding architecture through BLS evaluation UI.",
  ],
  highlights: [
    {
      stat: "4",
      label: "stage onboarding sequence",
      description:
        "Separating technology adaptation from clinical practice, ensuring nurses master each operational node before formal assessment.",
    },
    {
      stat: "17",
      label: "evaluation steps precisely mapped and visualized",
      description:
        "Cross-validated against real BLS standards with Mayo clinical staff, tracking each nurse's performance data and test results in real time.",
    },
    {
      stat: "2",
      label: "rounds testing, 3 iterations",
      description:
        "Collected hands-on feedback from nurses in real clinical scenarios to validate UI readability and operational accuracy.",
    },
  ] satisfies CaseHighlight[],
};

export const medicalChallenge = {
  title: "The Challenge",
  constraints: [
    {
      label: "User Constraint",
      title: "Mixed familiarity with MR",
      body: "Nurses ranged from MR novices to experienced users. Onboarding had to reach operational readiness without a technology curve that interfered with clinical recall under pressure.",
      image: "/images/mayo-2.jpg",
      imageAlt: "Nurse onboarding in a clinical training environment",
    },
    {
      label: "Clinical Constraint",
      title: "Credentialing-grade accuracy",
      body: "Every interaction had to reflect real BLS performance. This was a credentialing tool for a major medical institution, not a consumer product.",
      image: "/images/mayo-3.jpg",
      imageAlt: "Clinical simulation environment with rigorous BLS standards",
    },
  ] satisfies CaseConstraint[],
};

export const medicalBrandUI = {
  title: "Brand & UI",
  subsections: [
    {
      id: "mayo-brand-research",
      title: "Brand Research",
      subtitle: "Visual Audit & Identity Analysis",
      paragraphs: [
        "Before designing a single screen, we studied how Mayo Clinic's brand actually lives across contexts, including social media, internal presentations, clinical publications, and the visual language of studios and partners who have worked within their identity system.",
      ],
      images: [
        {
          src: "/images/mayo-brand-research2.png",
          alt: "Mayo Clinic brand audit across social media, presentations, and clinical publications",
        },
      ],
      tailParagraphs: [
        "Mayo Clinic's brand guidelines position the institution as confident, compassionate, and accessible: a visual identity built on clarity and trust, not decoration. The language is conversational and direct; the aesthetic is clean and authoritative.",
      ],
      keywords: [
        "Confident",
        "Compassionate",
        "Optimistic",
        "Collaborative",
        "Accessible",
      ],
    },
    {
      id: "mayo-brand-direction",
      title: "Brand Direction",
      subtitle: "Correct Use of Blue",
      paragraphs: [
        "From the audit, Mayo Blue emerged as the anchor across the system: usable as a vibrant background, a headline accent on white, a natural element in photography, and a gradient range from bright blue to the darkest Mayo Blue. This became our baseline before any spatial interface work began.",
      ],
      images: [
        {
          src: "/images/mayo-brand-research1.png",
          alt: "Mayo Clinic brand guideline on correct use of blue across billboards, posters, photography, and social media",
        },
      ],
    },
    {
      id: "mayo-spatial-ui-research",
      title: "Spatial UI Research",
      subtitle: "MR & AR on Device",
      paragraphs: [
        "Applying a brand built for print and web to mixed reality is not a translation. It is a rebuild. We tested visual and interaction standards directly on Meta Quest 3 in passthrough, studying what stays readable when UI overlays real clinical environments under variable lighting.",
      ],
      images: [
        {
          src: "/images/mayo-brand-research3.png",
          alt: "Spatial UI readability research comparing contrast and color systems in passthrough MR environments on device",
        },
      ],
      findingsHeading: "Key Findings",
      findingsIntro:
        "On-device passthrough testing surfaced three constraints that flat-screen design workflows could not anticipate.",
      findings: [
        {
          index: "01",
          title: "Flat-screen standards fail in space",
          body: "Contrast ratios that pass flat-screen accessibility checks can fail entirely against real-world surfaces.",
        },
        {
          index: "02",
          title: "Color systems break in passthrough",
          body: "Color systems designed for white backgrounds behave unpredictably in passthrough environments.",
        },
        {
          index: "03",
          title: "Spatial UI needs its own loop",
          body: "Spatial UI requires its own testing loop. Figma previews are not a substitute.",
        },
      ],
    },
    {
      id: "mayo-design-direction",
      title: "Design Direction",
      subtitle: "Fluidity Within Brand Constraints",
      paragraphs: [
        "With both the brand identity and the spatial constraints understood, we developed a visual system that carries Mayo Clinic's clean, authoritative character into the MR environment while introducing a sense of fluidity: soft transitions, layered depth, and motion that feels native to space rather than lifted from a flat screen.",
      ],
      images: [
        {
          src: "/images/mayo-brand-styleguide.png",
          alt: "Mayo Clinic MR visual style guide with typography, color, and spatial UI components",
        },
      ],
      closingParagraph:
        "The goal was a UI that reads as unmistakably Mayo Clinic, and unmistakably spatial.",
      closingImage: {
        src: "/images/mayo-brand-ui.png",
        alt: "Final Mayo Clinic mixed reality UI system applied across onboarding and BLS evaluation",
      },
    },
  ] satisfies CaseBrandUISubsection[],
};

export type CaseOnboardingInsight = {
  index: string;
  title: string;
  body: string;
};

export type CaseBrandUISubsection = {
  id: string;
  title: string;
  subtitle: string;
  layout?: "stack" | "split";
  paragraphs: string[];
  tailParagraphs?: string[];
  images?: { src: string; alt: string }[];
  keywords?: string[];
  findingsHeading?: string;
  findingsIntro?: string;
  findings?: CaseOnboardingInsight[];
  closingParagraph?: string;
  closingImage?: { src: string; alt: string };
};

export type CaseOnboardingGestureCard = {
  id: string;
  title: string;
  body: string;
  media: {
    videoSrc?: string;
    clipStart?: number;
    clipEnd?: number;
    src?: string;
    alt: string;
  };
};

export type CaseOnboardingStage = {
  id: string;
  label: string;
  title: string;
  body: string;
  navLabel?: string;
  iconSrc?: string;
  src?: string;
  videoSrc?: string;
  alt: string;
};

export const medicalOnboarding = {
  title: "Onboarding",
  kicker: "Onboarding",
  origin: "Required because nurses enter with uneven MR fluency.",
  designMethodLead: "Click, rotate, press—taught through everyday objects first.",
  gestureCards: [
    {
      id: "mayo-gesture-click",
      title: "Radio · Click",
      body: "Point and tap, like a radio preset.",
      media: {
        videoSrc: "/images/mayo-unity.mov",
        alt: "Hand-tracking ray cast selecting an object in the MR fundamentals tutorial",
      },
    },
    {
      id: "mayo-gesture-rotate",
      title: "Lamp · Rotate",
      body: "Pinch and turn, like a lamp dial.",
      media: {
        videoSrc: "/videos/bls%20Interaction.mov",
        alt: "MR tutorial prompting pinch-and-rotate on an everyday object dial",
      },
    },
    {
      id: "mayo-gesture-press",
      title: "Television · Press",
      body: "Index finger press, like a TV power button.",
      media: {
        videoSrc: "/videos/Mr%20basic.mov",
        clipStart: 0,
        clipEnd: 7,
        alt: "MR tutorial showing push gesture on a retro television power button",
      },
    },
  ] satisfies CaseOnboardingGestureCard[],
  dualChannelInput: {
    problem: "No haptic feedback when placing electrodes on a virtual patient.",
    solution: "Buttons primary; voice as secondary for emergency communication.",
  },
  stagesIntro: "",
  stages: [
    {
      id: "mayo-onboarding-stage-1",
      label: "STAGE 1",
      title: "System Setup",
      navLabel: "Setup",
      iconSrc: "/images/set%20up.png",
      body: "Calibration and hand-tracking. No clinical stakes yet.",
      videoSrc: "/videos/We%20observed%202.mov",
      alt: "Stage 1 system setup interface with headset calibration and space orientation",
    },
    {
      id: "mayo-onboarding-stage-2",
      label: "STAGE 2",
      title: "MR Fundamentals",
      navLabel: "MR Basic",
      iconSrc: "/images/mr%20basic.png",
      body: "Everyday objects teach click, rotate, press.",
      videoSrc: "/videos/Mr%20basic.mov",
      alt: "Stage 2 MR fundamentals interface teaching everyday object interactions",
    },
    {
      id: "mayo-onboarding-stage-3",
      label: "STAGE 3",
      title: "BLS Interaction Training",
      navLabel: "BLS Interaction",
      iconSrc: "/images/BLS%20interaction.png",
      body: "CPR, BVM, AED gesture training before assessment.",
      videoSrc: "/videos/bls%20Interaction.mov",
      alt: "Stage 3 BLS-specific gesture training for CPR, BVM, and AED",
    },
    {
      id: "mayo-onboarding-stage-4",
      label: "STAGE 4",
      title: "Applied Practice",
      navLabel: "Applied Practice",
      iconSrc: "/images/appied%20practice.png",
      body: "Same gestures in a realistic assessment context.",
      videoSrc: "/videos/applied%20practice.mov",
      alt: "Stage 4 applied practice in a realistic assessment context",
    },
  ] satisfies CaseOnboardingStage[],
};

export const medicalEvaluation = {
  title: "Evaluation System",
  framework: [
    {
      id: "mayo-eval-framework-steps",
      title: "17 Verified Steps",
      body: "17 steps verified with Mayo clinical staff.",
    },
    {
      id: "mayo-eval-framework-modules",
      title: "Module Organization",
      body: "Grouped by CPR, BVM, and AED modules.",
    },
  ],
  reportIntro: "",
  reportViews: [
    {
      id: "mayo-incomplete-tasks",
      label: "VIEW 1",
      title: "Incomplete Tasks Overview",
      body: "Which BLS steps still need correction.",
      src: "/images/Incomplete%20Tasks.png",
      alt: "Evaluation report overview highlighting incomplete BLS tasks by module",
    },
    {
      id: "mayo-incomplete-tasks-detail",
      label: "VIEW 2",
      title: "Incomplete Tasks Detail",
      body: "Drill-down into CPR, ventilation, and AED segments with parameter-level feedback.",
      src: "/images/Incomplete%20Tasks-1.png",
      alt: "Detailed incomplete tasks view for CPR and AED evaluation segments",
    },
    {
      id: "mayo-full-report",
      label: "VIEW 3",
      title: "Full Evaluation Report",
      body: "Complete credentialing report consolidating performance across all 17 steps.",
      src: "/images/Full%20Report.png",
      alt: "Full BLS evaluation report with module scores and clinical parameter feedback",
    },
  ] satisfies CaseOnboardingStage[],
};

export const medicalUserTesting = {
  title: "Usability Testing",
  intro: "Round 1: readability on device. Round 2: full flow with nurses on site.",
  findingsLabel: "Findings & Changes",
  timeline: [
    {
      type: "round",
      id: "mayo-round-1-readability",
      roundLabel: "Round 1",
      purpose: "Palette readability in live Quest 3 passthrough—not Figma alone.",
      meta: [
        { label: "Participants", value: "N=6" },
        { label: "Audience", value: "Internal brand & spatial design team" },
        { label: "Session length", value: "~15 min per reviewer" },
        {
          label: "Methods",
          value: "Eight palette candidates, Figma mocks vs Quest 3 live renders in clinical lighting",
        },
      ],
      siteLabel: "Internal Readability Testing",
      videoSrc: "/videos/uitesting1.mp4",
      alt: "Live Quest 3 readability testing comparing eight palette candidates in clinical lighting",
      findings: [
        {
          observed: "Figma-clear palettes failed in live Quest 3 renders.",
          changed: "Narrowed to two on-device candidates for on-site testing.",
          src: "/images/we%20change-1.png",
          alt: "Two UI candidates compared in a Mayo Clinic hospital environment during readability testing",
        },
      ],
    },
    {
      type: "round",
      id: "mayo-round-2-onsite",
      roundLabel: "Round 2",
      purpose: "Full certification flow with nurses; system vs. evaluator scoring in parallel.",
      meta: [
        { label: "Participants", value: "N=6" },
        {
          label: "Audience",
          value: "Registered nurses at Mayo Clinic Jacksonville, incl. MR zero-experience",
        },
        { label: "Session length", value: "~20 min per nurse" },
        {
          label: "Methods",
          value: "Think-aloud protocol, onboarding task scenarios, live evaluator comparison",
        },
      ],
      siteLabel: "On Site at Mayo Clinic Jacksonville",
      photos: medicalOnsiteSessionPhotos,
      findings: [
        {
          observed: "MR zero-experience users struggled at key interaction points.",
          changed: "Added icon and motion-guided cues at unfamiliar steps.",
          videoSrc: "/videos/we%20change%203.mov",
          alt: "Icon-based and motion-guided interaction cues added to reduce cognitive load",
        },
        {
          observed: "Nurses preferred brand blue over white in context.",
          changed: "Finalized the blue system.",
          src: "/images/mayo-3.jpg",
          alt: "Final blue UI system after on-site palette preference testing",
        },
      ],
    },
  ] satisfies CaseTestingTimelineItem[],
};
