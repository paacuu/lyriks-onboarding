"use client";

import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyriks Onboarding Sales",
  description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
  openGraph: {
    url: "https://lyriks-onboarding-sales.vercel.app",
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: [
      {
        url: "https://lyriks-onboarding-sales.vercel.app/Logo2.png",
        width: 1200,
        height: 630,
        alt: "Logo Lyriks"
      }
    ],
    type: "website",
    siteName: "Lyriks",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: ["https://lyriks-onboarding-sales.vercel.app/Logo2.png"]
  },
  metadataBase: new URL("https://lyriks-onboarding-sales.vercel.app"),
  other: {
    "fb:app_id": "123456789012345"
  }
};

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
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="123456789012345" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Progress Bar */}
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
