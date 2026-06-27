import { ReactNode } from "react";
import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import { CaseOnboardingEverydayBlock as EverydayBlock } from "@/data/medical-content";

type Props = {
  block: EverydayBlock;
};

function EverydayMediaRow({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: "images";
}) {
  return (
    <div
      className={`case-onboarding-everyday-media${
        variant === "images" ? " case-onboarding-everyday-media--images" : ""
      }`}
    >
      {children}
    </div>
  );
}

function EverydayFigure({ children }: { children: ReactNode }) {
  return <figure className="case-onboarding-everyday-figure">{children}</figure>;
}

export default function CaseOnboardingEverydayBlock({ block }: Props) {
  return (
    <div className="case-onboarding-everyday">
      <p className="case-prose-body">{block.lead}</p>

      <EverydayMediaRow>
        <EverydayFigure>
          <CaseAutoplayVideo
            src={block.leadRow.unityMov.src}
            alt={block.leadRow.unityMov.alt}
            className="case-onboarding-everyday-video"
          />
        </EverydayFigure>
        <EverydayFigure>
          <CaseAutoplayVideo
            src={block.leadRow.onboardingUnity.src}
            alt={block.leadRow.onboardingUnity.alt}
            className="case-onboarding-everyday-video"
          />
        </EverydayFigure>
      </EverydayMediaRow>

      <p className="case-prose-body">{block.body}</p>

      <EverydayMediaRow variant="images">
        <EverydayFigure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.bodyRow.itemImage.src}
            alt={block.bodyRow.itemImage.alt}
            className="case-onboarding-everyday-image case-onboarding-everyday-image--items"
            loading="lazy"
            decoding="async"
          />
        </EverydayFigure>
        <EverydayFigure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.bodyRow.unityScreen.src}
            alt={block.bodyRow.unityScreen.alt}
            className="case-onboarding-everyday-image case-onboarding-everyday-image--screen"
            loading="lazy"
            decoding="async"
          />
        </EverydayFigure>
      </EverydayMediaRow>
    </div>
  );
}
