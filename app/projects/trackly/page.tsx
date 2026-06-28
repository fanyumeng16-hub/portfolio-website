import CaseBackLink from "@/components/CaseBackLink";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import TracklyBoard from "@/components/trackly/TracklyBoard";
import TracklyStepFlow from "@/components/trackly/TracklyStepFlow";
import {
  tracklyHeroBoard,
  tracklyIntro,
  tracklyOpeningBoards,
  tracklyResearchBoards,
  tracklySpec,
} from "@/data/trackly-content";
import {
  tracklyGalleryAfterFlow,
  tracklyGalleryBeforeFlow,
  tracklyGalleryImages,
} from "@/data/trackly-gallery";
import { buildCaseTocSections } from "@/lib/case-toc";
import styles from "./trackly.module.css";

const tracklySections = buildCaseTocSections(
  [
    { id: "case-intro", label: "Introduction" },
    { id: "trackly-goal", label: "Goal" },
    { id: "trackly-problem", label: "Problem" },
    { id: "trackly-research", label: "Research" },
    { id: "trackly-step-flow", label: "User Flow" },
  ],
  { images: tracklyGalleryImages },
);

const tracklyTitle = <ProjectTitle title="Trackly" />;

export default function TracklyPage() {
  return (
    <main
      className={`case-page case-page-light case-page-trackly case-page-with-toc ${styles.page}`}
    >
      <CaseToc sections={tracklySections} theme="light" />

      <header className="case-nav">
        <CaseBackLink />
        <span className="case-nav-title">TRACKLY / 2026</span>
      </header>

      <CaseHero
        title={tracklyTitle}
        subtitle="Package Tracking Experience"
        spec={tracklySpec}
        intro={tracklyIntro}
        image={tracklyHeroBoard.src}
        imageAlt={tracklyHeroBoard.alt}
        priority
        coverIntrinsic
        coverWidth={tracklyHeroBoard.width}
        coverHeight={tracklyHeroBoard.height}
      />

      {tracklyOpeningBoards.map((board) => (
        <TracklyBoard key={board.id} board={board} className={styles.board} />
      ))}

      <section className={styles.researchGroup} id="trackly-research">
        {tracklyResearchBoards.map((board) => (
          <TracklyBoard
            key={board.id}
            board={board}
            className={styles.board}
            embedded
          />
        ))}
      </section>

      <CaseGallery images={tracklyGalleryBeforeFlow} seamless />

      <TracklyStepFlow />

      <CaseGallery images={tracklyGalleryAfterFlow} seamless />
    </main>
  );
}
