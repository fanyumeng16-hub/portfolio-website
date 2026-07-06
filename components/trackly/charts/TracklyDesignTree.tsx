import chartStyles from "./TracklyCharts.module.css";
import styles from "./TracklyDesignTree.module.css";

type ConvergenceStatus = "adopted" | "merged" | "deferred";

type Candidate = {
  label: string;
  status: ConvergenceStatus;
  convergesTo: string;
};

type ProblemGroup = {
  title: string;
  body: string;
  candidates: Candidate[];
};

const problemGroups: ProblemGroup[] = [
  {
    title: "Lack of clear info",
    body: "Users can't confirm where or when the package will arrive.",
    candidates: [
      {
        label: "Weight sensor",
        status: "adopted",
        convergesTo: "Weight field in prototype · core hardware",
      },
      {
        label: "Image recognition",
        status: "adopted",
        convergesTo: "Image verified in prototype · core hardware",
      },
      {
        label: "Real-time Feedback",
        status: "merged",
        convergesTo: "Real-time Verification capability",
      },
    ],
  },
  {
    title: "Difficult to resolve",
    body: "Users don't know who to contact or how to verify the issue.",
    candidates: [
      {
        label: "Build report system",
        status: "adopted",
        convergesTo: "Report flow",
      },
      {
        label: "Trust-building agent",
        status: "adopted",
        convergesTo: "Sarah, the trust & safety agent",
      },
      {
        label: "Smart Prompt",
        status: "merged",
        convergesTo: "Anomaly alert · Delivery Unverified prompts",
      },
    ],
  },
  {
    title: "Past negative experiences",
    body: "Previous loss or theft makes users extra cautious.",
    candidates: [
      {
        label: "Different safe mode",
        status: "deferred",
        convergesTo: "Not pursued in this phase",
      },
    ],
  },
];

const statusLabel: Record<ConvergenceStatus, string> = {
  adopted: "Adopted",
  merged: "Merged",
  deferred: "Deferred",
};

export default function TracklyDesignTree() {
  return (
    <figure className={styles.root}>
      <div className={styles.problems}>
        {problemGroups.map((group) => (
          <div className={styles.problemCol} key={group.title}>
            <span className={chartStyles.pill}>{group.title}</span>
            <p className={styles.problemBody}>{group.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.direction} aria-hidden="true">
        <div className={styles.directionLine} />
        <span className={chartStyles.pill}>Candidate directions</span>
        <div className={styles.directionLine} />
      </div>

      <div className={styles.columns}>
        {problemGroups.map((group) => (
          <ul className={styles.candidateList} key={group.title}>
            {group.candidates.map((candidate) => (
              <li className={styles.candidate} key={candidate.label}>
                <div className={styles.candidateHead}>
                  <span className={chartStyles.tag}>{candidate.label}</span>
                  <span
                    className={`${styles.status} ${styles[candidate.status]}`}
                  >
                    {statusLabel[candidate.status]}
                  </span>
                </div>
                <p
                  className={
                    candidate.status === "deferred"
                      ? `${styles.converges} ${styles.convergesDeferred}`
                      : styles.converges
                  }
                >
                  {candidate.status === "deferred" ? (
                    candidate.convergesTo
                  ) : (
                    <>
                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                      {candidate.convergesTo}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <figcaption className={styles.rationale}>
        Of seven candidate directions, anything that directly serves
        &ldquo;Can the user confirm the package is safely inside the locker
        before they travel?&rdquo; was kept, often merged rather than shipped
        as a standalone feature.{" "}
        <strong>Different safe mode</strong> needs upstream carrier integration
        (e.g. mandatory face-to-face signing) and stays a future iteration.
      </figcaption>
    </figure>
  );
}
