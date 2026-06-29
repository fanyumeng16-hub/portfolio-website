import CaseNavbar from "@/components/CaseNavbar";
import CaseGallery from "@/components/CaseGallery";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import ProjectTitle from "@/components/ProjectTitle";
import TracklyBoard from "@/components/trackly/TracklyBoard";
import TracklyFeatureMocks from "@/components/trackly/TracklyFeatureMocks";
import {
  tracklyHeroBoard,
  tracklyIntro,
  tracklyOpeningBoards,
  tracklyResearchBoards,
  tracklySpec,
} from "@/data/trackly-content";
import {
  tracklyGalleryAfterMocks,
  tracklyGalleryBeforeFlow,
} from "@/data/trackly-gallery";
import { buildTracklyTocSections } from "@/data/trackly-toc";
import styles from "./trackly.module.css";

const tracklySections = buildTracklyTocSections();

const tracklyTitle = <ProjectTitle title="Trackly" />;

export default function TracklyPage() {
  return (
    <main
      className={`case-page case-page-light case-page-trackly case-page-with-toc ${styles.page}`}
    >
      <CaseToc sections={tracklySections} theme="light" />

      <CaseNavbar projectId="trackly" />

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
        <TracklyBoard
          key={board.id}
          board={board}
          className={`${styles.board} case-content-column`}
        />
      ))}

      <section
        className={`case-content-column ${styles.researchGroup}`}
        id="trackly-research"
      >
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

      <TracklyFeatureMocks />

      <CaseGallery images={tracklyGalleryAfterMocks} seamless />
    </main>
  );
}
