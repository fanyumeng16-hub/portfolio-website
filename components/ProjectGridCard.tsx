import Image from "next/image";
import Link from "next/link";
import ProjectTitle from "@/components/ProjectTitle";
import { Project } from "@/data/projects";

export const HOME_PROJECT_GRID_SLOTS = 6;

type Props = {
  project: Project;
  index: number;
};

export function ProjectGridPlaceholder() {
  return (
    <article
      className="project-grid-card project-grid-card--placeholder"
      aria-hidden="true"
    >
      <div className="project-grid-link project-grid-link--placeholder">
        <div className="project-grid-placeholder-x" aria-hidden="true">
          <img
            src="/images/home-card-placeholder.svg"
            alt=""
            className="project-grid-placeholder-art"
          />
        </div>
        <div className="project-grid-media" />
      </div>
    </article>
  );
}

function coverTypeLabel(navType: string) {
  if (navType === "APP") return "APP Design";
  return navType;
}

export default function ProjectGridCard({ project, index }: Props) {
  const typeLabel = coverTypeLabel(project.navType);
  const coverTags = [
    typeLabel,
    ...project.tags.filter((tag) => tag !== typeLabel),
  ].slice(0, 3);

  return (
    <article className="project-grid-card">
      <Link
        href={`/projects/${project.id}`}
        className="project-grid-link"
        aria-label={`${project.title}, ${project.year}. ${project.subtitle}`}
      >
        <div className="project-grid-media">
          <div className="project-grid-image-crop">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
              priority={index < 2}
              className="project-grid-image"
            />
          </div>

          {/* Figma 213:1705 — Card cover (hover) · 672×375 */}
          <div className="project-grid-cover" aria-hidden="true">
            <span className="project-grid-cover-pin project-grid-cover-pin--tl">
              <img src="/images/home-card-cover-pin.svg" alt="" />
            </span>
            <span className="project-grid-cover-pin project-grid-cover-pin--tr">
              <img src="/images/home-card-cover-pin.svg" alt="" />
            </span>
            <span className="project-grid-cover-pin project-grid-cover-pin--bl">
              <img src="/images/home-card-cover-pin.svg" alt="" />
            </span>
            <span className="project-grid-cover-pin project-grid-cover-pin--br">
              <img src="/images/home-card-cover-pin.svg" alt="" />
            </span>

            <div className="project-grid-cover-inner">
              <div className="project-grid-cover-head">
                <p className="project-grid-cover-title">
                  <ProjectTitle title={project.title} />
                </p>
                <p className="project-grid-cover-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-grid-cover-foot">
                <p className="project-grid-cover-year">{project.year}</p>
                {coverTags.length > 0 ? (
                  <div className="project-grid-cover-tags">
                    {coverTags.map((tag) => (
                      <span key={tag} className="project-grid-cover-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
