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
    "p-4 w-52 flex flex-col gap-1 justify-center items-center rounded-xl cursor-pointer hovertransition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95";

  const bgThemes: Record<TThemes, string> = {
    classic: "bg-gray-100",
    neutral: "bg-gray-100",
    dark: "bg-gray-900",
    nature: "bg-green-50",
    sunset: "bg-orange-50",
  };

  const textThemes: Record<TThemes, string> = {
    classic: "text-gray-900",
    neutral: "text-gray-900",
    dark: "text-gray-50",
    nature: "text-gray-700",
    sunset: "text-gray-900",
  };

  const themeColors: Record<TThemes, string[]> = {
    classic: [
      "bg-gray-100",
      "bg-gray-200",
      "bg-blue-400",
      "bg-blue-500",
      "bg-gray-800",
      "bg-gray-900",
    ],
    dark: [
      "bg-gray-900",
      "bg-gray-800",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-gray-200",
      "bg-gray-50",
    ],
    nature: [
      "bg-emerald-50",
      "bg-emerald-100",
      "bg-emerald-600",
      "bg-emerald-700",
      "bg-gray-700",
      "bg-gray-900",
    ],
    neutral: [
      "bg-gray-100",
      "bg-gray-200",
      "bg-slate-200",
      "bg-slate-700",
      "bg-gray-700",
      "bg-gray-900",
    ],
    sunset: [
      "bg-orange-50",
      "bg-orange-100",
      "bg-orange-300",
      "bg-orange-400",
      "bg-gray-800",
      "bg-gray-900",
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
