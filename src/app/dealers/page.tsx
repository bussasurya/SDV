'use client';

import React from "react";
import { Building2, Send, ShieldCheck, FileText, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function DealersPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Distribution Network</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Dealer & Stockist Partnership Enquiries
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed font-akshar">
            Partner with SDV Ayurvedic Preparations. For over six decades, our authentic Ayurvedic formulations have been trusted by physicians, pharmacies, and stockists.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Dealer Information */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-2xl border border-sdv-border shadow-sm">
            <div>
              <h2 className="font-oswald font-bold text-2xl text-sdv-primary uppercase tracking-wide mb-3">
                Why Partner With SDV?
              </h2>
              <div className="gold-divider !mx-0 mb-4" />
              <p className="text-xs sm:text-sm text-sdv-muted leading-relaxed font-akshar">
                SDV Ayurvedic Preparations maintains an established reputation for quality, classical adherence, and customer trust. We invite inquiries from qualified Ayurvedic stockists, distributors, and pharmacy partners.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-sdv-primary font-akshar">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Established Brand Trust</div>
                  <div className="text-sdv-muted text-xs">Over six decades of traditional manufacturing excellence.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Authoritative Formulations</div>
                  <div className="text-sdv-muted text-xs">Classical preparations from Sahasrayoga, Bhaishajyaratnavali & Ashtanga Hridaya.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Direct Dealer Enquiry</div>
                  <div className="text-sdv-muted text-xs">Submit your details for stockist and distribution partnership inquiries.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sdv-border text-xs text-sdv-muted space-y-2 font-akshar flex items-start gap-2">
              <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
              <span>Dealer enquiries can be submitted using the form above.</span>
            </div>
          </div>

          {/* Right Column: Static Dealer Enquiry Form UI */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-sdv-border shadow-sm space-y-6">
            <div>
              <h2 className="font-oswald font-bold text-2xl text-sdv-primary uppercase tracking-wide mb-1">
                Dealer Partnership Form
              </h2>
              <p className="text-xs text-sdv-muted font-akshar">
                Submit your business details below for distribution inquiries.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-akshar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    Business / Pharmacy Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter establishment name"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit phone number"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City name"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="State name"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                  Enquiry Details & Product Categories of Interest
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirement or retail setup..."
                  className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                />
              </div>

              <div className="pt-2">
                <Button type="button" variant="primary" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  <span>SUBMIT DEALER ENQUIRY</span>
                </Button>
              </div>

              <p className="text-[11px] text-sdv-muted pt-1">
                Note: This form is currently a static enquiry interface for presentation.
              </p>
            </form>
          </div>

        </div>

      </Container>
    </div>
  );
}
