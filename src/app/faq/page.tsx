import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SDV Ayurveda",
  description: "Find answers to general questions about SDV Ayurvedic Preparations and classical formulations.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is the history of SDV Ayurvedic Preparations?",
      a: "SDV Ayurvedic Preparations is an established Ayurvedic medicine manufacturer with over six decades of experience, founded by Late N. Janardhanan Vaidyan.",
    },
    {
      q: "What classical texts guide your formulations?",
      a: "Our preparations are rooted in authoritative classical Ayurvedic texts including Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.",
    },
    {
      q: "Where can I find formulation usage and dosage guidance?",
      a: "General dosage and directions for use are listed on each product detail page. For individual health conditions, consult a qualified Ayurvedic physician.",
    },
    {
      q: "How can pharmacies or stockists enquire about dealership?",
      a: "Stockists and pharmacy partners can submit business inquiries via our Dealers partnership page.",
    },
  ];

  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-10">
        
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Customer Information</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed">
            General guidance and information regarding SDV Ayurvedic Preparations.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-sdv-border shadow-sm space-y-2">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-sdv-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-oswald font-bold text-xl text-sdv-primary uppercase tracking-wide">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-sdv-muted leading-relaxed mt-2 font-akshar">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="p-6 bg-white rounded-2xl border border-sdv-border text-xs text-sdv-muted flex items-start gap-3 shadow-sm">
            <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
            <span>Additional commercial, shipping, and delivery FAQs will be updated by SDV before launch.</span>
          </div>
        </div>

      </Container>
    </div>
  );
}
