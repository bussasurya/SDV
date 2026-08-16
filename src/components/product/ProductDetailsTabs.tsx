'use client';

import React, { useState } from "react";
import { Leaf, Info, AlertCircle, ShieldCheck } from "lucide-react";

interface IngredientItem {
  id: string;
  name: string;
  sanskritName?: string | null;
  benefits?: string | null;
}

interface ProductDetailsTabsProps {
  fullDescription: string;
  traditionalUses?: string | null;
  directionsForUse?: string | null;
  dosage?: string | null;
  precautions?: string | null;
  storage?: string | null;
  ingredients: IngredientItem[];
}

export function ProductDetailsTabs({
  fullDescription,
  traditionalUses,
  directionsForUse,
  dosage,
  precautions,
  storage,
  ingredients,
}: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "ingredients" | "usage" | "precautions">("overview");

  const tabs = [
    { id: "overview", label: "Overview & Details", icon: <Info className="w-4 h-4" /> },
    { id: "ingredients", label: `Ingredients (${ingredients.length})`, icon: <Leaf className="w-4 h-4" /> },
    { id: "usage", label: "Directions & Dosage", icon: <ShieldCheck className="w-4 h-4" /> },
    { id: "precautions", label: "Precautions & Storage", icon: <AlertCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white rounded-2xl border border-ayurveda-green/10 p-6 sm:p-8 shadow-sm">
      {/* Tabs Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-ayurveda-green/10 pb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
              activeTab === tab.id
                ? "bg-ayurveda-green text-white shadow-sm"
                : "text-ayurveda-green-dark hover:bg-ayurveda-cream-surface"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Panes */}
      <div className="pt-6 text-sm text-ayurveda-textMuted leading-relaxed">
        
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-ayurveda-green">
              Product Overview
            </h3>
            <p>{fullDescription}</p>

            {traditionalUses && (
              <div className="pt-3 border-t border-ayurveda-green/10">
                <h4 className="font-serif font-bold text-sm text-ayurveda-green mb-1">
                  Traditional Applications
                </h4>
                <p>{traditionalUses}</p>
              </div>
            )}
          </div>
        )}

        {/* Ingredients Tab */}
        {activeTab === "ingredients" && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-ayurveda-green">
              Botanical & Mineral Ingredients
            </h3>
            {ingredients.length === 0 ? (
              <p className="italic text-xs">
                [DEMO INGREDIENTS — Botanical breakdown to be supplied by SDV Ayurveda]
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {ingredients.map((ing) => (
                  <div key={ing.id} className="p-4 rounded-xl bg-ayurveda-cream-surface border border-ayurveda-green/10 space-y-1">
                    <div className="font-serif font-bold text-base text-ayurveda-green">
                      {ing.name}
                    </div>
                    {ing.sanskritName && (
                      <div className="text-xs text-ayurveda-gold font-medium italic">
                        Sanskrit: {ing.sanskritName}
                      </div>
                    )}
                    {ing.benefits && (
                      <p className="text-xs text-ayurveda-textMuted pt-1">
                        {ing.benefits}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Usage & Dosage Tab */}
        {activeTab === "usage" && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-ayurveda-green">
              Directions for Use & Recommended Dosage
            </h3>
            {directionsForUse && (
              <div>
                <h4 className="font-serif font-bold text-sm text-ayurveda-green mb-1">Directions:</h4>
                <p>{directionsForUse}</p>
              </div>
            )}
            {dosage && (
              <div className="pt-2">
                <h4 className="font-serif font-bold text-sm text-ayurveda-green mb-1">Dosage:</h4>
                <p>{dosage}</p>
              </div>
            )}
          </div>
        )}

        {/* Precautions Tab */}
        {activeTab === "precautions" && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-ayurveda-green">
              Safety Precautions & Storage Guidelines
            </h3>
            {precautions && (
              <div>
                <h4 className="font-serif font-bold text-sm text-ayurveda-green mb-1">Precautions:</h4>
                <p>{precautions}</p>
              </div>
            )}
            {storage && (
              <div className="pt-2">
                <h4 className="font-serif font-bold text-sm text-ayurveda-green mb-1">Storage Instructions:</h4>
                <p>{storage}</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
