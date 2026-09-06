import CaseOverviewMeta from "@/components/CaseOverviewMeta";
import type { CaseTemplateSpecRow } from "@/lib/case-template";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  intro?: string;
  introLabel?: string;
  spec?: CaseTemplateSpecRow[];
  specLayout?: "hero" | "rows" | "stack" | "inline";
  sectionId?: string;
  cover?: { src: string; alt: string };
  coverPriority?: boolean;
  coverIntrinsic?: boolean;
};

export default function CaseHero({
  title,
  subtitle,
  intro = "",
  introLabel = "overview",
  spec,
  specLayout = "rows",
  sectionId = "case-intro",
  cover,
  coverPriority = false,
  coverIntrinsic = false,
}: Props) {
  return (
    <section className="case-hero">
      {cover ? (
        <div
          id="case-cover"
          className={`case-cover${coverIntrinsic ? " case-cover--intrinsic" : ""}`}
        >
          {coverIntrinsic ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              width={2012}
              height={550}
              priority={coverPriority}
              className="case-cover-image"
            />
          ) : (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority={coverPriority}
              className="case-cover-image"
            />
          )}
        </div>
      ) : null}

      <div className="case-hero-body" id={sectionId}>
        <div className="case-hero-intro-block">
          <div className="case-hero-heading">
            <h1 className="case-hero-title">{title}</h1>
            <p className="case-hero-subtitle">{subtitle}</p>
          </div>

          <div
            className={`case-hero-detail-grid ${
              spec?.length && intro ? "" : "case-hero-detail-grid--full"
            }`}
          >
            {spec?.length ? (
              <CaseOverviewMeta rows={spec} layout={specLayout} />
            ) : null}
            {intro ? (
              <div className="case-hero-copy">
                {introLabel ? (
                  <p className="case-hero-intro-label">{introLabel}</p>
                ) : null}
                {intro.split("\n\n").map((paragraph, index) => (
                  <p className="case-hero-intro" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
