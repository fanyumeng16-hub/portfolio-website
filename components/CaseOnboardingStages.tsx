import { CaseOnboardingStage } from "@/data/medical-content";

type Props = {
  stages: CaseOnboardingStage[];
};

function StageMedia({ stage }: { stage: CaseOnboardingStage }) {
  return (
    <div className="case-onboarding-stage-media">
      {stage.videoSrc ? (
        <video
          className="case-onboarding-stage-video"
          src={stage.videoSrc}
          controls
          playsInline
          preload="metadata"
          aria-label={stage.alt}
        />
      ) : null}
      {stage.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={stage.src}
          alt={stage.alt}
          className="case-onboarding-stage-image"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
}

export default function CaseOnboardingStages({ stages }: Props) {
  return (
    <>
      <ol className="case-onboarding-stages">
        {stages.map((stage) => (
          <li className="case-onboarding-stage" id={stage.id} key={stage.id}>
            <div className="case-onboarding-stage-split">
              <StageMedia stage={stage} />
              <div className="case-onboarding-stage-copy">
                <h4 className="case-prose-subtitle">{stage.label}</h4>
                <h4 className="case-prose-subtitle">{stage.title}</h4>
                <p className="case-prose-body">{stage.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
