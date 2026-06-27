type Props = {
  id: string;
  label: string;
  caption: string;
  src: string;
  alt: string;
};

export default function CaseLocalVideoSection({
  id,
  label,
  caption,
  src,
  alt,
}: Props) {
  return (
    <section className="case-video-section" id={id}>
      <div className="case-video-inner">
        <header className="case-video-header">
          <p className="case-section-label">{label}</p>
          <p className="case-video-caption">{caption}</p>
        </header>
        <video
          className="case-video-player"
          src={src}
          controls
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      </div>
    </section>
  );
}
