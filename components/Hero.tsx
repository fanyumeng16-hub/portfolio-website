export default function Hero() {
  return (
    <section className="hero-section hero-section--home" id="home">
      <div className="home-block hero-home">
        <div className="hero-home-content">
          <div className="hero-home-left">
            <h1 className="font-display hero-home-name">Yumeng Fan</h1>
            <p className="font-display hero-home-role">UX Designer.</p>
            <p className="font-display hero-home-role">Interaction Designer.</p>
          </div>

          <div className="hero-home-right">
            <p>
              <span className="hero-home-em">
                I design experiences for things that are hard to understand —
                clinical systems, spatial interfaces, complex tools —
              </span>{" "}
              <span className="hero-home-rest">
                and make them feel like second nature.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
