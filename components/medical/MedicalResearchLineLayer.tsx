import type { medicalResearch } from "@/data/medical-detail";
import { MayoTextMediaSplit } from "./MayoTextMediaSplit";
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

  const hasImages = Boolean(line.images?.length);
  const introContent = hasIntro ? (
    <>
      {purpose ? <p className={styles.mayoTextMediaSplitBody}>{purpose}</p> : null}
      {body ? <p className={styles.mayoTextMediaSplitBody}>{body}</p> : null}
      {feeds || feedsNote ? (
        <div className={styles.researchLineBridge}>
          {feeds ? (
            <span className={styles.researchLineFeeds}>Feeds → {feeds}</span>
          ) : null}
          {feedsNote ? <p className={styles.researchLineNote}>{feedsNote}</p> : null}
        </div>
      ) : null}
    </>
  ) : null;

  return (
    <>
      {hasIntro && !hasImages ? (
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

      {hasImages ? (
        <MayoTextMediaSplit
          mediaSide="left"
          image={{
            src: line.images![0].src,
            alt: line.images![0].alt,
            caption: line.images![0].caption,
          }}
          extraMedia={
            line.images!.length > 1
              ? line.images!.slice(1).map((image) => (
                  <figure className={styles.mayoTextMediaSplitExtraFigure} key={image.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.mayoTextMediaSplitImage}
                      loading="lazy"
                      decoding="async"
                    />
                    {image.caption ? (
                      <figcaption className={styles.figureCaption}>{image.caption}</figcaption>
                    ) : null}
                  </figure>
                ))
              : undefined
          }
        >
          {introContent}
        </MayoTextMediaSplit>
      ) : null}
    </>
  );
}
