import CaseOverviewMeta from "@/components/CaseOverviewMeta";
import type { CaseTemplateSpecRow } from "@/lib/case-template";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  intro?: string;
  spec?: CaseTemplateSpecRow[];
  sectionId?: string;
  cover?: { src: string; alt: string };
  coverPriority?: boolean;
};

export default function CaseHero({
  title,
  subtitle,
  intro = "",
  spec,
  sectionId = "case-intro",
  cover,
  coverPriority = false,
}: Props) {
  return (
    <section className="case-hero">
      {cover ? (
        <div id="case-cover" className="case-cover">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={coverPriority}
            className="case-cover-image"
          />
        </div>
      ) : null}

      <div className="case-hero-body" id={sectionId}>
        <div className="case-hero-intro-block">
          <h1 className="case-hero-title">{title}</h1>
          <p className="case-hero-subtitle">{subtitle}</p>

          <div
            className={`case-hero-detail-grid ${
              spec?.length && intro ? "" : "case-hero-detail-grid--full"
            }`}
          >
            {spec?.length ? (
              <CaseOverviewMeta rows={spec} layout="hero" />
            ) : null}
            {intro ? (
              <div className="case-hero-copy">
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
