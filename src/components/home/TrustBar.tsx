import React from "react";
import { ShieldCheck, BookOpen, Clock, Award } from "lucide-react";
import { Container } from "../ui/Container";

export function TrustBar() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-sdv-green" />,
      title: "Six Decades of Heritage",
      description: "Established Ayurvedic medicine manufacturer guided by traditional expertise since inception.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-sdv-green" />,
      title: "Authoritative Classical Texts",
      description: "Formulations prepared strictly according to Sahasrayoga, Bhaishajyaratnavali, and Ashtanga Hridaya.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sdv-green" />,
      title: "Uncompromising Quality",
      description: "Dedicated to making authentic Ayurvedic preparations accessible and affordable.",
    },
    {
      icon: (
        <img
          src="/brand/gmp-certificate.webp"
          alt="GMP Certified Quality Assurance"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Quality Assurance",
      description: "Prepared in accordance with established manufacturing standards and traditional care.",
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-sdv-border">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-sdv-cream/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-sdv-cream text-sdv-primary shrink-0 shadow-sm flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-oswald font-bold text-sm text-sdv-primary tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-sdv-muted mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
