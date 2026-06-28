import CaseBackLink from "@/components/CaseBackLink";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import { tracklyGalleryImages } from "@/data/trackly-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";

const tracklySpec = [
  { label: "Role", value: "UX Design / Interaction Design / Visual System" },
  { label: "Tools", value: "Figma / Prototyping / UI Design" },
  { label: "Focus", value: "Habit Tracking / Goal Management / Mobile UX" },
];

const tracklySections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "case-overview", label: "Overview" },
  ],
  { images: tracklyGalleryImages }
);

export default function TracklyPage() {
  return (
    <main className="case-page case-page-light case-page-with-toc">
      <CaseToc sections={tracklySections} theme="light" />

      <header className="case-nav">
        <CaseBackLink />
        <span className="case-nav-title">TRACKLY / 2026</span>
      </header>

      <CaseHero
        title="Trackly"
        subtitle="Habit & Goal Tracking Experience"
        spec={tracklySpec}
        intro="Trackly is a habit and goal tracking experience designed to help users build consistent routines without the friction of overly complex productivity tools. The interface focuses on clarity, momentum, and lightweight daily check-ins."
        image="/images/Trackly-cover.jpg"
        imageAlt="Trackly habit and goal tracking experience"
        coverIntrinsic
        coverWidth={5613}
        coverHeight={3157}
        priority
      />

      <section className="case-overview" id="case-overview">
        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            Many tracking apps overwhelm users with dashboards, streak pressure,
            and dense data before habits have a chance to form. Trackly explores
            a calmer alternative—structuring progress around simple daily
            actions, visible momentum, and interfaces that stay out of the way.
          </p>
          <p>
            The experience maps goals into repeatable routines, surfaces only the
            information needed for the current moment, and uses visual rhythm to
            reinforce consistency over perfection.
          </p>
        </div>
      </section>

      <CaseGallery images={tracklyGalleryImages} seamless />
    </main>
  );
}
