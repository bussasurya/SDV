import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-sdv-primary text-sdv-cream pt-16 pb-8 border-t border-sdv-gold/20 font-akshar">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-sdv-cream/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/brand/logo-light.svg"
                alt="SDV Ayurvedic Preparations — Tradition You can trust"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-sdv-cream/80 leading-relaxed max-w-sm">
              Established Ayurvedic medicine manufacturer with over six decades of traditional expertise. Formulations rooted in classical texts like Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.
            </p>

            <div className="pt-2 text-xs text-sdv-gold font-bold uppercase tracking-wider">
              Tradition You can trust
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-oswald font-bold text-base text-sdv-gold uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sdv-cream/80">
              <li><Link href="/" className="hover:text-sdv-gold transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-sdv-gold transition-colors">Products Catalogue</Link></li>
              <li><Link href="/finder" className="hover:text-sdv-gold transition-colors font-medium text-sdv-gold">Find Your Product</Link></li>
              <li><Link href="/about" className="hover:text-sdv-gold transition-colors">About SDV</Link></li>
              <li><Link href="/knowledge" className="hover:text-sdv-gold transition-colors">From the Physician&apos;s Desk</Link></li>
              <li><Link href="/dealers" className="hover:text-sdv-gold transition-colors">Dealers</Link></li>
              <li><Link href="/contact" className="hover:text-sdv-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-oswald font-bold text-base text-sdv-gold uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sdv-cream/80">
              <li><Link href="/shipping" className="hover:text-sdv-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-sdv-gold transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/faq" className="hover:text-sdv-gold transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-sdv-gold transition-colors">Ayurvedic Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-oswald font-bold text-base text-sdv-gold uppercase tracking-wider">
              Enquiries
            </h4>
            <p className="text-xs text-sdv-cream/70 leading-relaxed">
              Enquiries & support can be submitted via our <Link href="/contact" className="text-sdv-gold hover:underline">Contact page</Link>.
            </p>
            <p className="text-[11px] text-sdv-cream/50 pt-1">
              Official address and telephone details will be updated before launch.
            </p>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sdv-cream/50 gap-4">
          <p>© {new Date().getFullYear()} SDV Ayurvedic Preparations. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-sdv-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sdv-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
