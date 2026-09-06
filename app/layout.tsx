import type { Metadata } from "next";
import { Albert_Sans, Readex_Pro, Special_Elite } from "next/font/google";
import "@fontsource/bitcount-grid-single/400.css";
import "@fontsource/bitcount-grid-single/700.css";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const readexPro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex-pro",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yumeng Fan, UX & Interaction Designer",
  description:
    "Portfolio of Yumeng Fan, UX designer and interaction designer based in Savannah, Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${readexPro.variable} ${specialElite.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <MicrosoftClarity />
      </body>
    </html>
  );
}
