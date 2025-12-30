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
    lg: "w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64",
  };

  return (
    <img
      className={clsx(
        className,
        sizeClasses[size],
        rounded ? "rounded-full" : "rounded",
        "bg-gray-300 object-cover"
      )}
      src={src}
      alt={alt}
    />
  );
};
