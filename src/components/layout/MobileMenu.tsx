'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight } from "lucide-react";
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
        className="fixed inset-0 bg-sdv-primary/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xs bg-sdv-cream h-full flex flex-col justify-between p-6 shadow-2xl z-10 transform transition-transform duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-sdv-border">
            <Link href="/" onClick={onClose} className="flex items-center">
              <img
                src="/brand/logo.svg"
                alt="SDV Ayurveda Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-sdv-primary hover:bg-sdv-primary/10 transition-colors"
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
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  link.isHighlight
                    ? "bg-sdv-primary text-white font-bold"
                    : "text-sdv-primary hover:bg-white hover:text-sdv-green"
                }`}
              >
                <span className="flex items-center gap-2 font-akshar">
                  {link.isHighlight && <Sparkles className="w-4 h-4 text-sdv-gold" />}
                  {link.name}
                </span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-sdv-border space-y-3">
          <Button href="/finder" variant="gold" className="w-full" onClick={onClose}>
            <Sparkles className="w-4 h-4" />
            <span>Find Your Product</span>
          </Button>
          <p className="text-center text-[11px] text-sdv-muted pt-2 font-akshar">
            Tradition You can trust
          </p>
        </div>
      </div>
    </div>
  );
}
