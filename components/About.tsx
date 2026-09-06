import AboutBusinessCard from "@/components/AboutBusinessCard";

export default function About() {
  return (
    <section className="about-section about-section--home" id="about">
      <div className="home-about-head">
        <div className="home-work-title-wrap home-about-title-wrap">
          <div className="home-work-title-frame home-about-title-frame">
            <span className="home-work-corner home-work-corner--tl" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--tr" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--bl" aria-hidden="true" />
            <span className="home-work-corner home-work-corner--br" aria-hidden="true" />
            <h2 className="home-work-title home-about-title">About</h2>
          </div>
        </div>
      </div>
      <AboutBusinessCard />
    </section>
  );
}
