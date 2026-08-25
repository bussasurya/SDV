import { db } from "@/lib/db";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinderPromo } from "@/components/home/FinderPromo";
import { BrandStory } from "@/components/home/BrandStory";
import { WhySDV } from "@/components/home/WhySDV";
import { KnowledgePreview } from "@/components/home/KnowledgePreview";
import { FinalCTA } from "@/components/home/FinalCTA";

// Use Incremental Static Regeneration (ISR) for instant CDN delivery & client navigation performance
export const revalidate = 60;

export default async function HomePage() {
  // Query database in parallel for optimal build & background revalidation performance
  const [categories, featuredProducts, articles] = await Promise.all([
    db.category.findMany({
      orderBy: { displayOrder: "asc" },
    }),
    db.product.findMany({
      take: 4,
      include: {
        category: true,
        images: {
          orderBy: { displayOrder: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.article.findMany({
      take: 3,
      orderBy: { publishedAt: "desc" },
    }),
  ]);

  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <CategorySection categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <FinderPromo />
      <BrandStory />
      <WhySDV />
      <KnowledgePreview articles={articles} />
      <FinalCTA />
    </div>
  );
}
