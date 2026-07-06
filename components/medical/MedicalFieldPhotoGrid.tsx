import type { FieldSessionPhoto } from "@/data/medical-content";
import styles from "./MedicalSections.module.css";

export function MedicalFieldPhotoGrid({ photos }: { photos: FieldSessionPhoto[] }) {
  const gridModifier =
    photos.length === 1
      ? styles.fieldPhotoGridSingle
      : photos.length === 2
        ? styles.fieldPhotoGridDual
        : "";

  return (
    <ul className={`${styles.fieldPhotoGrid}${gridModifier ? ` ${gridModifier}` : ""}`}>
      {photos.map((photo) => (
        <li className={styles.fieldPhotoItem} key={photo.src}>
          <figure className={styles.fieldPhotoFigure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              className={styles.fieldPhotoImage}
              loading="lazy"
              decoding="async"
            />
            {photo.caption ? (
              <figcaption className={styles.figureCaption}>{photo.caption}</figcaption>
            ) : null}
          </figure>
        </li>
      ))}
    </ul>
  );
}
