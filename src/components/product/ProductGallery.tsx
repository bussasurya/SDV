'use client';

import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { getFormulationImage } from "@/lib/categoryColors";

interface ProductImageItem {
  id?: string;
  url: string;
  altText?: string | null;
}

interface ProductGalleryProps {
  images: ProductImageItem[];
  productName: string;
  categoryName?: string;
}

export function ProductGallery({
  images,
  productName,
  categoryName,
}: ProductGalleryProps) {
  const defaultImage = getFormulationImage(categoryName || productName);
  const galleryImages = images.length > 0
    ? images.map(img => ({ ...img, url: getFormulationImage(categoryName || productName, img.url) }))
    : [{ url: defaultImage, altText: productName }];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Primary Main Image View */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-sdv-border shadow-sm group">
        <img
          src={galleryImages[selectedImageIndex]?.url || defaultImage}
          alt={galleryImages[selectedImageIndex]?.altText || productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Development Badge Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 font-akshar">
          <Badge variant="gold" className="text-[10px] uppercase font-bold">
            Demo Product Media
          </Badge>
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
                  ? "border-sdv-gold shadow-md scale-105"
                  : "border-sdv-border hover:border-sdv-primary/40 opacity-70 hover:opacity-100"
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
