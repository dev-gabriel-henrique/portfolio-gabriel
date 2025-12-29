import clsx from "clsx";
import type { HTMLAttributes } from "react";
import type React from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Container: React.FC<IContainer> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx("px-4 container mx-auto", className)} {...rest}>
      {children}
    </div>
  );
};
