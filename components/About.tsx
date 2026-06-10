import SkillsTaxonomy from "./SkillsTaxonomy";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label">
        <span>About Me</span>
      </div>

      <div className="about-content">
        <div className="about-meta">
          <div>
            <span>Education</span>
            <p>
              M.F.A. Interactive Design &amp; Game Development, SCAD — 2023 –
              Present
            </p>
            <p className="about-detail-secondary">
              B.A. Digital Media Art, Xiamen University — 2018 – 2022
            </p>
          </div>
          <div>
            <span>Contact</span>
            <p>
              <a href="mailto:fanyumeng16@gmail.com">fanyumeng16@gmail.com</a>
            </p>
            <p className="about-detail-secondary">(412) 430-2950</p>
          </div>
        </div>

        <div className="about-body">
          <h2>Designing experiences that connect systems with people.</h2>
          <p>
            I am an interactive experience designer working across XR, healthcare,
            and digital systems — combining UX research, immersive interaction,
            and prototyping to make complex workflows intuitive.
          </p>
        </div>
      </div>

      <div className="about-skills-row">
        <SkillsTaxonomy />
      </div>
    </section>
  );
}
