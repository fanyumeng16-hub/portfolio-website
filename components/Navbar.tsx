"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const work = document.getElementById("work");
      const about = document.getElementById("about");
      const triggerPoint = window.scrollY + 80;

      if (about && triggerPoint >= about.offsetTop) {
        setActive("about");
      } else if (work && triggerPoint >= work.offsetTop) {
        setActive("work");
      } else {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="site-nav">
      <nav className="nav-links" aria-label="Main navigation">
        <a className={`nav-link ${active === "home" ? "active" : ""}`} href="#home">
          Home
        </a>
        <a className={`nav-link ${active === "work" ? "active" : ""}`} href="#work">
          Work
        </a>
        <a className={`nav-link ${active === "about" ? "active" : ""}`} href="#about">
          About
        </a>
        <a className="nav-link" href="/resume.pdf" target="_blank">
          Resume
        </a>
        <a className="nav-contact" href="mailto:fanyumeng16@gmail.com">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
