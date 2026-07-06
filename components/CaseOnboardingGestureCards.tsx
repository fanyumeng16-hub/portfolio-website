import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import { CaseOnboardingGestureCard } from "@/data/medical-content";
import styles from "@/components/medical/MedicalSections.module.css";

type Props = {
  cards: CaseOnboardingGestureCard[];
};

function CardMedia({ media }: { media: CaseOnboardingGestureCard["media"] }) {
  if (media.videoSrc) {
    return (
      <CaseAutoplayVideo
        src={media.videoSrc}
        alt={media.alt}
        className={styles.medicalCardVideo}
        clipStart={media.clipStart}
        clipEnd={media.clipEnd}
      />
    );
  }

  if (media.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        alt={media.alt}
        className={styles.medicalCardImage}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return null;
}

export default function CaseOnboardingGestureCards({ cards }: Props) {
  return (
    <ul className={`${styles.medicalCardGrid} ${styles.medicalCardGridCols3}`}>
      {cards.map((card) => (
        <li className={`${styles.medicalCard} ${styles.medicalCardMedia}`} key={card.id}>
          <div className={styles.medicalCardCopy}>
            <h4 className={styles.medicalCardTitle}>{card.title}</h4>
            <p className={styles.medicalCardBody}>{card.body}</p>
          </div>
          <figure className={styles.medicalCardFigure}>
            <CardMedia media={card.media} />
          </figure>
        </li>
      ))}
    </ul>
  );
}
