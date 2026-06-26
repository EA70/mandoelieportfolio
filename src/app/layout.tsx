import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mandoelie - Développeur Full-Stack | Portfolio",
  description: "Portfolio d'un développeur full-stack spécialisé dans Next.js et React, mettant en avant ses projets et compétences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {/* La Navbar s'affichera tout en haut de chaque page */}
        <Navbar />

        {/* C'est ici que Next.js injecte le contenu de tes pages (accueil ou confidentialité) */}
        {children}

        {/* Le Footer s'affichera tout en bas de chaque page */}
        <Footer />
      </body>
    </html>
  );
}
