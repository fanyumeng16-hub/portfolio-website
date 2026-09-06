import { GallerySlide } from "@/data/horizon-gallery";

const base = "/images/trackly";

/** 开篇视觉 — Problem 之前 */
export const tracklyGalleryIntro: GallerySlide[] = [
  {
    id: "trackly-hero-scene",
    title: "Arrival Experience",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly-hero-scene.png`,
    alt: "Person using Trackly at a smart locker with arrival and pickup notifications",
  },
  {
    id: "trackly-prototype",
    title: "Prototype",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly15.png`,
    alt: "Trackly mobile app prototype screens",
  },
  {
    id: "trackly-anomaly-alert-intro",
    title: "Anomaly Alert",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly21.png`,
    alt: "Anomaly alert: Trackly catches issues and connects you to Sarah before you ask",
  },
];

/** Sitemap、Mid-Fi — 可用性测试之前 */
export const tracklyGalleryPreUsability: GallerySlide[] = [
  {
    id: "trackly-sitemap",
    title: "Sitemap",
    tocLabel: false,
    src: `${base}/Trackly13.png`,
    alt: "Sitemap: app side (Welcome, Login, Homepage, Tracking, Messages, Account) and locker side flows",
  },
  {
    id: "trackly-midfi",
    title: "Mid-Fi Wireframes",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly13.5.png`,
    alt: "Mid-fidelity wireframes for tracking, pickup, and issue reporting flows",
  },
];

/** Style Guide、原型、Locker — 可用性测试之后 */
export const tracklyGalleryPostUsability: GallerySlide[] = [
  {
    id: "trackly-style",
    title: "Style Guide",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly14.png`,
    alt: "Trackly brand style guide with logo, colors, and typography",
  },
  {
    id: "trackly-locker",
    title: "Locker Interface",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly17.png`,
    alt: "Smart locker interface flow for send and pickup",
  },
];

/** 站点地图、线框、Style Guide、原型、Locker（HTML 组件未覆盖的视觉资产） */
export const tracklyGalleryDesign: GallerySlide[] = [
  ...tracklyGalleryPreUsability,
  ...tracklyGalleryPostUsability,
];

/** 关键 UI 界面（Anomaly Alert、Delivery Proof） */
export const tracklyGalleryScreens: GallerySlide[] = [
  {
    id: "trackly-anomaly-alert",
    title: "Anomaly Alert",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly21.png`,
    alt: "Anomaly alert: Trackly catches issues and connects you to Sarah before you ask",
  },
  {
    id: "trackly-delivery-proof",
    title: "Delivery Proof",
    hideTitle: true,
    tocLabel: false,
    src: `${base}/Trackly22.png`,
    alt: "Photo and weight data captured at every drop-off for delivery disputes",
  },
];

export const tracklyTocGalleryImages = [
  ...tracklyGalleryDesign,
  ...tracklyGalleryScreens,
];

/** @deprecated 使用 buildTracklyTocSections */
export const tracklyGalleryImages = tracklyTocGalleryImages;
