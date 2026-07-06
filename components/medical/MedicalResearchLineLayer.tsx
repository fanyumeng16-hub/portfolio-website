import type { medicalResearch } from "@/data/medical-detail";
import { MedicalResearchPersona } from "./MedicalResearchPersona";
import styles from "./MedicalSections.module.css";

type ResearchLine = (typeof medicalResearch)["lines"][number];

export function MedicalResearchLineLayer({ line }: { line: ResearchLine }) {
  const purpose =
    "purpose" in line && typeof line.purpose === "string" ? line.purpose : undefined;
  const body = "body" in line && typeof line.body === "string" ? line.body : undefined;
  const feeds = "feeds" in line && typeof line.feeds === "string" ? line.feeds : undefined;
  const feedsNote =
    "feedsNote" in line && typeof line.feedsNote === "string" ? line.feedsNote : undefined;
  const hasIntro = Boolean(purpose || body || feeds || feedsNote);

  return (
    <>
      {hasIntro ? (
        <div className={styles.researchLineIntro}>
          {purpose ? <p className={styles.researchLinePurpose}>{purpose}</p> : null}
          {body ? <p className={styles.researchLineBody}>{body}</p> : null}
          {feeds || feedsNote ? (
            <div className={styles.researchLineBridge}>
              {feeds ? (
                <span className={styles.researchLineFeeds}>Feeds → {feeds}</span>
              ) : null}
              {feedsNote ? <p className={styles.researchLineNote}>{feedsNote}</p> : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {line.persona ? (
        <div
          className={`${styles.researchPersonaWrap}${
            !hasIntro ? ` ${styles.researchPersonaWrapLead}` : ""
          }`}
        >
          <MedicalResearchPersona persona={line.persona} />
        </div>
      ) : null}

      {line.images?.length ? (
        <div
          className={`${styles.researchImageGrid}${
            !hasIntro && !line.persona ? ` ${styles.researchImageGridLead}` : ""
          }`}
        >
          {line.images.map((image) => (
            <figure className={styles.researchFigure} key={image.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className={styles.researchImage}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </>
  );
}
