import { tracklyAssets } from "@/data/trackly-assets";
import styles from "./TracklySystemDiagram.module.css";

export default function TracklySystemDiagram() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.block}>
            <h4 className={styles.blockHeading}>Technologies</h4>
            <p className={styles.blockBody}>
              Weight sensors, image recognition camera, smart locker interface.
            </p>
          </div>

          <div className={styles.block}>
            <h4 className={styles.blockHeading}>IoT Communication</h4>
            <p className={styles.blockBody}>
              This system connects locker sensors and cameras to the user-facing
              app. It analyzes delivery confirmation data and triggers feedback
              alerts. If anomalies are detected, the system initiates a report
              flow for human agent intervention.
            </p>
          </div>
        </div>

        <div className={styles.art} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className={styles.locker}
            decoding="async"
            loading="lazy"
            src={tracklyAssets.lockerUnit}
          />
        </div>
      </div>
    </div>
  );
}
