import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000";
  const defaultMessage = encodeURIComponent("Hello SDV Ayurveda, I would like to inquire about your classical formulations.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      aria-label="Contact SDV Ayurveda on WhatsApp"
      title="Chat with SDV Ayurveda Support"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      <span className="sr-only">Contact SDV Ayurveda on WhatsApp</span>
    </a>
  );
}
