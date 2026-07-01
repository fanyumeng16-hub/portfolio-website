import HeroHomeLeft from "@/components/HeroHomeLeft";

export default function Hero() {
  return (
    <section className="hero-section hero-section--home" id="home">
      <div className="home-block hero-home">
        <div className="hero-home-content">
          <HeroHomeLeft />

          <div className="hero-home-right">
            <p>
              <span className="hero-home-em">
                I design experiences for things that are hard to understand:
                clinical systems, spatial interfaces, complex tools,
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
