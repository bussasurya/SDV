import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CategoryCard } from "../ui/CategoryCard";

interface CategorySectionProps {
  categories: {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    icon?: string | null;
  }[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-ayurveda-cream">
      <Container size="lg">
        <SectionHeading
          eyebrow="Curated Formulations"
          title="Explore by Health Category"
          description="Targeted Ayurvedic solutions designed to address specific physical, dermal, and hair care concerns."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              slug={cat.slug}
              description={cat.description || undefined}
              iconName={cat.icon || undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
