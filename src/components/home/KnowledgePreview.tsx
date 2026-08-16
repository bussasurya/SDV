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
    <section className="py-16 sm:py-24 bg-ayurveda-cream">
      <Container size="lg">
        <SectionHeading
          eyebrow="Ayurvedic Wellness Journal"
          title="Knowledge Centre"
          description="Explore classic remedies, dosha balance guides, and hair/skin health insights written by Ayurvedic physicians."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="sdv-card group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-ayurveda-green/10 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="relative aspect-video overflow-hidden bg-ayurveda-cream-surface">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold">{art.category}</Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-ayurveda-textMuted mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-ayurveda-green group-hover:text-ayurveda-gold-dark transition-colors line-clamp-2 mb-3 leading-snug">
                    <Link href={`/knowledge/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-ayurveda-textMuted line-clamp-3 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-ayurveda-green/10 flex items-center justify-between mt-auto">
                  <Link
                    href={`/knowledge/${art.slug}`}
                    className="text-xs font-bold text-ayurveda-green group-hover:text-ayurveda-gold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Article</span>
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
