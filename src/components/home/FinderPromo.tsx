import React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function FinderPromo() {
  const steps = [
    "Select your health focus (Skin, Hair, Digestion, Joints, Immunity)",
    "Identify your specific concerns & classical formulation preference",
    "Receive targeted SDV product guidance",
  ];

  return (
    <section className="py-16 sm:py-20 bg-sdv-primary text-white relative overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sdv-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdv-gold/20 text-sdv-gold text-xs font-semibold uppercase tracking-wider border border-sdv-gold/30 font-akshar">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guided Product Finder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-white leading-tight uppercase tracking-wide">
              Find Your Ayurvedic Preparation
            </h2>

            <p className="text-base sm:text-lg text-sdv-cream/80 max-w-xl leading-relaxed font-akshar">
              Unsure which formulation matches your health needs? Our interactive Product Finder helps guide you to traditional remedies.
            </p>

            <ul className="space-y-3 pt-2 font-akshar">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-sdv-cream/90">
                  <CheckCircle2 className="w-5 h-5 text-sdv-gold shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button href="/finder" variant="gold" size="lg">
                <Sparkles className="w-5 h-5 text-sdv-primary" />
                <span>FIND YOUR PRODUCT</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-sdv-gold/20 text-sdv-gold mx-auto flex items-center justify-center border border-sdv-gold/40">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-oswald font-bold text-2xl text-white uppercase tracking-wide">
                Personalized Product Guidance
              </h3>
              <p className="text-xs font-akshar text-sdv-cream/70 max-w-xs mx-auto leading-relaxed">
                Take a moment to answer health questions for classical Ayurvedic preparation suggestions.
              </p>
              <div className="pt-2">
                <Button href="/finder" variant="gold" size="md" className="w-full">
                  <span>Start Product Finder</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
