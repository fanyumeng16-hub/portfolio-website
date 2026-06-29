import { useState } from "react";

const MARS_IMG = "https://images.unsplash.com/photo-1689235421711-903a1574ed7e?w=1800&h=900&fit=crop&auto=format";
const MARS_DUNES = "https://images.unsplash.com/photo-1689235540051-5c0e07074345?w=1200&h=600&fit=crop&auto=format";
const MARS_CANYON = "https://images.unsplash.com/photo-1650208312823-4a676f114aff?w=900&h=600&fit=crop&auto=format";

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground ${className}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </span>
  );
}

function SectionIndex({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span
        className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {n}
      </span>
      <div className="h-px flex-1 bg-border" />
      <span
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {title}
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
      style={{ background: "linear-gradient(to bottom, #080807 0%, transparent 100%)" }}>
      <span
        className="font-bold tracking-[0.3em] text-sm text-foreground/90"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        HORIZON
      </span>
      <div className="flex items-center gap-8">
        <Label>Meta Quest 3</Label>
        <Label>Unity · VR</Label>
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0C0A09]">
      <div className="absolute inset-0">
        <img
          src={MARS_IMG}
          alt="Mars surface landscape with pink sky and sand dunes"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #080807 0%, transparent 30%, transparent 60%, #080807 100%)"
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(200,98,58,0.06) 0%, transparent 70%)"
        }} />
      </div>

      <div className="relative z-10 px-8 md:px-16 pb-20 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center gap-6">
            <Label>2024</Label>
            <span className="text-muted-foreground/30 text-xs">—</span>
            <Label>UI + Spatial + Interaction Design</Label>
          </div>

          <h1
            className="font-black leading-none tracking-tight text-foreground mb-8"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(5rem, 18vw, 18rem)",
              letterSpacing: "-0.02em",
            }}
          >
            HORIZON
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-border">
            <p
              className="text-foreground/70 text-base leading-relaxed max-w-lg"
              style={{ fontFamily: "'Spectral', serif", fontWeight: 400 }}
            >
              A high-immersion VR experience that makes the invisible hazards of Mars — radiation, pressure loss, oxygen
              depletion — physically perceivable. Built for the general public, not astronaut trainees.
            </p>
            <div className="grid grid-cols-2 gap-6 md:justify-end">
              {[
                { label: "Platform", value: "Meta Quest 3" },
                { label: "Engine", value: "Unity" },
                { label: "Duration", value: "3 Weeks" },
                { label: "Team", value: "4 Persons" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <Label className="block mb-1">{label}</Label>
                  <span className="text-foreground/90 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: "0.05em" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="001" title="Introduction" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
            >
              Between NASA<br />and YouTube
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden bg-secondary rounded-sm">
              <img
                src={MARS_CANYON}
                alt="Existing Mars VR — canyon landscape, low immersion"
                className="w-full h-48 object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <Label className="mb-2 text-muted-foreground/60">Existing Market</Label>
                <p className="text-sm text-foreground/60 leading-relaxed" style={{ fontFamily: "'Spectral', serif" }}>
                  NASA-grade training systems built for astronauts — or low-immersion WebXR experiences that feel like a
                  360° documentary.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden bg-[#1A100A] border border-primary/20 rounded-sm">
              <div className="absolute inset-0 opacity-20" style={{
                background: "radial-gradient(ellipse at 30% 70%, #C8623A 0%, transparent 60%)"
              }} />
              <div className="p-5 flex flex-col h-full justify-between min-h-48">
                <Label className="text-primary/70">HORIZON</Label>
                <p className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "'Spectral', serif" }}>
                  High immersion + scientific accuracy + accessible to the general public. The space between the
                  extremes.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 pt-4 border-t border-border">
              <p
                className="text-foreground/60 leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Spectral', serif", fontStyle: "italic" }}
              >
                Target audience: science museum visitors, space enthusiasts — people who deserve to feel what planetary
                exploration actually weighs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoalSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="002" title="Goal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-10 md:p-14">
            <Label className="block mb-6 text-muted-foreground/50">Problem</Label>
            <p
              className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/80"
              style={{ fontFamily: "'Spectral', serif" }}
            >
              The most dangerous conditions on Mars — radiation, pressure loss, oxygen depletion — are invisible and
              abstract. Existing media tells you they exist.{" "}
              <em className="text-foreground not-italic font-normal">Nothing makes you feel them.</em>
            </p>
          </div>
          <div className="bg-[#100D0B] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5"
              style={{ background: "radial-gradient(circle, #C8623A 0%, transparent 70%)" }} />
            <Label className="block mb-6 text-primary/60">Goal</Label>
            <p
              className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/80"
              style={{ fontFamily: "'Spectral', serif" }}
            >
              Design a high-immersion VR experience that makes these invisible hazards{" "}
              <span className="text-primary font-normal">physically perceivable</span> — for general public audiences,
              not astronaut trainees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const researchInsights = [
  {
    n: "01",
    source: "PMC · arXiv",
    text: "High-immersion VR significantly outperforms low-immersion environments in both declarative and procedural knowledge acquisition — while increasing presence, intrinsic motivation, and cognitive engagement.",
  },
  {
    n: "02",
    source: "NASA · MIT Media Lab",
    text: "VR is the only medium that can reconstruct the scale, isolation, and embodied experience of planetary exploration.",
  },
  {
    n: "03",
    source: "Research synthesis",
    text: "Invisible hazards need a spatial layer to become perceivable. A HUD overlay makes abstract parameters readable in context.",
  },
];

function ResearchSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="003" title="Research" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-3">
            <h2
              className="text-3xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              THREE RESEARCH-BACKED REASONS FOR VR
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["PMC", "arXiv", "NASA", "MIT Media Lab"].map((src) => (
                <span
                  key={src}
                  className="px-3 py-1 border border-border text-muted-foreground text-[10px] tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {src}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-9 space-y-0 divide-y divide-border">
            {researchInsights.map(({ n, source, text }) => (
              <div key={n} className="py-8 grid grid-cols-12 gap-6 group">
                <div className="col-span-2">
                  <span
                    className="text-5xl font-black text-muted-foreground/20 group-hover:text-primary/30 transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {n}
                  </span>
                </div>
                <div className="col-span-10">
                  <Label className="block mb-3">{source}</Label>
                  <p className="text-foreground/70 leading-relaxed" style={{ fontFamily: "'Spectral', serif" }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const decisions = [
  {
    n: "D1",
    title: "Embody the invisible",
    desc: "Use VR's presence to make unfelt dangers felt. Radiation, pressure, oxygen — each translated into a perceptible spatial signal.",
  },
  {
    n: "D2",
    title: "Diegetic everything",
    desc: "All UI lives inside the world. Nothing breaks the surface. HUD anchored in helmet. Controls on the wrist. Consoles in the habitat.",
  },
  {
    n: "D3",
    title: "Real physics, real scale",
    desc: "38% Martian gravity. Smooth locomotion. Distance means something. Scale is the medium — it cannot be faked or compressed.",
  },
  {
    n: "D4",
    title: "Agency over punishment",
    desc: "Users choose to take risks. The weight comes from the decision, not the penalty. Consequence is earned, never imposed.",
  },
];

function DesignDecisionsSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="004" title="Design Decisions" />
        <div className="mb-10">
          <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Spectral', serif" }}>
            Based on research, four design directions drive everything that follows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {decisions.map(({ n, title, desc }) => (
            <div
              key={n}
              className="bg-background p-8 md:p-10 hover:bg-secondary transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-7xl font-black leading-none text-muted-foreground/10 group-hover:text-primary/15 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {n}
                </span>
                <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity mt-3" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
              >
                {title.toUpperCase()}
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm" style={{ fontFamily: "'Spectral', serif" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const flowSteps = [
  { id: "lobby", label: "Lobby", desc: "Orientation & briefing" },
  { id: "tutorial", label: "Tutorial", desc: "Controls & HUD" },
  { id: "p1", label: "Phase 1", desc: "Surface deployment" },
  { id: "p2", label: "Phase 2", desc: "Hazard exposure" },
  { id: "p3", label: "Phase 3", desc: "Critical survival" },
  { id: "p4", label: "Phase 4", desc: "Optional · Risk event", optional: true },
  { id: "return", label: "Station Return", desc: "Mission debrief" },
];

function ExperienceFlowSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="005" title="Experience Flow" />
        <p
          className="text-foreground/60 mb-16 max-w-xl"
          style={{ fontFamily: "'Spectral', serif" }}
        >
          The experience moves from orientation to escalating survival pressure, with an optional fourth phase that
          introduces unpredictable risk events.
        </p>
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-max">
            {flowSteps.map((step, i) => (
              <div key={step.id} className="flex items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-28 p-4 border transition-colors ${
                      step.optional
                        ? "border-primary/30 bg-[#1A100A]"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    {step.optional && (
                      <Label className="block mb-2 text-primary/60">Optional</Label>
                    )}
                    <span
                      className="block text-foreground/90 font-bold text-sm mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                    >
                      {step.label.toUpperCase()}
                    </span>
                    <span
                      className="block text-muted-foreground text-[11px] leading-snug"
                      style={{ fontFamily: "'Spectral', serif" }}
                    >
                      {step.desc}
                    </span>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center self-center mx-1 mt-[-8px]">
                    <div className="w-6 h-px bg-border" />
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" className="text-muted-foreground/30">
                      <path d="M0 0L6 4L0 8" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const phases = [
  {
    n: "01",
    title: "DEPLOYMENT",
    objective: "Exit the habitat and establish a surface perimeter around the landing zone.",
    interaction: "Airlock hand-tracking sequence — grip, twist, push.",
    environment: "Clear visibility. Radiation nominal. Full O₂ reserves.",
    color: "border-foreground/10",
  },
  {
    n: "02",
    title: "SURVEY",
    objective: "Locate and scan three geological sample sites across the surface zone.",
    interaction: "Geological scanner — trigger, aim, hold for reading.",
    environment: "Dust haze building. UV index climbing. Oxygen at 72%.",
    color: "border-foreground/10",
  },
  {
    n: "03",
    title: "EXTRACTION",
    objective: "Collect resource samples before suit integrity reaches critical threshold.",
    interaction: "Resource collector — proximity grab, capacity feedback on HUD.",
    environment: "Storm front approaching. Radiation elevated. O₂ at 41%.",
    color: "border-primary/30",
  },
  {
    n: "04",
    title: "CONTINGENCY",
    objective: "Respond to an unscheduled radiation burst or sandstorm event.",
    interaction: "Stay and complete the mission, or return to the habitat. The choice carries real consequences.",
    environment: "WARNING: Radiation spike detected. Visibility 12m. O₂ critical.",
    color: "border-primary/50",
    optional: true,
  },
];

function PhasesSection() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="006" title="Four Phases" />
        <div className="space-y-px">
          {phases.map((phase) => {
            const isOpen = active === phase.n;
            return (
              <div
                key={phase.n}
                className={`border ${phase.color} overflow-hidden transition-colors ${
                  phase.optional ? "bg-[#0E0A08]" : "bg-background"
                }`}
              >
                <button
                  className="w-full flex items-center gap-8 p-6 md:p-8 text-left hover:bg-secondary/50 transition-colors"
                  onClick={() => setActive(isOpen ? null : phase.n)}
                >
                  <span
                    className={`text-5xl font-black leading-none transition-colors ${
                      isOpen ? "text-primary" : "text-muted-foreground/20"
                    }`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", minWidth: "3rem" }}
                  >
                    {phase.n}
                  </span>
                  <span
                    className="text-xl font-bold text-foreground/90 flex-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                  >
                    PHASE {phase.n} — {phase.title}
                    {phase.optional && (
                      <span className="ml-3 text-[10px] font-mono tracking-widest text-primary/60 align-middle">
                        OPTIONAL
                      </span>
                    )}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-2 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border">
                    {[
                      { label: "Objective", value: phase.objective },
                      { label: "Key Interaction", value: phase.interaction },
                      { label: "Environmental State", value: phase.environment },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <Label className="block mb-3">{label}</Label>
                        <p
                          className={`text-sm leading-relaxed ${
                            label === "Environmental State" && phase.optional
                              ? "text-primary/80"
                              : "text-foreground/70"
                          }`}
                          style={{ fontFamily: "'Spectral', serif" }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const uiComponents = [
  {
    id: "hud",
    title: "Helmet HUD",
    desc: "Real-time O₂, radiation, and temperature overlay. Anchored within Quest 3's safe FOV zone — always readable, never obstructive.",
    decision: "Critical parameters placed at natural gaze center, not screen edge.",
    tag: "Always-on · Diegetic",
    bars: [
      { label: "O₂", value: 71, color: "#4A9E7F" },
      { label: "RAD", value: 38, color: "#C8623A" },
      { label: "TEMP", value: 55, color: "#7A9EC8" },
    ],
  },
  {
    id: "wrist",
    title: "Wrist Panel",
    desc: "Raise your arm to check mission status. A natural spatial gesture that keeps you present in the world.",
    decision: "Designed for both controller input and hand tracking — identical feedback, two input models.",
    tag: "Gesture · On-demand",
    bars: [
      { label: "TASK", value: 60, color: "#C8623A" },
      { label: "DIST", value: 45, color: "#7A9EC8" },
      { label: "TIME", value: 80, color: "#9E8A4A" },
    ],
  },
  {
    id: "map",
    title: "Navigation Map",
    desc: "Lightweight surface orientation layer on the wrist panel. Same visual language as the Station console map.",
    decision: "Two contexts, one system — so switching between them never requires relearning.",
    tag: "Wrist · Spatial",
    bars: [],
    grid: true,
  },
  {
    id: "console",
    title: "Diegetic Console",
    desc: "Settings and system access live inside the world as physical consoles. You walk up. You operate.",
    decision: "Intentional friction — the cost of walking there reinforces that you're somewhere real.",
    tag: "Physical · In-world",
    bars: [
      { label: "LIFE", value: 90, color: "#4A9E7F" },
      { label: "FUEL", value: 62, color: "#9E8A4A" },
      { label: "COMM", value: 44, color: "#7A9EC8" },
    ],
  },
];

function UIScreenMockup({ comp }: { comp: (typeof uiComponents)[0] }) {
  return (
    <div className="relative bg-[#0C1015] rounded-sm overflow-hidden aspect-[4/3] border border-white/5">
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-widest text-primary/60">{comp.tag}</span>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
            ))}
          </div>
        </div>

        {comp.grid ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-28 h-28 border border-white/10">
              {[0.25, 0.5, 0.75].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    width: `${r * 100}%`,
                    height: `${r * 100}%`,
                    top: `${(1 - r) * 50}%`,
                    left: `${(1 - r) * 50}%`,
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <div className="absolute" style={{ top: "30%", left: "60%" }}>
                <div className="w-1 h-1 rounded-full bg-white/30" />
              </div>
              <div className="absolute" style={{ top: "60%", left: "25%" }}>
                <div className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-center gap-3 py-2">
            {comp.bars.map(({ label, value, color }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-mono text-[9px] w-8 text-white/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {label}
                </span>
                <div className="flex-1 h-px bg-white/5 relative">
                  <div
                    className="absolute top-[-1px] left-0 h-[3px]"
                    style={{ width: `${value}%`, background: color, opacity: 0.7 }}
                  />
                </div>
                <span className="font-mono text-[9px] text-white/25" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {value}%
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-white/5 pt-3">
          <span className="font-mono text-[8px] text-white/20 tracking-widest">
            HORIZON · QUEST 3 · UI/HUD v2.4
          </span>
        </div>
      </div>
    </div>
  );
}

function UISystemSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="007" title="UI System" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uiComponents.map((comp) => (
            <div key={comp.id} className="group">
              <UIScreenMockup comp={comp} />
              <div className="mt-5 grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}
                    >
                      {comp.title.toUpperCase()}
                    </h3>
                    <Label>{comp.tag}</Label>
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Spectral', serif" }}>
                    {comp.desc}
                  </p>
                  <div className="flex gap-2 items-start">
                    <div className="w-px h-full min-h-[2rem] bg-primary/30 shrink-0 mt-1" />
                    <p className="text-muted-foreground text-xs leading-relaxed" style={{ fontFamily: "'Spectral', serif", fontStyle: "italic" }}>
                      Key decision: {comp.decision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarsEnvironmentSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="008" title="Environment" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
              <img
                src={MARS_DUNES}
                alt="Mars desert landscape with pink sky and sand dunes"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, #080807 0%, transparent 60%)"
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Label className="block mb-2">Mars Station</Label>
                <p className="text-foreground/80 text-sm" style={{ fontFamily: "'Spectral', serif" }}>
                  The station's layout defines the rhythm of the experience — briefing, preparation, departure, return.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="flex-1 relative overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1527826507412-72e447368aa1?w=900&h=400&fit=crop&auto=format"
                alt="Surface environment — sand dunes, open horizon"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{
                background: "linear-gradient(to top, rgba(8,8,7,0.9) 0%, transparent 60%)"
              }}>
                <Label className="block mb-2">Surface Environment</Label>
                <p className="text-foreground/70 text-sm max-w-md" style={{ fontFamily: "'Spectral', serif", fontStyle: "italic" }}>
                  The surface environment is built around scale and exposure. No cover. No landmarks. Just horizon.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-border">
              {[
                { label: "Gravity", value: "38%", unit: "of Earth" },
                { label: "Visibility", value: "↓12m", unit: "Storm state" },
                { label: "Zones", value: "4×", unit: "Distinct areas" },
              ].map(({ label, value, unit }) => (
                <div key={label} className="bg-background px-5 py-4">
                  <Label className="block mb-2">{label}</Label>
                  <span
                    className="block text-2xl font-black text-foreground"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {value}
                  </span>
                  <span className="text-muted-foreground text-xs">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractionSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="009" title="Interaction Design" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            >
              DUAL INPUT MODEL
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-8" style={{ fontFamily: "'Spectral', serif" }}>
              Every interaction in HORIZON supports both controller and hand tracking input. The challenge: the two input
              models have fundamentally different precision and affordance requirements.
            </p>
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-secondary p-6">
                <Label className="block mb-4">Controller</Label>
                <p className="text-sm text-foreground/60" style={{ fontFamily: "'Spectral', serif" }}>
                  Button triggers with haptic confirmation. Precise, binary feedback. Low latency.
                </p>
              </div>
              <div className="bg-secondary p-6">
                <Label className="block mb-4">Hand Tracking</Label>
                <p className="text-sm text-foreground/60" style={{ fontFamily: "'Spectral', serif" }}>
                  Spatial gesture recognition. Visual feedback substitutes for haptics. High presence, lower precision.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            >
              TASK SYSTEM
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-6" style={{ fontFamily: "'Spectral', serif" }}>
              Tasks flow through a three-state system: assigned → active → resolved. Completion states communicated
              through visual signals only — no audio dependency, designed for museum environments where sound is
              unpredictable.
            </p>
            <div className="space-y-px">
              {[
                { state: "ASSIGNED", label: "Task delivered", color: "bg-white/10" },
                { state: "ACTIVE", label: "In progress", color: "bg-primary/30" },
                { state: "RESOLVED", label: "Completed", color: "bg-[#4A9E7F]/30" },
              ].map(({ state, label, color }) => (
                <div key={state} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full ${color}`} />
                  <span
                    className="font-mono text-[10px] tracking-widest text-foreground/40"
                    style={{ fontFamily: "'JetBrains Mono', monospace", minWidth: "6rem" }}
                  >
                    {state}
                  </span>
                  <span className="text-foreground/70 text-sm" style={{ fontFamily: "'Spectral', serif" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <Label className="block mb-10">Item Interactions</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: "Geological Scanner",
                states: ["Trigger", "Scan animation", "Data readout"],
                note: "Three states, each with a distinct visual signal.",
              },
              {
                title: "Resource Collector",
                states: ["Trigger", "Collection progress", "Capacity feedback"],
                note: "Overload state triggers HUD warning.",
              },
              {
                title: "Station Systems",
                states: ["Drive console", "Resource panel", "Habitat monitor"],
                note: "Each operates as a physical diegetic object — approached, activated, read.",
              },
            ].map(({ title, states, note }) => (
              <div key={title} className="bg-background p-8">
                <h3
                  className="text-base font-bold text-foreground mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                >
                  {title.toUpperCase()}
                </h3>
                <div className="space-y-2 mb-6">
                  {states.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-muted-foreground/40 w-3">{i + 1}</span>
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-foreground/70 text-xs" style={{ fontFamily: "'Spectral', serif" }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed" style={{ fontFamily: "'Spectral', serif", fontStyle: "italic" }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const futureItems = [
  {
    n: "F1",
    title: "Structured Usability Testing",
    desc: "Current testing lacks quantitative data. Next step: task completion rates, error rates, and presence measurement via IPQ scale — particularly for HUD readability under high-pressure task conditions.",
  },
  {
    n: "F2",
    title: "Locomotion Comfort Calibration",
    desc: "Smooth locomotion + 38% gravity simulation currently relies on subjective judgment. Systematic testing needed to define safe velocity and acceleration parameters across user tolerance ranges.",
  },
  {
    n: "F3",
    title: "Adaptive Map System",
    desc: "The current map is designed for a fixed mission layout. Expanding to procedural terrain or user-defined waypoints would require rethinking the map's information architecture from the ground up.",
  },
];

function FeedbackSection() {
  return (
    <section className="px-8 md:px-16 py-24 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionIndex n="010" title="Testing & Outlook" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <h2
              className="text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              USER TESTING
            </h2>
            <p className="text-foreground/60 leading-relaxed" style={{ fontFamily: "'Spectral', serif" }}>
              Internal team testing and external trial sessions with invited users. Initial testing confirmed the
              readability of the diegetic UI system and the intuitiveness of wrist-panel interaction without guided
              instruction.
            </p>
          </div>
          <div className="md:col-span-8 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?w=900&h=400&fit=crop&auto=format"
              alt="User wearing VR headset during testing session"
              className="w-full h-56 object-cover opacity-40"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(26,25,24,0.8) 0%, transparent 50%)"
            }} />
            <div className="absolute inset-0 flex items-center px-8">
              <div>
                <Label className="block mb-2">Session Outcome</Label>
                <p className="text-foreground/80 max-w-xs text-sm" style={{ fontFamily: "'Spectral', serif', fontStyle: 'italic" }}>
                  Diegetic UI proved immediately legible. Wrist gesture required no instruction to discover.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <Label className="block mb-10">Future Directions</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {futureItems.map(({ n, title, desc }) => (
              <div key={n} className="bg-background p-8 md:p-10 hover:bg-secondary/50 transition-colors group">
                <span
                  className="block text-6xl font-black text-muted-foreground/10 mb-6 group-hover:text-primary/15 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {n}
                </span>
                <h3
                  className="text-base font-bold text-foreground mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em" }}
                >
                  {title.toUpperCase()}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed" style={{ fontFamily: "'Spectral', serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span
            className="block text-3xl font-black text-foreground/20 mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.2em" }}
          >
            HORIZON
          </span>
          <Label>Meta Quest 3 · VR Case Study · 2024</Label>
        </div>
        <div className="flex gap-8">
          <div>
            <Label className="block mb-1">Role</Label>
            <span className="text-foreground/70 text-sm" style={{ fontFamily: "'Spectral', serif" }}>
              UI · Spatial · Interaction Design
            </span>
          </div>
          <div>
            <Label className="block mb-1">Team</Label>
            <span className="text-foreground/70 text-sm" style={{ fontFamily: "'Spectral', serif" }}>
              4 Persons · 3 Weeks
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "'Spectral', serif" }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,98,58,0.3); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(200,98,58,0.5); }
      `}</style>
      <Nav />
      <Hero />
      <IntroductionSection />
      <GoalSection />
      <ResearchSection />
      <DesignDecisionsSection />
      <ExperienceFlowSection />
      <PhasesSection />
      <UISystemSection />
      <MarsEnvironmentSection />
      <InteractionSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
