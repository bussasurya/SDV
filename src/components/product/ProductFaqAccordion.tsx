'use client';

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ProductFaqAccordionProps {
  faqs: FaqItem[];
}

export function ProductFaqAccordion({ faqs }: ProductFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl border border-ayurveda-green/10 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-2 text-ayurveda-green">
        <HelpCircle className="w-5 h-5 text-ayurveda-gold" />
        <h3 className="font-serif font-bold text-xl text-ayurveda-green">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="border border-ayurveda-green/10 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 text-left font-serif font-bold text-sm sm:text-base text-ayurveda-green flex items-center justify-between gap-4 bg-ayurveda-cream-surface/40 hover:bg-ayurveda-cream-surface transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-ayurveda-gold transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 text-xs sm:text-sm text-ayurveda-textMuted leading-relaxed bg-white border-t border-ayurveda-green/10">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
