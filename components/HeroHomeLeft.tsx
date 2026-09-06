const ROLE_TITLE = "User Experience Designer";

export default function HeroHomeLeft() {
  return (
    <div className="hero-home-figma" data-figma-node="213:1349">
      <div className="hero-home-body">
        <div className="hero-home-name-row">
          <div className="hero-home-name-highlight-box" aria-hidden="true" />
          <span className="hero-home-corner hero-home-corner--tl" aria-hidden="true" />
          <span className="hero-home-corner hero-home-corner--tr" aria-hidden="true" />
          <span className="hero-home-corner hero-home-corner--bl" aria-hidden="true" />
          <span className="hero-home-corner hero-home-corner--br" aria-hidden="true" />
          <h1 className="hero-home-name">
            <span className="hero-home-name-leading">Yumeng </span>
            <span className="hero-home-name-fan">Fan</span>
          </h1>
        </div>

        <p className="hero-home-role">{ROLE_TITLE}</p>
      </div>
    </div>
  );
}
