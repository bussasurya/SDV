'use client';

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    params.set("page", page.toString());
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-ayurveda-green/10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-ayurveda-green/20 text-ayurveda-green disabled:opacity-40 disabled:cursor-not-allowed hover:bg-ayurveda-cream-surface transition-colors"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <span className="text-xs font-semibold text-ayurveda-green px-4">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl border border-ayurveda-green/20 text-ayurveda-green disabled:opacity-40 disabled:cursor-not-allowed hover:bg-ayurveda-cream-surface transition-colors"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
