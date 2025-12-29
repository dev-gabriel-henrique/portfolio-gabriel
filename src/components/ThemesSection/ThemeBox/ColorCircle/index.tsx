import clsx from "clsx";

interface IColorCircle {
  color: string;
}

export const ColorCircle: React.FC<IColorCircle> = ({ color }) => {
  return (
    <div
      className={clsx("w-6 h-6 border-2 border-white rounded-full", color)}
    />
  );
};
