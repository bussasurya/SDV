import React from "react";
import { db } from "@/lib/db";
import { ProductCard } from "../ui/ProductCard";

interface RelatedProductsProps {
  currentProductId: string;
  categoryId: string;
}

export async function RelatedProducts({
  currentProductId,
  categoryId,
}: RelatedProductsProps) {
  const relatedProducts = await db.product.findMany({
    where: {
      categoryId,
      id: { not: currentProductId },
      isPublished: true,
    },
    take: 4,
    include: {
      category: { select: { name: true } },
      images: {
        orderBy: { displayOrder: "asc" },
        select: { url: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  if (relatedProducts.length === 0) return null;

  return (
    <section className="pt-12 border-t border-ayurveda-green/10 space-y-6">
      <div className="text-left">
        <span className="badge-gold mb-2 inline-block">Complementary Formulations</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ayurveda-green">
          Related Ayurvedic Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            slug={prod.slug}
            categoryName={prod.category.name}
            packSize={prod.packSize}
            mrp={Number(prod.mrp)}
            sellingPrice={Number(prod.sellingPrice)}
            rating={prod.rating}
            reviewsCount={prod.reviewsCount}
            imageUrl={
              prod.images[0]?.url ||
              "https://images.unsplash.com/photo-1608248597261-23d917f918e9?auto=format&fit=crop&w=800&q=80"
            }
            isBestSeller={prod.isBestSeller}
            isFeatured={prod.isFeatured}
          />
        ))}
      </div>
    </section>
  );
}
