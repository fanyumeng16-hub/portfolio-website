import { CaseTocSection } from "@/components/CaseToc";
import { GalleryGroup, GallerySlide } from "@/data/horizon-gallery";

type GalleryTocSource = {
  groups?: GalleryGroup[];
  images?: GallerySlide[];
};

export function buildCaseTocSections(
  base: CaseTocSection[],
  gallery?: GalleryTocSource
): CaseTocSection[] {
  if (!gallery) return base;

  const slideSections: CaseTocSection[] = [];

  if (gallery.groups?.length) {
    slideSections.push(
      ...gallery.groups.map((group) => ({
        id: group.id,
        label: group.title,
      }))
    );
  }

  if (gallery.images?.length) {
    slideSections.push(
      ...gallery.images
        .filter((image) => image.tocLabel !== false)
        .map((image) => ({
          id: image.id,
          label:
            typeof image.tocLabel === "string" ? image.tocLabel : image.title,
        }))
    );
  }

  return [...base, ...slideSections];
}
