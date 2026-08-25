import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, ShieldCheck, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About SDV Ayurvedic Preparations | Heritage & Commitment",
  description: "Learn about SDV Ayurvedic Preparations. Over six decades of traditional Ayurvedic medicine manufacturing guided by classical texts.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-14 sm:py-20 font-akshar">
      <Container size="lg" className="space-y-16">
        
        {/* Header Banner */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Six Decades of Heritage</Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-sdv-primary uppercase tracking-wide leading-none">
            About SDV Ayurvedic Preparations
          </h1>

          <p className="text-lg sm:text-xl text-sdv-muted leading-relaxed font-akshar pt-2">
            An established Ayurvedic medicine manufacturer with over six decades of experience and a longstanding reputation for traditional Ayurvedic medicines and formulations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Editorial Copy */}
          <div className="lg:col-span-8 space-y-12 bg-white p-8 sm:p-14 rounded-2xl border border-sdv-border shadow-sm">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-oswald font-bold text-2xl sm:text-3xl lg:text-4xl text-sdv-primary uppercase tracking-wide">
                OUR HERITAGE & CLASSICAL ROOTS
              </h2>
              <div className="gold-divider !mx-0" />
              <p className="text-base sm:text-lg text-sdv-primary leading-relaxed max-w-3xl">
                Since its inception, SDV has remained committed to the principles and standards laid down in the classical Ayurvedic texts, including Sahasrayoga, Bhaishajyaratnavali, Ashtanga Hridaya, and other authoritative texts of Ayurveda. Our formulations are rooted in this rich traditional knowledge and are prepared with consistent attention to quality, authenticity, and adherence to established Ayurvedic principles.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-8 border-t border-sdv-border">
              <h2 className="font-oswald font-bold text-2xl sm:text-3xl lg:text-4xl text-sdv-primary uppercase tracking-wide">
                FOUNDER&apos;S VISION
              </h2>
              <div className="gold-divider !mx-0" />
              <p className="text-base sm:text-lg text-sdv-primary leading-relaxed max-w-3xl">
                The foundation of SDV was laid by our founder, Late N. Janardhanan Vaidyan, whose vision was to make authentic Ayurvedic medicines accessible to the common people at affordable prices. His commitment to Ayurveda, social responsibility, and uncompromising standards continues to guide us to this day.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-6 pt-8 border-t border-sdv-border">
              <h2 className="font-oswald font-bold text-2xl sm:text-3xl lg:text-4xl text-sdv-primary uppercase tracking-wide">
                OUR COMMITMENT TO QUALITY
              </h2>
              <div className="gold-divider !mx-0" />
              <p className="text-base sm:text-lg text-sdv-primary leading-relaxed max-w-3xl">
                For generations, SDV Ayurvedic Preparations has been built on the trust of people who value the heritage and principles of Ayurveda. We believe that this trust carries a responsibility—to preserve the authenticity of Ayurvedic formulations while maintaining high standards throughout the manufacturing process.
              </p>
              <p className="text-base sm:text-lg text-sdv-primary leading-relaxed font-semibold text-sdv-green max-w-3xl p-5 bg-sdv-cream/50 rounded-xl border border-sdv-border">
                Our philosophy is simple: quality should never be compromised. We strive to uphold the reputation built over decades by ensuring that our medicines are prepared with care, consistency, and respect for the classical Ayurvedic tradition.
              </p>
              <p className="text-base text-sdv-primary leading-relaxed max-w-3xl">
                Today, SDV Ayurvedic Preparations continues its journey with the same principles that shaped its foundation: authentic Ayurveda, uncompromising quality, affordability, and service to society.
              </p>
              <p className="text-base text-sdv-primary leading-relaxed max-w-3xl">
                With our heritage as our foundation and quality as our commitment, we remain dedicated to bringing trusted Ayurvedic preparations to people and carrying the legacy of Ayurveda forward for generations to come.
              </p>
            </section>

            {/* Section 4: Official Motto */}
            <section className="pt-8 border-t border-sdv-border">
              <div className="p-8 bg-sdv-cream rounded-2xl border border-sdv-gold/40 text-center space-y-3 shadow-sm">
                <div className="text-xs text-sdv-muted font-bold uppercase tracking-widest font-akshar">
                  OFFICIAL MOTTO
                </div>
                <div className="font-oswald font-bold text-2xl sm:text-3xl text-sdv-primary tracking-wide">
                  SDV Ayurvedic Preparations — Tradition You can trust
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Highlights */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* GMP Visual Card */}
            <div className="bg-white p-8 rounded-2xl border border-sdv-border text-center space-y-4 shadow-sm">
              <img
                src="/brand/gmp-certificate.webp"
                alt="GMP Certified Quality Seal"
                className="w-24 h-24 mx-auto object-contain"
              />
              <div className="font-oswald font-bold text-xl text-sdv-primary uppercase tracking-wide">
                Quality Certified Facility
              </div>
              <p className="text-xs text-sdv-muted leading-relaxed font-akshar">
                Prepared in accordance with established manufacturing standards and classical care.
              </p>
            </div>

            {/* Key Pillars Summary Card */}
            <div className="bg-white p-8 rounded-2xl border border-sdv-border space-y-5 shadow-sm font-akshar">
              <h3 className="font-oswald font-bold text-xl text-sdv-primary uppercase tracking-wide">
                Authoritative Heritage
              </h3>
              <ul className="space-y-4 text-xs text-sdv-primary">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">Sahasrayoga, Bhaishajyaratnavali & Ashtanga Hridaya</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">Over 60 years of traditional manufacturing experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">Founded by Late N. Janardhanan Vaidyan</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">Accessible & affordable authentic Ayurveda</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </Container>
    </div>
  );
}
