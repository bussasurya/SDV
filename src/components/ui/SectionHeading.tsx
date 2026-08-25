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
    <div className={twMerge(clsx("flex flex-col max-w-3xl mb-10 sm:mb-14", alignmentClasses[align], className))}>
      {eyebrow && (
        <span className="badge-gold mb-3 inline-block font-akshar">
          {eyebrow}
        </span>
      )}
      <h2 className={twMerge(clsx("text-3xl sm:text-4xl lg:text-5xl font-oswald font-bold text-sdv-primary uppercase tracking-wide leading-tight", titleClassName))}>
        {title}
      </h2>
      {showDivider && <div className="gold-divider my-3" />}
      {description && (
        <p className="text-base sm:text-lg text-sdv-muted leading-relaxed font-normal mt-1 font-akshar">
          {description}
        </p>
      )}
    </div>
  );
}
