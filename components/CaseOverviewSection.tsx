import CaseOverviewMeta from "@/components/CaseOverviewMeta";
import {
  CASE_TEMPLATE,
  type CaseOverviewMedia,
  type CaseTemplateSpecRow,
} from "@/lib/case-template";

type Props = {
  id?: string;
  title?: string;
  body: string;
  spec: CaseTemplateSpecRow[];
  media: CaseOverviewMedia;
};

export default function CaseOverviewSection({
  id = "case-overview",
  title = "Overview",
  body,
  spec,
  media,
}: Props) {
  return (
    <section
      className={`case-overview ${CASE_TEMPLATE.overviewClass}`}
      id={id}
    >
      <h3 className="case-prose-title">{title}</h3>

      <div className="case-overview-grid">
        <p className="case-prose-body">{body}</p>
        <CaseOverviewMeta rows={spec} />
      </div>

      <figure className="case-overview-figure">
        {media.type === "youtube" ? (
          <div className="case-overview-youtube">
            <iframe
              className="case-overview-youtube-embed"
              src={`https://www.youtube.com/embed/${media.videoId}`}
              title={media.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            className="case-overview-video case-video-player"
            src={media.src}
            controls
            playsInline
            preload="metadata"
            aria-label={media.alt}
          />
        )}
      </figure>
    </section>
  );
}
