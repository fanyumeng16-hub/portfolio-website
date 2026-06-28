import { GallerySlide } from "@/data/horizon-gallery";

const base = "/images/trackly";

/** 06–17：Step Flow 之前 */
export const tracklyGalleryBeforeFlow: GallerySlide[] = [
  {
    id: "trackly-interviews",
    title: "User Interviews",
    tocLabel: "Interviews",
    src: `${base}/Trackly06.png`,
    alt: "User interview goals, participant criteria, and quotes from seven participants",
  },
  {
    id: "trackly-insight",
    title: "Research Insight",
    tocLabel: "Insight",
    src: `${base}/Trackly07.png`,
    alt: "Main problems in the delivery experience — visibility, security, and rigidity",
  },
  {
    id: "trackly-insecurity",
    title: "Out for Delivery",
    tocLabel: false,
    src: `${base}/Trackly08.png`,
    alt: "Why users feel insecure during out-for-delivery and delivery attempt stages",
  },
  {
    id: "trackly-hmw",
    title: "Problem Statement",
    tocLabel: "Statement",
    src: `${base}/Trackly09.png`,
    alt: "How might we improve parcel delivery security for apartment residents",
  },
  {
    id: "trackly-ideation",
    title: "Ideation",
    src: `${base}/Trackly10.png`,
    alt: "Concept ideation mapped to delivery pain points",
  },
  {
    id: "trackly-design-process",
    title: "Design Process",
    tocLabel: "Concept",
    src: `${base}/Trackly11.png`,
    alt: "Final concept with smart locker technologies and IoT communication",
  },
  {
    id: "trackly-help",
    title: "What Trackly Can Help With",
    tocLabel: false,
    src: `${base}/Trackly12.png`,
    alt: "Real-time verification and fast support features",
  },
  {
    id: "trackly-sitemap",
    title: "Sitemap",
    tocLabel: false,
    src: `${base}/Trackly13.png`,
    alt: "Trackly app information architecture and sitemap",
  },
  {
    id: "trackly-midfi",
    title: "Mid-Fi Wireframes",
    tocLabel: "Mid Fi",
    src: `${base}/Trackly13.5.png`,
    alt: "Mid-fidelity wireframes for tracking, pickup, and issue reporting flows",
  },
  {
    id: "trackly-style",
    title: "Style Guide",
    tocLabel: false,
    src: `${base}/Trackly14.png`,
    alt: "Trackly brand style guide with logo, colors, and typography",
  },
  {
    id: "trackly-prototype",
    title: "Prototype",
    src: `${base}/Trackly15.png`,
    alt: "Trackly mobile app prototype screens",
  },
  {
    id: "trackly-overview",
    title: "Delivery Experience Overview",
    tocLabel: false,
    src: `${base}/Trackly16.png`,
    alt: "Delivery drama pain points and how Trackly helps",
  },
  {
    id: "trackly-locker",
    title: "Locker Interface",
    tocLabel: false,
    src: `${base}/Trackly17.png`,
    alt: "Smart locker interface flow for send and pickup",
  },
];

/** 18–19：Step Flow 之后 */
export const tracklyGalleryAfterFlow: GallerySlide[] = [
  {
    id: "trackly-pickup-cta",
    title: "Click Pickup and Open App",
    tocLabel: false,
    src: `${base}/Trackly18.png`,
    alt: "Pickup flow connecting the Trackly app with the locker",
  },
  {
    id: "trackly-pickup-qr",
    title: "Pickup at Locker",
    tocLabel: false,
    src: `${base}/Trackly19.png`,
    alt: "Scan QR code at locker for package pickup",
  },
];

export const tracklyGalleryImages = [
  ...tracklyGalleryBeforeFlow,
  ...tracklyGalleryAfterFlow,
];
