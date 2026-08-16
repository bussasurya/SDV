import React from "react";
import Link from "next/link";
import { Star, ArrowRight, Eye } from "lucide-react";
import { Badge } from "./Badge";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  categoryName?: string;
  packSize?: string;
  mrp: number;
  sellingPrice: number;
  rating?: number;
  reviewsCount?: number;
  imageUrl: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  name,
  slug,
  categoryName,
  packSize,
  mrp,
  sellingPrice,
  rating = 4.9,
  reviewsCount = 0,
  imageUrl,
  isBestSeller,
  isFeatured,
}: ProductCardProps) {
  const discountPercent = mrp > sellingPrice ? Math.round(((mrp - sellingPrice) / mrp) * 100) : 0;
  const isDemoProduct = name.includes("[DEMO");

  return (
    <div className="sdv-card group flex flex-col h-full overflow-hidden bg-white border border-ayurveda-green/10 rounded-2xl transition-all duration-300 hover:shadow-elevated hover:border-ayurveda-gold/40">
      {/* Image & Badges Container */}
      <div className="relative aspect-square overflow-hidden bg-ayurveda-cream-surface">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {isDemoProduct && (
            <Badge variant="sage" className="shadow-sm font-mono text-[10px]">
              Demo Product
            </Badge>
          )}
          {isBestSeller && (
            <Badge variant="gold" className="shadow-sm">
              Best Seller
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge variant="terracotta" className="shadow-sm">
              {discountPercent}% OFF
            </Badge>
          )}
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-ayurveda-green-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <Link
            href={`/products/${slug}`}
            className="btn-ayurveda-gold text-xs px-4 py-2.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>View Product</span>
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Pack Size */}
          <div className="flex items-center justify-between text-xs text-ayurveda-textMuted mb-2">
            <span>{categoryName || "Ayurvedic Formulation"}</span>
            {packSize && <span className="font-medium bg-ayurveda-cream-surface px-2 py-0.5 rounded text-[11px]">{packSize}</span>}
          </div>

          {/* Product Title */}
          <h3 className="font-serif font-bold text-lg text-ayurveda-green group-hover:text-ayurveda-gold-dark transition-colors line-clamp-2 mb-2 leading-snug">
            <Link href={`/products/${slug}`}>{name}</Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs mb-4">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
            </div>
            <span className="font-bold text-ayurveda-green">{rating.toFixed(1)}</span>
            <span className="text-ayurveda-textMuted">({reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-ayurveda-green/10 flex items-center justify-between mt-auto">
          <div>
            {mrp > sellingPrice && (
              <span className="text-xs text-ayurveda-textMuted line-through block leading-none mb-1">
                ₹{mrp}
              </span>
            )}
            <span className="text-xl font-bold text-ayurveda-green leading-none">
              ₹{sellingPrice}
            </span>
          </div>

          <Link
            href={`/products/${slug}`}
            className="w-9 h-9 rounded-full bg-ayurveda-green-mint text-ayurveda-green group-hover:bg-ayurveda-green group-hover:text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label={`View ${name}`}
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
