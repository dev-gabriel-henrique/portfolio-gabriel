import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function Experiences() {
  const experiences = [
    {
      role: "Desenvolvedor Front-End Pleno",
      company: "NX Multiserviços",
      period: "Nov 2024 — Presente",
      description:
        "Contribuo na criação de soluções corporativas escaláveis e bem estruturadas. Lidero a integração entre front-end e back-end e apoio o time com práticas de código limpo e performance.",
      tech: [
        "React",
        "Flutter",
        "Firebase",
        "TypeScript",
        "Context Api",
        "Bootstrap 5",
        "WebSockets",
        "Integração com Apis Rest",
      ],
    },
    {
      role: "Desenvolvedor Front-End Junior",
      company: "Empresa Anônima",
      period: "Abr 2022 — Nov 2024",
      description: "Atuei principalmente na integração do back-end",
      tech: ["React", "Redux"],
    },
  ];

  return (
    <section title="experiences">
      <Container className="mb-8">
        <Title>Experiências</Title>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {`${exp.role} - ${exp.company}`}
                </h3>
                <span className="mt-1 sm:mt-0 text-sm text-gray-500">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tech.map((tech, techIdx) => (
                  <Button
                    key={techIdx}
                    size="sm"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
              <div className="border-b border-gray-200 mt-6"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
