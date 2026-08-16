import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "SDV Ayurveda | Ayurvedic Wellness & Products",
  description: "SDV Ayurveda e-commerce platform. Explore product categories, health formulations, and wellness guidance.",
  keywords: ["SDV Ayurveda", "Ayurvedic Products", "Wellness", "Herbal Products"],
  openGraph: {
    title: "SDV Ayurveda | Ayurvedic Wellness & Products",
    description: "SDV Ayurveda platform offering wellness formulations and product guidance.",
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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ayurveda-cream selection:bg-ayurveda-gold selection:text-ayurveda-green-dark">
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
