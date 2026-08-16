import React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function FinderPromo() {
  const steps = [
    "Select your health focus (Skin, Hair, Digestion, Joints, Immunity)",
    "Identify your specific symptoms & skin/body profile",
    "Receive a personalized classical SDV product recommendation",
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-ayurveda-green-dark via-ayurveda-green to-ayurveda-green-dark text-white relative overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ayurveda-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ayurveda-gold/20 text-ayurveda-gold text-xs font-semibold uppercase tracking-wider border border-ayurveda-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guided Solution Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Find Your Ayurvedic Solution
            </h2>

            <p className="text-base sm:text-lg text-ayurveda-cream/80 max-w-xl leading-relaxed">
              Unsure which formulation matches your unique Prakriti or health needs? Our deterministic 4-step Product Finder guides you to authentic remedies.
            </p>

            <ul className="space-y-3 pt-2">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-ayurveda-cream/90">
                  <CheckCircle2 className="w-5 h-5 text-ayurveda-gold shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button href="/finder" variant="gold" size="lg">
                <Sparkles className="w-5 h-5" />
                <span>FIND YOUR PRODUCT</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-ayurveda-gold/20 text-ayurveda-gold mx-auto flex items-center justify-center border border-ayurveda-gold/40">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white">
                Personalized Herbal Guidance
              </h3>
              <p className="text-xs text-ayurveda-cream/70 max-w-xs mx-auto leading-relaxed">
                Take 2 minutes to answer simple health questions for tailored Ayurvedic product recommendations.
              </p>
              <div className="pt-2">
                <Button href="/finder" variant="gold" size="md" className="w-full">
                  <span>Start Recommendation Quiz</span>
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
