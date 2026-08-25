import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Info, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SDV Ayurveda",
  description: "Privacy and data protection information for SDV Ayurvedic Preparations.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-10">
        
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Legal & Privacy</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed">
            Information regarding how user privacy and submitted details are safeguarded.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-sdv-border shadow-sm max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-sdv-primary border-b border-sdv-border pb-4">
            <Lock className="w-6 h-6 text-sdv-gold" />
            <h2 className="font-oswald font-bold text-2xl uppercase tracking-wide">
              Data Privacy & Commitment
            </h2>
          </div>

          <p className="text-sm sm:text-base text-sdv-primary leading-relaxed">
            SDV Ayurvedic Preparations respects user privacy. Information submitted through enquiry forms is used solely to respond to customer and dealer requests.
          </p>

          <div className="p-6 bg-sdv-cream/60 rounded-xl border border-sdv-border text-xs text-sdv-muted flex items-start gap-3">
            <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
            <span>Official privacy policy statements, cookie notices, and data handling disclosures will be updated by SDV before launch.</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
