import type React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { useTranslation } from "react-i18next";

export const Jobs: React.FC = () => {
  const { t } = useTranslation("jobs");

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
    <section title="Jobs">
      <Container className="mb-20">
        <Title className="text-[var(--text-primary)]">{t("title")}</Title>

        <div className="space-y-12">
          {jobs.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  {`${t(`items.${exp.key}.role`)} - ${t(
                    `items.${exp.key}.company`
                  )}`}
                </h2>
                <span className="mt-1 sm:mt-0 text-sm text-[var(--text-secondary)]">
                  {t(`items.${exp.key}.period`)}
                </span>
              </div>
              <p className="mt-2 text-[var(--text-secondary)]">
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
  );
};
