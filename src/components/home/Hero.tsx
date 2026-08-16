import React from "react";
import { Sparkles, Leaf, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  const heroImage = "/images/sdv_hero_still_life.png";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ayurveda-cream via-ayurveda-cream-surface/30 to-ayurveda-cream py-14 lg:py-20 border-b border-ayurveda-green/5">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="gold" icon={<Leaf className="w-3.5 h-3.5" />}>
              [SDV HERITAGE STATEMENT]
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ayurveda-green leading-[1.15] tracking-tight">
              SDV Ayurveda <span className="italic text-ayurveda-gold font-normal block sm:inline">Wellness Formulations</span>
            </h1>

            <p className="text-base sm:text-lg text-ayurveda-textMuted max-w-xl leading-relaxed font-normal">
              [SDV BRAND HERO PLACEHOLDER — Primary brand statement, product philosophy, and value proposition to be supplied by SDV Client.]
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/shop" variant="primary" size="lg">
                <span>SHOP PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button href="/finder" variant="gold" size="lg">
                <Sparkles className="w-5 h-5 text-ayurveda-green-dark" />
                <span>FIND YOUR PRODUCT</span>
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-8 border-t border-ayurveda-green/10 grid grid-cols-3 gap-4 text-xs text-ayurveda-textMuted">
              <div>
                <span className="font-serif font-bold text-ayurveda-green block text-sm font-medium">[SDV PILLAR 1]</span>
                <span>[Details Placeholder]</span>
              </div>
              <div>
                <span className="font-serif font-bold text-ayurveda-green block text-sm font-medium">[SDV PILLAR 2]</span>
                <span>[Details Placeholder]</span>
              </div>
              <div>
                <span className="font-serif font-bold text-ayurveda-green block text-sm font-medium">[SDV PILLAR 3]</span>
                <span>[Details Placeholder]</span>
              </div>
            </div>
          </div>

          {/* Right Product Still-Life Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-ayurveda-gold/25 to-ayurveda-green/15 blur-2xl opacity-60" />
              <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-elevated border border-ayurveda-green/10 overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-ayurveda-cream-surface">
                  <img
                    src={heroImage}
                    alt="SDV Ayurvedic Botanical Environment Still Life"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 px-2 py-1 text-center">
                  <span className="text-xs text-ayurveda-textMuted font-serif italic">
                    Ayurvedic Botanical Still Life Visual
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
