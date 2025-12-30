import clsx from "clsx";

interface IColorCircle {
  color: string;
}

export const ColorCircle: React.FC<IColorCircle> = ({ color }) => {
  return (
    <div
      className={clsx(
        "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0 border border-white sm:border-2 rounded-full",
        color
      )}
      aria-hidden
    />
  );
};
