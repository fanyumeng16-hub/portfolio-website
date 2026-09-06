import CaseNavbar from "@/components/CaseNavbar";
import CaseHero from "@/components/CaseHero";
import CaseOverviewSection from "@/components/CaseOverviewSection";
import CaseTemplateLayout from "@/components/CaseTemplateLayout";
import OraPosterMarquee from "@/components/OraPosterMarquee";
import {
  oraDemoVideoId,
  oraHero,
  oraOverviewBody,
  oraSpec,
} from "@/data/ora-content";
import { oraPosters } from "@/data/ora-posters";
import { buildCaseTocSections } from "@/lib/case-toc";

const oraSections = buildCaseTocSections([
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
  { id: "case-posters", label: "Posters" },
  { id: "case-video", label: "Video" },
]);

export default function OraPage() {
  return (
    <CaseTemplateLayout
      projectClass="case-page-ora"
      sections={oraSections}
      tocTheme="light"
      nav={<CaseNavbar projectId="ora" />}
      hero={
        <CaseHero
          title="ORA"
          subtitle={oraHero.subtitle}
          intro={oraHero.intro}
          spec={oraSpec}
          cover={oraHero.cover}
          coverPriority
        />
      }
    >
      <CaseOverviewSection body={oraOverviewBody} />

      <OraPosterMarquee posters={oraPosters} title="Posters" />

      <CaseOverviewSection
        id="case-video"
        title="Video"
        media={{
          type: "youtube",
          videoId: oraDemoVideoId,
          title: "ORA project film",
        }}
      />
    </CaseTemplateLayout>
  );
}
