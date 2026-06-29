"use client";

import { useEffect, useRef, useState } from "react";

const NAME = "Yumeng Fan";

const ROLE_TITLES = [
  "UI/UX Designer.",
  "Product Designer.",
  "Interaction Designer.",
  "XR Designer.",
  "Experience Designer.",
] as const;

const CHAR_MS = 58;
const LINE_PAUSE_MS = 320;
const HOLD_MS = 1600;
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
  const [roles, setRoles] = useState<[string, string]>(["", ""]);
  const runIdRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRoles([ROLE_TITLES[0], ROLE_TITLES[1]]);
      return;
    }

    const runId = ++runIdRef.current;
    const controller = new AbortController();
    const { signal } = controller;
    const isActive = () => runIdRef.current === runId && !signal.aborted;

    const setRoleLine = (index: 0 | 1, value: string) => {
      if (!isActive()) return;
      setRoles((prev) => {
        const next: [string, string] = [...prev];
        next[index] = value;
        return next;
      });
    };

    const typeLine = async (index: 0 | 1, text: string) => {
      for (let charIdx = 1; charIdx <= text.length; charIdx += 1) {
        if (!isActive()) return;
        setRoleLine(index, text.slice(0, charIdx));
        await sleep(CHAR_MS, signal);
      }
    };

    const deleteLine = async (index: 0 | 1, text: string) => {
      for (let charIdx = text.length; charIdx >= 0; charIdx -= 1) {
        if (!isActive()) return;
        setRoleLine(index, text.slice(0, charIdx));
        await sleep(CHAR_MS * 0.82, signal);
      }
    };

    const runAnimation = async () => {
      await sleep(START_DELAY_MS, signal);

      let pairStart = 0;

      while (isActive()) {
        const first = ROLE_TITLES[pairStart % ROLE_TITLES.length];
        const second =
          ROLE_TITLES[(pairStart + 1) % ROLE_TITLES.length];

        await typeLine(0, first);
        await sleep(LINE_PAUSE_MS, signal);
        await typeLine(1, second);
        await sleep(HOLD_MS, signal);

        await deleteLine(1, second);
        await deleteLine(0, first);
        await sleep(LINE_PAUSE_MS, signal);

        pairStart += 2;
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

      {roles.map((role, index) => (
        <p
          key={index}
          className="font-display hero-home-role"
          aria-label={role || ROLE_TITLES[index]}
        >
          <span className="hero-home-typing-line hero-home-typing-line--role">
            {role}
          </span>
        </p>
      ))}
    </div>
  );
}
