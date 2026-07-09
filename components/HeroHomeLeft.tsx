"use client";

import { useEffect, useRef, useState } from "react";

const NAME = "Yumeng Fan";
const ROLE_TITLE = "User Experience Designer";

const CHAR_MS = 58;
const START_DELAY_MS = 420;

function sleep(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const timeout = window.setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);

    const onAbort = () => {
      window.clearTimeout(timeout);
      reject(new DOMException("Aborted", "AbortError"));
    };

    signal.addEventListener("abort", onAbort);
  });
}

export default function HeroHomeLeft() {
  const [role, setRole] = useState("");
  const runIdRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRole(ROLE_TITLE);
      return;
    }

    const runId = ++runIdRef.current;
    const controller = new AbortController();
    const { signal } = controller;
    const isActive = () => runIdRef.current === runId && !signal.aborted;

    const runAnimation = async () => {
      await sleep(START_DELAY_MS, signal);

      for (let charIdx = 1; charIdx <= ROLE_TITLE.length; charIdx += 1) {
        if (!isActive()) return;
        setRole(ROLE_TITLE.slice(0, charIdx));
        await sleep(CHAR_MS, signal);
      }
    };

    void runAnimation().catch(() => {});

    return () => controller.abort();
  }, []);

  return (
    <div className="hero-home-left">
      <h1 className="font-display hero-home-name">
        <span className="hero-home-typing-line">{NAME}</span>
      </h1>

      <p
        className="font-display hero-home-role"
        aria-label={role || ROLE_TITLE}
      >
        <span className="hero-home-typing-line hero-home-typing-line--role">
          {role}
        </span>
      </p>
    </div>
  );
}
