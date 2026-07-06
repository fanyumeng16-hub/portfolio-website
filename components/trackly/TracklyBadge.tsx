import styles from "./TracklyBadge.module.css";

type Props = {
  children: string;
  variant?: "primary" | "light" | "navy";
};

export default function TracklyBadge({
  children,
  variant = "primary",
}: Props) {
  const variantClass =
    variant === "light"
      ? styles.badgeLight
      : variant === "navy"
        ? styles.badgeNavy
        : "";

  return (
    <span className={`${styles.badge} ${variantClass}`.trim()}>{children}</span>
  );
}
