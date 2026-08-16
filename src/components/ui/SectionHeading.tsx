import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  showDivider?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  showDivider = true,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={twMerge(clsx("flex flex-col max-w-3xl mb-12 sm:mb-16", alignmentClasses[align], className))}>
      {eyebrow && (
        <span className="badge-gold mb-3 inline-block">
          {eyebrow}
        </span>
      )}
      <h2 className={twMerge(clsx("text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ayurveda-green tracking-tight leading-tight", titleClassName))}>
        {title}
      </h2>
      {showDivider && <div className="gold-divider my-4" />}
      {description && (
        <p className="text-base sm:text-lg text-ayurveda-textMuted leading-relaxed font-normal mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
