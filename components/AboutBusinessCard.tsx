"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import styles from "./AboutBusinessCard.module.css";

/** Figma 362:192 — Component 362:419 */
export const ABOUT_CARD_W = 734;
export const ABOUT_CARD_H = 441.017;
export const ABOUT_CARD_EXPANDED_H = 612.933;
export const ABOUT_COVER3_TOP = 172.647;

const PIN_TRAVEL_VH = 1.45;

type Variant = "cover" | "cover2" | "cover3";
type PinPhase = "flow" | "pinned" | "after";

const VARIANTS: Variant[] = ["cover", "cover2", "cover3"];

type Motion = {
  closedOpacity: number;
  openOpacity: number;
  translateY: number;
  expanded: boolean;
  detaching: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function variantMotion(variant: Variant): Motion {
  switch (variant) {
    case "cover":
      return {
        closedOpacity: 1,
        openOpacity: 0,
        translateY: 0,
        expanded: false,
        detaching: false,
      };
    case "cover2":
      return {
        closedOpacity: 0,
        openOpacity: 1,
        translateY: 0,
        expanded: false,
        detaching: false,
      };
    case "cover3":
      return {
        closedOpacity: 0,
        openOpacity: 0,
        translateY: ABOUT_COVER3_TOP,
        expanded: true,
        detaching: true,
      };
  }
}

function progressMotion(progress: number): Motion {
  if (progress >= 1) {
    return completedMotion();
  }

  const openT = easeOutCubic(clamp((progress - 0.12) / 0.14, 0, 1));
  const closedOpacity = 1 - openT;

  const slide = easeOutCubic(clamp((progress - 0.28) / 0.38, 0, 1));
  const fadeOut = easeOutCubic(clamp((progress - 0.88) / 0.12, 0, 1));
  const openOpacity = Math.max(0, openT * (1 - fadeOut));

  return {
    closedOpacity,
    openOpacity,
    translateY: slide * ABOUT_COVER3_TOP,
    expanded: false,
    detaching: slide > 0.02,
  };
}

function completedMotion(): Motion {
  return {
    closedOpacity: 0,
    openOpacity: 0,
    translateY: ABOUT_COVER3_TOP,
    expanded: false,
    detaching: false,
  };
}

function motionStyle(motion: Motion, scrollDriven: boolean): CSSProperties {
  const ratioH =
    scrollDriven || !motion.expanded ? ABOUT_CARD_H : ABOUT_CARD_EXPANDED_H;

  return {
    ["--cover-closed-opacity" as string]: motion.closedOpacity,
    ["--cover-open-opacity" as string]: motion.openOpacity,
    ["--cover-translate-y" as string]: `${(motion.translateY / ABOUT_CARD_H) * 100}%`,
    ["--card-ratio-h" as string]: ratioH,
    ["--card-slot-ratio" as string]: ABOUT_CARD_H,
  };
}

function pinSpacerHeight(vh: number, pinTravel: number, cardHeight: number) {
  return pinTravel + Math.max(0, vh * 0.5 - cardHeight * 0.5);
}

export default function AboutBusinessCard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const pinStartY = useRef(0);
  const pinTravelPx = useRef(800);
  const cardHeightPx = useRef(ABOUT_CARD_H);

  const [variantIndex, setVariantIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDriven, setScrollDriven] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [pinPhase, setPinPhase] = useState<PinPhase>("flow");
  const [layout, setLayout] = useState({
    pinTravel: 800,
    cardHeight: ABOUT_CARD_H,
    pinSpacer: 1120,
  });

  const variant = VARIANTS[variantIndex];

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const pinPhaseRef = useRef<PinPhase>("flow");

  useEffect(() => {
    pinPhaseRef.current = pinPhase;
  }, [pinPhase]);

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight;
      const pinTravel = vh * PIN_TRAVEL_VH;
      const cardHeight = mountRef.current?.offsetHeight ?? ABOUT_CARD_H;
      const pinSpacer = pinSpacerHeight(vh, pinTravel, cardHeight);

      pinTravelPx.current = pinTravel;
      cardHeightPx.current = cardHeight;
      setLayout({ pinTravel, cardHeight, pinSpacer });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const section = document.getElementById("about");
    if (!section) return;

    const updateScrollMotion = () => {
      const mount = mountRef.current;
      if (!mount) return;

      const vh = window.innerHeight;
      const pinTravel = vh * PIN_TRAVEL_VH;
      pinTravelPx.current = pinTravel;
      cardHeightPx.current = mount.offsetHeight || cardHeightPx.current;

      const scrollY = window.scrollY;
      const phase = pinPhaseRef.current;

      if (phase === "flow") {
        const rect = mount.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;

        if (cardCenterY <= vh * 0.5 + 1) {
          pinStartY.current = scrollY;
          pinPhaseRef.current = "pinned";
          setPinPhase("pinned");
          setScrollProgress(0);
          setScrollDriven(true);
        } else {
          setScrollProgress(0);
        }
        return;
      }

      if (phase === "pinned") {
        if (scrollY < pinStartY.current - 2) {
          pinPhaseRef.current = "flow";
          setPinPhase("flow");
          setScrollProgress(0);
          return;
        }

        const progress = clamp(
          (scrollY - pinStartY.current) / pinTravel,
          0,
          1,
        );
        setScrollProgress(progress);
        setScrollDriven(true);

        if (progress >= 1) {
          pinPhaseRef.current = "after";
          setPinPhase("after");
        }
        return;
      }

      if (scrollY < pinStartY.current + pinTravel - 2) {
        pinPhaseRef.current = "pinned";
        setPinPhase("pinned");
        const progress = clamp(
          (scrollY - pinStartY.current) / pinTravel,
          0,
          1,
        );
        setScrollProgress(progress);
        return;
      }

      setScrollProgress(1);
      setScrollDriven(true);
    };

    window.addEventListener("scroll", updateScrollMotion, { passive: true });
    window.addEventListener("resize", updateScrollMotion);
    updateScrollMotion();

    return () => {
      window.removeEventListener("scroll", updateScrollMotion);
      window.removeEventListener("resize", updateScrollMotion);
    };
  }, [reduceMotion]);

  const motion = useMemo(() => {
    if (reduceMotion || !scrollDriven) {
      return variantMotion(variant);
    }
    if (pinPhase === "flow") {
      return variantMotion("cover");
    }
    if (pinPhase === "after") {
      return completedMotion();
    }
    return progressMotion(scrollProgress);
  }, [reduceMotion, scrollDriven, scrollProgress, variant, pinPhase]);

  const cycleVariant = useCallback(() => {
    setScrollDriven(false);
    setVariantIndex((index) => (index + 1) % VARIANTS.length);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      cycleVariant();
    }
  };

  const isScrollDriven = scrollDriven && !reduceMotion && pinPhase !== "flow";
  const isFixed = pinPhase === "pinned" || pinPhase === "after";
  const { cardHeight, pinSpacer } = layout;

  return (
    <div
      ref={trackRef}
      className={`${styles.scrollTrack} about-business-card-track`}
      data-pin-phase={pinPhase}
    >
      <div
        className={styles.flowSlot}
        style={isFixed ? { minHeight: `${cardHeight}px` } : undefined}
      >
        <div
          ref={mountRef}
          className={`${styles.cardMount} about-business-card-mount`}
          data-pin-phase={pinPhase}
        >
          <div className={`${styles.stage} about-business-card-stage`}>
            <div
              className={`${styles.root} about-business-card-root`}
              data-variant={variant}
              data-expanded={motion.expanded ? "true" : "false"}
              data-detaching={motion.detaching ? "true" : "false"}
              data-scroll-driven={isScrollDriven ? "true" : "false"}
              style={motionStyle(motion, isScrollDriven)}
              role="button"
              tabIndex={0}
              aria-label={`Business card envelope: ${variant}. Click to change state.`}
              onClick={cycleVariant}
              onKeyDown={handleKeyDown}
            >
              <div className={styles.cardSlot}>
                <div className={styles.cardInner}>
                  <div className={`${styles.bio} about-business-card-bio`}>
                    <p className={styles.bioParagraph}>
                      <strong className={styles.bioName}>Yumeng Fan</strong>
                      <span>{` is an `}</span>
                      <mark className={styles.mark}>Interaction Designer</mark>
                      <span>{` and `}</span>
                      <mark className={styles.mark}>UX Researcher</mark>
                      <span>{`. To explore her work, visit `}</span>
                      <a
                        className={styles.bioLink}
                        href="https://www.fanyumeng16.com"
                        onClick={(event) => event.stopPropagation()}
                      >
                        www.fanyumeng16.com
                      </a>
                      <span>{`. To start a conversation, reach her at `}</span>
                      <a
                        className={styles.bioEmail}
                        href="mailto:fanyumeng16@gmail.com"
                        onClick={(event) => event.stopPropagation()}
                      >
                        fanyumeng16@gmail.com
                      </a>
                      <span>{` or call `}</span>
                      <span className={styles.bioPhone}>+1 (412) 430 2950</span>
                      <span>.</span>
                    </p>
                  </div>

                  <p className={`${styles.tea} about-business-card-tea`}>
                    Have a Tea with me!
                  </p>
                </div>

                <div
                  className={`${styles.coverLayer} ${styles.coverOpen}`}
                  aria-hidden="true"
                >
                  <img
                    src="/images/about-envelope/cover-open.svg"
                    alt=""
                    className={styles.coverImg}
                  />
                </div>

                <div
                  className={`${styles.coverLayer} ${styles.coverClosed}`}
                  aria-hidden="true"
                >
                  <img
                    src="/images/about-envelope/cover-closed.svg"
                    alt=""
                    className={styles.coverImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.pinSpacer}
        aria-hidden="true"
        style={{ height: `${pinSpacer}px` }}
      />
    </div>
  );
}
