import Link from "next/link";
import CaseHero from "@/components/CaseHero";
import CaseToc from "@/components/CaseToc";
import OraPosterMarquee from "@/components/OraPosterMarquee";
import { oraPosters } from "@/data/ora-posters";

const oraSections = [
  { id: "case-intro", label: "Introduction" },
  { id: "case-overview", label: "Overview" },
  { id: "case-posters", label: "Posters" },
];

export default function OraPage() {
  return (
    <main className="case-page case-page-light">
      <CaseToc sections={oraSections} theme="light" />

      <header className="case-nav">
        <Link href="/" className="case-back">
          BACK TO WORK
        </Link>
        <span className="case-nav-title">ORA / 2026</span>
      </header>

      <CaseHero
        title="ORA"
        subtitle="Speculative Wellness Critique"
        tags={["Speculative Design", "Critical Design", "Wellness Tech"]}
        intro="ORA is a speculative critique disguised as a wellness product. In a near future where attention has become the most contested resource, we imagine a device that reaches into the body's most intimate cavity—the mouth—to manufacture flow on demand."
        image="/images/ORA.jpg"
        imageAlt="ORA speculative wellness device"
        priority
      />

      <section className="case-overview" id="case-overview">
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>Concept Development / Critical Narrative / Experience Design</p>
          </div>
          <div>
            <span>Medium</span>
            <p>Speculative Product / Physical Prototype / Visual System</p>
          </div>
          <div>
            <span>Focus</span>
            <p>
              Critical Design / Attention Economy / Wellness Technology
            </p>
          </div>
        </div>

        <div className="case-body">
          <h3>Project Overview</h3>
          <p>
            The piece asks: when technology can engineer our inner stillness,
            who owns the silence? As Big Tech expands from screens into our
            nervous systems, &ldquo;mental wellness&rdquo; risks becoming the
            next frontier of extraction—calm sold back to us as a subscription,
            focus delivered through a mouthpiece, presence outsourced to an
            algorithm.
          </p>
          <p>
            We are not warning against technology itself, but against the quiet
            trade we are already making: surrendering the difficult,
            unprofitable, deeply human work of finding our own flow in exchange
            for frictionless states optimized by someone else&apos;s metrics.
          </p>
          <p>
            ORA is designed to feel seductive—because the most dangerous futures
            are the ones we willingly walk into. We invite viewers to sit with
            their own discomfort: would you accept this device? And if your
            answer hesitates, what does that hesitation tell you about the world
            we are building?
          </p>
        </div>
      </section>

      <OraPosterMarquee posters={oraPosters} />
    </main>
  );
}
