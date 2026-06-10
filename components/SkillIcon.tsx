type Props = {
  icon: string;
};

export default function SkillIcon({ icon }: Props) {
  switch (icon) {
    case "figma":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8Zm0-14h4V6a4 4 0 1 0-4 4Zm6 10a4 4 0 0 0 0-8h4v8a4 4 0 0 1-4 0ZM14 2a4 4 0 0 0 0 8h4V6a4 4 0 0 0-4-4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "unity":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 14l10 5 10-5-10-5Zm0 7-10 5 10 5 10-5-10-5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "adobe":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.966 22.624H24V1.376h-9.27L13.966 22.624ZM0 1.376v21.248h5.45L11.54 9.4 5.45 1.376H0Z" fill="currentColor" />
        </svg>
      );
    case "photoshop":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9.4 15.4c.5.7 1.1 1.1 2 1.1 1 0 1.7-.6 1.7-1.5 0-1-.8-1.4-2.2-1.9-1.8-.6-3.2-1.5-3.2-3.7 0-1.9 1.5-3.4 3.9-3.4 1.6 0 2.8.5 3.6 1.8l-2 1.3c-.4-.7-.9-1-1.6-1-1 0-1.5.6-1.5 1.3 0 .9.6 1.2 2.1 1.8 1.9.7 3.3 1.6 3.3 3.8 0 2.2-1.7 3.6-4.2 3.6-1.9 0-3.2-.7-4.1-2l2.2-1.4Z"
            fill="currentColor"
          />
          <path d="M0 0h24v24H0V0Z" fill="none" />
          <path d="M0 0h9.5v24H0V0Z" fill="currentColor" opacity="0.25" />
        </svg>
      );
    case "after-effects":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M0 0h9.5v24H0V0Z" fill="currentColor" opacity="0.25" />
          <path
            d="M10.2 16.6 12 9.4h2.1l2.9 7.2h-2.3l-.5-1.4h-3l-.5 1.4h-2.2Zm3.5-3.3-.9-2.6-.9 2.6h1.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "arduino":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="7" cy="12" r="2" fill="currentColor" />
          <circle cx="17" cy="12" r="2" fill="currentColor" />
          <path d="M4 10h16v4H4v-4Z" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "processing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Z" fill="currentColor" />
        </svg>
      );
    case "research":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15 15 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "journey":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 18c3-8 6-10 10-10 3 0 6 2 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="4" cy="18" r="2" fill="currentColor" />
          <circle cx="20" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "ecosystem":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <circle cx="5" cy="7" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="19" cy="7" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="7" cy="19" r="2" fill="currentColor" opacity="0.6" />
        </svg>
      );
    case "blueprint":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        </svg>
      );
    case "testing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12 10 17 19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="8" width="18" height="10" rx="3" fill="currentColor" opacity="0.35" />
          <path d="M8 11v6M5 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
          <circle cx="18.5" cy="14.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "narrative":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 6h14M5 12h10M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "ui":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 9h16" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "slicing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 18 12 6l8 12H4Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 14h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "rhino":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 18c2-10 4-12 6-12s4 2 6 12" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "sculpt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 18c0-6 2-10 4-10s4 4 4 10" fill="currentColor" opacity="0.35" />
          <path d="M6 18h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "cura":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6h12v12H6z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 10h6v4H9z" fill="currentColor" />
        </svg>
      );
    case "ux":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="3" fill="currentColor" />
          <path d="M5 20c1.5-4 4-6 7-6s5.5 2 7 6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "immersive":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 8v8l10 5 10-5V8L12 3 2 8Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "modeling":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" fill="currentColor" opacity="0.35" />
          <path d="M12 3v18M3 8l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
        </svg>
      );
  }
}
