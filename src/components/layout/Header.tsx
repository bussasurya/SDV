'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, ShoppingBag, Search } from "lucide-react";
import { Container } from "../ui/Container";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/shop" },
    { name: "Find Your Product", href: "/finder", isHighlight: true },
    { name: "About SDV", href: "/about" },
    { name: "From the Physician's Desk", href: "/knowledge" },
    { name: "Dealers", href: "/dealers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sdv-border transition-all">
        <Container size="lg">
          <div className="h-18 sm:h-20 flex items-center justify-between gap-4">
            
            {/* Official SDV Vector SVG Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              <img
                src="/brand/logo.svg"
                alt="SDV Ayurvedic Preparations — Tradition You can trust"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium font-akshar text-sdv-primary">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    link.isHighlight
                      ? "text-sdv-primary font-bold flex items-center gap-1.5 hover:text-sdv-gold"
                      : "hover:text-sdv-gold"
                  }`}
                >
                  {link.isHighlight && <Sparkles className="w-3.5 h-3.5 text-sdv-gold" />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Actions: Search, Cart, Finder CTA, Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-akshar">
              <Link
                href="/shop"
                aria-label="Search Products"
                className="p-2 text-sdv-primary hover:bg-sdv-cream/50 rounded-full transition-colors hidden sm:flex"
              >
                <Search className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="p-2 text-sdv-primary hover:bg-sdv-cream/50 rounded-full transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-sdv-gold text-sdv-primary text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  0
                </span>
              </Link>

              <div className="hidden sm:block">
                <Button href="/finder" variant="primary" size="sm">
                  <Sparkles className="w-4 h-4 text-sdv-gold" />
                  <span>Product Finder</span>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-sdv-primary hover:bg-sdv-cream/50 rounded-lg lg:hidden transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
