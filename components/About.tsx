import SkillsTaxonomy from "./SkillsTaxonomy";
import FunFactsCards from "./FunFactsCards";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label">
        <span>About Me</span>
      </div>

      <div className="about-content">
        <div className="about-intro-col">
          <p className="about-intro">
            <span className="about-intro-rest">From </span>
            <span className="about-intro-em">digital media art</span>
            <span className="about-intro-rest"> to </span>
            <span className="about-intro-em">interaction design</span>
            <span className="about-intro-rest">
              , I&apos;ve been exploring how people and media interact.
            </span>
          </p>

          <ol className="about-timeline">
            <li>
              <span className="about-timeline-year">2018 – 2022</span>
              <div className="about-timeline-body">
                <span className="about-timeline-degree">
                  B.A. Digital Media Art
                </span>
                <span className="about-timeline-school">Xiamen University</span>
              </div>
            </li>
            <li>
              <span className="about-timeline-year">2023 – Present</span>
              <div className="about-timeline-body">
                <span className="about-timeline-degree">
                  M.F.A. Interactive Design
                </span>
                <span className="about-timeline-school">SCAD</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="about-fun-facts-col">
          <span className="about-fun-facts-label">Fun facts?</span>
          <FunFactsCards />
        </div>
      </div>

      <div className="about-skills-row">
        <SkillsTaxonomy />
      </div>
    </section>
  );
}
