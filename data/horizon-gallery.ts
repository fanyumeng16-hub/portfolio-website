export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryVideo = {
  src: string;
  alt: string;
  autoPlay?: boolean;
};

export type GallerySlide = {
  id: string;
  title: string;
  alt: string;
  src?: string;
  videoSrc?: string;
  youtubeVideoId?: string;
  autoPlay?: boolean;
  /** Extra videos rendered below the main media without a separate heading */
  videos?: GalleryVideo[];
  /** Optional copy block shown above the slide in seamless galleries */
  summary?: string;
  /** Omit from TOC when false; use a shorter label when string */
  tocLabel?: string | false;
  /** Override auto TOC index (e.g. "13.5") */
  tocIndex?: string;
};

export type GalleryGroup = {
  id: string;
  title: string;
  summary: string;
  images: GalleryImage[];
};

export const horizonGallery: GalleryGroup[] = [
  {
    id: "station",
    title: "Mars Station",
    summary:
      "The central habitat hub where users orient themselves, review mission context, and move into the station interior.",
    images: [
      {
        src: "/images/horizon-2.jpg",
        alt: "Horizon Mars Station exterior overview",
      },
      {
        src: "/images/horizon-3.jpg",
        alt: "Horizon Mars Station lobby interior",
      },
    ],
  },
  {
    id: "travel",
    title: "Surface Travel",
    summary:
      "Rover-based navigation across Martian terrain, connecting station operations with remote field missions.",
    images: [
      {
        src: "/images/horizon-4.jpg",
        alt: "Horizon driving experience on Martian surface",
      },
      {
        src: "/images/horizon-9.jpg",
        alt: "Horizon VR rover interface and driving experience",
      },
    ],
  },
  {
    id: "resource",
    title: "Resource Collection",
    summary:
      "A field operations stage focused on scanning terrain, identifying samples, and collecting surface materials.",
    images: [
      {
        src: "/images/horizon-5.jpg",
        alt: "Horizon resource collection and sample extraction",
      },
    ],
  },
  {
    id: "shelter",
    title: "Shelter System",
    summary:
      "Protected recovery spaces and mission systems that support monitoring, communication, and emergency response.",
    images: [
      {
        src: "/images/horizon-6.jpg",
        alt: "Horizon shelter system exterior",
      },
      {
        src: "/images/horizon-7.jpg",
        alt: "Horizon shelter system interior",
      },
      {
        src: "/images/horizon-8.jpg",
        alt: "Horizon station communications and mission reporting interface",
      },
    ],
  },
];
