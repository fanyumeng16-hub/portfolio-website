import TracklyPhoneMock from "@/components/trackly/TracklyPhoneMock";
import { tracklyFeatureMocks } from "@/data/trackly-features";
import styles from "./TracklyFeatureMocks.module.css";

export default function TracklyFeatureMocks() {
  return (
    <>
      {tracklyFeatureMocks.map((feature) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`case-content-column ${styles.section}`}
        >
          <div className={styles.composite}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={feature.posterSrc}
              alt={feature.posterAlt}
              className={styles.poster}
              loading="lazy"
              decoding="async"
            />
            <div
              className={styles.phoneOverlay}
              style={{
                top: feature.phone.top,
                left: feature.phone.left,
                width: feature.phone.width,
                aspectRatio: feature.phone.aspectRatio,
              }}
            >
              <TracklyPhoneMock
                src={feature.videoSrc}
                alt={feature.videoAlt}
                bare
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
