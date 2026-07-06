import TracklyBadge from "@/components/trackly/TracklyBadge";
import type { TracklyHighlight } from "@/data/trackly-sections";
import styles from "./TracklyFinalConceptCapabilities.module.css";

type Props = {
  capabilities: TracklyHighlight[];
  illustration?: { src: string; alt: string };
};

export default function TracklyFinalConceptCapabilities({
  capabilities,
  illustration,
}: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.columns}>
        {capabilities.map((item) => (
          <div className={styles.column} key={item.label}>
            <TracklyBadge variant="navy">{item.label}</TracklyBadge>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>

      {illustration ? (
        <div className={styles.scene}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={illustration.alt}
            className={styles.art}
            decoding="async"
            loading="lazy"
            src={illustration.src}
          />
        </div>
      ) : null}
    </div>
  );
}
