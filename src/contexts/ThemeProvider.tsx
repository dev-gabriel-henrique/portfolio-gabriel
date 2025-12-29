import { createContext, useMemo, useState, type ReactNode } from "react";

interface IThemeContext {
  isOpen: boolean;
  toogleSection: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  isOpen: false,
  toogleSection: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

export default function ThemeProvider({ children }: IThemeProvider) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleSection = () => setIsOpen((prev) => !prev);

  const value = useMemo(() => ({ isOpen, toogleSection }), [isOpen]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
