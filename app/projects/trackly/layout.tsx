import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex-pro",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function TracklyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${readexPro.variable} ${readexPro.className}`}>
      {children}
    </div>
  );
}
