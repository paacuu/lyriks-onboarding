
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
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: [
      {
        url: "/Logo.png",
        width: 512,
        height: 512,
        alt: "Logo Lyriks",
      },
    ],
    type: "website",
    siteName: "Lyriks",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: ["/Logo.png"],
  },
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

  
