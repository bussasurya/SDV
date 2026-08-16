'use client';

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, X, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";

interface CategoryOption {
  id: string;
  name: string;
  slug: string;
}

interface ProductFiltersProps {
  categories: CategoryOption[];
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const selectedCategory = searchParams ? searchParams.get("category") || "" : "";
  const minPrice = searchParams ? searchParams.get("minPrice") || "" : "";
  const maxPrice = searchParams ? searchParams.get("maxPrice") || "" : "";

  const [minPriceInput, setMinPriceInput] = useState(minPrice);
  const [maxPriceInput, setMaxPriceInput] = useState(maxPrice);

  const handleCategorySelect = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    if (categorySlug === selectedCategory) {
      params.delete("category");
    } else {
      params.set("category", categorySlug);
    }
    params.set("page", "1");
    router.push(`/shop?${params.toString()}`);
  };

  const handlePriceApply = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    if (minPriceInput) params.set("minPrice", minPriceInput);
    else params.delete("minPrice");

    if (maxPriceInput) params.set("maxPrice", maxPriceInput);
    else params.delete("maxPrice");

    params.set("page", "1");
    router.push(`/shop?${params.toString()}`);
  };

  const handleResetFilters = () => {
    setMinPriceInput("");
    setMaxPriceInput("");
    router.push("/shop");
  };

  const hasActiveFilters = Boolean(
    selectedCategory || minPrice || maxPrice || (searchParams ? searchParams.get("q") : "")
  );

  const filterContent = (
    <div className="space-y-6 text-sm">
      {/* Active Filter Clear Header */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pb-4 border-b border-ayurveda-green/10">
          <span className="text-xs font-bold text-ayurveda-green uppercase tracking-wider">Active Filters</span>
          <button
            onClick={handleResetFilters}
            className="text-xs text-ayurveda-terracotta hover:underline font-medium flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        </div>
      )}

      {/* Category Filter */}
      <div>
        <h3 className="font-serif font-bold text-base text-ayurveda-green mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategorySelect("")}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
              !selectedCategory
                ? "bg-ayurveda-green text-white font-bold"
                : "text-ayurveda-green-dark hover:bg-ayurveda-cream-surface"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.slug)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? "bg-ayurveda-green text-white font-bold"
                  : "text-ayurveda-green-dark hover:bg-ayurveda-cream-surface"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="pt-4 border-t border-ayurveda-green/10">
        <h3 className="font-serif font-bold text-base text-ayurveda-green mb-3">
          Price Range (₹)
        </h3>
        <form onSubmit={handlePriceApply} className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minPriceInput}
              onChange={(e) => setMinPriceInput(e.target.value)}
              className="w-full px-3 py-1.5 border border-ayurveda-green/20 rounded-lg text-xs focus:ring-2 focus:ring-ayurveda-green"
            />
            <span className="text-ayurveda-textMuted">-</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPriceInput}
              onChange={(e) => setMaxPriceInput(e.target.value)}
              className="w-full px-3 py-1.5 border border-ayurveda-green/20 rounded-lg text-xs focus:ring-2 focus:ring-ayurveda-green"
            />
          </div>
          <Button type="submit" variant="outline" size="sm" className="w-full">
            Apply Price Filter
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white p-6 rounded-2xl border border-ayurveda-green/10 shadow-sm h-fit">
        {filterContent}
      </aside>

      {/* Mobile Filter Trigger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-ayurveda-green/20 rounded-xl text-xs font-semibold text-ayurveda-green shadow-sm"
        >
          <Filter className="w-4 h-4 text-ayurveda-gold" />
          <span>Filter Products</span>
          {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-ayurveda-gold" />}
        </button>

        {/* Mobile Filter Drawer */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-ayurveda-green-dark/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="relative w-full max-w-xs bg-white h-full p-6 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-ayurveda-green/10 mb-6">
                  <span className="font-serif font-bold text-lg text-ayurveda-green">Filter Products</span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1 rounded-full text-ayurveda-green hover:bg-ayurveda-cream-surface"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {filterContent}
              </div>
              <div className="pt-6 border-t border-ayurveda-green/10">
                <Button variant="primary" className="w-full" onClick={() => setIsMobileOpen(false)}>
                  View Filtered Products
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
