import { useContext, useEffect } from "react";
import { ThemeCard, type TThemes } from "./ThemeBox";
import { ThemeContext } from "../../contexts/ThemeProvider";

interface IThemes {
  id: number;
  name: string;
  theme: TThemes;
  className: string;
}

const themes: IThemes[] = [
  { id: 1, theme: "classic", name: "Classic", className: "theme-classic" },
  {
    id: 2,
    theme: "neutral",
    name: "Minimalist Neutral",
    className: "theme-neutral",
  },
  { id: 3, theme: "dark", name: "Modern Dark", className: "theme-dark" },
  { id: 4, theme: "nature", name: "Forest Vibes", className: "theme-nature" },
  { id: 5, theme: "sunset", name: "Vibrant Sunset", className: "theme-sunset" },
];

export function ThemesSection() {
  const { isOpen } = useContext(ThemeContext);

  const handleSelect = (theme: TThemes) => {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as TThemes | null;

    if (saved) {
      document.documentElement.className = `theme-${saved}`;
    }
  }, []);

  return (
    <nav
      hidden={!isOpen}
      className={`
        overflow-hidden transition-[max-height,opacity] duration-800 ease-in-out
        bg-[var(--bg-secondary)] p-4
        ${isOpen ? "max-h-96 opacity-100" : "opacity-0"}
      `}
    >
      <ul className="flex gap-1 flex-wrap justify-between items-center">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.id}
            id={theme.id}
            name={theme.name}
            theme={theme.theme}
            onSelect={handleSelect}
          />
        ))}
      </ul>
    </nav>
  );
}
