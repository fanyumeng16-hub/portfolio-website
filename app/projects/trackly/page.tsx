import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import TracklyFeatureMocks from "@/components/trackly/TracklyFeatureMocks";
import { TracklyProseSection } from "@/components/trackly/TracklyProseSections";
import { tracklyIntro, tracklySpec } from "@/data/trackly-content";
import {
  tracklyGalleryIntro,
  tracklyGalleryPostUsability,
  tracklyGalleryPreUsability,
  tracklyGalleryScreens,
} from "@/data/trackly-gallery";
import { buildTracklyTocSections } from "@/data/trackly-toc";
import styles from "./trackly.module.css";

const tracklySections = buildTracklyTocSections();

const tracklyTitle = <ProjectTitle title="Trackly" />;

export default function TracklyPage() {
  return (
    <main
      className={`case-page case-page-light case-page-trackly case-page-opening case-page-with-toc ${styles.page}`}
    >
      <CaseToc sections={tracklySections} theme="light" />

      <CaseNavbar projectId="trackly" />

      <CaseHero
        title={tracklyTitle}
        subtitle="Package Tracking Experience"
        spec={tracklySpec}
        specLayout="rows"
        introLabel="overview"
        intro={tracklyIntro}
        cover={{
          src: "/images/trackly/Trackly-hero-cover.png",
          alt: "Hand holding a phone showing the Trackly package tracking app",
        }}
        coverPriority
      />

      <CaseGallery images={tracklyGalleryIntro} seamless />

      <TracklyProseSection sectionId="trackly-context" />
      <TracklyProseSection sectionId="trackly-approach" />

      <section className={styles.researchGroup} id="trackly-research">
        <TracklyProseSection sectionId="trackly-research-methodology" />
        <TracklyProseSection sectionId="trackly-research-detail" />
      </section>

      <TracklyProseSection sectionId="trackly-research-surfaced" />
      <TracklyProseSection sectionId="trackly-analysis" />
      <TracklyProseSection sectionId="trackly-measurable-dimensions" />
      <TracklyProseSection sectionId="trackly-insight-detail" />
      <TracklyProseSection sectionId="trackly-competitive" />

      <TracklyProseSection sectionId="trackly-design-direction" />
      <TracklyProseSection sectionId="trackly-final-concept" />

      <CaseGallery images={tracklyGalleryPreUsability} seamless />

      <TracklyProseSection sectionId="trackly-usability" />

      <CaseGallery images={tracklyGalleryPostUsability} seamless />

      <TracklyFeatureMocks />

      <CaseGallery images={tracklyGalleryScreens} seamless />

      <TracklyProseSection sectionId="trackly-business" />
    </main>
  );
}
