import type { medicalDimensionResearch } from "@/data/medical-content";
import { MayoTextMediaSplit } from "./MayoTextMediaSplit";
import styles from "./MedicalSections.module.css";

export function MedicalDimensionResearchTracks({
  tracks,
}: {
  tracks: typeof medicalDimensionResearch;
}) {
  return (
    <div className={styles.uiDesignResearch}>
      {tracks.map((track, index) => (
        <section className={styles.uiDesignResearchTrack} key={track.id}>
          <MayoTextMediaSplit
            label={track.label}
            mediaSide={index % 2 === 0 ? "left" : "right"}
            image={
              track.image
                ? {
                    src: track.image.src,
                    alt: track.image.alt,
                    caption: track.image.caption,
                  }
                : undefined
            }
            extraMedia={
              "extraImages" in track && track.extraImages
                ? track.extraImages.map((image) => (
                    <figure className={styles.mayoTextMediaSplitExtraFigure} key={image.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={styles.mayoTextMediaSplitImage}
                        loading="lazy"
                        decoding="async"
                      />
                      {image.caption ? (
                        <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
                      ) : null}
                    </figure>
                  ))
                : undefined
            }
          >
            <p className={styles.mayoTextMediaSplitBody}>{track.body}</p>
          </MayoTextMediaSplit>
        </section>
      ))}
    </div>
  );
}
