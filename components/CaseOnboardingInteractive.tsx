"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { CaseOnboardingStage } from "@/data/medical-content";

type Props = {
  stages: CaseOnboardingStage[];
};

export default function CaseOnboardingInteractive({ stages }: Props) {
  const [activeId, setActiveId] = useState(stages[0]?.id ?? "");
  const activeStage = stages.find((stage) => stage.id === activeId) ?? stages[0];
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const handleTocNavigate = (event: Event) => {
      const stageId = (event as CustomEvent<string>).detail;
      if (stages.some((stage) => stage.id === stageId)) {
        setActiveId(stageId);
      }
    };

    window.addEventListener("case-toc-navigate", handleTocNavigate);
    return () => window.removeEventListener("case-toc-navigate", handleTocNavigate);
  }, [stages]);

  useEffect(() => {
    const video = videoRefs.current.get(activeId);
    if (!video) return;

    video.loop = true;
    video.muted = true;
    void video.play().catch(() => {});
  }, [activeId]);

  if (!activeStage) return null;

  const selectStage = (stageId: string) => {
    setActiveId(stageId);
    document.getElementById(`${stageId}-panel`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="case-onboarding-interactive">
      <div className="case-onboarding-nav" role="tablist" aria-label="Onboarding stages">
        {stages.map((stage, index) => {
          const isActive = activeId === stage.id;

          return (
            <Fragment key={stage.id}>
              <button
                type="button"
                id={stage.id}
                className={`case-onboarding-nav-item${isActive ? " is-active" : ""}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${stage.id}-panel`}
                onClick={() => selectStage(stage.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stage.iconSrc}
                  alt=""
                  className="case-onboarding-nav-icon"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <span className="case-onboarding-nav-label">{stage.navLabel}</span>
              </button>
              {index < stages.length - 1 ? (
                <div className="case-onboarding-nav-arrow" aria-hidden="true" />
              ) : null}
            </Fragment>
          );
        })}
      </div>

      {stages.map((stage) => {
        const isActive = activeId === stage.id;

        return (
          <article
            className={`case-onboarding-panel${isActive ? " is-active" : ""}`}
            id={`${stage.id}-panel`}
            key={stage.id}
            role="tabpanel"
            aria-labelledby={stage.id}
            hidden={!isActive}
          >
            <div className="case-onboarding-stage-split">
              <div className="case-onboarding-stage-media">
                {isActive && stage.videoSrc ? (
                  <video
                    ref={(element) => {
                      if (element) {
                        videoRefs.current.set(stage.id, element);
                        element.loop = true;
                        element.muted = true;
                        void element.play().catch(() => {});
                      } else {
                        videoRefs.current.delete(stage.id);
                      }
                    }}
                    className="case-onboarding-stage-video"
                    src={stage.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    aria-label={stage.alt}
                    onEnded={(event) => {
                      const video = event.currentTarget;
                      video.currentTime = 0;
                      void video.play().catch(() => {});
                    }}
                  />
                ) : null}
              </div>
              <div className="case-onboarding-stage-copy">
                <h4 className="case-prose-subtitle">{stage.label}</h4>
                <h4 className="case-prose-subtitle">{stage.title}</h4>
                <p className="case-prose-body">{stage.body}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
