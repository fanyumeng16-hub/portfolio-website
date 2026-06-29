const base = "/images/trackly";

export type TracklyFeatureMock = {
  id: string;
  videoSrc: string;
  videoAlt: string;
  posterSrc: string;
  posterAlt: string;
  phone: {
    top: string;
    left: string;
    width: string;
    aspectRatio: string;
  };
};

/** 18–19：Trackly18/19 文案底图 + refer 手机屏区域叠放视频（592×1084） */
export const tracklyFeatureMocks: TracklyFeatureMock[] = [
  {
    id: "trackly-pickup-cta",
    videoSrc: `${base}/mock4.mov`,
    videoAlt: "Trackly app home screen showing package tracking in one place",
    posterSrc: `${base}/Trackly18.png`,
    posterAlt: "Everything in one place — track status, locker location, and notifications",
    phone: {
      left: "7.5%",
      top: "14%",
      width: "28.13%",
      aspectRatio: "592 / 1084",
    },
  },
  {
    id: "trackly-pickup-qr",
    videoSrc: `${base}/mock3.mov`,
    videoAlt: "Trackly support flow when a package issue is detected",
    posterSrc: `${base}/Trackly19.png`,
    posterAlt: "Never chase down a lost package alone — Sarah contacts carrier and courier for you",
    phone: {
      left: "64%",
      top: "6%",
      width: "28.13%",
      aspectRatio: "592 / 1084",
    },
  },
];
