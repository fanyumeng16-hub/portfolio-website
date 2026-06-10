export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-video-panel">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-info-panel">
        <div className="hero-content">
          <div className="hero-left">
            <h1>YUMENG FAN</h1>
            <p>
              INTERACTIVE
              <br />
              EXPERIENCE DESIGNER.
            </p>
          </div>

          <div className="hero-right">
            <p>
              <span className="dark">
                I design immersive XR, healthcare, and digital experiences
              </span>{" "}
              <span className="light">
                that transform complex systems into intuitive human interactions
                through visual design, prototyping, and emerging technology.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
