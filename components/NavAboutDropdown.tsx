import { aboutNavLinks } from "@/data/about-nav";

type Props = {
  onNavigate?: () => void;
};

export default function NavAboutDropdown({ onNavigate }: Props) {
  return (
    <div className="nav-work-dropdown" data-nav="about">
      {aboutNavLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="nav-work-item"
          onClick={onNavigate}
        >
          <span className="nav-work-item-group">
            <span className="nav-work-item-chip">
              <span className="nav-work-corner nav-work-corner--tl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--tr" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--bl" aria-hidden="true" />
              <span className="nav-work-corner nav-work-corner--br" aria-hidden="true" />
              <span className="nav-work-item-title">{link.label}</span>
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
