import CaseBackLink from "@/components/CaseBackLink";
import CaseDetailSection from "@/components/CaseDetailSection";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import {
  heartbitsHero,
  heartbitsOverviewBody,
  heartbitsOverviewVideo,
  heartbitsSpec,
} from "@/data/heartbits-content";
import { heartbitsGallerySection } from "@/data/heartbits-detail";
import { heartbitsGalleryImages } from "@/data/heartbits-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";

const heartbitsSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: heartbitsGalleryImages }
);

export default function HeartbitsPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-heartbits"
      sections={heartbitsSections}
      tocTheme="light"
      nav={
        <header className="case-nav">
          <CaseBackLink />
          <span className="case-nav-title">HEARTBITS / 2026</span>
        </header>
      }
      hero={
        <CaseHero
          title="Heartbits"
          subtitle={heartbitsHero.subtitle}
          intro={heartbitsHero.intro}
          spec={heartbitsSpec}
          image="/images/heartbits.jpg"
          imageAlt="Heartbits interactive rehabilitation system"
          priority
        />
      }
    >
      <CaseOverviewSection
        body={heartbitsOverviewBody}
        media={heartbitsOverviewVideo}
      />

      <CaseDetailSection section={heartbitsGallerySection} />
    </CaseTemplateLayout>
  );
}
