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
import { CoverClosedSvg, CoverOpenSvg } from "./AboutEnvelopeCovers";

/** Figma 362:192 — Component 362:419 */
export const ABOUT_CARD_W = 734;
export const ABOUT_CARD_H = 441.017;
export const ABOUT_CARD_EXPANDED_H = 612.933;
export const ABOUT_COVER3_TOP = 172.647;

/**
 * While pinned, page content feels paused — wheel only scrubs the envelope.
 * OPEN: cover/mask animation
 * HOLD: fully open card stays locked on screen
 * then unpin → normal page scroll continues (Education next)
 */
const OPEN_TRAVEL_VH = 1.15;
const HOLD_TRAVEL_VH = 0.5;

type Variant = "cover" | "cover2" | "cover3";
type EnvelopePhase = "approach" | "opening" | "holding" | "released";

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
  if (progress >= 1) return completedMotion();

  const openT = easeOutCubic(clamp((progress - 0.1) / 0.16, 0, 1));
  const closedOpacity = 1 - openT;

  const slide = easeOutCubic(clamp((progress - 0.26) / 0.42, 0, 1));
  const fadeOut = easeOutCubic(clamp((progress - 0.86) / 0.14, 0, 1));
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

export default function AboutBusinessCard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  const [variantIndex, setVariantIndex] = useState(0);
  const [openProgress, setOpenProgress] = useState(0);
  const [envelopePhase, setEnvelopePhase] =
    useState<EnvelopePhase>("approach");
  const [pinned, setPinned] = useState(false);
  const [scrollDriven, setScrollDriven] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [cardHeight, setCardHeight] = useState(ABOUT_CARD_H);
  const [openTravel, setOpenTravel] = useState(900);
  const [holdTravel, setHoldTravel] = useState(400);
  const [pinTop, setPinTop] = useState(120);

  const variant = VARIANTS[variantIndex];

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight;
      const height = mountRef.current?.offsetHeight ?? ABOUT_CARD_H;
      setCardHeight(height);
      setOpenTravel(vh * OPEN_TRAVEL_VH);
      setHoldTravel(vh * HOLD_TRAVEL_VH);
      setPinTop(Math.max(12, vh * 0.5 - height * 0.5));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPinned(false);
      setOpenProgress(1);
      setEnvelopePhase("released");
      return;
    }

    const update = () => {
      const track = trackRef.current;
      const mount = mountRef.current;
      if (!track || !mount) return;

      const vh = window.innerHeight;
      const height = mount.offsetHeight || cardHeight;
      const openPx = vh * OPEN_TRAVEL_VH;
      const holdPx = vh * HOLD_TRAVEL_VH;
      const totalPx = openPx + holdPx;
      const top = Math.max(12, vh * 0.5 - height * 0.5);

      // Distance from “card should sit at center” through the pin range.
      // Uses the track’s top — track is in normal document flow and tall enough
      // to absorb wheel input while the card is position:fixed.
      const trackTop = track.getBoundingClientRect().top;
      const scrolled = top - trackTop;

      let phase: EnvelopePhase;
      let isPinned = false;
      let progress = 0;

      if (scrolled <= 0) {
        phase = "approach";
        isPinned = false;
        progress = 0;
      } else if (scrolled < openPx) {
        phase = "opening";
        isPinned = true;
        progress = clamp(scrolled / openPx, 0, 1);
      } else if (scrolled < totalPx) {
        phase = "holding";
        isPinned = true;
        progress = 1;
      } else {
        phase = "released";
        isPinned = false;
        progress = 1;
      }

      setCardHeight(height);
      setOpenTravel(openPx);
      setHoldTravel(holdPx);
      setPinTop(top);
      setOpenProgress(progress);
      setEnvelopePhase(phase);
      setPinned(isPinned);
      setScrollDriven(true);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion, cardHeight]);

  const motion = useMemo(() => {
    if (reduceMotion || !scrollDriven) {
      return variantMotion(variant);
    }
    return progressMotion(openProgress);
  }, [reduceMotion, scrollDriven, openProgress, variant]);

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

  const isScrollDriven = scrollDriven && !reduceMotion;
  const trackHeight = cardHeight + openTravel + holdTravel;
  const releasedTop = openTravel + holdTravel;

  const mountStyle: CSSProperties | undefined = pinned
    ? {
        position: "fixed",
        top: `${pinTop}px`,
        left: 0,
        right: 0,
        zIndex: 20,
      }
    : envelopePhase === "released"
      ? {
          position: "absolute",
          top: `${releasedTop}px`,
          left: 0,
          right: 0,
          zIndex: 2,
        }
      : undefined;

  return (
    <div
      ref={trackRef}
      className={`${styles.scrollTrack} about-business-card-track`}
      data-envelope-phase={envelopePhase}
      data-pinned={pinned ? "true" : "false"}
      style={{
        height: `${trackHeight}px`,
        ["--about-card-h" as string]: `${cardHeight}px`,
      }}
    >
      <div
        ref={mountRef}
        className={`${styles.cardMount} about-business-card-mount`}
        data-pinned={pinned ? "true" : "false"}
        data-phase={envelopePhase}
        style={mountStyle}
      >
        <div className={`${styles.stage} about-business-card-stage`}>
          <div
            className={`${styles.root} about-business-card-root`}
            data-variant={variant}
            data-envelope-phase={envelopePhase}
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                    <a
                      className={styles.bioPhone}
                      href="tel:+14124302950"
                      onClick={(event) => event.stopPropagation()}
                    >
                      +1 (412) 430 2950
                    </a>
                    <span>.</span>
                  </p>
                </div>

                <a
                  className={`${styles.tea} about-business-card-tea`}
                  href="mailto:fanyumeng16@gmail.com"
                  onClick={(event) => event.stopPropagation()}
                >
                  Have a Tea with me!
                </a>
              </div>

              <div
                className={`${styles.coverLayer} ${styles.coverOpen}`}
                aria-hidden="true"
              >
                <CoverOpenSvg className={styles.coverImg} />
              </div>

              <div
                className={`${styles.coverLayer} ${styles.coverClosed}`}
                aria-hidden="true"
              >
                <CoverClosedSvg className={styles.coverImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
