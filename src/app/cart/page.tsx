import React from "react";
import type { Metadata } from "next";
import { ShoppingBag, ArrowRight, Info, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Shopping Cart | SDV Ayurveda",
  description: "View your selected Ayurvedic preparations.",
};

export default function CartPage() {
  return (
    <div className="w-full bg-sdv-cream min-h-screen py-16 sm:py-24 font-akshar">
      <Container size="md">
        <div className="bg-white p-8 sm:p-14 rounded-2xl border border-sdv-border shadow-sm text-center space-y-6 max-w-2xl mx-auto">
          
          <div className="w-20 h-20 rounded-full bg-sdv-cream text-sdv-primary mx-auto flex items-center justify-center border border-sdv-border shadow-inner">
            <ShoppingBag className="w-10 h-10 text-sdv-gold" />
          </div>

          <div className="space-y-2">
            <Badge variant="gold" className="text-[10px] uppercase font-bold font-mono">
              E-commerce Preview
            </Badge>

            <h1 className="text-3xl sm:text-4xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
              Your Cart is Currently Empty
            </h1>

            <p className="text-sm sm:text-base text-sdv-muted leading-relaxed max-w-md mx-auto">
              Explore our complete product catalogue to discover authentic Ayurvedic preparations handcrafted according to classical principles.
            </p>
          </div>

          <div className="pt-2">
            <Button href="/shop" variant="primary" size="lg">
              <span>CONTINUE SHOPPING</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="pt-6 border-t border-sdv-border text-xs text-sdv-muted flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-sdv-gold shrink-0" />
            <span>Online ordering and checkout functionality will be enabled in subsequent releases.</span>
          </div>

        </div>
      </Container>
    </div>
  );
}
