import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import type { TSize, TVariant } from "../../utils/types";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: TSize;
  variant?: TVariant;
}

export const Button: React.FC<IButton> = ({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: IButton) => {
  const baseClasses =
    "font-medium rounded transition-colors focus:ring-2 cursor-pointer";

  const variantClasses: Record<TVariant, string> = {
    primary: ` 
      bg-[var(--button-primary)] 
      text-[var(--text-primary)] 
      hover:bg-[var(--button-secondary)] 
      hover:text-[var(--text-secondary)]
      focus:ring-blue-400
      `,
    secondary: `
      bg-[var(--button-secondary)] 
      text-[var(--text-secondary)] 
      hover:bg-[var(--button-primary)] 
      hover:text-[var(--text-secondary)]
      `,
    outline: `
      bg-transparent
      text-[var(--text-primary)]
      hover:bg-[var(--button-primary)]
      hover:text-[var(--text-secondary)]
    `,
  };

  const sizeClasses: Record<TSize, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
