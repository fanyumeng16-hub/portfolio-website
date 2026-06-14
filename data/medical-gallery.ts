import { GallerySlide } from "@/data/horizon-gallery";

export const medicalGalleryImages: GallerySlide[] = [
  {
    id: "mayo-journey",
    title: "Our Journey",
    tocLabel: false,
    src: "/images/mayo-1.jpg",
    alt: "SCADpro team with CPR training manikins at Mayo Clinic collaboration",
  },
  {
    id: "mayo-constraints",
    title: "Limited Time Constraints",
    tocLabel: false,
    src: "/images/mayo-2.jpg",
    alt: "Limited time constraints in BLS evaluator workflow",
  },
  {
    id: "mayo-standards",
    title: "High Training Standards",
    tocLabel: false,
    src: "/images/mayo-3.jpg",
    alt: "High training standards in clinical simulation environment",
  },
  {
    id: "mayo-onboarding-visual",
    title: "Onboarding Flow",
    tocLabel: false,
    src: "/images/mayo-4.jpg",
    alt: "Six-step MR BLS onboarding flow from setup to evaluation readiness",
  },
  {
    id: "mayo-system",
    title: "Training System",
    tocLabel: false,
    src: "/images/mayo-5.jpg",
    alt: "Mayo Clinic BLS training kit with manikin, Meta Quest 3, and carry case",
  },
  {
    id: "mayo-manikin-visual",
    title: "Physical Manikin",
    tocLabel: false,
    src: "/images/mayo-6.jpg",
    alt: "CPR manikin hardware features including depth sensor and drawer design",
    videos: [
      {
        src: "/videos/mayo-qrcode.mp4",
        alt: "Quest headset scanning the manikin QR code for spatial calibration",
      },
    ],
  },
  {
    id: "mayo-agent",
    title: "Virtual Agent",
    tocLabel: false,
    src: "/images/mayo-7.jpg",
    alt: "Virtual agent wireframe model with head and hand detail views",
  },
  {
    id: "mayo-bls-visual",
    title: "BLS Assessment Interaction",
    tocLabel: false,
    videoSrc: "/videos/mayo-cpr.mp4",
    src: "/images/mayo-8.jpg",
    alt: "ZOLL AED control interface and BLS assessment interaction in mixed reality",
    videos: [
      {
        src: "/videos/mayo-aed.mp4",
        alt: "Mixed-reality AED interaction demonstration in the BLS assessment",
      },
    ],
  },
  {
    id: "mayo-evaluation-visual",
    title: "Evaluation System",
    tocLabel: false,
    src: "/images/mayo-9.jpg",
    alt: "BLS assessment report overview with incomplete tasks and improvement areas",
  },
  {
    id: "mayo-report-detail",
    title: "Incomplete Tasks Detail",
    tocLabel: false,
    src: "/images/mayo-10.jpg",
    alt: "Incomplete tasks detail view for CPR and AED segments",
  },
  {
    id: "mayo-overview",
    title: "Experience Overview",
    tocLabel: false,
    src: "/images/mayo-11.jpg",
    alt: "Overview of manikin, UI, onboarding, 3D models, and evaluation report",
  },
];
