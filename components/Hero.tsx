import HeroHomeLeft from "@/components/HeroHomeLeft";

export default function Hero() {
  return (
    <section className="hero-section hero-section--home" id="home">
      <div className="home-block hero-home">
        <div className="hero-home-content">
          <HeroHomeLeft />
        </div>
      </div>
    </section>
  );
}
