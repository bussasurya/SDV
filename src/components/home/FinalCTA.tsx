import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-sdv-primary text-white text-center relative overflow-hidden">
      {/* Decorative Gold Accent Circle */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sdv-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="md" className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sdv-gold/20 text-sdv-gold text-xs font-semibold tracking-wider border border-sdv-gold/30 font-akshar">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tradition You can trust</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-white max-w-2xl mx-auto leading-tight uppercase tracking-wide">
          Find the Right Ayurvedic Preparation for You
        </h2>

        <p className="text-base sm:text-lg text-sdv-cream/80 max-w-xl mx-auto leading-relaxed font-akshar">
          Discover traditional Ayurvedic formulations prepared with care, consistency, and respect for classical heritage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/finder" variant="gold" size="lg">
            <Sparkles className="w-5 h-5" />
            <span>FIND YOUR PRODUCT</span>
          </Button>

          <Button href="/shop" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sdv-primary">
            <span>EXPLORE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
