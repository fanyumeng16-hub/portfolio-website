import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import { buildMassieTocSections } from "@/data/massie-toc";
import { massieGalleryImages } from "@/data/massie-gallery";

const massieSections = buildMassieTocSections();

const massieTitle = (
  <ProjectTitle title="MASSIE HERITAGE CENTER × ScadServe" />
);

const massieSpec = [
  { label: "Role", value: "UX Research / Experience Strategy / Interpretive Design" },
  { label: "Focus", value: "City Plan Exhibit / Savannah Grid / Visitor Journey" },
  { label: "Tools", value: "Figma / Interviews / Surveys / Experience Prototyping" },
];

export default function MassieProjectPage() {
  return (
    <main className="case-page case-page-light case-page-massie case-page-with-toc">
      <CaseToc sections={massieSections} theme="light" />

      <CaseNavbar projectId="massie" />

      <CaseHero
        title={massieTitle}
        subtitle="City Plan Exhibit & Visitor Experience"
        spec={massieSpec}
        intro="Massie Heritage Center tells Savannah's story through one of its most distinctive artifacts, the City Plan. With ScadServe, this project reimagines how that history reaches visitors through research-led experience design, from wayfinding and guided interpretation to a Premium Package concept built for deeper engagement."
        image="/images/Massie.jpg"
        imageAlt="Massie Heritage Center City Plan Exhibit visitor experience"
      />

      <CaseGallery images={massieGalleryImages} seamless />
    </main>
  );
}
