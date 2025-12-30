import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import SEO from "../../components/SEO";

export function Projects() {
  const { t, i18n } = useTranslation("projects");

  const pageTitle =
    i18n.language === "en"
      ? "Projects | Gabriel Henrique"
      : "Projetos | Gabriel Henrique";

  const pageDesc =
    i18n.language === "en"
      ? "Explore Gabriel Henrique's projects and work portfolio. See technical skills in React, Node.js and modern web development."
      : "Explore os projetos de Gabriel Henrique. Veja as habilidades técnicas em React, Node.js e desenvolvimento web moderno.";

  const projects = [
    {
      key: "igniteCall",
      techs: [
        "React",
        "Next.Js",
        "Prisma",
        "React-Query",
        "Axios",
        "DayJS",
        "Google Services",
      ],
      link: "https://github.com/dev-gabriel-henrique/ignite-call",
    },
    {
      key: "apiRestaurant",
      techs: [
        "Express.Js",
        "Node.Js",
        "KNEX.Js",
        "Typescript",
        "Insomnia",
        "SQLite/PostgreSQL",
      ],
      link: "https://github.com/dev-gabriel-henrique/api-restaurant",
    },
    {
      key: "coffeeDelivery",
      techs: [
        "React",
        "Styled-Components",
        "Context-Api",
        "Zod",
        "React-Hook-Form",
      ],
      link: "https://github.com/dev-gabriel-henrique/coffee_delivery",
    },
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDesc}
        url="/#projects"
        lang={i18n.language === "en" ? "en" : "pt-BR"}
      />
      <Container className="mb-8 py-12 sm:py-16 md:py-20">
        <Title>{t("title")}</Title>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                  {t(`items.${project.key}.title`)}
                </h2>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[var(--text-secondary)] hover:underline transition-colors whitespace-nowrap"
                  >
                    {t("view")}
                  </a>
                )}
              </div>

              <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                <span className="text-[var(--text-secondary)] leading-relaxed">
                  {t(`items.${project.key}.description`)}
                </span>
              </p>

              <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3">
                {project.techs.map((tech, techIndex) => (
                  <li key={techIndex}>
                    <Button size="sm" variant="outline">
                      {tech}
                    </Button>
                  </li>
                ))}
              </ul>

              {index !== projects.length - 1 && (
                <div className="mt-6 border-b border-[var(--line-primary)]" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
