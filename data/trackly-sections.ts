import type { TracklyInsightIconKey } from "@/components/trackly/TracklyIcons";
import type { TracklyFindingPanelData } from "@/components/trackly/TracklyFindingPanel";
import type { TracklyVisual } from "@/components/trackly/charts/TracklySectionVisual";
import { tracklyAssets } from "@/data/trackly-assets";

export type TracklySectionLink = {
  id: string;
  label: string;
};

export type TracklyHighlight = {
  icon: TracklyInsightIconKey;
  label: string;
  body: string;
  links?: TracklySectionLink[];
};

export type TracklyBullet = {
  icon?: TracklyInsightIconKey;
  text: string;
};

export type TracklyMediaBlock = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body?: string;
  sublabel?: string;
  pills?: string[];
};

export type TracklyDecor = {
  imageSrc: string;
  imageAlt: string;
  side?: "left" | "right";
};

export type TracklyInterviewSplit = {
  criteriaLabel?: string;
  illustrationSrc: string;
  illustrationAlt: string;
  pills: string[];
  stats: { value: string; label: string }[];
  quotes: { text: string; accent?: boolean }[];
};

export type TracklyCompetitiveLayout = {
  lockerSrc: string;
  shieldSrc: string;
  gapTitle?: string;
  gapLead?: string;
  gapBullets?: TracklyBullet[];
};

import type { CompareTableData } from "@/components/trackly/TracklyCompareTable";
import type { CompetitiveMatrixData } from "@/components/trackly/TracklyCompetitiveMatrix";
import type { DataTableData } from "@/components/trackly/TracklyDataTable";

export type TracklyCompare = CompareTableData;

export type TracklyProseSection = {
  id: string;
  kicker: string;
  title?: string;
  titleHighlight?: string;
  /** Render title after visuals (e.g. problem data → transition heading) */
  titleAfterVisuals?: boolean;
  transitionLead?: string;
  lead?: string;
  leadAccent?: boolean;
  leadPanelAlign?: boolean;
  leadWide?: boolean;
  visuals?: TracklyVisual[];
  paragraphs?: string[];
  highlights?: TracklyHighlight[];
  stats?: { value: string; label: string }[];
  pills?: string[];
  cards?: TracklyHighlight[];
  plainCards?: boolean;
  pointCards?: TracklyHighlight[];
  pointCardsColumns?: 1 | 2 | 3 | 4;
  pointCardsLabel?: string;
  compare?: TracklyCompare;
  competitiveMatrix?: CompetitiveMatrixData;
  dataTable?: DataTableData;
  statsRow?: boolean;
  bullets?: TracklyBullet[];
  decor?: TracklyDecor;
  interviewSplit?: TracklyInterviewSplit;
  competitiveLayout?: TracklyCompetitiveLayout;
  subsectionGrid?: boolean;
  findingLayout?: boolean;
  /** Indices into finding-card subsections to stack vertically in one grid cell */
  findingCardStacks?: number[][];
  finalConceptLayout?: boolean;
  subsections?: {
    title: string;
    icon?: TracklyInsightIconKey;
    lead?: string;
    paragraphs?: string[];
    bullets?: TracklyBullet[];
    highlights?: TracklyHighlight[];
    pointCards?: TracklyHighlight[];
    pointCardsColumns?: 1 | 2 | 3 | 4;
    quotes?: string[];
    highlightQuoteIndex?: number;
    hmw?: string;
    titleCapsule?: boolean;
    compare?: TracklyCompare;
    findingCard?: boolean;
    findingPanel?: TracklyFindingPanelData;
  }[];
  capabilities?: TracklyHighlight[];
  capabilityIllustration?: { src: string; alt: string };
  flows?: { side: string; steps: string[] }[];
  metric?: { before: string; after: string; label: string };
  note?: string;
  mediaBlocks?: TracklyMediaBlock[];
  audienceScene?: boolean;
};

export const tracklyNarrativeSections: TracklyProseSection[] = [
  {
    id: "trackly-context",
    kicker: "The Problem",
    lead: "Last-mile delivery has a reliability problem.\nOne in ten fail before arrival—$17.20 each, 2.3 support calls.",
    leadAccent: true,
    mediaBlocks: [
      {
        imageSrc: tracklyAssets.worriedUserPhone,
        imageAlt: "User anxiously checking delivery status on their phone",
        title: "Marked delivered. The locker is empty.",
        body: "You cross town after work, open the compartment, and find nothing inside. The app still says it arrived, but there is no proof, and no one to call when something is wrong.",
      },
    ],
    visuals: ["problem-scale"],
    title: "Where Current Solutions Fall Short",
    titleAfterVisuals: true,
    transitionLead:
      "Incumbents handle the notification. They do not close the gap when trust breaks at the locker.",
    highlights: [
      {
        icon: "reactive",
        label: "Reactive by default",
        body: "Support steps in after a package is already missing.",
      },
      {
        icon: "security",
        label: "Claims fix cost, not uncertainty",
        body: "Insurance resolves financial loss, not the moment trust breaks.",
      },
      {
        icon: "visibility",
        label: "No clarity at the breakdown point",
        body: "Marked delivered, but nowhere to be found.",
      },
    ],
  },
  {
    id: "trackly-approach",
    kicker: "Approach",
    title: "Let the Real Problem Surface",
    lead: "Three principles guided every method that follows.",
    plainCards: true,
    cards: [
      {
        icon: "research",
        label: "Open-ended research",
        body: "Start from lived delivery experience, not a preset locker product.",
        links: [
          { id: "trackly-research-methodology", label: "Media analysis" },
          { id: "trackly-research-detail", label: "Interviews" },
        ],
      },
      {
        icon: "iot",
        label: "No fixed feature set",
        body: "Let patterns in the data narrow scope before designing solutions.",
        links: [
          { id: "trackly-research-surfaced", label: "What surfaced" },
          { id: "trackly-insight-detail", label: "Problem statement" },
        ],
      },
      {
        icon: "emotion",
        label: "Trust as the lens",
        body: "Map where certainty drops, then test whether pickup restores it.",
        links: [
          { id: "trackly-analysis", label: "Journey maps" },
          { id: "trackly-usability", label: "Trust scores" },
        ],
      },
    ],
  },
  {
    id: "trackly-research-surfaced",
    kicker: "Reframing",
    title: "What the Research Surfaced",
    highlights: [
      {
        icon: "emotion",
        label: "One bad experience is enough",
        body: "A single failed delivery erodes trust in the entire system.",
      },
      {
        icon: "retention",
        label: "Persistent wariness",
        body: "Users carry low-grade caution into every future delivery.",
      },
    ],
    subsections: [
      {
        title: "Focused question",
        titleCapsule: true,
        icon: "research",
        hmw: "How might IoT restore certainty at the exact point where trust in package delivery breaks down?",
      },
    ],
  },
  {
    id: "trackly-research-methodology",
    kicker: "Research Methodology",
    mediaBlocks: [
      {
        imageSrc: tracklyAssets.deliveryRunner,
        imageAlt: "Delivery worker running with a package",
        title: "News & Media Analysis",
        body: "Review industry reporting and annual package-theft surveys to establish that the trust gap is systemic, not anecdotal, before narrowing into locker scenarios.",
        sublabel: "What to look for",
        pills: ["Recurring complaint types", "Scale indicators", "Housing-type risk patterns"],
      },
    ],
    visuals: ["secondary-donuts"],
  },
  {
    id: "trackly-research-detail",
    kicker: "Research",
    title: "User Interviews",
    lead: "Translate emotional experience into specific behavioral pain points: where trust breaks, what users actually do, and where they give up.",
    interviewSplit: {
      criteriaLabel: "Participant criteria",
      illustrationSrc: tracklyAssets.courierWorried,
      illustrationAlt: "Delivery worker holding a package",
      pills: [
        "Failed or delayed delivery in past 3 months",
        "Mix of occasional and frequent online shoppers",
        "Walk-up apartments, single-family homes, and more",
      ],
      stats: [
        { value: "8–9", label: "people interviewed" },
        { value: "4", label: "living scenarios" },
        { value: "20–30 min", label: "per session" },
      ],
      quotes: [
        {
          text: "I've lost a few small packages, but they weren't that expensive, so I just let it go.",
        },
        {
          text: "Sometimes the app says it's out for delivery, but I wait all day and nothing shows up.",
          accent: true,
        },
        {
          text: "They said it was delivered, but I couldn't find it anywhere. No one called or knocked, nothing.",
        },
      ],
    },
  },
  {
    id: "trackly-analysis",
    kicker: "Analysis",
    title: "Mapping Trust Across the Journey",
    visuals: ["journey-map", "causal-diagram"],
  },
  {
    id: "trackly-measurable-dimensions",
    kicker: "Dimensions",
    title: "Two Measurable Dimensions",
    lead: "Beyond mapping the journey, interviews surfaced two patterns we could quantify:\nwhen emotion spikes, and what users actually do to regain certainty.",
    visuals: ["measurable-dimensions"],
  },
  {
    id: "trackly-insight-detail",
    kicker: "Research Insight",
    title: "What is the main problem in this experience?",
    titleHighlight: "main problem",
    cards: [
      {
        icon: "visibility",
        label: "Lack of Visibility",
        body: "Cannot confirm what is happening to the package.",
      },
      {
        icon: "security",
        label: "Security Concerns",
        body: "No way to verify a delivery was safe or legitimate.",
      },
      {
        icon: "rigid",
        label: "Rigid Experience",
        body: "No flexible path when something goes wrong.",
      },
    ],
    subsections: [
      {
        title: "Why Locker Scenarios",
        lead: "The move from broad delivery anxiety to locker-specific design was not intuition alone; interview patterns and industry data pointed the same way.",
        compare: {
          leftHeader: "Door / handoff delivery",
          rightHeader: "Shared locker",
          rows: [
            {
              topic: "Interview signal",
              left: "Pain points scattered across delivery modes",
              right: "Locker feedback more concentrated in interviews",
            },
            {
              topic: "Proof of arrival",
              left: "Visual handoff or package left at the door",
              right: "Push notification only; users can't confirm the package is inside",
            },
            {
              topic: "Apartment theft risk",
              left: "Elevated, varies by building and access",
              right: "3×+ higher likelihood vs. single-family homeowners",
            },
            {
              topic: "When something goes wrong",
              left: "May reach the carrier, building staff, or a neighbor",
              right: "No one to reach and no escalation path",
            },
          ],
        },
      },
      {
        title: "Problem Statement",
        icon: "security",
        lead: "During out-for-delivery and locker drop-off, users lack control and assurance.",
        hmw: "How might we improve parcel delivery security and confidence for people relying on shared locker systems?",
      },
    ],
  },
  {
    id: "trackly-competitive",
    kicker: "Competitive Landscape",
    title: "What existing smart locker products already solve",
    lead: "Before defining Trackly, we mapped what incumbent locker platforms already do well, and where a trust gap remains.",
    bullets: [
      {
        text: "These capabilities are industry table stakes: necessary, but not a differentiation story",
      },
    ],
    competitiveLayout: {
      lockerSrc: tracklyAssets.lockerUnit,
      shieldSrc: tracklyAssets.shieldLock,
    },
    competitiveMatrix: {
      columns: [
        { id: "amazon", label: "Amazon Hub" },
        { id: "parcel", label: "Parcel Pending" },
        { id: "luxer", label: "Luxer One" },
        { id: "concierge", label: "Package Concierge" },
        { id: "trackly", label: "Trackly", highlight: true },
      ],
      rows: [
        {
          topic: "Arrival notification",
          cells: ["Yes", "Yes", "Yes", "Yes", "Yes"],
        },
        {
          topic: "Multi-carrier support",
          cells: [
            "Limited, mainly Amazon",
            "Yes",
            "Yes",
            "Yes",
            "Yes",
          ],
        },
        {
          topic: "Camera / sensor security",
          cells: [
            "Partial locations",
            "Yes",
            "Yes",
            "Yes",
            "Yes",
          ],
        },
        {
          topic: "Pre-arrival package verification",
          cells: ["No", "No", "No", "No", "Yes"],
          differentiator: true,
        },
        {
          topic: "Human escalation for exceptions",
          cells: [
            "No, general CS line",
            "No, general CS line",
            "No, general CS line",
            "No, general CS line",
            "Yes, integrated report flow",
          ],
          differentiator: true,
        },
        {
          topic: "Emotional exception handling",
          cells: ["No", "No", "No", "No", "Yes"],
          differentiator: true,
        },
      ],
    },
  },
  {
    id: "trackly-design-direction",
    kicker: "Ideation",
    title: "Design Direction",
    lead: "Three pain-point clusters generated seven candidate directions, then converged into the final concept based on whether each one directly answers locker-scene verification.",
    visuals: ["design-tree"],
  },
  {
    id: "trackly-final-concept",
    kicker: "Final Concept",
    title: "What Trackly can help with?",
    titleHighlight: "Trackly",
    finalConceptLayout: true,
    visuals: ["system-diagram"],
    capabilities: [
      {
        icon: "verify",
        label: "Real-time Verification",
        body: "Instantly confirms whether your package has arrived and is safely stored in the locker, no guesswork, no delay.",
      },
      {
        icon: "support",
        label: "Get Help Fast",
        body: "From missing items to delivery errors, our support system connects you with real people who resolve issues quickly and transparently.",
      },
    ],
    capabilityIllustration: {
      src: tracklyAssets.supportTeam,
      alt: "Trackly support team ready to help",
    },
  },
  {
    id: "trackly-usability",
    kicker: "Usability Testing",
    title: "Testing with Real Delivery Scenarios",
    lead: "Evaluate whether users can understand delivery details, pick up at a locker without guidance, and navigate reporting when anomalies are detected, particularly an empty locker after a \"delivered\" status.",
    pills: [
      "8–9 participants",
      "Urban / suburban apartments",
      "2+ packages per month",
    ],
    visuals: ["usability-results"],
    metric: {
      before: "3",
      after: "4.5",
      label: "Package safety confidence (1–7 scale)",
    },
    findingLayout: true,
    findingCardStacks: [[2, 4], [3, 5]],
    subsections: [
      {
        title: "Study design\nthree tasks",
        findingPanel: {
          contextLabel: "Task prompts",
          pills: [
            "Task 1: Review delivery details after an arrival notification",
            "Task 2: Pick up a package at the locker using the mobile app",
            "Task 3: Report an empty locker despite a \"delivered\" status",
          ],
          stats: [
            { value: "3", label: "tasks tested" },
            { value: "8–9", label: "participants" },
          ],
        },
      },
      {
        title: "What held up",
        findingCard: true,
        lead: "Most participants rated all three tasks easy to very easy. Weight, photo, and timestamp indicators were understood without confusion.",
        findingPanel: {
          contextLabel: "Signal",
          pills: [
            "SEQ ratings: easy to very easy across tasks",
            "Status, weight, photo, and timestamp trusted at pickup",
          ],
          stats: [{ value: "3 → 4.5", label: "safety confidence (1–7)" }],
          quotes: [
            {
              text: "Seeing the weight and photo made me feel like the package was actually there.",
              accent: true,
            },
          ],
        },
      },
      {
        title: "Finding 1\nContact the courier first",
        findingCard: true,
        findingPanel: {
          contextLabel: "What we heard",
          pills: [
            "Task 3: report an empty locker",
            "Users want to self-resolve before filing a formal report",
          ],
          stats: [{ value: "6/9", label: "wanted to call the courier first" }],
          quotes: [
            {
              text: "I'll first give a call to confirm. If I can't get through, I'll then report.",
              accent: true,
            },
          ],
          adopted:
            "Quick-action to call the courier or adjust delivery timing on the report screen",
        },
      },
      {
        title: "Finding 2\nReport flow felt cold",
        findingCard: true,
        findingPanel: {
          contextLabel: "What we heard",
          pills: [
            "Issue-reporting screen during Task 3",
            "Users already anxious before they reach support",
          ],
          stats: [{ value: "5/9", label: "described the flow as cold or formal" }],
          quotes: [
            {
              text: "It felt like submitting a bug report, not like someone was actually going to help me.",
              accent: true,
            },
          ],
          adopted:
            "Warmer microcopy · \"Send to Support\" · Sarah as a named trust & safety agent",
          illustrationSrc: tracklyAssets.supportAgent,
          illustrationAlt: "Support agent ready to help",
        },
      },
      {
        title: "Finding 3\nGet Direction was missed",
        findingCard: true,
        findingPanel: {
          contextLabel: "What we heard",
          pills: [
            "Locker pickup: wayfinding step",
            "Users tapped the map area expecting navigation",
          ],
          stats: [{ value: "4/9", label: "missed the Get Direction control" }],
          quotes: [
            {
              text: "I kept tapping the map; I didn't see the button at the bottom.",
              accent: true,
            },
          ],
          adopted: "Move the navigation action onto or inside the map card",
        },
      },
      {
        title: "Finding 4\nScan Code needed one fewer step",
        findingCard: true,
        findingPanel: {
          contextLabel: "What we heard",
          pills: [
            "Locker pickup: QR scan method",
            "Extra confirmation tap after selecting Scan Code",
          ],
          stats: [{ value: "2/9", label: "expected scan to start immediately" }],
          adopted:
            "Start scanning as soon as the method is selected when hardware allows",
        },
      },
      {
        title: "Finding 5\nIssue categories felt confusing",
        findingCard: true,
        findingPanel: {
          contextLabel: "What we heard",
          pills: [
            "Task 3: choosing an issue type",
            "\"No photo\" felt odd once something was already wrong",
          ],
          stats: [{ value: "3/9", label: "questioned the category labels" }],
          quotes: [
            {
              text: "If the locker is empty, why would I separately report 'no photo'?",
              accent: true,
            },
          ],
          adopted:
            "Fold \"no photo\" into \"nothing in locker\" · add damage and wrong-recipient types",
        },
      },
    ],
    note: "The confidence lift from 3 → 4.5 answers whether the information architecture builds trust; feedback on the cold report flow showed where emotional design still fell short.",
  },
  {
    id: "trackly-business",
    kicker: "Business",
    title: "Business Considerations",
    lead: "A directional model at 10,000 orders per month: order of magnitude, not a budget-ready projection.",
    visuals: ["business-case"],
    dataTable: {
      caption: "Net Comparison",
      headers: ["Monthly estimate", "Amount"],
      highlightRowMatchers: ["Net monthly", "Deployment cost"],
      rows: [
        ["Cost of doing nothing (recurring)", "$44,800 – $74,700"],
        ["Estimated savings from Trackly", "$16,000 – $28,000"],
        ["Monthly operating cost", "$5,300 – $14,200"],
        ["Net monthly benefit", "roughly $2,000 – $22,000"],
        [
          "Deployment cost, recovered in",
          "approximately 3 to 10 months",
        ],
      ],
    },
    note: "Important caveat: Every figure above is a directional estimate, not a validated result. It rests on an assumed scale (10,000 orders/month), industry-wide benchmarks rather than data from this specific system, and two unverified effectiveness assumptions (30% escalation reduction, 40% support ticket reduction). None of this has been tested in a live deployment. The purpose of this model is to show the order of magnitude of the problem and the plausible direction of impact, not to serve as a financial projection ready for budget approval.",
  },
];
