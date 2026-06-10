"use client";

import Image from "next/image";
import { useState } from "react";
import { MarsMapHotspot } from "@/data/horizon-map";

type Props = {
  image: string;
  imageAlt: string;
  hotspots: MarsMapHotspot[];
};

export default function MarsMapInteractive({
  image,
  imageAlt,
  hotspots,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div
      className="mars-map"
      onMouseLeave={() => setActiveId(null)}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={11881}
        height={6075}
        priority
        className="mars-map-image"
      />

      {hotspots.map((hotspot) => {
        const isActive = activeId === hotspot.id;

        return (
          <button
            key={hotspot.id}
            type="button"
            className={`mars-map-hotspot ${isActive ? "is-active" : ""}`}
            style={{
              left: `${hotspot.x * 100}%`,
              top: `${hotspot.y * 100}%`,
              width: `${hotspot.width * 100}%`,
              height: `${hotspot.height * 100}%`,
            }}
            aria-label={hotspot.label}
            onMouseEnter={() => setActiveId(hotspot.id)}
            onFocus={() => setActiveId(hotspot.id)}
            onBlur={() => setActiveId(null)}
          >
            {isActive && (
              <div
                className={`mars-map-annotation mars-map-annotation-${hotspot.annotationAlign}`}
              >
                <p className="mars-map-annotation-label">{hotspot.label}</p>
                <p className="mars-map-annotation-desc">{hotspot.description}</p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
