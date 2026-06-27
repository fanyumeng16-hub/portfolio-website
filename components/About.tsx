import AboutMotorcycle from "@/components/AboutMotorcycle";
import { homeAboutParagraphs } from "@/data/home-about";

export default function About() {
  return (
    <section className="about-section about-section--home" id="about">
      <div className="home-block">
        <h2 className="font-display home-section-title">About</h2>

        <div className="about-home-layout">
          <div className="about-home-copy">
            {homeAboutParagraphs.map((paragraph, index) => (
              <p className="about-home-paragraph" key={index}>
                {paragraph.map((part, partIndex) =>
                  part.bold ? (
                    <strong key={partIndex}>{part.text}</strong>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  )
                )}
              </p>
            ))}
          </div>

          <AboutMotorcycle />
        </div>
      </div>
    </section>
  );
}
