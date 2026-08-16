import React from "react";
import { ShieldCheck, Leaf, Truck, Award } from "lucide-react";
import { Container } from "../ui/Container";

export function TrustBar() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-ayurveda-green" />,
      title: "[SDV FORMULATION STANDARDS]",
      description: "[SDV Formulation & Quality Guidelines — To be provided by Client]",
    },
    {
      icon: <Leaf className="w-6 h-6 text-ayurveda-green" />,
      title: "[SDV INGREDIENT POLICY]",
      description: "[SDV Botanical Sourcing & Ingredient Policy — To be provided by Client]",
    },
    {
      icon: <Award className="w-6 h-6 text-ayurveda-green" />,
      title: "[SDV PREPARATION PROCESS]",
      description: "[SDV Traditional Preparation Method — To be provided by Client]",
    },
    {
      icon: <Truck className="w-6 h-6 text-ayurveda-green" />,
      title: "[SDV DELIVERY INFORMATION]",
      description: "[SDV Shipping Rates & Delivery Timelines — To be provided by Client]",
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-ayurveda-green/5">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-ayurveda-cream-surface/50 transition-colors"
            >
              <div className="p-3 rounded-xl bg-ayurveda-green-mint text-ayurveda-green shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-ayurveda-green">
                  {item.title}
                </h4>
                <p className="text-xs text-ayurveda-textMuted mt-1 leading-relaxed">
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
