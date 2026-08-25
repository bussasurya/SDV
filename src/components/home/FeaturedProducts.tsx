import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";

interface FeaturedProductsProps {
  products: {
    id: string;
    name: string;
    slug: string;
    mrp: any;
    sellingPrice: any;
    rating: number;
    reviewsCount: number;
    isBestSeller: boolean;
    isFeatured: boolean;
    packSize: string;
    category?: { name: string } | null;
    images: { url: string }[];
  }[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-sdv-border">
      <Container size="lg">
        <SectionHeading
          eyebrow="Formulation Highlights"
          title="Featured Ayurvedic Preparations"
          description="Traditional Ayurvedic formulations prepared with consistent quality, care, and adherence to classical standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              name={prod.name}
              slug={prod.slug}
              categoryName={prod.category?.name}
              packSize={prod.packSize}
              mrp={Number(prod.mrp)}
              sellingPrice={Number(prod.sellingPrice)}
              rating={prod.rating}
              reviewsCount={prod.reviewsCount}
              imageUrl={prod.images[0]?.url || "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80"}
              isBestSeller={prod.isBestSeller}
              isFeatured={prod.isFeatured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/shop" variant="outline" size="lg">
            <span>Explore Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
