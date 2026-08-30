import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import { unifeastGalleryImages } from "@/data/unifeast-gallery";
import { buildUniFeastTocSections } from "@/data/unifeast-toc";

const unifeastSections = buildUniFeastTocSections();

const unifeastSpec = [
  { label: "Role", value: "Product Design / UX / Visual Design" },
  { label: "Platform", value: "Mobile App" },
  { label: "Focus", value: "Social Dining / Campus Community / Group Planning" },
];

export default function UniFeastPage() {
  return (
    <main className="case-page case-page-light case-page-with-toc">
      <CaseToc sections={unifeastSections} theme="light" />

      <CaseNavbar projectId="unifeast" />

      <CaseHero
        title="UniFeast"
        subtitle="Feast with your Friends"
        spec={unifeastSpec}
        intro="UniFeast is a campus social dining app that helps international students discover meals, share food moments, and turn cultural cravings into shared plans."
      />

      <CaseGallery
        images={unifeastGalleryImages.map((image) => ({ ...image, hideTitle: true }))}
        seamless
      />
    </main>
  );
}
