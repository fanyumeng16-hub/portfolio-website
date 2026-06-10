"use client";

import { useState } from "react";
import { skillGroups, type SkillGroup } from "@/data/skill-groups";

function SkillBranchPanel({ group }: { group: SkillGroup }) {
  const count = group.skills.length;
  const cols = Math.min(count, 4);
  const rows = Math.ceil(count / cols);

  const nodes = group.skills.map((skill, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const itemsInRow = Math.min(count - row * cols, cols);
    const x = ((col + 1) / (itemsInRow + 1)) * 100;
    const y = 28 + row * 52;

    return { skill, x, y };
  });

  const svgHeight = 24 + rows * 52;

  return (
    <div className="skills-taxonomy-expand">
      <svg
        className="skills-taxonomy-branch-svg"
        viewBox={`0 0 100 ${svgHeight}`}
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="14"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
        />
        {nodes.map((node) => (
          <line
            key={node.skill}
            x1="50"
            y1="14"
            x2={node.x}
            y2={node.y}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div
        className="skills-taxonomy-skill-grid"
        style={{ minHeight: `${rows * 52}px` }}
      >
        {nodes.map((node) => (
          <div
            key={node.skill}
            className="skills-taxonomy-skill-node"
            style={{ left: `${node.x}%`, top: `${node.y - 10}px` }}
          >
            <span className="skills-taxonomy-skill-dot" aria-hidden="true" />
            <p>{node.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsTaxonomy() {
  const [activeId, setActiveId] = useState(skillGroups[0]?.id ?? "");

  return (
    <div className="skills-taxonomy">
      <header className="skills-taxonomy-hub">
        <h3 className="skills-taxonomy-hero">Technical &amp; Creative Range</h3>
        <p className="skills-taxonomy-hero-sub">
          3 disciplines across research, interaction, and physical making.
        </p>
      </header>

      <div className="skills-taxonomy-tree">
        <svg
          className="skills-taxonomy-trunk"
          viewBox="0 0 1000 72"
          fill="none"
          aria-hidden="true"
        >
          <path d="M500 4V28" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
          <path
            d="M500 28L167 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
          <path
            d="M500 28L500 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
          <path
            d="M500 28L833 68"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        </svg>

        <div className="skills-taxonomy-columns">
          {skillGroups.map((group) => {
            const isActive = activeId === group.id;

            return (
              <div
                key={group.id}
                className={`skills-taxonomy-column ${
                  isActive ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="skills-taxonomy-trigger"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className="skills-taxonomy-index">{group.number}</span>
                  <span className="skills-taxonomy-column-title">
                    {group.title}
                  </span>
                  <span className="skills-taxonomy-column-subtitle">
                    {group.subtitle}
                  </span>
                </button>

                {isActive && <SkillBranchPanel group={group} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
