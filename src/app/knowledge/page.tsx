import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Sparkles, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "From the Physician's Desk | SDV Ayurveda",
  description: "Ayurvedic insights, formulation wisdom, and clinical perspectives from SDV Ayurvedic Preparations.",
};

export default function KnowledgePage() {
  const articles = [
    {
      id: "1",
      title: "Classical Formulation Principles in Sahasrayoga",
      category: "Formulation Science",
      date: "August 2026",
      excerpt: "Understanding the traditional decoction and extraction standards laid down in classical Ayurvedic texts.",
    },
    {
      id: "2",
      title: "Understanding Tailam & Enna Preparations",
      category: "Ayurvedic Oils",
      date: "August 2026",
      excerpt: "A look into the slow decoction and herbal infusion processes used in traditional oil formulations.",
    },
    {
      id: "3",
      title: "The Legacy of Janardhanan Vaidyan",
      category: "Heritage",
      date: "August 2026",
      excerpt: "Carrying forward six decades of social commitment and accessible authentic Ayurveda.",
    },
  ];

  return (
    <div className="w-full bg-sdv-cream min-h-screen py-12 sm:py-16 font-akshar">
      <Container size="lg" className="space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Clinical Perspectives & Guidance
            </Badge>
            <Badge variant="sage" className="font-mono text-[10px] uppercase">
              Demo Content
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide">
            From the Physician&apos;s Desk
          </h1>

          <p className="text-base sm:text-lg text-sdv-muted leading-relaxed font-akshar">
            Traditional insights, classical formulation guidance, and Ayurvedic perspectives from the practitioners of SDV Ayurvedic Preparations.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sdv-primary/5 border border-sdv-border text-xs text-sdv-muted pt-2">
            <Info className="w-4 h-4 text-sdv-gold shrink-0" />
            <span>Articles displayed below are development demo content for client review. Official SDV physician articles will be published at launch.</span>
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-2xl border border-sdv-border shadow-sm flex flex-col justify-between hover:shadow-elevated transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-sdv-muted">
                  <span className="badge-gold font-akshar">{article.category}</span>
                  <span className="font-mono text-[10px] text-sdv-gold uppercase">Demo Content</span>
                </div>
                <h3 className="font-oswald font-bold text-xl text-sdv-primary uppercase tracking-wide">
                  {article.title}
                </h3>
                <p className="text-xs text-sdv-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-sdv-border flex items-center gap-2 text-xs font-bold text-sdv-green">
                <BookOpen className="w-4 h-4" />
                <span>Read Feature Article</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
