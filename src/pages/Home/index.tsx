import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Avatar } from "../../components/Avatar";
import SEO from "../../components/SEO";

import { Title } from "../../components/Title";
import { Slider } from "../../components/Slider";
import { techs } from "../../constants/TECHS";

import profile from "../../assets/profile.jpg";

export function Home() {
  const { t, i18n } = useTranslation("home");

  const pageTitle =
    i18n.language === "en"
      ? "Gabriel Henrique | Front-End Developer"
      : "Gabriel Henrique | Desenvolvedor Front-End";

  const pageDesc =
    i18n.language === "en"
      ? "Gabriel Henrique, Front-End Developer specialized in React, TypeScript and modern interfaces. I create high-performance, scalable web applications focused on user experience."
      : "Gabriel Henrique, Desenvolvedor Front-End especializado em React, TypeScript e interfaces modernas. Crio aplicações web performáticas, escaláveis e focadas em experiência do usuário.";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        url="/"
        image="/avatar.png"
        lang={i18n.language === "en" ? "en" : "pt-BR"}
      />
      <Container className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between py-12 sm:py-16 md:py-20 gap-6 sm:gap-8 md:gap-10">
      <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left w-full md:max-w-md">
        <Title size="lg" withMargin={false}>
          Gabriel Henrique
        </Title>

        <Title variant="secondary" withMargin={false} bold={false}>
          {t("dev")}
        </Title>

        <p className="max-w-full md:max-w-md text-base sm:text-lg text-[var(--text-secondary)]">
          {t("apresentacao")}
        </p>

        <div className="w-full md:max-w-md mt-2">
          <Slider items={techs} />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-6 md:mt-0">
        <Avatar
          size="lg"
          src={profile}
          alt="Foto de perfil"
          rounded
          className="shadow-xl ring-4 ring-neutral-300/30 mx-auto"
        />
      </div>
    </Container>
    </>
  );
}
