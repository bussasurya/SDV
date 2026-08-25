import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { BookOpen, ShieldCheck, Heart, Award } from "lucide-react";

export function WhySDV() {
  const pillars = [
    {
      icon: <BookOpen className="w-8 h-8 text-sdv-green" />,
      title: "Classical Authenticity",
      description: "Rooted in authoritative texts including Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.",
    },
    {
      icon: <Award className="w-8 h-8 text-sdv-green" />,
      title: "60+ Years of Trust",
      description: "Built on generations of trust and traditional Ayurvedic manufacturing expertise.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-sdv-green" />,
      title: "Uncompromising Quality",
      description: "Quality is never compromised. Prepared with consistent care, respect, and established standards.",
    },
    {
      icon: <Heart className="w-8 h-8 text-sdv-green" />,
      title: "Affordable & Accessible",
      description: "Fulfilling our founder's vision of bringing trusted Ayurvedic preparations to all people.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-sdv-border">
      <Container size="lg">
        <SectionHeading
          eyebrow="Our Core Commitment"
          title="Why Choose SDV Ayurvedic Preparations?"
          description="Preserving the authenticity of Ayurvedic formulations while maintaining high standards throughout the manufacturing process."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="sdv-card p-8 text-center flex flex-col items-center bg-sdv-cream/30 border border-sdv-border hover:bg-white transition-all duration-300 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-sdv-cream text-sdv-primary flex items-center justify-center mb-6 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="font-oswald font-bold text-xl text-sdv-primary uppercase tracking-wide mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-sdv-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
