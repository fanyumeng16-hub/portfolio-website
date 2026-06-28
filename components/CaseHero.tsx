import CaseOverviewMeta from "@/components/CaseOverviewMeta";
import type { CaseTemplateSpecRow } from "@/lib/case-template";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  intro: string;
  spec?: CaseTemplateSpecRow[];
  image: string;
  imageAlt: string;
  priority?: boolean;
  sectionId?: string;
  coverIntrinsic?: boolean;
  coverWidth?: number;
  coverHeight?: number;
};

export default function CaseHero({
  title,
  subtitle,
  intro,
  spec,
  image,
  imageAlt,
  priority = false,
  sectionId = "case-intro",
  coverIntrinsic = false,
  coverWidth,
  coverHeight,
}: Props) {
  return (
    <section className="case-hero">
      <div
        id="case-cover"
        className={`case-cover ${
          coverIntrinsic ? "case-cover--intrinsic" : ""
        }`}
      >
        {coverIntrinsic && coverWidth && coverHeight ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={imageAlt}
            width={coverWidth}
            height={coverHeight}
            className="case-cover-image"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            className="case-cover-image"
          />
        )}
      </div>

      <div className="case-hero-body" id={sectionId}>
        <div className="case-hero-intro-block">
          <h1 className="case-hero-title">{title}</h1>
          <p className="case-hero-subtitle">{subtitle}</p>

          <div
            className={`case-hero-detail-grid ${
              spec?.length ? "" : "case-hero-detail-grid--full"
            }`}
          >
            {spec?.length ? (
              <CaseOverviewMeta rows={spec} layout="hero" />
            ) : null}
            <div className="case-hero-copy">
              {intro.split("\n\n").map((paragraph, index) => (
                <p className="case-hero-intro" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
