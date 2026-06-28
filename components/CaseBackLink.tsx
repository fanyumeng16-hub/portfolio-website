import Link from "next/link";

type Props = {
  className?: string;
  href?: string;
};

export default function CaseBackLink({
  className = "case-back",
  href = "/",
}: Props) {
  return (
    <Link href={href} className={`${className} font-display`}>
      BACK HOME
    </Link>
  );
}
