"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FISH = [
  { src: "/pic/fish1.jpg", width: 240, height: 195 },
  { src: "/pic/fish2.jpg", width: 220, height: 191 },
  { src: "/pic/fish3.jpg", width: 180, height: 180 },
  { src: "/pic/fish4.jpg", width: 210, height: 156 },
  { src: "/pic/fish5.jpg", width: 200, height: 173 },
] as const;

const LINES = [
  "I Like Fish",
  "Trust First",
  "Track It",
  "Feel Mars",
  "Ship the Flow",
  "Make it Felt",
  "Hello Mayo",
  "Locker Logic",
  "Keep Going",
  "Design in MR",
] as const;

const FISH_COUNT = 2;
const NARROW_MQ = "(max-width: 1100px)";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickIndex(length: number, exclude: number[] = []) {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  let guard = 0;
  while (exclude.includes(next) && guard < 12) {
    next = Math.floor(Math.random() * length);
    guard += 1;
  }
  return next;
}

type FishRuntime = {
  index: number;
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  speed: number;
  facing: 1 | -1;
  swapAt: number;
};

type SpeechRuntime = {
  fishSlot: number;
  lineIndex: number;
  hideAt: number;
};

function makeFish(
  layerW: number,
  layerH: number,
  scale: number,
  now: number,
  excludeFish: number[] = [],
): FishRuntime {
  const index = pickIndex(FISH.length, excludeFish);
  const base = FISH[index];
  const w = base.width * scale;
  const h = base.height * scale;
  const speed = rand(0.04, 0.08);
  let angle = rand(0.2, Math.PI / 2 - 0.2) * (Math.random() > 0.5 ? 1 : -1);
  if (Math.random() > 0.5) angle = Math.PI - angle;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;

  return {
    index,
    x: rand(24, Math.max(24, layerW - w - 24)),
    y: rand(24, Math.max(24, layerH - h - 24)),
    w,
    h,
    vx,
    vy,
    speed,
    facing: vx >= 0 ? 1 : -1,
    swapAt: now + rand(16000, 34000),
  };
}

export default function HomeFishLayer() {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const fishRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [fishIndexes, setFishIndexes] = useState<number[]>(() =>
    Array.from({ length: FISH_COUNT }, (_, i) => i % FISH.length),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mqNarrow = window.matchMedia(NARROW_MQ);
    if (mqNarrow.matches) return;

    const layer = layerRef.current;
    if (!layer) return;

    const homeR = () => {
      const host =
        document.querySelector(".home-page") || document.documentElement;
      const raw = getComputedStyle(host).getPropertyValue("--home-r").trim();
      const n = Number.parseFloat(raw);
      const fallback = Math.min(1, Math.max(0.5, window.innerWidth / 2011.833));
      return Number.isFinite(n) && n > 0 ? Math.max(0.5, n) : fallback;
    };

    const now = performance.now();
    const scale = homeR();
    const fishes: FishRuntime[] = [];
    for (let i = 0; i < FISH_COUNT; i += 1) {
      fishes.push(
        makeFish(
          layer.clientWidth,
          layer.clientHeight,
          scale,
          now,
          fishes.map((f) => f.index),
        ),
      );
    }
    setFishIndexes(fishes.map((f) => f.index));

    let speech: SpeechRuntime | null = null;
    let nextSpeechAt = now + rand(1800, 3600);
    let lastLineIndex = -1;

    const clearSpeechDom = () => {
      for (let i = 0; i < FISH_COUNT; i += 1) {
        const el = fishRefs.current[i];
        const lineEl = lineRefs.current[i];
        el?.classList.remove("is-speaking");
        if (lineEl) lineEl.textContent = "";
      }
    };

    const applySpeechDom = () => {
      clearSpeechDom();
      if (!speech) return;
      const el = fishRefs.current[speech.fishSlot];
      const lineEl = lineRefs.current[speech.fishSlot];
      if (!el || !lineEl) return;
      lineEl.textContent = LINES[speech.lineIndex];
      el.classList.add("is-speaking");
    };

    const applyTransform = (i: number) => {
      const el = fishRefs.current[i];
      const fish = fishes[i];
      if (!el || !fish) return;
      el.style.width = `${fish.w}px`;
      el.style.transform = `translate3d(${fish.x}px, ${fish.y}px, 0)`;
      el.dataset.facing = fish.facing === 1 ? "right" : "left";
      const sprite = el.querySelector<HTMLElement>(".home-fish-sprite");
      if (sprite) {
        sprite.style.transform = `scaleX(${fish.facing})`;
      }
    };

    fishes.forEach((_, i) => applyTransform(i));
    clearSpeechDom();

    let last = now;
    let raf = 0;
    let fishViewDirty = false;

    const onResize = () => {
      if (mqNarrow.matches) return;
      const boundsW = layer.clientWidth;
      const boundsH = layer.clientHeight;
      const s = homeR();
      for (const fish of fishes) {
        const base = FISH[fish.index];
        fish.w = base.width * s;
        fish.h = base.height * s;
        fish.x = Math.min(Math.max(0, fish.x), Math.max(0, boundsW - fish.w));
        fish.y = Math.min(Math.max(0, fish.y), Math.max(0, boundsH - fish.h));
      }
      fishes.forEach((_, i) => applyTransform(i));
    };
    window.addEventListener("resize", onResize, { passive: true });

    const tick = (t: number) => {
      const dt = Math.min(34, t - last);
      last = t;
      const boundsW = layer.clientWidth;
      const boundsH = layer.clientHeight;
      const s = homeR();
      fishViewDirty = false;

      for (let i = 0; i < fishes.length; i += 1) {
        const fish = fishes[i];
        fish.w = FISH[fish.index].width * s;
        fish.h = FISH[fish.index].height * s;

        fish.x += fish.vx * dt;
        fish.y += fish.vy * dt;

        const maxX = Math.max(0, boundsW - fish.w);
        const maxY = Math.max(0, boundsH - fish.h);

        if (fish.x <= 0) {
          fish.x = 0;
          fish.vx = Math.abs(fish.vx);
          fish.facing = 1;
        } else if (fish.x >= maxX) {
          fish.x = maxX;
          fish.vx = -Math.abs(fish.vx);
          fish.facing = -1;
        }

        if (fish.y <= 0) {
          fish.y = 0;
          fish.vy = Math.abs(fish.vy);
        } else if (fish.y >= maxY) {
          fish.y = maxY;
          fish.vy = -Math.abs(fish.vy);
        }

        const absVx = Math.abs(fish.vx);
        const absVy = Math.abs(fish.vy);
        if (absVx < fish.speed * 0.35) {
          fish.vx = (fish.vx >= 0 ? 1 : -1) * fish.speed * rand(0.55, 0.85);
          fish.facing = fish.vx >= 0 ? 1 : -1;
        }
        if (absVy < fish.speed * 0.25) {
          fish.vy = (fish.vy >= 0 ? 1 : -1) * fish.speed * rand(0.45, 0.8);
        }

        if (t >= fish.swapAt) {
          const others = fishes
            .map((f, idx) => (idx === i ? -1 : f.index))
            .filter((n) => n >= 0);
          const next = pickIndex(FISH.length, others);
          fish.index = next;
          const nextBase = FISH[next];
          fish.w = nextBase.width * s;
          fish.h = nextBase.height * s;
          fish.x = Math.min(fish.x, Math.max(0, boundsW - fish.w));
          fish.y = Math.min(fish.y, Math.max(0, boundsH - fish.h));
          fish.speed = rand(0.04, 0.08);
          const dirX = fish.vx >= 0 ? 1 : -1;
          const dirY = fish.vy >= 0 ? 1 : -1;
          fish.vx = dirX * fish.speed * rand(0.55, 0.95);
          fish.vy = dirY * fish.speed * rand(0.45, 0.9);
          fish.facing = dirX;
          fish.swapAt = t + rand(16000, 34000);
          fishViewDirty = true;
        }

        applyTransform(i);
      }

      if (speech && t >= speech.hideAt) {
        speech = null;
        nextSpeechAt = t + rand(8000, 15000);
        clearSpeechDom();
      } else if (!speech && t >= nextSpeechAt) {
        const fishSlot = pickIndex(FISH_COUNT);
        const lineIndex = pickIndex(
          LINES.length,
          lastLineIndex >= 0 ? [lastLineIndex] : [],
        );
        lastLineIndex = lineIndex;
        speech = {
          fishSlot,
          lineIndex,
          hideAt: t + rand(2200, 3200),
        };
        applySpeechDom();
      }

      if (fishViewDirty) {
        setFishIndexes(fishes.map((f) => f.index));
        // React re-render drops imperative is-speaking; restore after paint.
        queueMicrotask(() => {
          applySpeechDom();
        });
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      clearSpeechDom();
    };
  }, []);

  return (
    <div ref={layerRef} className="home-fish-layer" aria-hidden="true">
      {fishIndexes.map((fishIndex, i) => {
        const fish = FISH[fishIndex];
        return (
          <div
            key={i}
            ref={(node) => {
              fishRefs.current[i] = node;
            }}
            className="home-fish home-fish--active"
            data-facing="right"
          >
            <div className="home-fish-sprite">
              <Image
                key={`${i}-${fish.src}`}
                src={fish.src}
                alt=""
                width={fish.width}
                height={fish.height}
                className="home-fish-img"
                draggable={false}
                priority={false}
              />
            </div>
            <span
              ref={(node) => {
                lineRefs.current[i] = node;
              }}
              className="home-fish-line"
            />
          </div>
        );
      })}
    </div>
  );
}
