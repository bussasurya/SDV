import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, Truck, ShoppingBag, Lock } from "lucide-react";
import { Badge } from "../ui/Badge";

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
  mrp,
  sellingPrice,
  stock,
  rating,
  reviewsCount,
  shortDescription,
}: ProductInfoProps) {
  const discountPercent = mrp > sellingPrice ? Math.round(((mrp - sellingPrice) / mrp) * 100) : 0;
  const isAvailable = stock > 0;
  const isDemo = name.includes("[DEMO");

  return (
    <div className="space-y-6">
      {/* Category Link, Pack Size & Demo Indicator */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        {isDemo && (
          <Badge variant="sage" className="font-mono text-[10px]">
            Demo Product Data
          </Badge>
        )}
        <Link
          href={`/shop?category=${categorySlug}`}
          className="text-ayurveda-green font-semibold hover:underline"
        >
          {categoryName}
        </Link>
        <span className="text-ayurveda-textMuted">•</span>
        <span className="bg-white border border-ayurveda-green/15 px-2.5 py-0.5 rounded-full font-medium text-ayurveda-textMuted">
          Pack Size: {packSize}
        </span>
        <span className="text-ayurveda-textMuted">•</span>
        <span className="text-ayurveda-textMuted font-mono">SKU: {sku}</span>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-ayurveda-green leading-tight">
        {name}
      </h1>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-2 text-xs">
        <div className="flex items-center text-amber-500">
          <Star className="w-4 h-4 fill-amber-500" />
        </div>
        <span className="font-bold text-ayurveda-green text-sm">{rating.toFixed(1)}</span>
        <span className="text-ayurveda-textMuted">({reviewsCount} reviews)</span>
      </div>

      {/* Price & Discount Section */}
      <div className="p-4 rounded-2xl bg-white border border-ayurveda-green/10 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-ayurveda-green">
              ₹{sellingPrice}
            </span>
            {mrp > sellingPrice && (
              <span className="text-base text-ayurveda-textMuted line-through">
                ₹{mrp}
              </span>
            )}
          </div>
          <span className="text-[11px] text-ayurveda-textMuted block mt-1">
            Inclusive of all taxes
          </span>
        </div>

        {discountPercent > 0 && (
          <Badge variant="terracotta" className="text-xs px-3 py-1">
            Save {discountPercent}%
          </Badge>
        )}
      </div>

      {/* Stock Availability Indicator */}
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span className={`w-2.5 h-2.5 rounded-full ${isAvailable ? "bg-emerald-500" : "bg-rose-500"}`} />
        <span className={isAvailable ? "text-emerald-700" : "text-rose-700"}>
          {isAvailable ? (stock < 10 ? `Low Stock (Only ${stock} left)` : "In Stock — Ready for Dispatch") : "Out of Stock"}
        </span>
      </div>

      {/* Short Description */}
      <p className="text-sm sm:text-base text-ayurveda-textMuted leading-relaxed border-t border-b border-ayurveda-green/10 py-4">
        {shortDescription}
      </p>

      {/* Visual Commerce Actions Placeholder Area (Phase 5 Hook) */}
      <div className="p-5 rounded-2xl bg-ayurveda-cream-surface border border-ayurveda-green/15 space-y-3">
        <div className="flex items-center justify-between text-xs text-ayurveda-textMuted pb-2 border-b border-ayurveda-green/10">
          <span className="font-semibold text-ayurveda-green flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-ayurveda-gold" />
            <span>Product Purchase System</span>
          </span>
          <span className="text-[11px] font-mono text-ayurveda-gold">[Phase 5 Feature]</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            disabled
            className="w-full py-3 bg-ayurveda-green/20 text-ayurveda-green-dark font-semibold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-2 border border-ayurveda-green/20"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>ADD TO CART</span>
          </button>
          <button
            disabled
            className="w-full py-3 bg-ayurveda-gold/30 text-ayurveda-green-dark font-bold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-2 border border-ayurveda-gold/40"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>BUY NOW</span>
          </button>
        </div>

        <p className="text-[11px] text-center text-ayurveda-textMuted">
          Cart & Checkout functionality will be activated in <strong>Phase 5</strong>.
        </p>
      </div>

      {/* Micro Trust Pills */}
      <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-ayurveda-textMuted">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-ayurveda-green shrink-0" />
          <span>[SDV Quality Assurance]</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-ayurveda-green shrink-0" />
          <span>[Express Pan-India Shipping]</span>
        </div>
      </div>
    </div>
  );
}
