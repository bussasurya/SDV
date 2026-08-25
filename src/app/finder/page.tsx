'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Info, Heart, Shield, Sparkle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getFormulationImage } from "@/lib/categoryColors";

export default function FinderPage() {
  const [selectedOption, setSelectedOption] = useState<string>("digestion");

  const options = [
    { id: "digestion", title: "Digestive & Gut Health", desc: "Classical Kashayam & Choornam formulations for digestive balance", icon: Sparkles },
    { id: "skin", title: "Skin & Complexion Care", desc: "Traditional Tailam & Ghrutham preparations for skin vitality", icon: Heart },
    { id: "joint", title: "Joint & Mobility Wellness", desc: "Soothing Tailam & Lehyam formulations for active joints", icon: Shield },
    { id: "immunity", title: "General Wellness & Immunity", desc: "Rejuvenating Rasayanam & Asavam classical preparations", icon: Sparkle },
  ];

  const previewResults = [
    { name: "Indukantham Kashayam", category: "Kashayam", pack: "200 ml", price: 180, image: getFormulationImage("kashayam") },
    { name: "Dhanwantharam Thailam", category: "Tailam / Enna", pack: "200 ml", price: 210, image: getFormulationImage("tailam") },
  ];

  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Guided Product Selection
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            Find Your Product
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed font-akshar">
            Answer a few quick questions to preview classical SDV Ayurvedic formulations tailored to your wellness needs.
          </p>
        </div>

        {/* Progress Bar & Questionnaire Container */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-sdv-border shadow-sm space-y-8 max-w-4xl">
          
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-sdv-primary font-akshar">
              <span className="uppercase tracking-wider">Step 1 of 3: Primary Health Concern</span>
              <span className="font-mono text-sdv-gold">33% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-sdv-cream overflow-hidden">
              <div className="h-full bg-sdv-gold w-1/3 rounded-full transition-all duration-500" />
            </div>
          </div>

          {/* Question Title */}
          <div className="space-y-2">
            <h2 className="font-oswald font-bold text-2xl text-sdv-primary uppercase tracking-wide">
              What health or wellness goal would you like to address today?
            </h2>
            <p className="text-xs text-sdv-muted font-akshar">
              Select your primary concern to view recommended classical preparations.
            </p>
          </div>

          {/* Option Grid Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`p-5 rounded-xl border text-left transition-all flex items-start gap-4 ${
                    isSelected
                      ? "border-sdv-gold bg-sdv-cream/60 shadow-sm ring-1 ring-sdv-gold"
                      : "border-sdv-border hover:border-sdv-primary/40 bg-white"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "border-sdv-gold bg-sdv-gold text-sdv-primary" : "border-sdv-border"
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-sdv-primary" />}
                  </div>
                  <div>
                    <h3 className="font-oswald font-bold text-base text-sdv-primary uppercase tracking-wide">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-sdv-muted mt-1 leading-relaxed font-akshar">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Static Preview Result State */}
          <div className="pt-8 border-t border-sdv-border space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-oswald font-bold text-lg text-sdv-primary uppercase tracking-wide">
                Preview Recommended Preparations
              </h3>
              <Badge variant="sage" className="text-[10px] font-mono uppercase">
                Static UI Preview
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previewResults.map((prod, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-sdv-border bg-sdv-cream/30">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-16 h-16 rounded-lg object-cover bg-white shrink-0 border border-sdv-border"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-sdv-gold uppercase">{prod.category}</span>
                    <h4 className="font-akshar font-bold text-sm text-sdv-primary leading-tight">
                      {prod.name}
                    </h4>
                    <span className="text-xs text-sdv-muted block mt-0.5">Pack: {prod.pack}</span>
                    <span className="font-oswald font-bold text-sm text-sdv-primary block mt-1">Demo Price: ₹{prod.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-sdv-border">
            <Button href="/shop" variant="primary">
              <span>EXPLORE ALL FORMULATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="text-xs text-sdv-muted flex items-center gap-1.5">
              <Info className="w-4 h-4 text-sdv-gold shrink-0" />
              <span>Recommendation rule engine will be activated in subsequent backend phases.</span>
            </div>
          </div>

        </div>

      </Container>
    </div>
  );
}
