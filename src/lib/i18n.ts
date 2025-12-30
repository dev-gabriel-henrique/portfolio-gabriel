import i18n from "i18next";

import navbarPT from "../locales/pt/navbar.json";
import navbarEN from "../locales/en/navbar.json";
import homePT from "../locales/pt/home.json";
import homeEN from "../locales/en/home.json";
import aboutEN from "../locales/en/about.json";
import aboutPT from "../locales/pt/about.json";
import projectsPT from "../locales/pt/projects.json";
import projectsEN from "../locales/en/projects.json";
import jobsEN from "../locales/en/jobs.json";
import jobsPT from "../locales/pt/jobs.json";

import { initReactI18next } from "react-i18next";

export type ELanguages = "en" | "pt";

const resources = {
  en: {
    navbar: navbarEN,
    home: homeEN,
    about: aboutEN,
    projects: projectsEN,
    jobs: jobsEN,
  },
  pt: {
    navbar: navbarPT,
    home: homePT,
    about: aboutPT,
    projects: projectsPT,
    jobs: jobsPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
