import i18n from "i18next";

import navbarPT from "../locales/pt/navbar.json";
import navbarEN from "../locales/en/navbar.json";
import homePT from "../locales/pt/home.json";
import homeEN from "../locales/en/home.json";

import { initReactI18next } from "react-i18next";

export type ELanguages = "en" | "pt";

const resources = {
  en: {
    navbar: navbarEN,
    home: homeEN,
  },
  pt: {
    navbar: navbarPT,
    home: homePT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  ns: ["navbar"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
