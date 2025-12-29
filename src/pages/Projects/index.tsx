import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function Projects() {
  const projects = [
    {
      title: "Ignite Call",
      description:
        "Sistema de agendamento de reuniões integrado com o google calendar, foi utilizado a integração com o Google Services",
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
      title: "API Restaurant",
      description:
        "API RESTful desenvolvida em Node.js + TypeScript com o objetivo de gerenciar funcionalidades essenciais de um sistema de restaurante.",
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
      title: "Coffee Delivery",
      description:
        "Coffee Delivery é uma aplicação frontend desenvolvida com React, TypeScript e Vite que simula um sistema de delivery de cafés. A aplicação permite que o usuário visualize os produtos disponíveis, adicione itens ao carrinho, gerencie quantidades e finalize um pedido informando o endereço de entrega. O projeto foi construído com foco em experiência do usuário, organização de código e boas práticas de desenvolvimento frontend, utilizando tipagem estática, componentes reutilizáveis e gerenciamento de estado global.",
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
      <Title>Projetos</Title>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--text-secondary)] transition-colors">
                {project.title}
              </h3>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Ver
                </a>
              )}
            </div>

            <p className="mt-2 text-gray-700 leading-relaxed">
              {project.description}
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
