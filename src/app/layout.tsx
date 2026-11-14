import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AudioProvider } from "@/context/AudioContext";
import { GamificationProvider } from "@/context/GamificationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Adham Kishawi — Mid-Level Front-End Engineer & Web Architect",
  description:
    "Official gamified portfolio of Adham Kishawi (أدهم كيشاوي). Mid-Level Front-End Engineer based in Ismailia, Egypt. Specializing in Next.js 16, React 19, TypeScript, GSAP, and resilient web applications.",
  metadataBase: new URL("https://Adham-Kishawi.me"),
  keywords: [
    "Adham Kishawi",
    "أدهم كيشاوي",
    "Front-End Engineer",
    "Web Developer",
    "Solutions Architect",
    "Next.js 16",
    "React 19",
    "Ismailia",
    "Egypt",
    "DOCTECH",
    "PRIME Brand",
    "Craft Crew",
    "Automotive Summit"
  ],
  authors: [{ name: "Adham Kishawi", url: "https://Adham-Kishawi.me" }],
  creator: "Adham Kishawi",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://Adham-Kishawi.me",
    title: "Adham Kishawi — Mid-Level Front-End Engineer",
    description:
      "Explore enterprise case studies, interactive 8-bit RPG tour, and real-world architectures by Adham Kishawi.",
    siteName: "Adham Kishawi Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham Kishawi — Mid-Level Front-End Engineer",
    description: "Enterprise Next.js systems, GSAP animations, and gamified web experiences."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070B] text-slate-100">
        <AudioProvider>
          <LanguageProvider>
            <GamificationProvider>
              {children}
            </GamificationProvider>
          </LanguageProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
