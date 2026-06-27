"use client";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function CaseAutoplayVideo({ src, alt, className }: Props) {
  return (
    <video
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="auto"
      aria-label={alt}
      onEnded={(event) => {
        const video = event.currentTarget;
        video.currentTime = 0;
        void video.play().catch(() => {});
      }}
    />
  );
}
