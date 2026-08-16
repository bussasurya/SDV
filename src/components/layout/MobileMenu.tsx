'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string; isHighlight?: boolean }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle keyboard ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-ayurveda-green-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xs bg-ayurveda-cream h-full flex flex-col justify-between p-6 shadow-2xl z-10 transform transition-transform duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-ayurveda-green/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-ayurveda-green flex items-center justify-center text-ayurveda-gold font-serif font-bold text-lg">
                S
              </div>
              <span className="font-serif font-bold text-xl text-ayurveda-green">
                SDV <span className="text-ayurveda-gold font-normal italic">Ayurveda</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-ayurveda-green hover:bg-ayurveda-green/10 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                  link.isHighlight
                    ? "bg-ayurveda-green text-white font-bold"
                    : "text-ayurveda-green-dark hover:bg-ayurveda-green-mint hover:text-ayurveda-green"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isHighlight && <Sparkles className="w-4 h-4 text-ayurveda-gold" />}
                  {link.name}
                </span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-ayurveda-green/10 space-y-3">
          <Button href="/finder" variant="gold" className="w-full" onClick={onClose}>
            <Sparkles className="w-4 h-4" />
            <span>Find Your Product</span>
          </Button>
          <p className="text-center text-[11px] text-ayurveda-textMuted pt-2">
            Authentic Classical Formulations
          </p>
        </div>
      </div>
    </div>
  );
}
