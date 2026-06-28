import { MedicalDetailSection } from "@/data/medical-detail";
import { horizonGallery } from "@/data/horizon-gallery";

export const horizonGallerySections: MedicalDetailSection[] = horizonGallery.map(
  (group) => ({
    id: group.id,
    title: group.title,
    intro: group.summary,
    items: group.images.map((image, index) => ({
      id: `${group.id}-${index + 1}`,
      layout: "stack" as const,
      src: image.src,
      alt: image.alt,
    })),
  })
);
