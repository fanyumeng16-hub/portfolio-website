import styles from "./TracklyMediaBlock.module.css";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body?: string;
  sublabel?: string;
  pills?: string[];
};

export default function TracklyMediaBlock({
  imageSrc,
  imageAlt,
  title,
  body,
  sublabel,
  pills,
}: Props) {
  return (
    <article className={styles.block}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={imageAlt}
        className={styles.art}
        decoding="async"
        loading="lazy"
        src={imageSrc}
      />
      <div className={styles.copy}>
        <h4 className={styles.title}>{title}</h4>
        {body ? <p className={styles.body}>{body}</p> : null}
        {sublabel ? <p className={styles.sublabel}>{sublabel}</p> : null}
        {pills?.length ? (
          <ul className={styles.pills}>
            {pills.map((pill) => (
              <li className={styles.pill} key={pill}>
                {pill}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
