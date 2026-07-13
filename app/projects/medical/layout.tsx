import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function MedicalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geologica.variable} ${geologica.className}`}>{children}</div>
  );
}
