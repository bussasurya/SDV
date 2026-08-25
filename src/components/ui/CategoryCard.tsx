import React from "react";
import Link from "next/link";
import { Sparkles, Scissors, Activity, ShieldAlert, HeartPulse, ArrowRight } from "lucide-react";
import { getCategoryTheme } from "@/lib/categoryColors";

interface CategoryCardProps {
  name: string;
  slug: string;
  description?: string;
  iconName?: string;
}

export function CategoryCard({
  name,
  slug,
  description,
  iconName,
}: CategoryCardProps) {
  const theme = getCategoryTheme(slug);

  const getIcon = (name: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Scissors":
        return <Scissors className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6" />;
      default:
        return <HeartPulse className="w-6 h-6" />;
    }
  };

  return (
    <Link
      href={`/shop?category=${slug}`}
      className="sdv-card group p-6 flex flex-col items-start justify-between h-full bg-white hover:bg-sdv-primary border border-sdv-border transition-all duration-300 rounded-2xl shadow-sm"
    >
      <div>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors shadow-sm"
          style={{ backgroundColor: theme.light, color: theme.base }}
        >
          {getIcon(iconName || "")}
        </div>
        <h3 className="font-oswald font-bold text-xl text-sdv-primary group-hover:text-white transition-colors mb-2 uppercase tracking-wide">
          {name}
        </h3>
        {description && (
          <p className="text-xs font-akshar text-sdv-muted group-hover:text-sdv-cream/80 line-clamp-2 leading-relaxed transition-colors">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-sdv-border group-hover:border-white/10 w-full flex items-center justify-between text-xs font-akshar font-bold text-sdv-primary group-hover:text-sdv-gold transition-colors">
        <span>Explore Category</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
