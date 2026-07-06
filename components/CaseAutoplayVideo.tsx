"use client";

type Props = {
  src: string;
  alt: string;
  className?: string;
  controls?: boolean;
  clipStart?: number;
  clipEnd?: number;
};

export default function CaseAutoplayVideo({
  src,
  alt,
  className,
  controls = true,
  clipStart,
  clipEnd,
}: Props) {
  const hasClip =
    clipStart !== undefined &&
    clipEnd !== undefined &&
    clipEnd > clipStart;

  return (
    <video
      className={className}
      src={src}
      autoPlay
      muted
      loop={!hasClip}
      playsInline
      controls={controls}
      preload="auto"
      aria-label={alt}
      onLoadedMetadata={(event) => {
        if (!hasClip) {
          return;
        }

        event.currentTarget.currentTime = clipStart;
      }}
      onTimeUpdate={(event) => {
        if (!hasClip) {
          return;
        }

        const video = event.currentTarget;
        if (video.currentTime >= clipEnd) {
          video.currentTime = clipStart;
        }
      }}
      onEnded={(event) => {
        const video = event.currentTarget;
        video.currentTime = hasClip ? clipStart! : 0;
        void video.play().catch(() => {});
      }}
    />
  );
}
