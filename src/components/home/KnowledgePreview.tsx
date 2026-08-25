import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
}

interface KnowledgePreviewProps {
  articles: ArticleItem[];
}

export function KnowledgePreview({ articles }: KnowledgePreviewProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-sdv-cream">
      <Container size="lg">
        <SectionHeading
          eyebrow="Clinical Perspectives & Guidance"
          title="From the Physician's Desk"
          description="Insights into classical Ayurvedic formulations, traditional preparation processes, and wellness principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="sdv-card group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-sdv-border transition-all duration-300 hover:shadow-elevated"
            >
              <div className="relative aspect-video overflow-hidden bg-sdv-cream">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <Badge variant="gold" className="text-[10px] font-mono uppercase">
                    Demo Article
                  </Badge>
                  <Badge variant="gold">{art.category}</Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between font-akshar">
                <div>
                  <div className="flex items-center gap-2 text-xs text-sdv-muted mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-oswald font-bold text-xl text-sdv-primary group-hover:text-sdv-green transition-colors line-clamp-2 mb-3 leading-snug uppercase tracking-wide">
                    <Link href={`/knowledge/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-sdv-muted line-clamp-3 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sdv-border flex items-center justify-between mt-auto">
                  <Link
                    href={`/knowledge/${art.slug}`}
                    className="text-xs font-bold text-sdv-green group-hover:text-sdv-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <span>Read Feature Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/knowledge" variant="outline">
            <BookOpen className="w-4 h-4" />
            <span>Explore All Articles</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
