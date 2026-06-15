import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle: string;
  tags: string[];
  intro: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  sectionId?: string;
  coverIntrinsic?: boolean;
  coverWidth?: number;
  coverHeight?: number;
};

export default function CaseHero({
  title,
  subtitle,
  tags,
  intro,
  image,
  imageAlt,
  priority = false,
  sectionId = "case-intro",
  coverIntrinsic = false,
  coverWidth,
  coverHeight,
}: Props) {
  return (
    <section className="case-hero">
      <div
        id="case-cover"
        className={`case-cover ${
          coverIntrinsic ? "case-cover--intrinsic" : ""
        }`}
      >
        {coverIntrinsic && coverWidth && coverHeight ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={imageAlt}
            width={coverWidth}
            height={coverHeight}
            className="case-cover-image"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            className="case-cover-image"
          />
        )}
      </div>

      <div className="case-hero-body" id={sectionId}>
        <div className="case-hero-layout">
          <div className="case-hero-left">
            <h1>{title}</h1>
          </div>

          <div className="case-hero-right">
            <p className="case-hero-subtitle">{subtitle}</p>
            <p className="case-hero-intro">{intro}</p>
            <ul className="case-hero-tags tag-bar tag-bar--static">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
