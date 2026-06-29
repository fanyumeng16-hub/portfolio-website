"use client";

import CaseNavbar from "@/components/CaseNavbar";
import { FormEvent, ReactNode, useState } from "react";
import CaseHero from "@/components/CaseHero";
import type { CaseTemplateSpecRow } from "@/lib/case-template";

type HeroProps = {
  title: ReactNode;
  subtitle: string;
  intro: string;
  spec?: CaseTemplateSpecRow[];
  image: string;
  imageAlt: string;
};

type Props = {
  password: string;
  projectId: string;
  showPasswordHint?: boolean;
  pageClassName?: string;
  lockTheme?: "light" | "dark";
  hero: HeroProps;
  children: ReactNode;
};

export default function ProtectedProjectLock({
  password,
  projectId,
  showPasswordHint = false,
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
      <CaseNavbar projectId={projectId} />

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
          {showPasswordHint && (
            <p className="protected-password-hint">
              Password: <span className="protected-password-value">{password}</span>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
