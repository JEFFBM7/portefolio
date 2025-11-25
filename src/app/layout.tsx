import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JEFF BOPE | Développeur Full-Stack",
  description: "Portfolio de JEFF BOPE, développeur Full-Stack passionné par la création d'expériences web modernes avec React, Next.js, Node.js et plus encore.",
  keywords: ["développeur", "full-stack", "react", "next.js", "node.js", "typescript", "portfolio"],
  authors: [{ name: "JEFF BOPE" }],
  creator: "JEFF BOPE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alexmartin.dev",
    title: "JEFF BOPE | Développeur Full-Stack",
    description: "Portfolio de JEFF BOPE, développeur Full-Stack passionné par la création d'expériences web modernes.",
    siteName: " Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "JEFF BOPE | Développeur Full-Stack",
    description: "Portfolio de JEFF BOPE, développeur Full-Stack passionné par la création d'expériences web modernes.",
    creator: "@jeffbope_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
