import type { Metadata } from "next";
import CaseHero from "@/components/CaseHero";
import CaseNavbar from "@/components/CaseNavbar";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import MayoCopyPage from "@/components/medical/MayoCopyPage";
import { mayocopyHero, mayocopySpec } from "@/data/mayocopy-content";
import { mayocopySections } from "@/data/mayocopy-toc";

export const metadata: Metadata = {
  title: "MAYO CLINIC × SCADpro — Mixed Reality Medical Training",
  description: mayocopyHero.intro,
};

const medicalTitle = <ProjectTitle title="MAYO CLINIC × SCADpro" />;

export default function MedicalProjectPage() {
  return (
    <main className="case-page case-page-template case-page-light case-page-medical case-page-opening case-page-with-toc">
      <CaseToc sections={mayocopySections} theme="light" />
      <CaseNavbar projectId="medical" />

      <CaseHero
        title={medicalTitle}
        subtitle={mayocopyHero.subtitle}
        intro={mayocopyHero.intro}
        spec={mayocopySpec}
      />

      <MayoCopyPage withSiteHero />
    </main>
  );
}
