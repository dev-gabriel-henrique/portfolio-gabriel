import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
  PaletteIcon,
  TranslateIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

export interface ISocialLinks {
  id: string;
  link: string;
  component: React.ReactNode;
}

export function Sidebar() {
  const { toogleSection } = useContext(ThemeContext);
  const { i18n } = useTranslation("navbar");

  const changeLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };
  const socialLinks: ISocialLinks[] = [
    {
      id: "linkedin",
      component: <LinkedinLogoIcon size={28} />,
      link: "https://www.linkedin.com/in/gabriel-henrique-21b366301/",
    },
    {
      id: "github",
      component: <GithubLogoIcon size={28} />,
      link: "https://github.com/dev-gabriel-henrique",
    },
    {
      id: "mail",
      component: <MailboxIcon size={28} />,
      link: "mailto:work.gabriel12@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-0 left-8 hidden flex-col items-center gap-6 md:flex">
      <ul className="flex flex-col items-center gap-6">
        {socialLinks.map((social) => (
          <li key={social.id}>
            <a
              href={social.link}
              aria-label={social.id}
              className="text-[var(--line-primary)] hover:-translate-y-1 hover:text-[var(--line-secondary)] transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.component}
            </a>
          </li>
        ))}
        <li>
          <span
            onClick={toogleSection}
            className="text-[var(--line-primary)] cursor-pointer hover:text-[var(--line-secondary)]"
          >
            <PaletteIcon size={24} aria-label="Themes" />
          </span>
        </li>
        <li>
          <span
            onClick={() => changeLanguage()}
            className="text-[var(--line-primary)] cursor-pointer hover:text-[var(--line-secondary)]"
          >
            <TranslateIcon size={24} aria-label="Translator" />
          </span>
        </li>
      </ul>

      <div className="mt-6 h-24 w-px bg-[var(--line-primary)]" />
    </div>
  );
}
