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

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <nav
      aria-hidden={!isOpen}
      className={`
            bg-[var(--bg-secondary)] p-2 sm:p-3 md:p-4 transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-20 pointer-events-none"
        }
            `}
    >
      <div className="container mx-auto flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {themes.map((theme, index) => (
          <div
            key={theme.id}
            style={{ transitionDelay: `${index * 40}ms` }}
            className={`transition-all duration-300 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <ThemeCard {...theme} onSelect={handleSelect} />
          </div>
        ))}
      </div>
    </nav>
  );
}
