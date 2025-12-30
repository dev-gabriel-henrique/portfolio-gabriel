import type React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO";

export const Jobs: React.FC = () => {
  const { t, i18n } = useTranslation("jobs");

  const pageTitle =
    i18n.language === "en"
      ? "Experience | Gabriel Henrique"
      : "Experiência | Gabriel Henrique";

  const pageDesc =
    i18n.language === "en"
      ? "Check Gabriel Henrique's professional experience and work history as a Front-End Developer."
      : "Confira a experiência profissional e histórico de trabalho de Gabriel Henrique como Desenvolvedor Front-End.";

  const jobs = [
    {
      key: "nx",
      tech: [
        "React",
        "Flutter",
        "Firebase",
        "TypeScript",
        "Context Api",
        "Bootstrap 5",
        "WebSockets",
      ],
    },
    {
      key: "anom1",
      tech: ["React", "Redux", "Prop Types"],
    },
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        url="/#jobs"
        lang={i18n.language === "en" ? "en" : "pt-BR"}
      />
      <section title="Jobs">
      <Container className="mb-20 py-12 sm:py-16 md:py-20">
        <Title className="text-[var(--text-primary)]">{t("title")}</Title>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                  {`${t(`items.${exp.key}.role`)} - ${t(
                    `items.${exp.key}.company`
                  )}`}
                </h2>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)] whitespace-nowrap">
                  {t(`items.${exp.key}.period`)}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)]">
                {t(`items.${exp.key}.description`)}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tech.map((tech, techIdx) => (
                  <Button key={techIdx} size="sm">
                    {tech}
                  </Button>
                ))}
              </div>
              {idx !== jobs.length - 1 && (
                <div className="border-b border-[var(--line-primary)] mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
};
