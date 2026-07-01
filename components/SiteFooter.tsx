export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-name">Yumeng Fan</p>
          <p className="site-footer-role">Interactive Experience Designer</p>
          <p className="site-footer-note">
            XR, healthcare, and digital systems. Based in Savannah, GA
          </p>
        </div>

        <div className="site-footer-group">
          <span>Contact</span>
          <p>
            <a href="mailto:fanyumeng16@gmail.com">fanyumeng16@gmail.com</a>
          </p>
          <p className="site-footer-secondary">
            <a href="tel:+14124302950">(412) 430-2950</a>
          </p>
        </div>

        <div className="site-footer-group">
          <span>Links</span>
          <nav className="site-footer-nav" aria-label="Footer">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#connect">Connect</a>
            <a
              href="/YumengFan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {year} Yumeng Fan. All rights reserved.</p>
        <a href="#home" className="site-footer-top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
