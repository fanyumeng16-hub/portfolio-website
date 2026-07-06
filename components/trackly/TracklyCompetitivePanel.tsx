import type { TracklyBullet } from "@/data/trackly-sections";
import styles from "./TracklyCompetitivePanel.module.css";

type Props = {
  lockerSrc: string;
  shieldSrc: string;
  bullets: TracklyBullet[];
  lead?: string;
  gapTitle?: string;
  gapLead?: string;
  gapBullets?: TracklyBullet[];
};

export default function TracklyCompetitivePanel({
  lockerSrc,
  shieldSrc,
  bullets,
  lead,
  gapTitle,
  gapLead,
  gapBullets,
}: Props) {
  const showGap = gapTitle && gapBullets?.length;

  return (
    <div className={styles.panel}>
      <div className={styles.top}>
        <div className={styles.artCluster} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className={styles.locker} decoding="async" src={lockerSrc} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className={styles.shield} decoding="async" src={shieldSrc} />
        </div>

        <div className={styles.copy}>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
          <ul className={styles.tableStakes}>
            {bullets.map((item) => (
              <li className={styles.stake} key={item.text}>
                <span className={styles.stakeDot} aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showGap ? (
        <div className={styles.gap}>
          <h4 className={styles.gapTitle}>{gapTitle}</h4>
          {gapLead ? <p className={styles.gapLead}>{gapLead}</p> : null}
          <ul className={styles.gapBullets}>
            {gapBullets!.map((item) => (
              <li className={styles.gapBullet} key={item.text}>
                <span className={styles.stakeDot} aria-hidden="true" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
