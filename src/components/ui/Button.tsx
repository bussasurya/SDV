import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ayurveda-green active:scale-[0.99]";

  const variantClasses = {
    primary: "bg-ayurveda-green text-white hover:bg-ayurveda-green-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
    gold: "bg-ayurveda-gold text-ayurveda-green-dark font-bold hover:bg-amber-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-ayurveda-green text-ayurveda-green hover:bg-ayurveda-green-mint hover:text-ayurveda-green-dark",
    ghost: "text-ayurveda-green hover:bg-ayurveda-green/5 hover:text-ayurveda-green-dark",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const combinedClasses = twMerge(
    clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
