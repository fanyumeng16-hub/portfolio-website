"use client";

import { useState } from "react";
import {
  skillEdges,
  skillNodes,
  skillZones,
  type SkillCategoryId,
} from "@/data/skills";
import SkillIcon from "./SkillIcon";

const HUB_RADIUS = 7;
const NODE_RADIUS = 5;
const HIT_RADIUS = 14;
const VIEWBOX = { width: 504, height: 400 };

type Point = { x: number; y: number; r: number };

function getPoint(id: string): Point {
  const node = skillNodes.find((item) => item.id === id);
  if (!node) throw new Error(`Unknown node: ${id}`);
  return {
    x: node.x,
    y: node.y,
    r: node.isHub ? HUB_RADIUS : NODE_RADIUS,
  };
}

function getEdgePoints(from: Point, to: Point) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy) || 1;
  const unitX = dx / distance;
  const unitY = dy / distance;

  return {
    x1: from.x + unitX * (from.r + 1),
    y1: from.y + unitY * (from.r + 1),
    x2: to.x - unitX * (to.r + 1),
    y2: to.y - unitY * (to.r + 1),
  };
}

export default function SkillGraph() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeZone, setActiveZone] = useState<SkillCategoryId | null>(null);

  const activeNode = skillNodes.find((node) => node.id === activeId) ?? null;
  const highlightedCategory = activeNode?.category ?? activeZone;

  return (
    <div
      className="skill-graph"
      onMouseLeave={() => {
        setActiveId(null);
        setActiveZone(null);
      }}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        role="img"
        aria-label="Interactive skill relationship graph"
        className="skill-graph-svg"
      >
        {skillZones.map((zone) => (
          <ellipse
            key={zone.id}
            cx={zone.cx}
            cy={zone.cy}
            rx={zone.rx}
            ry={zone.ry}
            className={`skill-zone skill-zone-${zone.id} ${
              highlightedCategory === zone.id ? "is-active" : ""
            }`}
            onMouseEnter={() => setActiveZone(zone.id)}
          />
        ))}

        {skillEdges.map((edge) => {
          const fromNode = skillNodes.find((node) => node.id === edge.from);
          const toNode = skillNodes.find((node) => node.id === edge.to);
          const points = getEdgePoints(getPoint(edge.from), getPoint(edge.to));
          const isActive =
            highlightedCategory &&
            fromNode?.category === highlightedCategory &&
            toNode?.category === highlightedCategory;

          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={points.x1}
              y1={points.y1}
              x2={points.x2}
              y2={points.y2}
              className={`skill-graph-edge ${
                highlightedCategory ? (isActive ? "is-active" : "is-dimmed") : ""
              }`}
            />
          );
        })}

        {skillNodes.map((node) => {
          const isActive = highlightedCategory === node.category;

          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.isHub ? HUB_RADIUS : NODE_RADIUS}
                className={`skill-graph-circle ${
                  highlightedCategory
                    ? isActive
                      ? "is-active"
                      : "is-dimmed"
                    : ""
                } ${activeId === node.id ? "is-hovered" : ""}`}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={HIT_RADIUS}
                className="skill-graph-hit"
                onMouseEnter={() => {
                  setActiveId(node.id);
                  setActiveZone(node.category);
                }}
              />
            </g>
          );
        })}
      </svg>

      {activeNode && (
        <div
          className={`skill-graph-tooltip ${
            activeNode.y < 90 ? "is-below" : ""
          }`}
          style={{
            left: `${(activeNode.x / VIEWBOX.width) * 100}%`,
            top: `${(activeNode.y / VIEWBOX.height) * 100}%`,
          }}
        >
          <span className="skill-graph-tooltip-icon">
            <SkillIcon icon={activeNode.icon} />
          </span>
          <span className="skill-graph-tooltip-label">{activeNode.label}</span>
        </div>
      )}
    </div>
  );
}
