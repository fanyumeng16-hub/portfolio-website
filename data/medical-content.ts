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
    "Mayo Clinic's BLS certification process had a scaling problem: 28 evaluators, 400+ nurses, every assessment conducted one-on-one in person. The goal was to build a mixed reality evaluation system that maintained clinical-grade rigor while making certification accessible at scale.",
};

export const medicalProblemIdentification = {
  title: "Problem Identification",
  layers: [
    {
      id: "mayo-problem-client",
      index: "01",
      label: "Client-Provided Brief",
      quote:
        "The BLS certification process feels like it requires too much staff time. We need it optimized, but we do not have a precise problem definition beyond that feeling.",
      followUp:
        "To sharpen the problem definition, we investigated four areas on site:",
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
      index: "02",
      label: "On-Site Primary Research",
      purpose:
        "We went on site to observe how certification actually runs, interview the staff who deliver it, and build a firsthand evidence base before defining the problem.",
      location: "Mayo Clinic Jacksonville",
      timeline: [
        {
          id: "site-immersion",
          title: "Site immersion",
          detail: "Mapped workflow, staffing handoffs, and session setup on site.",
        },
        {
          id: "interviews",
          title: "Stakeholder interviews",
          metricsInline:
            "11 interviews — 4 evaluators · 4 nurses · 2 educators · 1 coordinator",
          detail: "Semi-structured across planning, delivery, and quality oversight.",
          quote:
            "We simply do not have enough evaluators to keep up with volume. Hiring more is not a realistic lever for us.",
          quoteAttribution: "BLS Program Lead",
          belowImages: [
            {
              src: "/images/mayo-research.png",
              alt: "Design team and Mayo Clinic clinical staff observing BLS certification in a hospital simulation room",
              caption: "Observing the full certification flow on site.",
            },
          ],
        },
        {
          id: "observation",
          title: "End-to-end flow observation",
          compact: true,
          metricsInline:
            "6 runs observed · 22 min avg. — documented from room setup through assessment and debrief.",
          quoteInline:
            "“One evaluator cannot reliably watch compression depth, hand placement, and AED pad alignment at the same time.” — Senior BLS Evaluator",
        },
        {
          id: "hands-on",
          title: "Hands-on BLS practice",
          detail: "Coached practice to see what evaluators must catch and how errors surface live.",
          quote:
            "Even strong nurses miss subtle form errors when they are also managing the room and the clock.",
          quoteAttribution: "Clinical Educator",
          belowImages: [
            {
              src: "/images/mayo-research2.png",
              alt: "Hands-on BLS equipment practice with AED electrode pads during on-site fieldwork",
              caption: "Practicing BLS hands on with a trained coach.",
            },
          ],
        },
      ],
      locationIcon: "/images/mayo/location-pin.png",
    },
    {
      id: "mayo-problem-findings",
      index: "03",
      label: "Research Synthesis",
      synthesis: {
        intro:
          "We consolidated field notes, interview transcripts, and workshop output into a structured evidence base before defining the problem.",
        insightsStep: {
          stat: "8",
          title: "insights consolidated",
        },
        patternsStep: {
          stat: "3",
          title: "patterns formalized",
          body: "Three patterns rose to the surface across the synthesis. We formalized them into three specific problems below.",
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
      scaleImage: {
        src: "/images/mayo-problem-scale.png",
        alt: "28 evaluators responsible for certifying around 400 candidates in person, shown as a 1:14 evaluator-to-candidate ratio",
      },
      items: [
        {
          id: "staffing-volume",
          stat: "28 : 400",
          statLabel: "Evaluator capacity vs. annual volume",
          body: "28 evaluators for ~400 candidates a year. Hiring cannot fix a resource already scarce.",
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
          body: "One-on-one, in-person only. Evaluator time cannot parallelize.",
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

export const medicalOverviewVideo = {
  type: "youtube" as const,
  videoId: "q8XeJHdjQ1I",
  title: "Mixed Reality BLS Certification System",
  autoPlay: true,
};

export const medicalDecision = {
  title: "The Decision",
  kicker: "Why Mixed Reality",
  intro:
    "We evaluated four directions against the goal of removing evaluator dependency without lowering certification rigor.",
  matrix: {
    columns: [
      {
        id: "baseline",
        label: "Current Process",
        shortLabel: "Current Process",
        description:
          "One-to-one, in-person certification. Human evaluators track depth, placement, and AED alignment live.",
      },
      {
        id: "more-evaluators",
        label: "Current Process + More Evaluators",
        shortLabel: "More Evaluators",
        description:
          "Evaluators are the scarce resource. More headcount does not remove the bottleneck.",
        verdict: "rejected" as const,
      },
      {
        id: "manikin",
        label: "Improved Physical Manikin",
        shortLabel: "Physical Manikin",
        description:
          "Per-use cost scales linearly. Venue dependence and replicability remain unsolved.",
        verdict: "rejected" as const,
      },
      {
        id: "remote",
        label: "Remote Video Evaluation",
        shortLabel: "Remote Video",
        description:
          "Cannot verify hand pressure or angle in real time. Falls short on clinical precision.",
        verdict: "rejected" as const,
      },
      {
        id: "mr",
        label: "Mixed Reality",
        shortLabel: "Mixed Reality",
        description:
          "Portable, reusable, and capable of data-driven real-time feedback without a fixed venue.",
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
            text: "Direct human observation, validated, but capped by evaluator capacity.",
          },
          "more-evaluators": {
            text: "Same observation model; more staff does not change the mechanism.",
          },
          manikin: {
            text: "Sensors cover select metrics, not every spatial checkpoint at once.",
          },
          remote: {
            text: "Camera limits real-time verification of pressure, depth, and pad placement.",
          },
          mr: {
            text: "Spatial tracking could capture depth, rate, and placement with precision, pending validation.",
          },
        },
      },
    ],
  },
  matrixNote:
    "Checkmarks are directional judgments, not validated conclusions. Clinical Fidelity marks potential, MR pending validation. Only MR cleared every criterion without a structural disqualifier.",
  matrixBridge:
    "Real-time Feedback returns in Design Standards by design: judged capable here, built and verified there.",
  standardsIntro:
    "Three non-negotiable requirements the MR system had to prove through design and testing.",
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
  title: "Insight",
  intro:
    "Which solutions had to be built, and in what order.",
  lead:
    "Each research line maps to a build direction, what had to exist before the system could work under assessment pressure.",
  rows: [
    {
      id: "brand",
      research: "Brand Research",
      researchNote:
        "Visual tone has defined boundaries, confident, compassionate, accessible.",
      builds: [
        {
          id: "ui",
          order: "02",
          title: "UI Design",
          body: "Readable map of the full certification flow.",
          anchorId: "mayo-brand-spatial",
        },
      ],
    },
    {
      id: "scene",
      research: "Spatial / VR Research",
      researchNote:
        "Visibility and contrast carry hard thresholds in passthrough MR.",
      builds: [
        {
          id: "onboarding",
          order: "01",
          title: "Onboarding",
          body: "MR and gesture vocabulary before clinical stakes attach.",
          anchorId: "mayo-onboarding",
        },
      ],
    },
    {
      id: "function",
      research: "Functional Research",
      researchNote:
        "Certification-grade rigor and real-time feedback, readable and trustworthy.",
      builds: [
        {
          id: "feedback",
          order: "03",
          title: "Real-time Feedback",
          body: "Pass or fail surfaced during assessment, not after.",
          anchorId: "mayo-brand-spatial",
        },
        {
          id: "evaluation",
          order: "04",
          title: "Evaluation System",
          body: "Seventeen parameters as a report nurses and evaluators can trust.",
          anchorId: "mayo-evaluation",
        },
      ],
    },
  ] satisfies MedicalInsightRow[],
};

export const medicalUIDesign = {
  title: "UI Design",
  kicker: "UI Design Direction",
  intro:
    "UI had to satisfy three dimensions at once, Mayo brand, spatial VR constraints, and certification-grade function, before any visual direction could be proposed.",
  dimensions: [
    {
      id: "brand",
      title: "Brand Consistency",
      body: "Align with Mayo Clinic's established visual language, not a decorative overlay on top of clinical software.",
    },
    {
      id: "scene",
      title: "Scene Adaptation",
      body: "Meet mixed-reality presentation requirements: visibility, contrast, and interaction usability in real space, not flat-design habits pasted into VR.",
    },
    {
      id: "function",
      title: "Functional Purpose",
      body: "Serve what this project must achieve, real-time feedback and certification-grade credibility. Readable and trustworthy beats merely attractive.",
    },
  ],
  userFlow: {
    label: "User Flow",
    src: "/images/mayo-onbrording%20flow.png",
    alt: "Onboarding flow diagram from MR experience check through gesture training, applied practice, and CPR/BVM/AED assessment",
    caption:
      "Nurses with no MR experience enter a three-stage learning path; experienced users can skip to assessment. CPR, BVM, and AED modules follow onboarding.",
  },
  targetDefinition:
    "UI must carry Mayo's brand tone, stay legible under real spatial lighting, and make assessment states readable at a glance.",
  solutions: {
    lead: "From that definition, we produced visual direction candidates and mapped the full nurse journey before committing to a single system.",
    candidates: [
      {
        label: "Style Guide",
        src: "/images/mayo-brand-styleguide.png",
        alt: "Mayo Clinic MR visual style guide with typography, color, and spatial UI components",
        caption: "Style guide consolidating type, color, and spatial components.",
      },
    ],
    applied: {
      label: "Final UI",
      body: "Nine visual directions were explored against brand tone, spatial legibility, and assessment-state clarity. Solution 9 was selected as the final system after on-device readability testing and on-site nurse feedback.",
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
    body: "Gesture and module icons map click, rotate, and press from onboarding into CPR, BVM, and AED, so nurses read the same interaction language across the full certification flow.",
    src: "/images/mayo-icon.png",
    alt: "Gesture icon vocabulary for MR onboarding and BLS interactions including click, rotate, press, CPR, BVM, and AED",
  },
  screensOverview: {
    label: "Screens",
    title: "Four Progressive Stages",
    body: "Screen architecture follows the onboarding sequence, device setup, gesture training, applied practice, and formal assessment, each stage building readiness before clinical stakes appear.",
    src: "/images/mayo-screens.png",
    alt: "MR Basic, BLS Interaction, Applied Practice, and Assessment UI screens across four onboarding stages",
  },
  testingBridge: {
    body: "Two rounds of usability testing followed, internal readability validation first, then on-site testing with real nurses at Mayo Clinic Jacksonville.",
    anchorId: "mayo-user-testing",
    anchorLabel: "Usability Testing",
  },
};

export const medicalDimensionResearch = [
  {
    id: "brand",
    label: "Brand",
    body: "Studied Mayo Clinic's visual standards across social, clinical, and partner touchpoints. Anchored on confident, compassionate, and accessible tone, with Mayo Blue as the single color anchor.",
    image: {
      src: "/images/mayo-brand-research2.png",
      alt: "Mayo Clinic brand audit across social media, presentations, and clinical publications",
      caption: "Brand research across Mayo's real-world touchpoints.",
    },
    extraImages: [
      {
        src: "/images/mayo-visual%20research.png",
        alt: "Brand and design language research board covering Mayo Clinic identity, web and social touchpoints, and clinical case references",
        caption:
          "Brand research board, design language, Mayo identity, and clinical context references.",
      },
    ],
  },
  {
    id: "scene",
    label: "Spatial / VR",
    body: "Researched spatial UI on Meta Quest 3 in passthrough, what stays readable when UI overlays real clinical environments under variable lighting. Visibility and contrast had to be validated on device, not in Figma alone.",
    image: {
      src: "/images/mayo-brand-research3.png",
      alt: "Spatial UI readability research comparing contrast and color systems in passthrough MR environments on device",
      caption: "On-device passthrough testing for contrast and color systems.",
    },
  },
  {
    id: "function",
    label: "Functional",
    body: "Mapped UI back to project goals: real-time feedback and evaluator-grade certification. Assessment states had to be instantly distinguishable, critical information could not rely on subtle color differences alone.",
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
    "During Round 2 on-site testing at Mayo Clinic Jacksonville, a certified BLS evaluator sat in on each session while the system ran.",
    "For all 17 assessment steps across CPR, BVM, and AED, they reviewed whether the system's pass/fail call matched their clinical judgment, module by module, step by step.",
    "The evaluator reported that system results aligned with what they observed on site. There were no cases where the system passed a step they would have failed, or failed a step they would have passed.",
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
  title: "Outcome",
  closing:
    "The project delivered a complete package with detailed operational documentation, not a demo, formally handed to Mayo Clinic.",
  timeComparison: {
    lead: "The client capped the full experience at 10 minutes. The delivered flow finished in 8, faster than on-site observation and well inside the industry range for one-to-one BLS skills checks.",
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
      "Credentialing accuracy was checked the same way, a certified evaluator watching live sessions, not a statistical benchmark study.",
      "Their on-site feedback matched what we saw in evaluation: system pass/fail calls stayed aligned with clinical judgment across all 17 steps, with no conflicting outcomes in either direction.",
    ],
  },
  qualitative: [
    {
      label: "Trust",
      body: "Mayo Clinic staff provided positive feedback on the system after on-site review.",
    },
    {
      label: "Experience",
      body: "Nurses, including those with zero prior MR experience, completed the full certification flow successfully.",
    },
  ],
};

export const medicalRole = {
  title: "My Role",
  paragraphs: [
    "As brand and experience lead, I translated Mayo Clinic's clinical standards into a spatial UI system, from onboarding architecture to BLS evaluation flow.",
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
  origin:
    "Onboarding was not a default step in a standard certification flow. The User Insights from brand and spatial research made it a necessary design response.",
  designMethodLead:
    "We taught click, rotate, and press through everyday objects nurses already know, building a complete gesture vocabulary before any medical context appeared.",
  gestureCards: [
    {
      id: "mayo-gesture-click",
      title: "Radio · Click",
      body: "Point and tap to select, like pressing a radio preset, so spatial UI feels familiar before clinical tools appear.",
      media: {
        videoSrc: "/images/mayo-unity.mov",
        alt: "Hand-tracking ray cast selecting an object in the MR fundamentals tutorial",
      },
    },
    {
      id: "mayo-gesture-rotate",
      title: "Lamp · Rotate",
      body: "Pinch and turn a dial the way you would a lamp knob, training wrist rotation without clinical stakes.",
      media: {
        videoSrc: "/videos/bls%20Interaction.mov",
        alt: "MR tutorial prompting pinch-and-rotate on an everyday object dial",
      },
    },
    {
      id: "mayo-gesture-press",
      title: "Television · Press",
      body: "Extend your index finger and press firmly, mapping to a television power button nurses already understand.",
      media: {
        videoSrc: "/videos/Mr%20basic.mov",
        clipStart: 0,
        clipEnd: 7,
        alt: "MR tutorial showing push gesture on a retro television power button",
      },
    },
  ] satisfies CaseOnboardingGestureCard[],
  dualChannelInput: {
    problem:
      "Placing back electrodes on a virtual patient would require rotating the body. MR provides no haptic feedback, which breaks clinical realism at a critical moment.",
    solution:
      "Dual-channel input: buttons as the primary path, voice recognition as a secondary channel that preserves emergency communication without depending on it.",
  },
  stagesIntro:
    "Four progressive stages separate device fluency from clinical assessment, each building readiness before the next.",
  stages: [
    {
      id: "mayo-onboarding-stage-1",
      label: "STAGE 1",
      title: "System Setup",
      navLabel: "Setup",
      iconSrc: "/images/set%20up.png",
      body: "Calibration, spatial awareness, and basic hand-tracking introduction. Zero hardware uncertainty before anything clinical appears.",
      videoSrc: "/videos/We%20observed%202.mov",
      alt: "Stage 1 system setup interface with headset calibration and space orientation",
    },
    {
      id: "mayo-onboarding-stage-2",
      label: "STAGE 2",
      title: "MR Fundamentals",
      navLabel: "MR Basic",
      iconSrc: "/images/mr%20basic.png",
      body: "Everyday object interaction practice. Nurses learn click, rotate, and press through familiar items before medical tools appear.",
      videoSrc: "/videos/Mr%20basic.mov",
      alt: "Stage 2 MR fundamentals interface teaching everyday object interactions",
    },
    {
      id: "mayo-onboarding-stage-3",
      label: "STAGE 3",
      title: "BLS Interaction Training",
      navLabel: "BLS Interaction",
      iconSrc: "/images/BLS%20interaction.png",
      body: "CPR, BVM, and AED each get dedicated gesture training. Motor patterns are established before clinical stakes are introduced.",
      videoSrc: "/videos/bls%20Interaction.mov",
      alt: "Stage 3 BLS-specific gesture training for CPR, BVM, and AED",
    },
    {
      id: "mayo-onboarding-stage-4",
      label: "STAGE 4",
      title: "Applied Practice",
      navLabel: "Applied Practice",
      iconSrc: "/images/appied%20practice.png",
      body: "The same gestures applied in a realistic assessment context. Nurses recognize the movement. They only have to learn the context.",
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
      body: "Each step matches real certification requirements, verified with Mayo clinical staff before it entered the system.",
    },
    {
      id: "mayo-eval-framework-modules",
      title: "Module Organization",
      body: "Reports group by CPR, BVM, and AED so nurses see which segment failed before drilling into parameter-level feedback.",
    },
  ],
  reportIntro:
    "Three report views progress from module overview to step-level detail to the full credentialing sign-off.",
  reportViews: [
    {
      id: "mayo-incomplete-tasks",
      label: "VIEW 1",
      title: "Incomplete Tasks Overview",
      body: "Module-level view of which BLS steps still need correction before certification sign-off.",
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
  intro:
    "Two rounds of testing validated readability first, then full-flow performance with real nurses on site.",
  findingsLabel: "Findings & Changes",
  timeline: [
    {
      type: "round",
      id: "mayo-round-1-readability",
      roundLabel: "Round 1",
      purpose:
        "Validate whether palette candidates met the real-time feedback standard's readability requirement in live Quest 3 passthrough, not just in Figma previews.",
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
          observed:
            "Several options that read clearly in Figma failed legibility in live Quest 3 renders against real clinical backgrounds.",
          changed:
            "Narrowed to two candidates with consistent readability across environments. Both moved forward to on-site testing.",
          src: "/images/we%20change-1.png",
          alt: "Two UI candidates compared in a Mayo Clinic hospital environment during readability testing",
        },
      ],
    },
    {
      type: "round",
      id: "mayo-round-2-onsite",
      roundLabel: "Round 2",
      purpose:
        "Confirm registered nurses could complete the full certification flow without device friction interfering with clinical performance, and run system versus human evaluator scoring in parallel.",
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
          observed:
            "MR zero-experience users showed measurable difficulty at key interaction points. Comprehension slowed and operations took longer.",
          changed:
            "Added icon-based and motion-guided cues at unfamiliar interaction points to reduce cognitive load.",
          videoSrc: "/videos/we%20change%203.mov",
          alt: "Icon-based and motion-guided interaction cues added to reduce cognitive load",
        },
        {
          observed:
            "Nurses consistently preferred the brand blue over the white palette. Mayo Clinic's identity carried stronger recognition and trust in context.",
          changed: "Finalized the blue system as the single visual direction.",
          src: "/images/mayo-3.jpg",
          alt: "Final blue UI system after on-site palette preference testing",
        },
      ],
    },
  ] satisfies CaseTestingTimelineItem[],
};
