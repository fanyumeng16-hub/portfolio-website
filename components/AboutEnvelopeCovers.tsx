import styles from "./AboutEnvelopeCovers.module.css";

type CoverProps = {
  className?: string;
};

/** Figma blur radii: sides 22.2 → CSS 11.1px; top/bottom 13.9 → CSS 6.95px */

export function CoverOpenSvg({ className }: CoverProps) {
  return (
    <div className={`${styles.root} ${className ?? ""}`.trim()} aria-hidden="true">
      <span className={`${styles.flap} ${styles.flapLeft}`} />
      <span className={`${styles.flap} ${styles.flapRight}`} />
      <span className={`${styles.flap} ${styles.flapBottom}`} />
    </div>
  );
}

export function CoverClosedSvg({ className }: CoverProps) {
  return (
    <div className={`${styles.root} ${className ?? ""}`.trim()} aria-hidden="true">
      <span className={`${styles.flap} ${styles.flapLeft}`} />
      <span className={`${styles.flap} ${styles.flapRight}`} />
      <span className={`${styles.flap} ${styles.flapBottom}`} />
      <span className={`${styles.flap} ${styles.flapTop}`} />
    </div>
  );
}
