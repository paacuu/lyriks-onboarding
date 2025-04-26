import { Metadata } from "next";

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
        alt: "Logo Lyriks",
      }
    ],
    type: "website",
    siteName: "Lyriks",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyriks Onboarding Sales",
    description: "Découvre comment closer avec impact en pilotant la clarté produit grâce à Lyriks & Facette.",
    images: ["https://lyriks-onboarding-sales.vercel.app/Logo2.png"],
  },
  metadataBase: new URL("https://lyriks-onboarding-sales.vercel.app"),
  other: {
    "fb:app_id": "123456789012345",
  },
};
