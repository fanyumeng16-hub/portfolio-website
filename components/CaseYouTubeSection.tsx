import styles from "./CaseYouTubeSection.module.css";

type Props = {
  videoId: string;
  title?: string;
  label?: string;
  sectionId?: string;
};

export default function CaseYouTubeSection({
  videoId,
  title = "Experience Demo",
  label = "Project Video",
  sectionId = "case-video",
}: Props) {
  return (
    <section className={`${styles.section} case-youtube-section`} id={sectionId}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>{label}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.player}>
          <iframe
            className={styles.embed}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
