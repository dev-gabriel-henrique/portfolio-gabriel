import clsx from "clsx";
import { ColorCircle } from "./ColorCircle";

export type TThemes = "classic" | "neutral" | "dark" | "nature" | "sunset";

interface IThemeCard {
  id: number;
  theme: TThemes;
  name: string;
  onSelect: (theme: TThemes) => void;
}

export const ThemeCard: React.FC<IThemeCard> = ({ name, theme, onSelect }) => {
  const baseClasses =
    "p-2 sm:p-3 w-28 sm:w-36 md:w-44 lg:w-52 flex-shrink-0 min-w-0 flex flex-col gap-2 justify-center items-center rounded-xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95";

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
    <div className={clsx(baseClasses, bgThemes[theme])} onClick={() => onSelect(theme)}>
      <p className={clsx("text-sm sm:text-base md:text-base font-medium text-center truncate", textThemes[theme])} title={name}>
        {name}
      </p>

      <div className="flex flex-wrap justify-center items-center gap-1 mt-2">
        {themeColors[theme].map((c, index) => (
          <ColorCircle key={index} color={c} />
        ))}
      </div>
    </div>
  );
};
