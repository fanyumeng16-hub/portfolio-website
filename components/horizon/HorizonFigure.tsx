import styles from "@/app/projects/horizon/horizon.module.css";

type Props = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  priority?: boolean;
};

export default function HorizonFigure({
  src,
  alt,
  label,
  caption,
  priority = false,
}: Props) {
  return (
    <figure className={styles.figure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={styles.figureImage}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {label || caption ? (
        <figcaption className={styles.figureCaption}>
          {label ? <span className="case-section-label">{label}</span> : null}
          {caption ? (
            <p className={`case-prose-body ${styles.figureCaptionText}`}>
              {caption}
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
