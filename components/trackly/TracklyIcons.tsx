import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ className, children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

function VisibilityIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" fill="currentColor" r="2.25" />
    </IconBase>
  );
}

function SecurityIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3 5 6.5V11c0 4 3 6.5 7 8.5 4-2 7-4.5 7-8.5V6.5L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <rect
        fill="currentColor"
        height="4"
        rx="0.75"
        width="5"
        x="9.5"
        y="10.5"
      />
    </IconBase>
  );
}

function RigidIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
        width="13"
        x="5.5"
        y="7"
      />
      <path
        d="M9 7V5.5A2.5 2.5 0 0 1 14 5.5V7"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m9.5 13.5 5-5M14.5 13.5l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function LockerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
        width="14"
        x="5"
        y="5"
      />
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  );
}

function SupportIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M6 14.5a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
      <path
        d="M4.5 14.5V12a1.5 1.5 0 0 1 3 0v2.5M16.5 14.5V12a1.5 1.5 0 0 1 3 0v2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function VerifyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="m8.5 12 2.25 2.25L15.5 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function ReactiveIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8.25v4.5M12 15.75h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function ResearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="m15.5 15.5 3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function EmotionIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M9 10h.01M15 10h.01M9.5 15a4 4 0 0 1 5 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function RetentionIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 8.5A5 5 0 0 1 17 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
      <path
        d="M5 12a7 7 0 0 0 14 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.75"
      />
      <path
        d="M12 5v3M9.5 6.5 12 5l2.5 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function TeamIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 18c0-2.5 1.8-4 4-4s4 1.5 4 4M13.5 18c0-2 1.5-3.25 3.25-3.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </IconBase>
  );
}

function DeliveryIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        width="11"
        x="4"
        y="8"
      />
      <path
        d="M8 8V6.5A1.5 1.5 0 0 1 11 6.5V8"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M15 11h3.5l1 3v3.5H15"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <circle cx="9" cy="18" fill="currentColor" r="1.25" />
      <circle cx="17" cy="18" fill="currentColor" r="1.25" />
    </IconBase>
  );
}

function CourierIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 18c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <rect
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        width="5"
        x="15"
        y="11"
      />
    </IconBase>
  );
}

function ResidentIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M5 19V11l7-5 7 5v8"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        d="M10 19v-5h4v5"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

function IotIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        width="10"
        x="7"
        y="9"
      />
      <circle cx="12" cy="13" fill="currentColor" r="1.25" />
      <path
        d="M12 5v3M8.5 6.5 12 5l3.5 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </IconBase>
  );
}

const iconComponents = {
  visibility: VisibilityIcon,
  security: SecurityIcon,
  rigid: RigidIcon,
  locker: LockerIcon,
  support: SupportIcon,
  verify: VerifyIcon,
  reactive: ReactiveIcon,
  research: ResearchIcon,
  participant: ResearchIcon,
  emotion: EmotionIcon,
  retention: RetentionIcon,
  team: TeamIcon,
  tasks: DeliveryIcon,
  delivery: DeliveryIcon,
  courier: CourierIcon,
  resident: ResidentIcon,
  iot: IotIcon,
} as const;

export type TracklyInsightIconKey = keyof typeof iconComponents;

export function TracklyInsightIcon({
  name,
  className,
}: {
  name: TracklyInsightIconKey;
  className?: string;
}) {
  const Icon = iconComponents[name];
  return <Icon className={className} />;
}
