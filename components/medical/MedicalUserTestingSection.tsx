import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import {
  CaseFinding,
  CaseTestingRound,
  medicalUserTesting,
} from "@/data/medical-content";
import { MedicalFieldPhotoGrid } from "./MedicalFieldPhotoGrid";
import { MedicalLayerShell } from "./MedicalLayerShell";
import { MedicalSection } from "./MedicalSection";
import styles from "./MedicalSections.module.css";

function TestingMedia({
  src,
  videoSrc,
  alt = "",
}: {
  src?: string;
  videoSrc?: string;
  alt?: string;
}) {
  if (!src && !videoSrc) {
    return null;
  }

  return (
    <div className={styles.testingMedia}>
      <figure className={styles.testingFigure}>
        {videoSrc ? (
          <CaseAutoplayVideo
            className={styles.testingVideo}
            src={videoSrc}
            alt={alt}
          />
        ) : null}
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className={styles.testingImage}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </figure>
    </div>
  );
}

function TestingFinding({ finding }: { finding: CaseFinding }) {
  const hasMedia = Boolean(finding.src || finding.videoSrc);

  return (
    <li className={styles.testingFinding}>
      <div
        className={`${styles.testingFindingRow}${
          hasMedia ? "" : ` ${styles.testingFindingRowCopyOnly}`
        }`}
      >
        {hasMedia ? (
          <TestingMedia
            src={finding.src}
            videoSrc={finding.videoSrc}
            alt={finding.alt}
          />
        ) : null}
        <div className={styles.testingFindingCopy}>
          {finding.observed ? (
            <div className={styles.testingFindingGroup}>
              <p className={styles.testingFindingLabel}>We observed</p>
              <p className={styles.testingFindingBody}>{finding.observed}</p>
            </div>
          ) : null}
          {finding.changed ? (
            <div className={styles.testingFindingGroup}>
              <p className={styles.testingFindingLabel}>We changed</p>
              <p className={styles.testingFindingBody}>{finding.changed}</p>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function TestingRoundMeta({ items }: { items: CaseTestingRound["meta"] }) {
  return (
    <dl className={styles.testingMetaGrid}>
      {items.map((item) => (
        <div className={styles.testingMetaCell} key={item.label}>
          <dt className="case-section-label">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TestingRoundLayer({
  round,
  index,
}: {
  round: CaseTestingRound;
  index: number;
}) {
  const hasMedia = Boolean(round.src || round.videoSrc || round.photos?.length);

  return (
    <MedicalLayerShell
      index={String(index + 1).padStart(2, "0")}
      label={round.roundLabel}
      anchorId={round.id}
    >
      <div className={styles.testingRoundIntro}>
        <p className="case-prose-body">{round.purpose}</p>
        <TestingRoundMeta items={round.meta} />
      </div>

      <p className={styles.testingSiteTag}>{round.siteLabel}</p>

      {round.photos?.length ? (
        <MedicalFieldPhotoGrid photos={round.photos} />
      ) : hasMedia ? (
        <TestingMedia src={round.src} videoSrc={round.videoSrc} alt={round.alt} />
      ) : null}

      <div className={styles.testingFindingsBlock}>
        <p className={styles.testingFindingsHeading}>{medicalUserTesting.findingsLabel}</p>
        <ul className={styles.testingFindings}>
          {round.findings.map((finding, findingIndex) => (
            <TestingFinding
              key={`${round.id}-finding-${findingIndex}`}
              finding={finding}
            />
          ))}
        </ul>
      </div>
    </MedicalLayerShell>
  );
}

export function MedicalUserTestingSection() {
  const { title, intro, timeline } = medicalUserTesting;

  return (
    <MedicalSection id="mayo-user-testing" title={title} intro={intro}>
      <div className={styles.medicalLayers}>
        {timeline.map((round, index) => (
          <TestingRoundLayer key={round.id} round={round} index={index} />
        ))}
      </div>
    </MedicalSection>
  );
}
