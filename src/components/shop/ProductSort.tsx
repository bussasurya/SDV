'use client';

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

export function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams ? searchParams.get("sort") || "featured" : "featured";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    params.set("sort", e.target.value);
    params.set("page", "1");
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <ArrowUpDown className="w-4 h-4 text-ayurveda-green shrink-0" />
      <span className="text-ayurveda-textMuted font-medium whitespace-nowrap">Sort by:</span>
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="bg-white border border-ayurveda-green/20 text-ayurveda-green font-semibold py-2 px-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-ayurveda-green shadow-sm cursor-pointer"
      >
        <option value="featured">Featured & Best Sellers</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="newest">Newest Formulations</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </div>
  );
}
