import { Trans, useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function About() {
  const { t } = useTranslation("about");

  return (
    <section title="About">
      <Container className="mb-8">
        <Title>{t("title")}</Title>

        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>{t("p1")}</p>

          <p>
            <Trans t={t} i18nKey="p2" />
          </p>

          <p>{t("p3")}</p>
        </div>
      </Container>
    </section>
  );
}
