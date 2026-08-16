import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Leaf, Flame, Shield, Sparkles } from "lucide-react";

export function WhySDV() {
  const pillars = [
    {
      icon: <Leaf className="w-8 h-8 text-ayurveda-green" />,
      title: "[SDV BRAND PILLAR 1]",
      description: "[Description of SDV brand formulation principle — To be provided by Client]",
    },
    {
      icon: <Flame className="w-8 h-8 text-ayurveda-green" />,
      title: "[SDV BRAND PILLAR 2]",
      description: "[Description of SDV preparation standards — To be provided by Client]",
    },
    {
      icon: <Shield className="w-8 h-8 text-ayurveda-green" />,
      title: "[SDV BRAND PILLAR 3]",
      description: "[Description of SDV quality & ingredient policy — To be provided by Client]",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-ayurveda-green" />,
      title: "[SDV BRAND PILLAR 4]",
      description: "[Description of SDV testing & safety standards — To be provided by Client]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-ayurveda-green/5">
      <Container size="lg">
        <SectionHeading
          eyebrow="Brand Philosophy"
          title="Why Choose SDV Ayurveda?"
          description="[SDV BRAND PHILOSOPHY PLACEHOLDER — Overview of SDV approach to wellness and formulations to be supplied by Client.]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="sdv-card p-8 text-center flex flex-col items-center bg-ayurveda-cream-surface/30 border border-ayurveda-green/10 hover:bg-white transition-all duration-300 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-ayurveda-green-mint text-ayurveda-green flex items-center justify-center mb-6 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-ayurveda-green mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-ayurveda-textMuted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
