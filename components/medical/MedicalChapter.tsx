import type { ReactNode } from "react";
import { MayoBlockHeader } from "./MayoLayout";
import styles from "./MedicalSections.module.css";

type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function MedicalChapter({ id, index, title, intro, children }: Props) {
  return (
    <section className={`case-prose-section mayo-chapter ${styles.chapter}`} id={id}>
      <div className={`case-prose-inner ${styles.chapterInner}`}>
        <div className={styles.chapterHeader}>
          <MayoBlockHeader index={index} title={title} kicker={intro} kickerAccent={Boolean(intro)} />
        </div>
        <div className={styles.chapterBody}>{children}</div>
      </div>
    </section>
  );
}
