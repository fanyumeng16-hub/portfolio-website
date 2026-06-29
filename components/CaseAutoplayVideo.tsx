"use client";

type Props = {
  src: string;
  alt: string;
  className?: string;
  controls?: boolean;
};

export default function CaseAutoplayVideo({
  src,
  alt,
  className,
  controls = true,
}: Props) {
  return (
    <video
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls={controls}
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
