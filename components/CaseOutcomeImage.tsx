import type { CaseTemplateMedia } from "@/lib/case-template";

type Props = {
  image: CaseTemplateMedia;
};

export default function CaseOutcomeImage({ image }: Props) {
  return (
    <section className="case-outcome-media">
      <div className="case-outcome-media-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="case-outcome-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
