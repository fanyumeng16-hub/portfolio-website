import { tracklyAssets } from "@/data/trackly-assets";
import styles from "./TracklyAudienceScene.module.css";

const audiencePills = [
  "Living in an apartment",
  "Used a mobile phone more than once a week",
  "Recently have online shopping",
] as const;

export default function TracklyAudienceScene() {
  return (
    <figure className={styles.scene} aria-labelledby="trackly-audience-title">
      <h4 className={styles.title} id="trackly-audience-title">
        <span className={styles.titleBlue}>Who</span> have these problem most?
      </h4>

      <div className={styles.stage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Two people holding smartphones: a customer and a support agent with a headset"
          className={styles.characters}
          decoding="async"
          loading="lazy"
          src={tracklyAssets.audienceCharacters}
        />

        <ul className={styles.pills}>
          {audiencePills.map((text) => (
            <li className={styles.pill} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
