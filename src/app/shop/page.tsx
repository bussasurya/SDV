import { Suspense } from "react";
import { db } from "@/lib/db";
import { Container } from "@/components/ui/Container";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { SearchBar } from "@/components/shop/SearchBar";
import { ProductSort } from "@/components/shop/ProductSort";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard } from "@/components/ui/ProductCard";
import { Pagination } from "@/components/shop/Pagination";
import { EmptyProducts } from "@/components/shop/EmptyProducts";

// Use Incremental Static Regeneration (ISR) for instant CDN delivery & client navigation performance
export const revalidate = 60;

interface ShopPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q || "";
  const categorySlug = resolvedParams.category || "";
  const minPrice = resolvedParams.minPrice ? parseFloat(resolvedParams.minPrice) : undefined;
  const maxPrice = resolvedParams.maxPrice ? parseFloat(resolvedParams.maxPrice) : undefined;
  const sort = resolvedParams.sort || "featured";
  const page = parseInt(resolvedParams.page || "1", 10);
  const pageSize = 9;

  // Build Prisma WHERE condition dynamically
  const where: any = {
    isPublished: true,
  };

  if (categorySlug) {
    where.category = { slug: categorySlug };
  }

  if (q) {
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { shortDescription: { contains: q, mode: "insensitive" } },
      { fullDescription: { contains: q, mode: "insensitive" } },
      { tags: { some: { tag: { contains: q, mode: "insensitive" } } } },
      { category: { name: { contains: q, mode: "insensitive" } } },
    ];
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.sellingPrice = {};
    if (minPrice !== undefined && !isNaN(minPrice)) where.sellingPrice.gte = minPrice;
    if (maxPrice !== undefined && !isNaN(maxPrice)) where.sellingPrice.lte = maxPrice;
  }

  // Build Prisma ORDER BY condition dynamically
  let orderBy: any = { createdAt: "desc" };
  if (sort === "price-asc") orderBy = { sellingPrice: "asc" };
  else if (sort === "price-desc") orderBy = { sellingPrice: "desc" };
  else if (sort === "name-asc") orderBy = { name: "asc" };
  else if (sort === "newest") orderBy = { createdAt: "desc" };
  else if (sort === "featured") orderBy = [{ isFeatured: "desc" }, { isBestSeller: "desc" }, { createdAt: "desc" }];

  // Perform database query & count concurrently
  const [categories, totalProducts, products, activeCategory] = await Promise.all([
    db.category.findMany({
      orderBy: { displayOrder: "asc" },
      select: { id: true, name: true, slug: true },
    }),
    db.product.count({ where }),
    db.product.findMany({
      where,
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        category: { select: { name: true, slug: true } },
        images: {
          orderBy: { displayOrder: "asc" },
          select: { url: true, altText: true },
        },
      },
    }),
    categorySlug
      ? db.category.findUnique({
          where: { slug: categorySlug },
          select: { name: true, description: true },
        })
      : null,
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <div className="w-full bg-sdv-cream min-h-screen pb-20">
      {/* Header Banner */}
      <ShopHeader
        categoryName={activeCategory?.name}
        categoryDescription={activeCategory?.description}
        totalProducts={totalProducts}
      />

      <Container size="lg" className="py-8 sm:py-12">
        {/* Controls Toolbar: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="w-full sm:max-w-md">
            <Suspense fallback={<div className="h-10 bg-white/50 rounded-full animate-pulse" />}>
              <SearchBar />
            </Suspense>
          </div>
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end">
            <Suspense fallback={<div className="h-9 w-32 bg-white/50 rounded-xl animate-pulse" />}>
              <ProductSort />
            </Suspense>
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar Component */}
          <Suspense fallback={<div className="w-64 h-96 bg-white/50 rounded-2xl animate-pulse" />}>
            <ProductFilters categories={categories} />
          </Suspense>

          {/* Product Grid Container */}
          <main className="flex-grow">
            {products.length === 0 ? (
              <EmptyProducts />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      slug={product.slug}
                      categoryName={product.category.name}
                      packSize={product.packSize}
                      mrp={Number(product.mrp)}
                      sellingPrice={Number(product.sellingPrice)}
                      rating={product.rating}
                      reviewsCount={product.reviewsCount}
                      imageUrl={
                        product.images[0]?.url ||
                        "/images/demo/kashayam.jpg"
                      }
                      isBestSeller={product.isBestSeller}
                      isFeatured={product.isFeatured}
                    />
                  ))}
                </div>

                <Suspense fallback={<div className="h-12 w-48 mx-auto bg-white/50 rounded-xl mt-8 animate-pulse" />}>
                  <Pagination currentPage={page} totalPages={totalPages} />
                </Suspense>
              </>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
}
