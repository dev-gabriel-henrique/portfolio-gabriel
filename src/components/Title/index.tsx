import type { ReactNode } from "react";
import type { TSize, TVariant } from "../../utils/types";
import type React from "react";
import clsx from "clsx";

interface ITitle {
  children: ReactNode;
  size?: TSize;
  variant?: TVariant;
  className?: string;
  withMargin?: boolean;
  bold?: boolean;
}

export const Title: React.FC<ITitle> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  withMargin = true,
  bold = true,
}) => {
  const baseClasses = `${withMargin ? "mb-4 sm:mb-6 md:mb-8" : ""}
  ${bold ? "font-bold" : ""} tracking-tight text-[var(--text-primary)] 
  `;

  const variantClasses: Record<TVariant, string> = {
    primary: ` 
      `,
    secondary: `
      text-[var(--text-secondary)] 
      `,
    outline: `
      text-[var(--text-primary)]
    `,
  };

  const sizeClasses: Record<TSize, string> = {
    sm: "text-lg sm:text-xl md:text-2xl",
    md: "text-xl sm:text-2xl md:text-3xl",
    lg: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  };

  return (
    <h1
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </h1>
  );
};
