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
    { name: "Knowledge Centre", href: "/knowledge" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-ayurveda-green/10 transition-all">
        <Container size="lg">
          <div className="h-18 sm:h-20 flex items-center justify-between gap-4">
            
            {/* Clean Brand Logo Treatment */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-full bg-ayurveda-green group-hover:bg-ayurveda-green-dark flex items-center justify-center text-ayurveda-gold font-serif font-bold text-xl shadow-md transition-colors">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ayurveda-green leading-none">
                SDV <span className="text-ayurveda-gold font-normal italic">Ayurveda</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ayurveda-green-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    link.isHighlight
                      ? "text-ayurveda-green font-bold flex items-center gap-1.5 hover:text-ayurveda-gold"
                      : "hover:text-ayurveda-gold"
                  }`}
                >
                  {link.isHighlight && <Sparkles className="w-3.5 h-3.5 text-ayurveda-gold" />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Actions: Search, Cart, Finder CTA, Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link
                href="/shop"
                aria-label="Search Products"
                className="p-2 text-ayurveda-green hover:bg-ayurveda-green/5 rounded-full transition-colors hidden sm:flex"
              >
                <Search className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="p-2 text-ayurveda-green hover:bg-ayurveda-green/5 rounded-full transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-ayurveda-gold text-ayurveda-green-dark text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  0
                </span>
              </Link>

              <div className="hidden sm:block">
                <Button href="/finder" variant="primary" size="sm">
                  <Sparkles className="w-4 h-4 text-ayurveda-gold" />
                  <span>Product Finder</span>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-ayurveda-green hover:bg-ayurveda-green/5 rounded-lg lg:hidden transition-colors"
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
