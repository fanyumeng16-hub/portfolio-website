import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import { CaseOnboardingStage } from "@/data/medical-content";
import styles from "@/components/medical/MedicalSections.module.css";

type Props = {
  stages: CaseOnboardingStage[];
};

function StageSideMedia({ stage }: { stage: CaseOnboardingStage }) {
  if (!stage.videoSrc && !stage.src) {
    return null;
  }

  return (
    <div className={styles.onboardingStageMedia}>
      <figure className={styles.onboardingStageFigure}>
        {stage.videoSrc ? (
          <CaseAutoplayVideo
            className={styles.onboardingStageVideo}
            src={stage.videoSrc}
            alt={stage.alt}
          />
        ) : null}
        {stage.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={stage.src}
            alt={stage.alt}
            className={styles.onboardingStageImage}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </figure>
    </div>
  );
}

export default function CaseOnboardingStages({ stages }: Props) {
  return (
    <ol className={`${styles.problemSynthesisFlow} ${styles.onboardingStagesFlow}`}>
      {stages.map((stage, index) => (
        <li
          className={`${styles.problemTimelineItem} ${styles.problemTimelineItemWithMedia}`}
          id={stage.id}
          key={stage.id}
        >
          <div className={styles.problemTimelineMarker} aria-hidden="true">
            <span className={styles.problemTimelineDot} />
            {index < stages.length - 1 ? <span className={styles.problemTimelineLine} /> : null}
          </div>
          <div className={styles.onboardingStageRow}>
            <StageSideMedia stage={stage} />
            <div className={styles.onboardingStageCopy}>
              <div className={styles.onboardingStageHead}>
                <span className={styles.problemTimelineMetricLabel}>{stage.label}</span>
                <h5 className={styles.problemTimelineTitle}>{stage.title}</h5>
              </div>
              <p className={styles.onboardingStageDetail}>{stage.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
