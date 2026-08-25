import React from "react";
import Link from "next/link";
import { ShieldCheck, ShoppingBag, Lock, BookOpen } from "lucide-react";
import { Badge } from "../ui/Badge";
import { getCategoryTheme } from "@/lib/categoryColors";

interface ProductInfoProps {
  id: string;
  name: string;
  sku: string;
  categoryName: string;
  categorySlug: string;
  packSize: string;
  mrp: number;
  sellingPrice: number;
  stock: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
}

export function ProductInfo({
  name,
  sku,
  categoryName,
  categorySlug,
  packSize,
  sellingPrice,
  stock,
  shortDescription,
}: ProductInfoProps) {
  const isAvailable = stock > 0;
  const categoryTheme = getCategoryTheme(categorySlug || categoryName);

  return (
    <div className="space-y-6 font-akshar">
      {/* Category Link, Pack Size & Demo Indicator */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <Badge variant="gold" className="font-akshar text-[10px] uppercase font-bold">
          Demo Product Data
        </Badge>
        <Link
          href={`/shop?category=${categorySlug}`}
          className="px-2.5 py-0.5 rounded-full font-bold transition-opacity hover:opacity-80"
          style={{ backgroundColor: categoryTheme.light, color: categoryTheme.base }}
        >
          {categoryName}
        </Link>
        <span className="text-sdv-muted">•</span>
        <span className="bg-white border border-sdv-border px-2.5 py-0.5 rounded-full font-medium text-sdv-muted">
          Pack Size: {packSize}
        </span>
        <span className="text-sdv-muted">•</span>
        <span className="text-sdv-muted font-mono">SKU: {sku}</span>
      </div>

      {/* Product Title (Akshar Font) */}
      <h1 className="text-3xl sm:text-4xl font-akshar font-bold text-sdv-primary leading-tight">
        {name}
      </h1>

      {/* Price Section */}
      <div className="p-4 rounded-2xl bg-white border border-sdv-border flex items-center justify-between shadow-sm">
        <div>
          <span className="text-[10px] text-sdv-muted font-mono uppercase block leading-none mb-1">
            Demo Pricing
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-oswald font-bold text-sdv-primary">
              ₹{sellingPrice}
            </span>
          </div>
          <span className="text-[11px] text-sdv-muted block mt-1">
            Development placeholder price — subject to official SDV catalogue data
          </span>
        </div>
      </div>

      {/* Stock Availability Indicator */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span className={`w-2.5 h-2.5 rounded-full ${isAvailable ? "bg-emerald-500" : "bg-rose-500"}`} />
        <span className={isAvailable ? "text-emerald-700" : "text-rose-700"}>
          {isAvailable ? "In Stock — Demo Inventory Available" : "Out of Stock"}
        </span>
      </div>

      {/* Short Description */}
      <p className="text-sm sm:text-base text-sdv-muted leading-relaxed border-t border-b border-sdv-border py-4">
        {shortDescription}
      </p>

      {/* Visual Commerce Actions Placeholder Area */}
      <div className="p-5 rounded-2xl bg-sdv-cream/60 border border-sdv-border space-y-3">
        <div className="flex items-center justify-between text-xs text-sdv-muted pb-2 border-b border-sdv-border">
          <span className="font-semibold text-sdv-primary flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-sdv-gold" />
            <span>Product Purchase System</span>
          </span>
          <span className="text-[11px] font-mono text-sdv-gold">[Development Preview]</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            disabled
            className="w-full py-3 bg-sdv-primary/10 text-sdv-primary font-semibold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-2 border border-sdv-border"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>ADD TO CART</span>
          </button>
          <button
            disabled
            className="w-full py-3 bg-sdv-gold/30 text-sdv-primary font-bold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-2 border border-sdv-gold/40"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>BUY NOW</span>
          </button>
        </div>

        <p className="text-[11px] text-center text-sdv-muted">
          E-commerce purchasing functionality will be enabled in subsequent phases.
        </p>
      </div>

      {/* Micro Trust Pills */}
      <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-sdv-muted">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-sdv-green shrink-0" />
          <span>Classical Formulation Standards</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sdv-green shrink-0" />
          <span>Authoritative Ayurvedic Knowledge</span>
        </div>
      </div>
    </div>
  );
}
