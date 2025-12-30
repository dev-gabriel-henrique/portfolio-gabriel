import clsx from "clsx";
import type { HTMLAttributes } from "react";
import type React from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
};

export const Container: React.FC<IContainer> = ({
  children,
  className,
  size = "lg",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "px-4 sm:px-6 lg:px-8 w-full container mx-auto",
        containerSizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
