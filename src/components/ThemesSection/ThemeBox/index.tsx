import clsx from "clsx";
import { ColorCircle } from "./ColorCircle";

export type TThemes = "classic" | "neutral" | "dark" | "nature" | "sunset";

interface IThemeCard {
  id: number;
  theme: TThemes;
  name: string;
  onSelect: (theme: TThemes) => void;
}

export const ThemeCard: React.FC<IThemeCard> = ({
  id,
  name,
  theme,
  onSelect,
}) => {
  const baseClasses =
    "p-4 w-52 flex flex-col gap-1 justify-center items-center rounded-xl cursor-pointer";

  const bgThemes: Record<TThemes, string> = {
    classic: "bg-white",
    neutral: "bg-gray-50",
    dark: "bg-gray-900",
    nature: "bg-green-50",
    sunset: "bg-orange-50",
  };

  const textThemes: Record<TThemes, string> = {
    classic: "text-black",
    neutral: "text-gray-50",
    dark: "text-gray-50",
    nature: "text-gray-50",
    sunset: "text-gray-900",
  };

  const themeColors: Record<TThemes, string[]> = {
    classic: [
      "bg-gray-100",
      "text-black",
      "text-gray-600",
      "bg-blue-600",
      "bg-blue-800",
    ],
    dark: [
      "bg-gray-800",
      "text-gray-50",
      "text-gray-400",
      "bg-indigo-500",
      "bg-indigo-600",
    ],
    nature: [
      "bg-green-100",
      "text-gray-50",
      "text-gray-400",
      "bg-green-600",
      "bg-green-700",
    ],
    neutral: [
      "bg-gray-100",
      "text-gray-900",
      "text-gray-700",
      "bg-blue-600",
      "bg-blue-700",
    ],
    sunset: [
      "bg-orange-100",
      "text-orange-900",
      "text-orange-700",
      "bg-orange-600",
      "bg-orange-700",
    ],
  };

  return (
    <li
      key={id}
      className={clsx(baseClasses, bgThemes[theme])}
      onClick={() => onSelect(theme)}
    >
      <p className={textThemes[theme]}>{name}</p>

      <div className="flex">
        {themeColors[theme].map((theme, index) => (
          <ColorCircle key={index} color={theme} />
        ))}
      </div>
    </li>
  );
};
