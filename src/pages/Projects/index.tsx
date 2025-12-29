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
    <Container>
      <Title>{t("title")}</Title>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--text-secondary)] transition-colors">
                {t(`items.${project.key}.title`)}
              </h3>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {t("view")}
                </a>
              )}
            </div>

            <p className="mt-2 text-gray-700 leading-relaxed">
              <p className="mt-2 text-gray-700 leading-relaxed">
                {t(`items.${project.key}.description`)}
              </p>
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

            {index !== projects.length && (
              <div className="mt-6 border-b border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
