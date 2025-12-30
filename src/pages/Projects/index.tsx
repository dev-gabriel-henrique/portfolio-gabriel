import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function Projects() {
  const { t } = useTranslation("projects");

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
    <Container className="mb-8">
      <Title>{t("title")}</Title>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                {t(`items.${project.key}.title`)}
              </h2>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-secondary)] hover:underline transition-colors"
                >
                  {t("view")}
                </a>
              )}
            </div>

            <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
              <span className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                {t(`items.${project.key}.description`)}
              </span>
            </p>

            <ul className="mt-3 flex flex-wrap gap-3">
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
  );
}
