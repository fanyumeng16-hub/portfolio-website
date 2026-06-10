"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import CaseFeatures from "@/components/CaseFeatures";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import { medicalGallery } from "@/data/medical-gallery";
import { medicalFeatures } from "@/data/medical-features";
import { buildCaseTocSections } from "@/lib/case-toc";

const PASSWORD = "mayo";

const medicalSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
    { id: "case-modules", label: "Modules" },
  ],
  { groups: medicalGallery }
);

const medicalTitle = (
  <>
    MAYO CLINIC × SCAD<span className="brand-lowercase">pro</span>
  </>
);

function MedicalCaseContent() {
  return (
    <>
      <CaseToc sections={medicalSections} />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">MAYO CLINIC × SCADpro / 2025</span>
      </header>

      <CaseHero
        title={medicalTitle}
        subtitle="Mixed Reality Medical Training System"
        tags={["MR", "Branding", "Interaction"]}
        intro="A Mayo Clinic × SCADpro mixed reality project exploring brand consistency, medical training workflows, and immersive interaction design for next-generation clinical education."
        image="/images/medical.jpg"
        imageAlt="Mayo Clinic SCADpro mixed reality medical training system"
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>Interaction Design / Brand System / MR Experience</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Figma / Mixed Reality Prototype / Visual Design</p>
          </div>
          <div>
            <span>Focus</span>
            <p>
              Medical Training / Brand Consistency / Immersive Instruction
            </p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            This collaboration examines how Mayo Clinic&apos;s trusted brand
            identity can extend into mixed reality without losing clarity,
            professionalism, or instructional focus. The work balances
            institutional standards with the spatial and interactive demands of
            immersive training.
          </p>
          <p>
            The experience centers on scenario-based learning modules that help
            medical trainees rehearse procedures, navigate spatial information,
            and practice decision-making in a controlled MR environment aligned
            with real clinical workflows.
          </p>
        </div>
      </section>

      <CaseFeatures
        heading={medicalFeatures.heading}
        subheading={medicalFeatures.subheading}
        features={medicalFeatures.features}
      />

      <CaseGallery groups={medicalGallery} />
    </>
  );
}

export default function MedicalProjectPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  if (unlocked) {
    return (
      <main className="case-page">
        <MedicalCaseContent />
      </main>
    );
  }

  return (
    <main className="protected-page">
      <Link href="/#work" className="protected-back">
        BACK TO WORK
      </Link>

      <CaseHero
        title={medicalTitle}
        subtitle="Mixed Reality Medical Training System"
        tags={["MR", "Branding", "Interaction"]}
        intro="A Mayo Clinic × SCADpro mixed reality project exploring brand consistency, medical training workflows, and immersive interaction design."
        image="/images/medical.jpg"
        imageAlt="Mayo Clinic SCADpro mixed reality medical training system"
        priority
      />

      <section className="protected-lock-section">
        <div className="protected-lock-copy">
          <h3>This project is password protected.</h3>
          <p>Please enter the password to continue.</p>
          <form className="protected-form" onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">UNLOCK</button>
          </form>
          {error && <p className="protected-error">{error}</p>}
        </div>
      </section>
    </main>
  );
}
