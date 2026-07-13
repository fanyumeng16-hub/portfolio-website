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
            <p className="case-prose-body">
              <span className="mayoBodyLabel">We observed</span> {finding.observed}
            </p>
          ) : null}
          {finding.changed ? (
            <p className="case-prose-body">
              <span className="mayoBodyLabel">We changed</span> {finding.changed}
            </p>
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

export function TestingRoundLayer({ round }: { round: CaseTestingRound }) {
  const hasMedia = Boolean(round.src || round.videoSrc || round.photos?.length);

  return (
    <MedicalLayerShell

      label={round.roundLabel}
      anchorId={round.id}
    >
      <div className={styles.testingRoundIntro}>
        <p className="case-prose-body">{round.purpose}</p>
        <TestingRoundMeta items={round.meta} />
      </div>

      <p className="case-prose-body">
        <span className="mayoBodyLabel">Site</span> {round.siteLabel}
      </p>

      {round.photos?.length ? (
        <MedicalFieldPhotoGrid photos={round.photos} />
      ) : hasMedia ? (
        <TestingMedia src={round.src} videoSrc={round.videoSrc} alt={round.alt} />
      ) : null}

      <div className={styles.testingFindingsBlock}>
        <p className="case-prose-body">
          <span className="mayoBodyLabel">{medicalUserTesting.findingsLabel}</span>
        </p>
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
          <TestingRoundLayer key={round.id} round={round} />
        ))}
      </div>
    </MedicalSection>
  );
}
