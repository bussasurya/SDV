import React from "react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-ayurveda-cream overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-ayurveda-gold/15 transform -rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-ayurveda-green/10">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
                  alt="SDV Brand Story Image Placeholder"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="gold">[SDV BRAND HERITAGE]</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ayurveda-green leading-tight">
              Our Journey & Philosophy
            </h2>

            <div className="gold-divider !mx-0" />

            <div className="space-y-4 text-sm sm:text-base text-ayurveda-textMuted leading-relaxed">
              <p>
                [SDV BRAND STORY PARAGRAPH 1 PLACEHOLDER — Authentic brand story, history, and founding vision to be provided by SDV Client.]
              </p>
              <p>
                [SDV BRAND STORY PARAGRAPH 2 PLACEHOLDER — Sourcing ethics, preparation philosophy, and product commitments to be provided by SDV Client.]
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-ayurveda-green/10 text-xs text-ayurveda-textMuted">
              <div>
                <span className="font-serif font-bold text-base text-ayurveda-green block">[SDV VALUE 1]</span>
                <span>[Details Placeholder]</span>
              </div>
              <div>
                <span className="font-serif font-bold text-base text-ayurveda-green block">[SDV VALUE 2]</span>
                <span>[Details Placeholder]</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
