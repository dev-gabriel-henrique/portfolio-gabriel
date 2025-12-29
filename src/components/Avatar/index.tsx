import React from "react";
import clsx from "clsx";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  src: string;
  alt: string;
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  rounded = true,
  className,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-72 h-72",
  };

  return (
    <img
      className={clsx(
        className,
        sizeClasses[size],
        rounded ? "rounded-full" : "rounded",
        "bg-gray-300"
      )}
      src={src}
      alt={alt}
    />
  );
};
