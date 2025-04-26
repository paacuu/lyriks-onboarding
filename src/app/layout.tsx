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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="123456789012345" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
