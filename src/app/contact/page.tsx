'use client';

import React from "react";
import { Mail, Phone, MapPin, Send, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">Customer Support & Enquiries</Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Contact SDV Ayurvedic Preparations
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed">
            Have a question regarding our traditional Ayurvedic preparations or need assistance? Reach out to us using the enquiry form below.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-2xl border border-sdv-border shadow-sm">
            <div>
              <h2 className="font-oswald font-bold text-2xl text-sdv-primary uppercase tracking-wide mb-3">
                Get In Touch
              </h2>
              <div className="gold-divider !mx-0 mb-4" />
              <p className="text-xs sm:text-sm text-sdv-muted leading-relaxed">
                SDV Ayurvedic Preparations welcomes inquiries from individuals, physicians, and business partners.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-sdv-primary">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Manufacturing Facility & Head Office</div>
                  <div className="text-sdv-muted text-xs mt-0.5">
                    Official address information will be updated before launch.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Phone Support</div>
                  <div className="text-sdv-muted text-xs mt-0.5">
                    Official customer service number will be updated before launch.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sdv-cream shrink-0 text-sdv-green">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Email Support</div>
                  <div className="text-sdv-muted text-xs mt-0.5">
                    Official email address will be updated before launch.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sdv-border text-xs text-sdv-muted flex items-start gap-2">
              <Info className="w-4 h-4 text-sdv-gold shrink-0 mt-0.5" />
              <span>Contact enquiries can be submitted using the form above. Official contact details will be updated before launch.</span>
            </div>
          </div>

          {/* Right Column: Static Form UI */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-sdv-border shadow-sm space-y-6">
            <div>
              <h2 className="font-oswald font-bold text-2xl text-sdv-primary uppercase tracking-wide mb-1">
                Send An Enquiry
              </h2>
              <p className="text-xs text-sdv-muted">
                Please fill in your details and we will respond to your message.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                  Enquiry Type *
                </label>
                <select className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green">
                  <option value="general">General Product Enquiry</option>
                  <option value="formulation">Formulation Guidance</option>
                  <option value="dealer">Dealer & Distribution Enquiry</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter contact number"
                  className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-sdv-primary mb-1 uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Type your query or message here..."
                  className="w-full px-3.5 py-2.5 bg-sdv-cream/30 border border-sdv-border rounded-xl text-xs text-sdv-primary focus:outline-none focus:ring-2 focus:ring-sdv-green"
                />
              </div>

              <div className="pt-2">
                <Button type="button" variant="primary" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </Button>
              </div>

              <p className="text-[11px] text-sdv-muted pt-1">
                Note: Form submission is currently a static interface preview. Submission functionality will be activated at launch.
              </p>
            </form>
          </div>

        </div>

      </Container>
    </div>
  );
}
