import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Info, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | SDV Ayurveda",
  description: "Terms of service and website usage terms for SDV Ayurvedic Preparations.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-10">
        
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Legal Terms</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed">
            General terms governing website browsing and informational content.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-sdv-border shadow-sm max-w-4xl space-y-6">
          <div className="flex items-center gap-3 text-sdv-primary border-b border-sdv-border pb-4">
            <FileText className="w-6 h-6 text-sdv-gold" />
            <h2 className="font-oswald font-bold text-2xl uppercase tracking-wide">
              Website Terms of Use
            </h2>
          </div>

          <p className="text-sm sm:text-base text-sdv-primary leading-relaxed">
            All content, trademarks, and formulation details presented on this website are the property of SDV Ayurvedic Preparations. Unauthorized reproduction or commercial use is prohibited.
          </p>

          <div className="p-6 bg-sdv-cream/60 rounded-xl border border-sdv-border text-xs text-sdv-muted flex items-start gap-3">
            <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
            <span>Official terms of service and commercial agreements will be updated by SDV before launch.</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
