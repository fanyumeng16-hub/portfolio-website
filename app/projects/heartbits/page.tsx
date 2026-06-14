import Link from "next/link";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import { heartbitsGalleryImages } from "@/data/heartbits-gallery";
import { getProject } from "@/data/projects";
import { buildCaseTocSections } from "@/lib/case-toc";

const heartbitsProject = getProject("heartbits")!;

const heartbitsSections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: heartbitsGalleryImages }
).concat([{ id: "case-video", label: "Video" }]);

export default function HeartbitsPage() {
  return (
    <main className="case-page case-page-with-toc">
      <CaseToc sections={heartbitsSections} />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">HEARTBITS / 2026</span>
      </header>

      <CaseHero
        title="Heartbits"
        subtitle="Interactive Rehabilitation Experience"
        tags={heartbitsProject.tags}
        intro="Heartbits is a family-centered rehabilitation experience that transforms repetitive rotator cuff recovery into collaborative gameplay. By combining physical therapy movements with emotional support and shared interaction, the system encourages long-term engagement while reducing anxiety throughout the rehabilitation journey."
        image="/images/heartbits.jpg"
        imageAlt="Heartbits interactive rehabilitation system"
        priority
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>UX Design / Interaction Design / Visual Guidance</p>
          </div>
          <div>
            <span>Tools</span>
            <p>Figma / Interactive Prototype / Motion Design</p>
          </div>
          <div>
            <span>Focus</span>
            <p>
              Interactive Rehabilitation / Emotional Support / Motivation
              Sustainability
            </p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            Rotator cuff rehabilitation often requires months of repetitive
            exercise, making it difficult for patients to stay motivated.
            Heartbits reimagines this process through an interactive game
            experience where rehabilitation movements directly control in-game
            actions.
          </p>
          <p>
            Rather than treating recovery as an isolated medical task, the
            experience invites family members to participate as cooperative
            players. Physical progress and emotional encouragement become part of
            the same interaction, creating a more engaging and sustainable
            recovery process.
          </p>
        </div>
      </section>

      <CaseGallery images={heartbitsGalleryImages} />

      <section className="case-video-section" id="case-video">
        <div className="case-video-header">
          <p className="case-section-label">Project Video</p>
          <h3>Experience Demo</h3>
        </div>

        <video
          className="case-video"
          src="/videos/heartbits-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </section>
    </main>
  );
}
