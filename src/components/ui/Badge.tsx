import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "sage" | "terracotta";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "gold",
  className,
  icon,
}: BadgeProps) {
  const variantClasses = {
    gold: "bg-ayurveda-gold/15 text-ayurveda-gold-dark border-ayurveda-gold/30",
    green: "bg-ayurveda-green-mint text-ayurveda-green border-ayurveda-green/20",
    sage: "bg-ayurveda-green-sage/10 text-ayurveda-green-sage border-ayurveda-green-sage/20",
    terracotta: "bg-ayurveda-terracotta/10 text-ayurveda-terracotta border-ayurveda-terracotta/20",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border",
          variantClasses[variant],
          className
        )
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
