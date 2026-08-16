import React from "react";
import Link from "next/link";
import { SearchX, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";

export function EmptyProducts() {
  return (
    <div className="py-16 text-center space-y-4 max-w-md mx-auto bg-white p-8 rounded-2xl border border-ayurveda-green/10 shadow-sm">
      <div className="w-16 h-16 rounded-full bg-ayurveda-cream-surface text-ayurveda-textMuted mx-auto flex items-center justify-center">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="font-serif font-bold text-xl text-ayurveda-green">
        No Products Found
      </h3>
      <p className="text-xs sm:text-sm text-ayurveda-textMuted leading-relaxed">
        We couldn't find any formulations matching your search query or selected filters. Try broadening your criteria.
      </p>
      <div className="pt-2">
        <Button href="/shop" variant="outline" size="sm">
          <RotateCcw className="w-4 h-4" />
          <span>Reset All Filters</span>
        </Button>
      </div>
    </div>
  );
}
