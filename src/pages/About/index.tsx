import { Trans, useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import SEO from "../../components/SEO";

export function About() {
  const { t, i18n } = useTranslation("about");

  const pageTitle =
    i18n.language === "en"
      ? "About | Gabriel Henrique"
      : "Sobre | Gabriel Henrique";

  const pageDesc =
    i18n.language === "en"
      ? "Learn more about Gabriel Henrique, a Front-End Developer passionate about React, TypeScript and creating modern interfaces."
      : "Saiba mais sobre Gabriel Henrique, desenvolvedor Front-End apaixonado por React, TypeScript e interfaces modernas.";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        url="/#about"
        lang={i18n.language === "en" ? "en" : "pt-BR"}
      />
      <section title="About" id="about">
      <Container className="mb-12 sm:mb-16 md:mb-8 py-12 sm:py-16 md:py-20">
        <Title className="text-[var(--text-primary)]">{t("title")}</Title>

        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
          <p className="text-[var(--text-primary)]">{t("p1")}</p>

          <p className="text-[var(--text-primary)]">
            <Trans t={t} i18nKey="p2" />
          </p>

          <p className="text-[var(--text-primary)]">{t("p3")}</p>
        </div>
      </Container>
    </section>
    </>
  );
}
