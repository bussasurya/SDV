import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function FinderPlaceholderPage() {
  return (
    <div className="py-20 sm:py-28 bg-ayurveda-cream min-h-[70vh] flex items-center">
      <Container size="md" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-ayurveda-gold/20 text-ayurveda-green mx-auto flex items-center justify-center border border-ayurveda-gold/30">
          <Sparkles className="w-8 h-8 text-ayurveda-gold" />
        </div>

        <Badge variant="gold">Phase 4 Scheduled Feature</Badge>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ayurveda-green">
          Find Your Product — Guided Recommendation System
        </h1>

        <p className="text-base sm:text-lg text-ayurveda-textMuted max-w-xl mx-auto leading-relaxed">
          The rule-driven Product Finder Engine is scheduled for implementation in <strong>Phase 4</strong>. Once activated, it will guide you through a 4-step questionnaire matching your health concerns with SDV formulations.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Button>

          <Button href="/shop" variant="outline">
            <span>Explore Shop Catalogue</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
