"use client";

import { useEffect, useRef, useState } from "react";
import {
  CollaborationTheme,
  pickCollaborationTheme,
} from "@/data/collaboration-themes";

type Phase = "idle" | "waiting" | "words" | "line" | "actions";

const WORDS_DELAY_MS = 1000;
const LINE_DELAY_MS = 2400;
const ACTIONS_DELAY_MS = 3800;

export default function ConnectDraw() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [theme, setTheme] = useState<CollaborationTheme | null>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const schedule = (callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
  };

  const handleReveal = () => {
    if (phase !== "idle") return;

    clearTimers();
    const selected = pickCollaborationTheme();
    setTheme(selected);
    setPhase("waiting");

    schedule(() => setPhase("words"), WORDS_DELAY_MS);
    schedule(() => setPhase("line"), LINE_DELAY_MS);
    schedule(() => setPhase("actions"), ACTIONS_DELAY_MS);
  };

  const handleReset = () => {
    clearTimers();
    setTheme(null);
    setPhase("idle");
  };

  const showWords =
    phase === "words" || phase === "line" || phase === "actions";
  const showLine = phase === "line" || phase === "actions";
  const showActiveHint = showWords;

  return (
    <section className="connect-section" id="connect">
      <div className="connect-inner">
        <h2 className="connect-title">Let&apos;s build something together.</h2>

        <p
          className={`connect-hint${showActiveHint ? " connect-hint--active" : ""}`}
        >
          {phase === "waiting"
            ? "Finding an idea..."
            : phase === "idle"
              ? "Click below and see what we land on."
              : "Two words, one direction."}
        </p>

        <div
          className={`connect-reveal${phase !== "idle" ? " connect-reveal--active" : ""}`}
          aria-live="polite"
        >
          {showWords && theme && (
            <p className="connect-words">
              <span>{theme.words[0]}</span>
              <span className="connect-words-sep">·</span>
              <span>{theme.words[1]}</span>
            </p>
          )}

          {showLine && theme && (
            <p className="connect-line">{theme.line}</p>
          )}
        </div>

        {phase === "actions" ? (
          <div className="connect-actions">
            <a className="connect-action" href="mailto:fanyumeng16@gmail.com">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="connect-retry"
              onClick={handleReset}
            >
              Try again
            </button>
          </div>
        ) : phase === "idle" ? (
          <button
            type="button"
            className="connect-action"
            onClick={handleReveal}
          >
            Generate an idea
          </button>
        ) : null}
      </div>
    </section>
  );
}
