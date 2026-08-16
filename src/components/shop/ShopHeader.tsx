import React from "react";
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
    <div className="bg-ayurveda-cream-surface/60 border-b border-ayurveda-green/10 py-10 sm:py-14">
      <Container size="lg">
        <div className="max-w-3xl space-y-3">
          <Badge variant="gold">
            {categoryName ? `Category: ${categoryName}` : "Complete Product Catalogue"}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ayurveda-green tracking-tight">
            {categoryName || "Ayurvedic Formulations"}
          </h1>

          <p className="text-sm sm:text-base text-ayurveda-textMuted leading-relaxed">
            {categoryDescription ||
              "[DEMO CATALOGUE — Authentic Ayurvedic formulations handcrafted according to traditional principles. Explore by category, health focus, or search keyword.]"}
          </p>

          <div className="pt-2 text-xs font-semibold text-ayurveda-green">
            Showing {totalProducts} {totalProducts === 1 ? "Product" : "Products"}
          </div>
        </div>
      </Container>
    </div>
  );
}
