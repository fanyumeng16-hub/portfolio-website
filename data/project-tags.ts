export const PROJECT_TAGS = {
  "xr-mr": "XR/MR",
  "ui-ux": "UI/UX",
  unity: "Unity",
  branding: "Branding",
  sensor: "Sensor",
} as const;

export type ProjectTagId = keyof typeof PROJECT_TAGS;

export function getTagLabel(id: ProjectTagId) {
  return PROJECT_TAGS[id];
}

export function getTagsFromIds(ids: ProjectTagId[]) {
  return ids.map((id) => PROJECT_TAGS[id]);
}

export function getUsedTagIds(
  projects: { tagIds: ProjectTagId[] }[]
): ProjectTagId[] {
  const used = new Set<ProjectTagId>();
  projects.forEach((project) => {
    project.tagIds.forEach((id) => used.add(id));
  });
  return (Object.keys(PROJECT_TAGS) as ProjectTagId[]).filter((id) =>
    used.has(id)
  );
}
