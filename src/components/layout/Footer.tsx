import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-ayurveda-green-dark text-ayurveda-cream pt-16 pb-8 border-t border-ayurveda-gold/20">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-ayurveda-cream/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ayurveda-gold text-ayurveda-green-dark font-serif font-bold text-xl flex items-center justify-center shadow-md">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SDV <span className="text-ayurveda-gold font-normal italic">Ayurveda</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ayurveda-cream/75 leading-relaxed max-w-sm">
              [SDV BRAND SUMMARY PLACEHOLDER — Authentic Ayurvedic formulations handcrafted according to traditional principles for holistic health.]
            </p>
            <div className="pt-2 text-xs text-ayurveda-gold font-semibold uppercase tracking-wider">
              Ayurvedic Wellness & Products
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-ayurveda-gold uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ayurveda-cream/80">
              <li><Link href="/" className="hover:text-ayurveda-gold transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-ayurveda-gold transition-colors">Products Catalogue</Link></li>
              <li><Link href="/finder" className="hover:text-ayurveda-gold transition-colors font-medium text-ayurveda-gold">Find Your Product</Link></li>
              <li><Link href="/about" className="hover:text-ayurveda-gold transition-colors">About SDV</Link></li>
              <li><Link href="/knowledge" className="hover:text-ayurveda-gold transition-colors">Knowledge Centre</Link></li>
              <li><Link href="/contact" className="hover:text-ayurveda-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-ayurveda-gold uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ayurveda-cream/80">
              <li><Link href="/shipping" className="hover:text-ayurveda-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-ayurveda-gold transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="hover:text-ayurveda-gold transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-ayurveda-gold transition-colors">Ayurvedic Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-ayurveda-gold uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-xs text-ayurveda-cream/70 leading-relaxed">
              [SDV CONTACT ADDRESS & EMAIL PLACEHOLDER]
            </p>
            <p className="text-xs text-ayurveda-cream/70">
              WhatsApp Support: [SDV PHONE PLACEHOLDER]
            </p>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ayurveda-cream/50 gap-4">
          <p>© {new Date().getFullYear()} SDV Ayurveda. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ayurveda-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ayurveda-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
