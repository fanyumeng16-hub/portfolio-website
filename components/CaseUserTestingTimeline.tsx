import { Fragment } from "react";
import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";
import {
  CaseFinding,
  CaseTestingTimelineItem,
} from "@/data/medical-content";

type Props = {
  id: string;
  title: string;
  intro?: string;
  timeline: CaseTestingTimelineItem[];
};

type TimelineMediaProps = {
  src?: string;
  videoSrc?: string;
  alt?: string;
};

function TimelineMedia({ src, videoSrc, alt = "" }: TimelineMediaProps) {
  const hasMedia = Boolean(src || videoSrc);

  return (
    <div
      className={`case-testing-timeline-media${
        hasMedia ? "" : " case-testing-timeline-media--empty"
      }`}
      aria-hidden={hasMedia ? undefined : true}
    >
      {videoSrc ? (
        <CaseAutoplayVideo
          className="case-testing-timeline-video"
          src={videoSrc}
          alt={alt}
        />
      ) : null}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="case-testing-timeline-image"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
}

function TimelineFinding({ finding }: { finding: CaseFinding }) {
  return (
    <>
      <TimelineMedia
        src={finding.src}
        videoSrc={finding.videoSrc}
        alt={finding.alt}
      />
      <div className="case-testing-timeline-rail-content">
        <div className="case-testing-timeline-finding">
          {finding.observed ? (
            <div className="case-testing-timeline-finding-group">
              <h4 className="case-prose-subtitle">We observed</h4>
              <p className="case-prose-body">{finding.observed}</p>
            </div>
          ) : null}
          {finding.changed ? (
            <div className="case-testing-timeline-finding-group">
              <h4 className="case-prose-subtitle">We changed</h4>
              <p className="case-prose-body">{finding.changed}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default function CaseUserTestingTimeline({
  id,
  title,
  intro,
  timeline,
}: Props) {
  return (
    <section className="case-prose-section case-testing-section" id={id}>
      <div className="case-prose-inner">
        <h3 className="case-prose-title">{title}</h3>
        {intro ? <p className="case-prose-body">{intro}</p> : null}

        <ol className="case-testing-timeline">
          {timeline.map((item) => (
            <Fragment key={item.id}>
              <li
                className="case-testing-timeline-item case-testing-timeline-item--round"
                id={item.id}
              >
                <TimelineMedia
                  src={item.src}
                  videoSrc={item.videoSrc}
                  alt={item.alt}
                />
                <div className="case-testing-timeline-rail-content">
                  <div className="case-testing-timeline-round-heading">
                    <h4 className="case-prose-subtitle">{item.roundLabel}</h4>
                    <h4 className="case-prose-subtitle">{item.title}</h4>
                  </div>
                  <p className="case-prose-body">{item.body}</p>
                </div>
              </li>

              {item.findings.map((finding, index) => (
                <li
                  className="case-testing-timeline-item case-testing-timeline-item--finding"
                  key={`${item.id}-finding-${index}`}
                >
                  <TimelineFinding finding={finding} />
                </li>
              ))}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
