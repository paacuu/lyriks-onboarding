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

export const metadata = {
  title: "Lyriks Onboarding Sales",
  description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
  openGraph: {
    url: "https://lyriks-onboarding-sales.vercel.app", // ✅ og:url
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: [
      {
        url: "https://lyriks-onboarding-sales.vercel.app/logo2.png",
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
    images: ["https://lyriks-onboarding-sales.vercel.app/logo2.png"]
  },
  metadataBase: new URL("https://lyriks-onboarding-sales.vercel.app"),
  other: {
    "fb:app_id": "123456789012345" // optionnel, à personnaliser si tu as un app Facebook
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
