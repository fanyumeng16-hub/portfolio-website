import type { ReactNode } from "react";
import styles from "./TracklyDecorRow.module.css";

type Props = {
  imageSrc: string;
  imageAlt: string;
  side?: "left" | "right";
  children: ReactNode;
};

export default function TracklyDecorRow({
  imageSrc,
  imageAlt,
  side = "right",
  children,
}: Props) {
  const sideClass = side === "left" ? styles.sideLeft : styles.sideRight;

  return (
    <div className={`${styles.row} ${sideClass}`}>
      <div className={styles.content}>{children}</div>
      <div className={styles.art}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={imageAlt}
          className={styles.image}
          decoding="async"
          loading="lazy"
          src={imageSrc}
        />
      </div>
    </div>
  );
}
