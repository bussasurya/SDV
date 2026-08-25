import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-sdv-cream overflow-hidden border-t border-sdv-border">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-sdv-gold/15 transform -rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-sdv-border bg-white">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
                  alt="SDV Ayurvedic Herbal Heritage"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-sdv-border">
                  <div className="font-oswald font-bold text-sm text-sdv-primary uppercase tracking-wide">
                    Quality Without Compromise
                  </div>
                  <div className="text-xs text-sdv-muted font-akshar mt-0.5">
                    Tradition You can trust
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold">Founder Vision & Heritage</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary leading-tight uppercase tracking-wide">
              Rooted in Classical Tradition & Social Vision
            </h2>

            <div className="gold-divider !mx-0" />

            <div className="space-y-4 text-sm sm:text-base text-sdv-muted leading-relaxed font-akshar">
              <p>
                The foundation of SDV was laid by our founder, Late N. Janardhanan Vaidyan, whose vision was to make authentic Ayurvedic medicines accessible to the common people at affordable prices. His commitment to Ayurveda, social responsibility, and uncompromising standards continues to guide us to this day.
              </p>
              <p>
                For over six decades, SDV Ayurvedic Preparations has remained committed to the principles and standards laid down in authoritative classical texts, including Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="outline">
                <span>Learn About Our Heritage</span>
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
