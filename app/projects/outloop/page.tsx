import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import { outloopHero, outloopSpec } from "@/data/outloop-content";
import { outloopGalleryImages } from "@/data/outloop-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";

const outloopSections = buildCaseTocSections(
  [{ id: "case-intro", label: "Introduction" }],
  { images: outloopGalleryImages }
);

export default function OutloopPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-outloop"
      sections={outloopSections}
      tocTheme="dark"
      pageTheme="dark"
      nav={<CaseNavbar projectId="outloop" />}
      hero={
        <CaseHero
          title="Outloop"
          subtitle={outloopHero.subtitle}
          intro={outloopHero.intro}
          spec={outloopSpec}
          image={outloopHero.cover.src}
          imageAlt={outloopHero.cover.alt}
          priority
        />
      }
    >
      <CaseGallery images={outloopGalleryImages} seamless />
    </CaseTemplateLayout>
  );
}
