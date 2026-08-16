'use client';

import React, { useState } from "react";
import { Badge } from "../ui/Badge";

interface ProductImageItem {
  id?: string;
  url: string;
  altText?: string | null;
}

interface ProductGalleryProps {
  images: ProductImageItem[];
  productName: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export function ProductGallery({
  images,
  productName,
  isBestSeller,
  isFeatured,
}: ProductGalleryProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80";
  const galleryImages = images.length > 0 ? images : [{ url: fallbackImage, altText: productName }];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Primary Main Image View */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-ayurveda-green/10 shadow-sm group">
        <img
          src={galleryImages[selectedImageIndex]?.url || fallbackImage}
          alt={galleryImages[selectedImageIndex]?.altText || productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {isBestSeller && <Badge variant="gold">Best Seller</Badge>}
          {isFeatured && <Badge variant="green">Featured Formulation</Badge>}
        </div>
      </div>

      {/* Thumbnails Row */}
      {galleryImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden bg-white border-2 shrink-0 transition-all ${
                selectedImageIndex === idx
                  ? "border-ayurveda-gold shadow-md scale-105"
                  : "border-ayurveda-green/10 hover:border-ayurveda-green/40 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img.url}
                alt={img.altText || `${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
