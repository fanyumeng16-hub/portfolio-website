import CaseBackLink from "@/components/CaseBackLink";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import {
  outloopHero,
  outloopOverviewParagraphs,
  outloopSpec,
} from "@/data/outloop-content";
import { outloopGalleryImages } from "@/data/outloop-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";

const outloopSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: outloopGalleryImages }
);

export default function OutloopPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-outloop"
      sections={outloopSections}
      tocTheme="dark"
      pageTheme="dark"
      nav={
        <header className="case-nav">
          <CaseBackLink />
          <span className="case-nav-title">OUTLOOP / 2026</span>
        </header>
      }
      hero={
        <CaseHero
          title="Outloop"
          subtitle={outloopHero.subtitle}
          intro={outloopHero.intro}
          spec={outloopSpec}
          image={outloopHero.cover.src}
          imageAlt={outloopHero.cover.alt}
          coverIntrinsic
          coverWidth={outloopHero.cover.width}
          coverHeight={outloopHero.cover.height}
          priority
        />
      }
    >
      <CaseOverviewSection body={outloopOverviewParagraphs.join("\n\n")} />

      <CaseGallery images={outloopGalleryImages} seamless />
    </CaseTemplateLayout>
  );
}
