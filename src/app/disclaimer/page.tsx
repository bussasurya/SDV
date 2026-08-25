import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Info, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayurvedic Disclaimer | SDV Ayurveda",
  description: "Ayurvedic disclaimer and guidance for SDV Ayurvedic Preparations.",
};

export default function DisclaimerPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-10">
        
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Health Disclaimer</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Ayurvedic Disclaimer
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed">
            Important information regarding classical Ayurvedic preparations and healthcare guidance.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-sdv-border shadow-sm max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-sdv-primary border-b border-sdv-border pb-4">
            <AlertCircle className="w-6 h-6 text-sdv-gold" />
            <h2 className="font-oswald font-bold text-2xl uppercase tracking-wide">
              Ayurvedic Healthcare Notice
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-sdv-primary leading-relaxed">
            <p>
              The product information, traditional usage notes, and classical text references provided on this website are for educational and informational purposes only.
            </p>
            <p className="font-semibold text-sdv-green p-4 bg-sdv-cream/50 rounded-xl border border-sdv-border">
              These preparations are formulated according to classical Ayurvedic standards. Information on this website is not intended to substitute for professional medical advice, diagnosis, or treatment by a licensed Ayurvedic physician.
            </p>
            <p>
              Always consult a qualified Ayurvedic physician or healthcare practitioner regarding any health conditions or before starting any new herbal regime.
            </p>
          </div>

          <div className="p-6 bg-sdv-cream/60 rounded-xl border border-sdv-border text-xs text-sdv-muted flex items-start gap-3">
            <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
            <span>Official medical disclaimers and regulatory notifications will be updated by SDV before launch.</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
