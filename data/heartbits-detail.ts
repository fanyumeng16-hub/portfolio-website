import { MedicalDetailSection } from "@/data/medical-detail";
import { heartbitsGalleryImages } from "@/data/heartbits-gallery";

export const heartbitsGallerySection: MedicalDetailSection = {
  id: "heartbits-gallery",
  items: heartbitsGalleryImages.map(({ id, src, alt }) => ({
    id,
    layout: "stack",
    src,
    alt,
  })),
};
