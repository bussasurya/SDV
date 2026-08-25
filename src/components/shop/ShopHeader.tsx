import React from "react";
import { Info } from "lucide-react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

interface ShopHeaderProps {
  categoryName?: string;
  categoryDescription?: string | null;
  totalProducts: number;
}

export function ShopHeader({
  categoryName,
  categoryDescription,
  totalProducts,
}: ShopHeaderProps) {
  return (
    <div className="bg-sdv-cream border-b border-sdv-border py-10 sm:py-14 font-akshar">
      <Container size="lg">
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold">
            {categoryName ? `Formulation: ${categoryName}` : "Complete Product Catalogue"}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            {categoryName || "Ayurvedic Preparations"}
          </h1>

          <p className="text-sm sm:text-base text-sdv-muted leading-relaxed">
            {categoryDescription ||
              "Authentic Ayurvedic formulations prepared according to classical principles. Explore by category, formulation type, or search keyword."}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-sdv-border/60">
            <div className="text-xs font-bold text-sdv-green uppercase tracking-wider">
              Showing {totalProducts} {totalProducts === 1 ? "Preparation" : "Preparations"}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sdv-primary/5 border border-sdv-border text-[11px] text-sdv-muted">
              <Info className="w-3.5 h-3.5 text-sdv-gold shrink-0" />
              <span>Demo catalogue — product names, images, pricing and specifications will be replaced with official SDV catalogue data before launch.</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
