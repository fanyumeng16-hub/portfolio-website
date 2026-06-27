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
  title: string;
  body: string;
  videoSrc?: string;
  src?: string;
  alt: string;
  findings: CaseFinding[];
};

export type CaseTestingTimelineItem = CaseTestingRound;

export const medicalHero = {
  subtitle:
    "Designing a Mixed Reality BLS Certification System for Clinical Scale",
  intro:
    "Mayo Clinic's BLS certification process had a scaling problem: 28 evaluators, 400+ nurses, every assessment conducted one-on-one in person. The goal was to build a mixed reality evaluation system that maintained clinical-grade rigor while making certification accessible at scale.",
};

export const medicalSpec: CaseSpecRow[] = [
  { label: "Timeline", value: "10 Weeks" },
  { label: "Team", value: "18-Person Interdisciplinary Team" },
  { label: "Platform", value: "Meta Quest 3 + Custom CPR Manikin" },
];

export const medicalOverviewVideo = {
  type: "youtube" as const,
  videoId: "q8XeJHdjQ1I",
  title: "Mixed Reality BLS Certification System",
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
        "Before designing a single screen, we studied how Mayo Clinic's brand actually lives across contexts — social media, internal presentations, clinical publications, and the visual language of studios and partners who have worked within their identity system.",
      ],
      images: [
        {
          src: "/images/mayo-brand-research2.png",
          alt: "Mayo Clinic brand audit across social media, presentations, and clinical publications",
        },
      ],
      tailParagraphs: [
        "Mayo Clinic's brand guidelines position the institution as confident, compassionate, and accessible — a visual identity built on clarity and trust, not decoration. The language is conversational and direct; the aesthetic is clean and authoritative.",
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
        "From the audit, Mayo Blue emerged as the anchor across the system — usable as a vibrant background, a headline accent on white, a natural element in photography, and a gradient range from bright blue to the darkest Mayo Blue. This became our baseline before any spatial interface work began.",
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
        "Applying a brand built for print and web to mixed reality is not a translation — it is a rebuild. We tested visual and interaction standards directly on Meta Quest 3 in passthrough, studying what stays readable when UI overlays real clinical environments under variable lighting.",
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
          body: "Spatial UI requires its own testing loop — Figma previews are not a substitute.",
        },
      ],
    },
    {
      id: "mayo-design-direction",
      title: "Design Direction",
      subtitle: "Fluidity Within Brand Constraints",
      paragraphs: [
        "With both the brand identity and the spatial constraints understood, we developed a visual system that carries Mayo Clinic's clean, authoritative character into the MR environment while introducing a sense of fluidity — soft transitions, layered depth, and motion that feels native to space rather than lifted from a flat screen.",
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

export type CaseOnboardingEverydayBlock = {
  lead: string;
  body: string;
  leadRow: {
    unityMov: { src: string; alt: string };
    onboardingUnity: { src: string; alt: string };
  };
  bodyRow: {
    itemImage: { src: string; alt: string };
    unityScreen: { src: string; alt: string };
  };
};

export type CaseOnboardingStage = {
  id: string;
  label: string;
  title: string;
  body: string;
  navLabel: string;
  iconSrc: string;
  src?: string;
  videoSrc?: string;
  alt: string;
};

export const medicalOnboarding = {
  title: "Onboarding Design",
  intro:
    "Nurses weren't failing because they couldn't learn BLS. They were trying to learn the technology and the clinical procedure at the same time. I separated the two.",
  insights: [
    {
      index: "01",
      title: "Uneven MR baseline",
      body: "Nurses ranged from complete first-time users to those with prior headset experience. No shared starting point could be assumed.",
    },
    {
      index: "02",
      title: "Simultaneous learning creates interference",
      body: "Without device fluency, cognitive load splits between operating the headset and performing BLS, undermining clinical accuracy.",
    },
    {
      index: "03",
      title: "Assessment must reflect clinical skill",
      body: "If the device becomes an obstacle, the evaluation loses its validity as a credentialing tool. Technology familiarity cannot stand in for clinical competence.",
    },
  ] satisfies CaseOnboardingInsight[],
  everydayBlock: {
    lead: "Understanding these pain points, we designed the onboarding around objects nurses already knew how to use. Rather than asking users to learn hand tracking and clinical procedures simultaneously, we introduced interaction through everyday items: familiar shapes that carry intuitive expectations about how they move and feel.",
    leadRow: {
      unityMov: {
        src: "/images/mayo-unity.mov",
        alt: "Unity onboarding scene pairing everyday objects with UI guidance for push, rotate, and click interactions",
      },
      onboardingUnity: {
        src: "/images/mayo-onboarding-unity.mp4",
        alt: "Mixed reality onboarding interaction with everyday objects in the training environment",
      },
    },
    body: "These objects were paired with UI guidance to teach nurses how to navigate the MR environment before any medical context appeared. Each object corresponds to a distinct interaction type: clicking, rotating, and pressing, giving nurses a structured progression through the full gesture vocabulary they would need inside the assessment.",
    bodyRow: {
      itemImage: {
        src: "/images/mayo-onboardingitem.png",
        alt: "Everyday object 3D models used for MR gesture training, including a paper plane, squeeze bottle, speaker, radio, and television",
      },
      unityScreen: {
        src: "/images/mayo-unityscreen.png",
        alt: "Unity editor screen showing onboarding object interaction setup and UI guidance",
      },
    },
  } satisfies CaseOnboardingEverydayBlock,
  stageIntro: [
    "Drawing from our research and design findings, we structured onboarding as four progressive stages.",
    "Each stage builds device fluency before clinical tasks, so nurses can enter the BLS assessment focused on performance, not the headset.",
  ],
  flowChart: {
    src: "/images/onboarding%20steps.png",
    alt: "Four-stage onboarding flow from system setup through medical tool practice",
  },
  stages: [
    {
      id: "mayo-onboarding-stage-1",
      label: "STAGE 1",
      title: "System Setup",
      navLabel: "Setup",
      iconSrc: "/images/set%20up.png",
      body: "Headset calibration, physical space orientation, and basic controller/hand-tracking introduction. The goal: zero uncertainty about the hardware before anything clinical appears.",
      videoSrc: "/videos/We%20observed%202.mov",
      alt: "Stage 1 system setup interface with headset calibration and space orientation",
    },
    {
      id: "mayo-onboarding-stage-2",
      label: "STAGE 2",
      title: "MR Fundamentals",
      navLabel: "MR Basic",
      iconSrc: "/images/mr%20basic.png",
      body: "Spatial awareness training. Understanding how virtual overlays interact with physical space, how to read depth and distance in a mixed environment.",
      videoSrc: "/videos/Mr%20basic.mov",
      alt: "Stage 2 MR fundamentals interface teaching spatial awareness in mixed reality",
    },
    {
      id: "mayo-onboarding-stage-3",
      label: "STAGE 3",
      title: "BLS Interaction Training",
      navLabel: "BLS Interaction",
      iconSrc: "/images/BLS%20interaction.png",
      body: "Gesture vocabulary built around familiar everyday objects before any medical tool appears. Motor patterns are established here: grasping, rotating, pressing. The movements feel natural before clinical stakes are introduced.",
      videoSrc: "/videos/bls%20Interaction.mov",
      alt: "Stage 3 everyday object gesture training before medical tools appear",
    },
    {
      id: "mayo-onboarding-stage-4",
      label: "STAGE 4",
      title: "Medical Tool Practice",
      navLabel: "Applied Practice",
      iconSrc: "/images/appied%20practice.png",
      body: "The same gestures, now mapped to BVM mask, AED, and CPR sequence. Nurses recognize the movement. They only have to learn the context.",
      videoSrc: "/videos/applied%20practice.mov",
      alt: "Stage 4 medical tool practice interface with BVM mask, AED, and CPR sequence",
    },
  ] satisfies CaseOnboardingStage[],
};

export const medicalUserTesting = {
  title: "Usability Test",
  intro:
    "Two rounds of testing moved from internal readability validation in live Quest renders to on-site sessions with nurses at Mayo Clinic Jacksonville, measuring flow time, interaction timing, and iterating on cues and visual direction.",
  timeline: [
    {
      type: "round",
      id: "mayo-round-1-readability",
      roundLabel: "Round 1",
      title: "Internal Readability Testing",
      body: "I tested eight style candidates against multiple real-environment backgrounds, comparing Figma mockups directly against live Quest 3 renders across varying lighting conditions.",
      videoSrc: "/videos/uitesting1.mp4",
      alt: "Live Quest 3 readability testing comparing palette candidates in clinical lighting",
      findings: [
        {
          observed:
            "Several options that read clearly in Figma failed legibility in live renders against real clinical backgrounds.",
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
      title: "On-site at Mayo Clinic Jacksonville",
      body: "Nurses completed the full experience in the actual clinical environment. I recorded total flow time and per-interaction timing across both MR-familiar and MR-unfamiliar users.",
      src: "/images/round2.png",
      alt: "On-site onboarding study script outlining tasks, timing metrics, and think-aloud protocol at Mayo Clinic Jacksonville",
      findings: [
        {
          observed:
            "Nurses with no MR or AR experience showed measurable difficulty at key interaction points. Comprehension slowed, operations required more time.",
          changed:
            "Added icon-based and motion-guided cues throughout the interface to reduce cognitive load at unfamiliar interactions.",
          videoSrc: "/videos/we%20change%203.mov",
          alt: "Icon-based and motion-guided interaction cues added to reduce cognitive load",
        },
        {
          observed:
            "Nurses consistently preferred the brand blue over the white palette. Mayo Clinic's identity carried stronger recognition and trust in context.",
          changed:
            "Finalized the blue system as the single visual direction.",
          src: "/images/mayo-3.jpg",
          alt: "Final blue UI system after on-site palette preference testing",
        },
      ],
    },
  ] satisfies CaseTestingTimelineItem[],
};
