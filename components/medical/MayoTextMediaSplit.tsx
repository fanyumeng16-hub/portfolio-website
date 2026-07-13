import type { ReactNode } from "react";
import styles from "./MedicalSections.module.css";

export type MayoTextMediaSplitImage = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

type Props = {
  label?: string;
  children?: ReactNode;
  mediaSide?: "left" | "right";
  image?: MayoTextMediaSplitImage;
  media?: ReactNode;
  extraMedia?: ReactNode;
};

export function MayoTextMediaSplit({
  label,
  children,
  mediaSide = "left",
  image,
  media,
  extraMedia,
}: Props) {
  const hasMedia = Boolean(image || media);

  if (!hasMedia) {
    return (
      <div className={styles.mayoTextMediaSplitCopyOnly}>
        {label ? <p className={styles.mayoTextMediaSplitLabel}>{label}</p> : null}
        {children}
      </div>
    );
  }

  return (
    <div className={styles.mayoTextMediaSplitBlock}>
      <div
        className={`${styles.mayoTextMediaSplit}${
          mediaSide === "right" ? ` ${styles.mayoTextMediaSplitMediaRight}` : ""
        }`}
      >
        <figure className={styles.mayoTextMediaSplitMedia}>
          {media ??
            (image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.className ?? styles.mayoTextMediaSplitImage}
                  loading="lazy"
                  decoding="async"
                />
                {image.caption ? (
                  <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
                ) : null}
              </>
            ) : null)}
        </figure>
        <div className={styles.mayoTextMediaSplitCopy}>
          {label ? <p className={styles.mayoTextMediaSplitLabel}>{label}</p> : null}
          {children}
        </div>
      </div>
      {extraMedia ? <div className={styles.mayoTextMediaSplitExtra}>{extraMedia}</div> : null}
    </div>
  );
}
