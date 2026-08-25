import React from "react";
import { Sparkles, Leaf, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  const heroImage = "/images/sdv_hero_still_life.png";

  return (
    <section className="relative overflow-hidden bg-sdv-cream py-12 lg:py-16 border-b border-sdv-border">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <Badge variant="gold" icon={<Leaf className="w-3.5 h-3.5" />}>
              OVER SIX DECADES OF AYURVEDIC HERITAGE
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-sdv-primary leading-[1.08] tracking-wide uppercase">
              TRADITION <br className="hidden sm:inline" />
              <span className="text-sdv-gold">YOU CAN TRUST.</span>
            </h1>

            <p className="text-base sm:text-lg text-sdv-muted max-w-xl leading-relaxed font-akshar">
              <strong className="text-sdv-primary font-semibold">SDV Ayurvedic Preparations</strong> is an established Ayurvedic medicine manufacturer with over six decades of experience, guided by classical texts including Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/shop" variant="primary" size="lg">
                <span>SHOP PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button href="/finder" variant="gold" size="lg">
                <Sparkles className="w-5 h-5 text-sdv-primary" />
                <span>FIND YOUR PRODUCT</span>
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-sdv-border grid grid-cols-3 gap-4 text-xs text-sdv-muted font-akshar">
              <div>
                <span className="font-oswald font-bold text-sdv-primary block text-sm uppercase tracking-wider">Classical Texts</span>
                <span>Sahasrayoga & Ashtanga</span>
              </div>
              <div>
                <span className="font-oswald font-bold text-sdv-primary block text-sm uppercase tracking-wider">Six Decades</span>
                <span>Traditional Heritage</span>
              </div>
              <div>
                <span className="font-oswald font-bold text-sdv-primary block text-sm uppercase tracking-wider">Quality Care</span>
                <span>Authentic Formulations</span>
              </div>
            </div>
          </div>

          {/* Right Product Still-Life Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sdv-gold/20 to-sdv-green/10 blur-2xl opacity-60" />
              <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-elevated border border-sdv-border overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-sdv-cream">
                  <img
                    src={heroImage}
                    alt="SDV Ayurvedic Botanical Environment Still Life"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 px-2 py-1 text-center flex items-center justify-between border-t border-sdv-border pt-3 text-xs text-sdv-muted font-akshar">
                  <span className="font-semibold text-sdv-primary">Traditional Formulations</span>
                  <span className="font-mono text-[11px]">Est. Heritage</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
