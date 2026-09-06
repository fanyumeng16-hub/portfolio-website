import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import {
  heartbitsHero,
  heartbitsOverviewBody,
  heartbitsOverviewVideo,
  heartbitsSpec,
} from "@/data/heartbits-content";
import { heartbitsGalleryImages } from "@/data/heartbits-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";

const heartbitsSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: heartbitsGalleryImages },
);

export default function HeartbitsPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-heartbits"
      sections={heartbitsSections}
      tocTheme="light"
      nav={<CaseNavbar projectId="heartbits" />}
      hero={
        <CaseHero
          title="Heartbits"
          subtitle={heartbitsHero.subtitle}
          intro={heartbitsHero.intro}
          spec={heartbitsSpec}
          cover={heartbitsHero.cover}
          coverPriority
        />
      }
    >
      <CaseOverviewSection
        body={heartbitsOverviewBody}
        media={heartbitsOverviewVideo}
      />

      <CaseGallery images={heartbitsGalleryImages} seamless />
    </CaseTemplateLayout>
  );
}
