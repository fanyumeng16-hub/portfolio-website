"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";
import CaseHero from "@/components/CaseHero";

type HeroProps = {
  title: ReactNode;
  subtitle: string;
  tags: string[];
  intro: string;
  image: string;
  imageAlt: string;
};

type Props = {
  password: string;
  pageClassName?: string;
  lockTheme?: "light" | "dark";
  hero: HeroProps;
  children: ReactNode;
};

export default function ProtectedProjectLock({
  password,
  pageClassName = "case-page-medical",
  lockTheme = "light",
  hero,
  children,
}: Props) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === password) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <main
      className={`protected-page ${
        lockTheme === "light" ? "protected-page--light" : ""
      } ${pageClassName}`}
    >
      <Link href="/#work" className="protected-back">
        BACK TO WORK
      </Link>

      <CaseHero {...hero} priority />

      <section className="protected-lock-section">
        <div className="protected-lock-copy">
          <h3>This project is password protected.</h3>
          <p>Please enter the password to continue.</p>
          <form className="protected-form" onSubmit={handleSubmit}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">UNLOCK</button>
          </form>
          {error && <p className="protected-error">{error}</p>}
        </div>
      </section>
    </main>
  );
}
