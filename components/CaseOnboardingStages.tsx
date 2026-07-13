import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import { CaseOnboardingStage } from "@/data/medical-content";
import { MayoTextMediaSplit } from "@/components/medical/MayoTextMediaSplit";
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
      {stages.map((stage, index) => {
        const hasMedia = Boolean(stage.videoSrc || stage.src);

        return (
          <li
            className={styles.onboardingStageItem}
            id={stage.id}
            key={stage.id}
          >
            <MayoTextMediaSplit
              mediaSide={index % 2 === 0 ? "left" : "right"}
              media={hasMedia ? <StageSideMedia stage={stage} /> : undefined}
            >
              <p className="case-prose-body">
                <span className="mayoBodyLabel">{stage.label}</span>{" "}
                <strong className="mayoBodyEm">{stage.title}</strong>
              </p>
              <p className={styles.onboardingStageDetail}>{stage.body}</p>
            </MayoTextMediaSplit>
          </li>
        );
      })}
    </ol>
  );
}
