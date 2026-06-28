import CaseBackLink from "@/components/CaseBackLink";
import CaseDetailSection from "@/components/CaseDetailSection";
import CaseFeatures from "@/components/CaseFeatures";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import MarsMapInteractive from "@/components/MarsMapInteractive";
import {
  horizonHero,
  horizonOverviewBody,
  horizonOverviewVideo,
  horizonSpec,
} from "@/data/horizon-content";
import { horizonGallerySections } from "@/data/horizon-detail";
import { horizonFeatures } from "@/data/horizon-features";
import { horizonGallery } from "@/data/horizon-gallery";
import { horizonMapHotspots } from "@/data/horizon-map";
import { buildCaseTocSections } from "@/lib/case-toc";

const horizonSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
    { id: "case-modules", label: "Modules" },
    { id: "case-map", label: "Mission Map" },
  ],
  { groups: horizonGallery }
);

export default function HorizonPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-horizon"
      sections={horizonSections}
      tocTheme="dark"
      pageTheme="dark"
      nav={
        <header className="case-nav">
          <CaseBackLink />
          <span className="case-nav-title">HORIZON / 2026</span>
        </header>
      }
      hero={
        <CaseHero
          title="Horizon"
          subtitle={horizonHero.subtitle}
          intro={horizonHero.intro}
          spec={horizonSpec}
          image="/images/horizon-cover.jpg"
          imageAlt="Horizon Mars Exploration Simulation"
          coverIntrinsic
          coverWidth={11814}
          coverHeight={6075}
          priority
        />
      }
    >
      <CaseOverviewSection
        body={horizonOverviewBody}
        media={horizonOverviewVideo}
      />

      <CaseFeatures
        heading={horizonFeatures.heading}
        subheading={horizonFeatures.subheading}
        features={horizonFeatures.features}
      />

      <section className="case-map-section" id="case-map">
        <div className="case-map-inner">
          <MarsMapInteractive
            image="/images/horizon-1.jpg"
            imageAlt="Horizon Mars map with mission zones"
            hotspots={horizonMapHotspots}
          />
        </div>
      </section>

      {horizonGallerySections.map((section) => (
        <CaseDetailSection key={section.id} section={section} />
      ))}
    </CaseTemplateLayout>
  );
}
