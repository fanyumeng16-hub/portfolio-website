"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import { funFacts } from "@/data/fun-facts";

export default function FunFactsCards() {
  const [index, setIndex] = useState(0);
  const [exitText, setExitText] = useState<string | null>(null);
  const exitHandledRef = useRef(false);

  const isExiting = exitText !== null;
  const nextIndex = (index + 1) % funFacts.length;

  const handleExitEnd = useCallback(() => {
    if (exitHandledRef.current) return;
    exitHandledRef.current = true;

    setIndex((current) => (current + 1) % funFacts.length);
    setExitText(null);
  }, []);

  const handleAdvance = () => {
    if (isExiting) return;
    exitHandledRef.current = false;
    setExitText(funFacts[index]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleAdvance();
    }
  };

  return (
    <div className="fun-facts">
      <div
        className={`fun-facts-stack${isExiting ? " is-exiting" : ""}`}
        role="button"
        tabIndex={0}
        onClick={handleAdvance}
        onKeyDown={handleKeyDown}
        aria-label={`Fun fact ${index + 1} of ${funFacts.length}. Click for next.`}
      >
        <div className="fun-fact-card fun-fact-card--back" data-depth="0" aria-hidden />
        <div className="fun-fact-card fun-fact-card--back" data-depth="1" aria-hidden />

        <div
          className="fun-fact-card fun-fact-card--under"
          aria-hidden={!isExiting}
        >
          <p className="fun-fact-card-text">{funFacts[nextIndex]}</p>
        </div>

        <div
          className={`fun-fact-card fun-fact-card--top${
            isExiting ? " fun-fact-card--exit" : ""
          }`}
          onAnimationEnd={isExiting ? handleExitEnd : undefined}
        >
          <p className="fun-fact-card-text">
            {isExiting ? exitText : funFacts[index]}
          </p>
        </div>
      </div>

      <p className="fun-facts-hint">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(funFacts.length).padStart(2, "0")}
      </p>
    </div>
  );
}
