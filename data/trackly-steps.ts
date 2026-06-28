const base = "/images/trackly";

export type TracklyFlowStep = {
  step: number;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const tracklyFlowSteps: TracklyFlowStep[] = [
  {
    step: 1,
    src: `${base}/Trackly20-1.png`,
    width: 1920,
    height: 1080,
    alt: "Step 1 — The locker sensed that there was no package",
  },
  {
    step: 2,
    src: `${base}/Trackly20-2.png`,
    width: 1920,
    height: 1080,
    alt: "Step 2 — The locker sends a notification to the app",
  },
  {
    step: 3,
    src: `${base}/Trackly20-3.png`,
    width: 1920,
    height: 1080,
    alt: "Step 3 — User can quickly get help",
  },
];
