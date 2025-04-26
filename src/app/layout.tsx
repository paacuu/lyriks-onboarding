"use client";

import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.updateProgress = (step: number) => {
        const totalSteps = 11;
        setProgress(((step + 1) / totalSteps) * 100);
      };
    }
  }, []);

  return (
    <html lang="fr">
      <head>
        {/* Meta Open Graph pour WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lyriks-onboarding-sales.vercel.app" />
        <meta property="og:title" content="Lyriks Onboarding Sales" />
        <meta property="og:description" content="Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette." />
        <meta property="og:image" content="https://lyriks-onboarding-sales.vercel.app/Logo2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content="123456789012345" />
        
        {/* Meta Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lyriks Onboarding Sales" />
        <meta name="twitter:description" content="Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette." />
        <meta name="twitter:image" content="https://lyriks-onboarding-sales.vercel.app/Logo2.png" />
        
        {/* SEO classique */}
        <title>Lyriks Onboarding Sales</title>
        <meta name="description" content="Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Barre de progression */}
          <div className="h-2 w-full bg-gray-200">
            <div
              className="h-2 bg-[#FC9600] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
