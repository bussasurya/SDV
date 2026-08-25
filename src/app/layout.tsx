import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const oswald = localFont({
  src: "../../public/brand/fonts/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
  display: "swap",
});

const akshar = localFont({
  src: "../../public/brand/fonts/Akshar-VariableFont_wght.ttf",
  variable: "--font-akshar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SDV Ayurveda | Tradition You Can Trust",
  description: "SDV Ayurvedic Preparations — Established manufacturer with over six decades of traditional Ayurvedic expertise. Handcrafted classical formulations.",
  keywords: ["SDV Ayurveda", "Ayurvedic Preparations", "Janardhanan Vaidyan", "Authentic Ayurveda", "Traditional Formulations"],
  openGraph: {
    title: "SDV Ayurveda | Tradition You Can Trust",
    description: "Authentic Ayurvedic preparations crafted with over six decades of traditional expertise.",
    type: "website",
    locale: "en_IN",
    siteName: "SDV Ayurveda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${akshar.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-sdv-cream text-sdv-primary selection:bg-sdv-gold selection:text-sdv-primary">
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
