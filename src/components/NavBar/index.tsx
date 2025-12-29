import {
  PaletteIcon,
  SealCheckIcon,
  TranslateIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { Avatar } from "../Avatar";
import { Button } from "../Button";

import profile from "../../assets/profile.jpg";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";

export function NavBar() {
  const { toogleSection } = useContext(ThemeContext);
  const { t, i18n } = useTranslation("navbar");

  const changeLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="flex justify-between items-center p-8">
      <Button
        variant="outline"
        className="flex items-center gap-2 text-gray-800 font-medium hover:underline"
      >
        <Avatar src={profile} alt="teste" size="sm" />
        <p>Gabriel Henrique</p>
        <SealCheckIcon className="fill-blue-700" weight="fill" />
      </Button>

      <ul className="flex gap-4">
        <li>
          <Button variant="outline">{t("inicio")}</Button>
        </li>
        <li>
          <Button variant="outline">{t("sobre")}</Button>
        </li>
        <li>
          <Button variant="outline">{t("projetos")}</Button>
        </li>
        <li>
          <Button variant="outline">{t("contato")}</Button>
        </li>
        <li>
          <Button variant="outline" onClick={toogleSection}>
            <PaletteIcon size={24} aria-label="Themes" />
          </Button>
        </li>
        <li>
          <Button variant="outline" onClick={() => changeLanguage()}>
            <TranslateIcon size={24} aria-label="Translator" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
