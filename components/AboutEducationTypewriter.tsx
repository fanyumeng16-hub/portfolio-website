"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  aboutEducationBeats,
  aboutExploreBeats,
  aboutNowSpans,
  sliceSpans,
  spansToPlain,
  type AboutStoryBeat,
  type TextSpan,
} from "@/data/about-story";
import styles from "./AboutEducationTypewriter.module.css";

const LOADING_DOTS = "......";

type VisibleBeat =
  | { kind: "heading"; text: string; tone?: "default" | "muted" }
  | { kind: "date"; text: string }
  | { kind: "paragraph"; spans: TextSpan[] }
  | { kind: "loading"; dots: string };

type TypePhase = "idle" | "typing" | "loading" | "done";

function preferReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function charDelay(char: string, prev: string): number {
  if (prev === "." || prev === "!" || prev === "?") return rand(220, 420);
  if (prev === "," || prev === ";" || prev === ":") return rand(100, 180);
  if (prev === " ") return rand(30, 110);
  if (/[0-9/]/.test(char)) return rand(45, 90);
  if (Math.random() < 0.035) return rand(160, 300);
  if (Math.random() < 0.12) return rand(16, 32);
  return rand(28, 68);
}

function renderSpans(spans: TextSpan[]) {
  return spans.map((span, index) =>
    span.highlight ? (
      <span key={index} className={styles.hl}>
        {span.text}
      </span>
    ) : (
      <span key={index}>{span.text}</span>
    ),
  );
}

function materializeBeats(beats: AboutStoryBeat[]): VisibleBeat[] {
  return beats.map((beat) => {
    if (beat.kind === "loading") return { kind: "loading", dots: LOADING_DOTS };
    if (beat.kind === "paragraph") return { kind: "paragraph", spans: beat.spans };
    if (beat.kind === "date") return { kind: "date", text: beat.text };
    return { kind: "heading", text: beat.text, tone: beat.tone };
  });
}

const TYPED_SCRIPT: AboutStoryBeat[] = [
  ...aboutEducationBeats,
  ...aboutExploreBeats,
];

const STORY_DONE_KEY = "about-story-typed-v1";

/** Survives client navigations (Past WORKS → project → back). */
let storyTypedMemory = false;

function readStoryTyped(): boolean {
  if (storyTypedMemory) return true;
  if (typeof window === "undefined") return false;
  try {
    if (sessionStorage.getItem(STORY_DONE_KEY) === "1") {
      storyTypedMemory = true;
      return true;
    }
  } catch {
    /* private mode */
  }
  return false;
}

function markStoryTyped() {
  storyTypedMemory = true;
  try {
    sessionStorage.setItem(STORY_DONE_KEY, "1");
  } catch {
    /* private mode */
  }
}

function finishStoryState() {
  return {
    beats: materializeBeats(TYPED_SCRIPT),
    phase: "done" as const,
    started: true,
  };
}

export default function AboutEducationTypewriter() {
  const rootRef = useRef<HTMLDivElement>(null);
  const restored = useRef(false);

  const [started, setStarted] = useState(() => storyTypedMemory);
  const [beats, setBeats] = useState<VisibleBeat[]>(() =>
    storyTypedMemory ? materializeBeats(TYPED_SCRIPT) : [],
  );
  const [phase, setPhase] = useState<TypePhase>(() =>
    storyTypedMemory ? "done" : "idle",
  );

  const active = phase === "typing" || phase === "loading";
  const hasExploreHeading = beats.some(
    (beat) =>
      beat.kind === "heading" && /exp(l)?ore/i.test(beat.text),
  );

  // Restore after hard refresh / first client paint (sessionStorage).
  useEffect(() => {
    if (restored.current || phase === "done") return;
    if (!readStoryTyped()) return;
    restored.current = true;
    const done = finishStoryState();
    setBeats(done.beats);
    setPhase(done.phase);
    setStarted(done.started);
  }, [phase]);

  useEffect(() => {
    if (phase === "done" || started) return;

    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        // Start once the story block itself enters the viewport
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          setStarted(true);
          io.disconnect();
        }
      },
      {
        threshold: [0.12, 0.25, 0.4],
        rootMargin: "0px 0px -18% 0px",
      },
    );

    io.observe(root);
    return () => io.disconnect();
  }, [phase, started]);

  useEffect(() => {
    if (!started || phase === "done") return;

    if (preferReducedMotion() || readStoryTyped()) {
      markStoryTyped();
      const done = finishStoryState();
      setBeats(done.beats);
      setPhase(done.phase);
      return;
    }

    let cancelled = false;
    let timer = 0;
    let waitResolve: (() => void) | null = null;
    /** Click finishes the beat currently being typed. */
    let skipCurrent = false;

    const finishWait = () => {
      window.clearTimeout(timer);
      const resolve = waitResolve;
      waitResolve = null;
      resolve?.();
    };

    const onClick = () => {
      skipCurrent = true;
      finishWait();
    };

    const root = rootRef.current;
    root?.addEventListener("click", onClick);

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        if (cancelled || skipCurrent) {
          resolve();
          return;
        }
        waitResolve = resolve;
        timer = window.setTimeout(() => {
          waitResolve = null;
          resolve();
        }, ms);
      });

    const typePlain = async (
      text: string,
      write: (slice: string) => void,
    ) => {
      let prev = "";
      let c = 0;
      while (c < text.length) {
        if (cancelled) return;
        if (skipCurrent) {
          write(text);
          return;
        }
        c += 1;
        const ch = text[c - 1] ?? "";
        write(text.slice(0, c));
        await wait(charDelay(ch, prev));
        prev = ch;
      }
    };

    const typeSpans = async (
      spans: TextSpan[],
      write: (next: TextSpan[]) => void,
    ) => {
      const plain = spansToPlain(spans);
      let prev = "";
      let c = 0;
      while (c < plain.length) {
        if (cancelled) return;
        if (skipCurrent) {
          write(spans);
          return;
        }
        c += 1;
        const ch = plain[c - 1] ?? "";
        write(sliceSpans(spans, c));
        await wait(charDelay(ch, prev));
        prev = ch;
      }
    };

    const run = async () => {
      setPhase("typing");
      const next: VisibleBeat[] = [];

      for (const beat of TYPED_SCRIPT) {
        if (cancelled) return;
        skipCurrent = false;

        if (beat.kind === "heading") {
          next.push({ kind: "heading", text: "", tone: beat.tone });
          const index = next.length - 1;
          setBeats([...next]);
          await wait(rand(180, 320));
          if (skipCurrent) {
            next[index] = {
              kind: "heading",
              text: beat.text,
              tone: beat.tone,
            };
            setBeats([...next]);
          } else {
            await typePlain(beat.text, (text) => {
              next[index] = { kind: "heading", text, tone: beat.tone };
              setBeats([...next]);
            });
          }
          skipCurrent = false;
          await wait(rand(240, 420));
          continue;
        }

        if (beat.kind === "date") {
          next.push({ kind: "date", text: "" });
          const index = next.length - 1;
          setBeats([...next]);
          await typePlain(beat.text, (text) => {
            next[index] = { kind: "date", text };
            setBeats([...next]);
          });
          skipCurrent = false;
          await wait(rand(280, 480));
          continue;
        }

        if (beat.kind === "paragraph") {
          next.push({ kind: "paragraph", spans: [] });
          const index = next.length - 1;
          setBeats([...next]);
          await typeSpans(beat.spans, (spans) => {
            next[index] = { kind: "paragraph", spans };
            setBeats([...next]);
          });
          skipCurrent = false;
          await wait(rand(320, 560));
          continue;
        }

        setPhase("loading");
        next.push({ kind: "loading", dots: "" });
        const loadingIndex = next.length - 1;
        setBeats([...next]);
        for (let d = 1; d <= LOADING_DOTS.length; d += 1) {
          if (cancelled) return;
          if (skipCurrent) {
            next[loadingIndex] = { kind: "loading", dots: LOADING_DOTS };
            setBeats([...next]);
            break;
          }
          next[loadingIndex] = {
            kind: "loading",
            dots: LOADING_DOTS.slice(0, d),
          };
          setBeats([...next]);
          await wait(rand(130, 240));
        }
        skipCurrent = false;
        await wait(rand(650, 1100));
        setPhase("typing");
      }

      if (!cancelled) {
        markStoryTyped();
        setPhase("done");
      }
    };

    void run();

    return () => {
      cancelled = true;
      finishWait();
      root?.removeEventListener("click", onClick);
    };
  }, [started]);

  return (
    <div
      ref={rootRef}
      id="about-education"
      className={styles.root}
      data-phase={phase}
      data-active={active ? "true" : "false"}
    >
      <div className={styles.stage}>
        <div className={styles.stream} aria-live="polite">
          {beats.map((beat, index) => {
            if (beat.kind === "heading") {
              const headingId = /exp(l)?ore/i.test(beat.text)
                ? "about-explore"
                : undefined;
              return (
                <h3
                  key={`h-${index}`}
                  id={headingId}
                  className={`${styles.heading}${
                    beat.tone === "muted" ? ` ${styles.headingMuted}` : ""
                  }`}
                >
                  {beat.text}
                </h3>
              );
            }
            if (beat.kind === "date") {
              return (
                <p key={`d-${index}`} className={styles.date}>
                  {beat.text}
                </p>
              );
            }
            if (beat.kind === "loading") {
              return (
                <p
                  key={`l-${index}`}
                  className={`${styles.loading}${
                    phase === "loading" && index === beats.length - 1
                      ? ` ${styles.loadingPulse}`
                      : ""
                  }`}
                  aria-hidden={!beat.dots}
                >
                  {beat.dots}
                </p>
              );
            }
            return (
              <p key={`p-${index}`} className={styles.body}>
                {renderSpans(beat.spans)}
                {phase === "typing" &&
                index === beats.length - 1 &&
                beat.spans.length > 0 ? (
                  <span className={styles.caretInline} aria-hidden="true" />
                ) : null}
              </p>
            );
          })}

          {active && beats.length === 0 ? (
            <span className={styles.caret} aria-hidden="true" />
          ) : null}
        </div>

        {active ? (
          <p className={styles.skipHint}>Click to reveal this line</p>
        ) : null}
      </div>

      {!hasExploreHeading ? (
        <div
          id="about-explore"
          className={styles.navAnchor}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}

export function AboutNowCopy() {
  return (
    <p className={styles.nowBody}>{renderSpans(aboutNowSpans)}</p>
  );
}
