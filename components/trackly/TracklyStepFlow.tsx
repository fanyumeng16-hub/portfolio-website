"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { tracklyFlowSteps } from "@/data/trackly-steps";
import styles from "./TracklyStepFlow.module.css";

export default function TracklyStepFlow() {
  const [activeStep, setActiveStep] = useState(1);
  const panelRef = useRef<HTMLDivElement>(null);

  const goToStep = useCallback((step: number) => {
    setActiveStep(step);
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const current = tracklyFlowSteps.find((item) => item.step === activeStep)!;

  return (
    <section className={`case-content-column ${styles.flow}`} id="trackly-step-flow">
      <nav className={styles.stepper} aria-label="Trackly user flow steps">
        <ol className={styles.stepperTrack}>
          {tracklyFlowSteps.map((item, index) => (
            <li key={item.step} className={styles.stepperItem}>
              {index > 0 ? <span className={styles.stepLine} aria-hidden="true" /> : null}
              <button
                type="button"
                className={`${styles.stepCircle} ${
                  activeStep === item.step ? styles.stepCircleActive : ""
                }`}
                onClick={() => goToStep(item.step)}
                aria-label={`Step ${item.step}`}
                aria-current={activeStep === item.step ? "step" : undefined}
              >
                {item.step}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div
        className={styles.panel}
        id={`trackly-step-${activeStep}`}
        ref={panelRef}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes="(min-width: 901px) 1500px, calc(100vw - 116px)"
          className={styles.panelImage}
          priority={activeStep === 1}
        />
      </div>
    </section>
  );
}
