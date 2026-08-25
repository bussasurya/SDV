import React from "react";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { Badge } from "./Badge";
import { getCategoryTheme, getFormulationImage } from "@/lib/categoryColors";

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
  name,
  slug,
  categoryName,
  packSize,
  sellingPrice,
  imageUrl,
}: ProductCardProps) {
  const categoryTheme = getCategoryTheme(categoryName);
  const displayImage = getFormulationImage(categoryName, imageUrl);

  return (
    <div className="sdv-card group flex flex-col h-full overflow-hidden bg-white border border-sdv-border rounded-2xl transition-all duration-300 hover:shadow-elevated hover:border-sdv-gold/40">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-sdv-cream/50">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Demo Tag Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <Badge variant="gold" className="shadow-sm text-[10px] uppercase font-bold font-akshar">
            Demo Product
          </Badge>
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-sdv-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <Link
            href={`/products/${slug}`}
            className="btn-ayurveda-gold text-xs px-4 py-2.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 font-akshar"
          >
            <Eye className="w-4 h-4" />
            <span>View Product</span>
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between font-akshar">
        <div>
          {/* Category Tag with Formulation Colors & Pack Size */}
          <div className="flex items-center justify-between text-xs mb-2.5">
            <span
              className="px-2.5 py-0.5 rounded-full font-semibold text-[11px]"
              style={{ backgroundColor: categoryTheme.light, color: categoryTheme.base }}
            >
              {categoryName || "Ayurvedic Preparation"}
            </span>
            {packSize && (
              <span className="font-medium bg-sdv-cream px-2 py-0.5 rounded text-[11px] text-sdv-muted">
                {packSize}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-akshar font-bold text-base text-sdv-primary group-hover:text-sdv-green transition-colors line-clamp-2 mb-3 leading-snug">
            <Link href={`/products/${slug}`}>{name}</Link>
          </h3>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-sdv-border flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-sdv-muted font-mono uppercase block leading-none mb-1">
              Demo Price
            </span>
            <span className="text-xl font-oswald font-bold text-sdv-primary leading-none">
              ₹{sellingPrice}
            </span>
          </div>

          <Link
            href={`/products/${slug}`}
            className="w-9 h-9 rounded-full bg-sdv-cream text-sdv-primary group-hover:bg-sdv-primary group-hover:text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label={`View ${name}`}
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
