import CaseOverviewMeta from "@/components/CaseOverviewMeta";
import type { CaseTemplateSpecRow } from "@/lib/case-template";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  intro: string;
  spec?: CaseTemplateSpecRow[];
  sectionId?: string;
};

export default function CaseHero({
  title,
  subtitle,
  intro,
  spec,
  sectionId = "case-intro",
}: Props) {
  return (
    <section className="case-hero">
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
