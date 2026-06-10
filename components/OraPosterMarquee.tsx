"use client";

import { OraPoster } from "@/data/ora-posters";
import { useEffect, useRef } from "react";
import styles from "./OraPosterMarquee.module.css";

type Props = {
  posters: OraPoster[];
  sectionId?: string;
};

function PosterGroup({
  posters,
  hideFromAssistiveTech = false,
}: {
  posters: OraPoster[];
  hideFromAssistiveTech?: boolean;
}) {
  return (
    <div
      className={styles.group}
      aria-hidden={hideFromAssistiveTech || undefined}
    >
      {posters.map((poster) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={poster.src}
          src={poster.src}
          alt={hideFromAssistiveTech ? "" : poster.alt}
          width={4800}
          height={6000}
          className={styles.item}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  );
}

export default function OraPosterMarquee({
  posters,
  sectionId = "case-posters",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let loopWidth = 0;

    const measure = () => {
      loopWidth = track.scrollWidth / 2;
    };

    measure();

    const images = track.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", measure, { once: true });
      }
    });

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const tick = () => {
      if (!pausedRef.current && loopWidth > 0) {
        offsetRef.current -= 1;

        if (Math.abs(offsetRef.current) >= loopWidth) {
          offsetRef.current = 0;
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [posters]);

  return (
    <section className={styles.section} id={sectionId}>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <PosterGroup posters={posters} />
          <PosterGroup posters={posters} hideFromAssistiveTech />
        </div>
      </div>
    </section>
  );
}
