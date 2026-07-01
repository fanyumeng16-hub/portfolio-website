export type ProjectNavTheme = {
  navTheme: "light" | "dark";
  accent: string;
  accentContrast: string;
};

export const projectNavThemes: Record<string, ProjectNavTheme> = {
  medical: {
    navTheme: "light",
    accent: "#3156af",
    accentContrast: "#ffffff",
  },
  outloop: {
    navTheme: "dark",
    accent: "#ffffff",
    accentContrast: "#0b0b0b",
  },
  trackly: {
    navTheme: "light",
    accent: "#4a69e2",
    accentContrast: "#ffffff",
  },
  heartbits: {
    navTheme: "light",
    accent: "#c45c7a",
    accentContrast: "#ffffff",
  },
  massie: {
    navTheme: "light",
    accent: "#8b6f47",
    accentContrast: "#ffffff",
  },
  horizon: {
    navTheme: "dark",
    accent: "#b7ffa8",
    accentContrast: "#0b0b0b",
  },
  universal: {
    navTheme: "dark",
    accent: "#e8c96a",
    accentContrast: "#0b0b0b",
  },
  arcana: {
    navTheme: "dark",
    accent: "#c9a227",
    accentContrast: "#0b0b0b",
  },
  ora: {
    navTheme: "light",
    accent: "#6b4fa0",
    accentContrast: "#ffffff",
  },
};

export function getProjectNavTheme(projectId: string): ProjectNavTheme {
  return (
    projectNavThemes[projectId] ?? {
      navTheme: "light",
      accent: "#4a7a42",
      accentContrast: "#ffffff",
    }
  );
}
