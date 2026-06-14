"use client";

import Link from "next/link";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import ProtectedProjectLock from "@/components/ProtectedProjectLock";
import { massieGalleryImages } from "@/data/massie-gallery";
import { getProject } from "@/data/projects";
import { buildCaseTocSections } from "@/lib/case-toc";

const massieProject = getProject("massie")!;

const PASSWORD = "massie";

const massieSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: massieGalleryImages }
);

const massieTitle = (
  <ProjectTitle title="MASSIE HERITAGE CENTER × ScadServe" />
);

function MassieCaseContent() {
  return (
    <main className="case-page case-page-light case-page-massie case-page-with-toc">
      <CaseToc sections={massieSections} theme="light" />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">
          MASSIE HERITAGE CENTER × ScadServe / 2025
        </span>
      </header>

      <CaseHero
        title={massieTitle}
        subtitle="City Plan Exhibit & Visitor Experience"
        tags={massieProject.tags}
        intro="Massie Heritage Center tells Savannah's story through one of its most distinctive artifacts—the City Plan. With ScadServe, this project reimagines how that history reaches visitors through research-led experience design, from wayfinding and guided interpretation to a Premium Package concept built for deeper engagement."
        image="/images/Massie.jpg"
        imageAlt="Massie Heritage Center City Plan Exhibit visitor experience"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>UX Research / Experience Strategy / Interpretive Design</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Figma / Interviews / Surveys / Experience Prototyping</p>
          </div>
          <div>
            <span>Focus</span>
            <p>City Plan Exhibit / Savannah Grid / Visitor Journey</p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            Massie Heritage Center is a public history museum in Savannah,
            Georgia, built around one of the city&apos;s defining artifacts—the
            Oglethorpe City Plan. In partnership with ScadServe, this project
            reimagines how visitors encounter that story: not as a static model
            behind glass, but as a legible, guided experience that helps people
            understand how Savannah was planned, how it grew, and why the grid
            still matters today.
          </p>
          <p>
            The deliverable is the Premium Package—a full exhibit concept for the
            City Plan gallery. Spotlight and time-lapse projection bring the
            physical model to life; interactive walls and exhibit graphics extend
            interpretation across the space; and a unified style system ties
            wayfinding, signage, and touchpoints into one coherent visitor
            journey. The goal is simple: make the City Plan something visitors
            can read, follow, and remember long after they leave.
          </p>
        </div>
      </section>

      <CaseGallery images={massieGalleryImages} seamless />
    </main>
  );
}

export default function MassieProjectPage() {
  return (
    <ProtectedProjectLock
      password={PASSWORD}
      lockTheme="light"
      pageClassName="case-page-massie"
      hero={{
        title: massieTitle,
        subtitle: "City Plan Exhibit & Visitor Experience",
        tags: massieProject.tags,
        intro:
          "Massie Heritage Center and ScadServe reimagine the City Plan Exhibit through research-led visitor experience design and the Premium Package concept.",
        image: "/images/Massie.jpg",
        imageAlt: "Massie Heritage Center City Plan Exhibit visitor experience",
      }}
    >
      <MassieCaseContent />
    </ProtectedProjectLock>
  );
}
