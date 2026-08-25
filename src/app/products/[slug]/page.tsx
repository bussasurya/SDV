import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, Home } from "lucide-react";
import { db } from "@/lib/db";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductDetailsTabs } from "@/components/product/ProductDetailsTabs";
import { ProductFaqAccordion } from "@/components/product/ProductFaqAccordion";
import { RelatedProducts } from "@/components/product/RelatedProducts";

export const dynamic = "force-dynamic";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO metadata per product
export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await db.product.findUnique({
    where: { slug },
    select: { name: true, shortDescription: true },
  });

  if (!product) {
    return {
      title: "Product Not Found | SDV Ayurveda",
    };
  }

  return {
    title: `${product.name} | SDV Ayurveda`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | SDV Ayurveda`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  const product = await db.product.findUnique({
    where: { slug },
    include: {
      category: { select: { id: true, name: true, slug: true } },
      images: { orderBy: { displayOrder: "asc" } },
      ingredients: true,
      faqs: true,
    },
  });

  if (!product || !product.isPublished) {
    notFound();
  }

  return (
    <div className="w-full bg-sdv-cream min-h-screen py-8 sm:py-12">
      <Container size="lg" className="space-y-8 sm:space-y-12">
        
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sdv-muted overflow-x-auto pb-2 font-akshar">
          <Link href="/" className="hover:text-sdv-primary flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sdv-border" />
          <Link href="/shop" className="hover:text-sdv-primary">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sdv-border" />
          <Link href={`/shop?category=${product.category.slug}`} className="hover:text-sdv-primary">
            {product.category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-sdv-border" />
          <span className="font-semibold text-sdv-primary truncate max-w-[200px] sm:max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Top Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery
              images={product.images}
              productName={product.name}
              categoryName={product.category.name}
            />
          </div>

          {/* Right Column: Product Info & Commerce Hook */}
          <div className="lg:col-span-6">
            <ProductInfo
              id={product.id}
              name={product.name}
              sku={product.sku}
              categoryName={product.category.name}
              categorySlug={product.category.slug}
              packSize={product.packSize}
              mrp={Number(product.mrp)}
              sellingPrice={Number(product.sellingPrice)}
              stock={product.stock}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              shortDescription={product.shortDescription}
            />
          </div>
        </div>

        {/* Product Details Tabs Section */}
        <ProductDetailsTabs
          fullDescription={product.fullDescription}
          traditionalUses={product.traditionalUses}
          directionsForUse={product.directionsForUse}
          dosage={product.dosage}
          precautions={product.precautions}
          storage={product.storage}
          ingredients={product.ingredients}
        />

        {/* FAQs Accordion */}
        <ProductFaqAccordion faqs={product.faqs} />

        {/* Related Products Server Component */}
        <RelatedProducts
          currentProductId={product.id}
          categoryId={product.category.id}
        />

      </Container>
    </div>
  );
}
