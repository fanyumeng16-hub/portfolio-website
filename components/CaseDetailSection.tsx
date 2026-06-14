import { AnnotatedMedia, MedicalDetailSection } from "@/data/medical-detail";

function DetailMedia({ item }: { item: AnnotatedMedia }) {
  return (
    <div className="case-detail-media">
      {item.videoSrc ? (
        <video
          className="case-detail-video"
          src={item.videoSrc}
          controls
          playsInline
          preload="metadata"
          aria-label={item.alt}
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
      {item.videos?.map((video) => (
        <video
          key={video.src}
          className="case-detail-video"
          src={video.src}
          controls
          playsInline
          preload="metadata"
          aria-label={video.alt}
        />
      ))}
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
  const copy = (
    <div className="case-detail-copy">
      {item.title ? <h4 className="case-detail-item-title">{item.title}</h4> : null}
      <p>{item.body}</p>
    </div>
  );

  if (item.layout === "split") {
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
            <DetailMedia item={item} />
            {copy}
          </>
        ) : (
          <>
            {copy}
            <DetailMedia item={item} />
          </>
        )}
      </article>
    );
  }

  return (
    <article className="case-detail-item case-detail-item--stack" id={item.id}>
      {copy}
      <DetailMedia item={item} />
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
              <p className="case-detail-intro">{section.intro}</p>
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
