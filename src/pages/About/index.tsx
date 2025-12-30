import { Trans, useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function About() {
  const { t } = useTranslation("about");

  return (
    <section title="About" id="about">
      <Container className="mb-8">
        <Title className="text-[var(--text-primary)]">{t("title")}</Title>

        <div className="space-y-6 text-base leading-relaxed">
          <p className="text-[var(--text-primary)]">{t("p1")}</p>

          <p className="text-[var(--text-primary)]">
            <Trans t={t} i18nKey="p2" />
          </p>

          <p className="text-[var(--text-primary)]">{t("p3")}</p>
        </div>
      </Container>
    </section>
  );
}
