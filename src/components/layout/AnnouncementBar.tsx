import React from "react";
import { Sparkles } from "lucide-react";
import { Container } from "../ui/Container";

export function AnnouncementBar() {
  const announcementText = process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR || "SDV Ayurvedic Preparations — Tradition You can trust";

  return (
    <div className="bg-sdv-primary text-sdv-cream text-xs py-2 px-4 border-b border-sdv-gold/20 font-akshar">
      <Container size="lg" className="flex items-center justify-center text-center gap-2 font-medium tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-sdv-gold shrink-0" />
        <span className="truncate sm:whitespace-normal">{announcementText}</span>
      </Container>
    </div>
  );
}
