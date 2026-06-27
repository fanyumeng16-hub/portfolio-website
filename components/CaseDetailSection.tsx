import { AnnotatedMedia, MedicalDetailSection } from "@/data/medical-detail";
import CaseAutoplayVideo from "@/components/CaseAutoplayVideo";

function DetailVideo({
  src,
  alt,
  className,
  autoPlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
}) {
  if (autoPlay) {
    return <CaseAutoplayVideo src={src} alt={alt} className={className} />;
  }

  return (
    <video
      className={className}
      src={src}
      controls
      playsInline
      preload="metadata"
      aria-label={alt}
    />
  );
}

function DetailMediaRow({
  items,
}: {
  items: NonNullable<AnnotatedMedia["mediaRow"]>;
}) {
  return (
    <div className="case-detail-media-row">
      {items.map((item) => (
        <div className="case-detail-media-row-item" key={item.src ?? item.videoSrc}>
          {item.videoSrc ? (
            <DetailVideo
              className="case-detail-video"
              src={item.videoSrc}
              alt={item.alt}
              autoPlay={item.autoPlay}
            />
          ) : null}
          {item.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt}
              className="case-detail-image"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function DetailMedia({ item }: { item: AnnotatedMedia }) {
  if (item.mediaRow?.length) {
    return <DetailMediaRow items={item.mediaRow} />;
  }

  return (
    <div
      className={`case-detail-media${
        item.images && item.images.length > 1 ? " case-detail-media--stacked" : ""
      }`}
    >
      {item.videoSrc ? (
        <DetailVideo
          className="case-detail-video"
          src={item.videoSrc}
          alt={item.alt ?? ""}
          autoPlay={item.autoPlay}
        />
      ) : null}
      {item.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt ?? ""}
          className="case-detail-image"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      {item.images?.map((image) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="case-detail-image"
          loading="lazy"
          decoding="async"
        />
      ))}
      {item.videos?.map((video) => (
        <DetailVideo
          key={video.src}
          className="case-detail-video"
          src={video.src}
          alt={video.alt}
          autoPlay={video.autoPlay}
        />
      ))}
    </div>
  );
}

function DetailCopy({ item }: { item: AnnotatedMedia }) {
  if (!item.title && !item.subtitle && !item.body) return null;

  return (
    <div className="case-detail-copy">
      {item.title ? <h4 className="case-detail-item-title">{item.title}</h4> : null}
      {item.subtitle ? (
        <p className="case-detail-item-subtitle">{item.subtitle}</p>
      ) : null}
      {item.body
        ? item.body.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        : null}
    </div>
  );
}

function DetailItem({
  item,
  mediaWide = false,
}: {
  item: AnnotatedMedia;
  mediaWide?: boolean;
}) {
  const copy = <DetailCopy item={item} />;
  const hasCopy = Boolean(item.title || item.subtitle || item.body);
  const hasMedia = Boolean(
    item.mediaRow?.length ||
      item.src ||
      item.videoSrc ||
      item.images?.length ||
      item.videos?.length
  );

  if (item.layout === "split" && hasCopy) {
    const mediaLeft = item.mediaSide !== "right";

    return (
      <article
        className={`case-detail-item case-detail-item--split ${
          mediaLeft ? "case-detail-item--media-left" : "case-detail-item--media-right"
        } ${mediaWide ? "case-detail-item--media-wide" : ""}`}
        id={item.id}
      >
        {mediaLeft ? (
          <>
            {hasMedia ? <DetailMedia item={item} /> : null}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {hasMedia ? <DetailMedia item={item} /> : null}
          </>
        )}
      </article>
    );
  }

  return (
    <article className="case-detail-item case-detail-item--stack" id={item.id}>
      {copy}
      {hasMedia ? <DetailMedia item={item} /> : null}
    </article>
  );
}

type Props = {
  section: MedicalDetailSection;
};

export default function CaseDetailSection({ section }: Props) {
  const headerSplit = section.headerLayout === "split";
  const mediaWide = section.mediaRatio === "wide";

  return (
    <section
      className={`case-detail-section ${
        mediaWide ? "case-detail-section--media-wide" : ""
      }`}
      id={section.id}
    >
      <div className="case-detail-inner">
        {section.title || section.intro ? (
          <header
            className={`case-detail-header ${
              headerSplit ? "case-detail-header--split" : ""
            }`}
          >
            {section.title ? (
              <h3 className="case-detail-title">{section.title}</h3>
            ) : null}
            {section.introPoints?.length ? (
              <ul className="case-detail-intro-list">
                {section.introPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : section.intro ? (
              section.intro.split("\n\n").map((paragraph, index) => (
                <p className="case-detail-intro" key={index}>
                  {paragraph}
                </p>
              ))
            ) : null}
            {section.introQuote ? (
              <blockquote className="case-detail-intro-quote">
                &ldquo;{section.introQuote}&rdquo;
              </blockquote>
            ) : null}
          </header>
        ) : null}

        <div className="case-detail-items">
          {section.items.map((item, index) => (
            <DetailItem
              key={item.id ?? `${section.id}-${index}`}
              item={item}
              mediaWide={mediaWide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
