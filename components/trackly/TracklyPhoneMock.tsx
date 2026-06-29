"use client";

import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import styles from "./TracklyFeatureMocks.module.css";

type Props = {
  src: string;
  alt: string;
  bare?: boolean;
};

export default function TracklyPhoneMock({ src, alt, bare = false }: Props) {
  if (bare) {
    return (
      <CaseAutoplayVideo
        src={src}
        alt={alt}
        className={styles.bareVideo}
        controls={false}
      />
    );
  }

  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneScreen}>
        <CaseAutoplayVideo src={src} alt={alt} className={styles.phoneVideo} />
      </div>
    </div>
  );
}
