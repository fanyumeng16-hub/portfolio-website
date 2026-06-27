import { ReactNode } from "react";
import { CASE_TEMPLATE } from "@/lib/case-template";

type Props = {
  children: ReactNode;
};

export default function CaseContentShell({ children }: Props) {
  return <div className={CASE_TEMPLATE.shellClass}>{children}</div>;
}
