import { GalleryGroup, GallerySlide } from "@/data/horizon-gallery";

type Props = {
  groups?: GalleryGroup[];
  images?: GallerySlide[];
  seamless?: boolean;
};

export default function CaseGallery({
  groups,
  images,
  seamless = false,
}: Props) {
  if (images?.length) {
    return (
      <section
        className={`case-gallery-section ${
          seamless ? "case-gallery-section--seamless" : ""
        }`}
      >
        <div className="case-gallery-inner">
          <div className="case-gallery-stack">
            {images.map((image) =>
              seamless ? (
                <div
                  className="case-gallery-seamless-panel"
                  key={image.id}
                  id={image.id}
                >
                  {image.summary ? (
                    <div className="case-gallery-seamless-copy">
                      <h4 className="case-gallery-seamless-title">
                        {image.title}
                      </h4>
                      <p>{image.summary}</p>
                    </div>
                  ) : null}
                  {image.videoSrc ? (
                    <video
                      className="case-gallery-seamless-video"
                      src={image.videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={image.alt}
                    />
                  ) : null}
                  {image.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="case-gallery-seamless-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  {image.videos?.map((video) => (
                    <video
                      key={video.src}
                      className="case-gallery-seamless-video"
                      src={video.src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={video.alt}
                    />
                  ))}
                </div>
              ) : (
                <section
                  className="case-gallery-panel"
                  key={image.id}
                  id={image.id}
                >
                  <div className="case-gallery-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="case-gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </section>
              )
            )}
          </div>
        </div>
      </section>
    );
  }

  if (!groups?.length) return null;

  return (
    <section className="case-gallery-section">
      <div className="case-gallery-inner">
        {groups.map((group) => (
          <div key={group.id} id={group.id} className="case-gallery-group">
            <header className="case-gallery-group-header">
              <h3 className="case-gallery-group-title">{group.title}</h3>
              <p className="case-gallery-group-summary">{group.summary}</p>
            </header>

            <div className="case-gallery-stack">
              {group.images.map((image) => (
                <section className="case-gallery-panel" key={image.src}>
                  <div className="case-gallery-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="case-gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
