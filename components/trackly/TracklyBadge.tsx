type Props = {
  children: string;
  variant?: "light" | "dark";
};

export default function TracklyBadge({
  children,
  variant = "light",
}: Props) {
  return (
    <span className={`trackly-badge trackly-badge--${variant}`}>{children}</span>
  );
}
