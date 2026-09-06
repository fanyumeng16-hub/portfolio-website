"use client";

import ProjectGridCard from "@/components/ProjectGridCard";
import { AboutNowCopy } from "@/components/AboutEducationTypewriter";
import {
  aboutNowProjectIds,
  aboutPastWorkIds,
} from "@/data/about-story";
import { getProject } from "@/data/projects";
import styles from "./AboutPastNow.module.css";

export default function AboutPastNow() {
  const pastProjects = aboutPastWorkIds
    .map((id) => getProject(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const nowProjects = aboutNowProjectIds
    .map((id) => getProject(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div className={styles.root}>
      <h3 id="about-past-works" className={styles.headingMuted}>
        Past WORKS
      </h3>
      <div className={`projects-grid home-block ${styles.pastGrid}`}>
        {pastProjects.map((project, index) => (
          <ProjectGridCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <h3 id="about-now" className={styles.heading}>
        NOW
      </h3>
      <AboutNowCopy />

      <p className={styles.headingMutedSmall}>still working on...</p>
      <div className={`projects-grid home-block ${styles.nowGrid}`}>
        {nowProjects.map((project, index) => (
          <ProjectGridCard
            key={project.id}
            project={project}
            index={index}
            linkable={false}
            coverAlways
          />
        ))}
      </div>
    </div>
  );
}
