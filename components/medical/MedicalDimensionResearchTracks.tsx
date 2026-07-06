import type { medicalDimensionResearch } from "@/data/medical-content";
import styles from "./MedicalSections.module.css";

export function MedicalDimensionResearchTracks({
  tracks,
}: {
  tracks: typeof medicalDimensionResearch;
}) {
  return (
    <div className={styles.uiDesignResearch}>
      {tracks.map((track) => (
        <section className={styles.uiDesignResearchTrack} key={track.id}>
          <h5 className={styles.uiDesignResearchLabel}>{track.label}</h5>
          <p className={styles.uiDesignResearchBody}>{track.body}</p>
          {track.image ? (
            <figure className={styles.uiDesignResearchFigure}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={track.image.src}
                alt={track.image.alt}
                className={styles.uiDesignResearchImage}
                loading="lazy"
                decoding="async"
              />
              {track.image.caption ? (
                <figcaption className={styles.figureCaption}>{track.image.caption}</figcaption>
              ) : null}
            </figure>
          ) : null}
          {"extraImages" in track && track.extraImages
            ? track.extraImages.map((image) => (
                <figure className={styles.uiDesignResearchFigure} key={image.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.uiDesignResearchImage}
                    loading="lazy"
                    decoding="async"
                  />
                  {image.caption ? (
                    <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
                  ) : null}
                </figure>
              ))
            : null}
        </section>
      ))}
    </div>
  );
}
