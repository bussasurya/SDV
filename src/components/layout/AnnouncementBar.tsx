import React from "react";
import { Sparkles } from "lucide-react";
import { Container } from "../ui/Container";

export function AnnouncementBar() {
  const announcementText = process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR || "[SDV ANNOUNCEMENT BAR — Delivery & Offer Information]";

  return (
    <div className="bg-ayurveda-green-dark text-ayurveda-cream text-xs py-2 px-4 border-b border-ayurveda-gold/20">
      <Container size="lg" className="flex items-center justify-center text-center gap-2 font-medium tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-ayurveda-gold shrink-0" />
        <span className="truncate sm:whitespace-normal">{announcementText}</span>
      </Container>
    </div>
  );
}
