import styles from "@/app/projects/horizon/horizon.module.css";

type Props = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  captionPosition?: "above" | "below";
  priority?: boolean;
};

export default function HorizonFigure({
  src,
  alt,
  label,
  caption,
  captionPosition = "below",
  priority = false,
}: Props) {
  const captionBlock =
    label || caption ? (
      <figcaption
        className={`${styles.figureCaption} ${
          captionPosition === "above" ? styles.figureCaptionAbove : ""
        }`}
      >
        {label ? <span className="case-section-label">{label}</span> : null}
        {caption ? (
          <p className={`case-prose-body ${styles.figureCaptionText}`}>
            {caption}
          </p>
        ) : null}
      </figcaption>
    ) : null;

  return (
    <figure className={styles.figure}>
      {captionPosition === "above" ? captionBlock : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={styles.figureImage}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {captionPosition === "below" ? captionBlock : null}
    </figure>
  );
}
