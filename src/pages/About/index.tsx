import { Container } from "../../components/Container";
import { Title } from "../../components/Title";

export function About() {
  return (
    <section title="About">
      <Container className="mb-8">
        <Title>Sobre mim</Title>

        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>
            Sou desenvolvedor front-end com foco em código limpo, bem tipado,
            performático e preparado para escalar sem virar dor de cabeça no
            futuro. Gosto de construir interfaces que fazem sentido para o
            usuário, mas principalmente sistemas bem estruturados. Gosto de
            resolver problemas reais, pensar na arquitetura do front-end, sempre
            busco evitar gambiarras e deixar o código fácil de manter para quem
            vem depois, inclusive eu mesmo no futuro.
          </p>
          <p>
            Tenho experiência em projetos nos modelos de e-commerce, ERPs, CRMs
            e soluções SaaS, atuando desde a construção de interfaces até
            integrações mais complexas. Ao longo dessas experiências, desenvolvi
            funcionalidades como sistemas de validação de produtos via código de
            barras com comunicação em tempo real usando WebSockets, garantindo o
            bloqueio imediato do PDV em casos de erro, além de sistemas de
            notificações utilizando Flutter e Firebase. Atualmente atuo como{" "}
            <strong>Desenvolvedor Front-End Pleno</strong> na
            <strong> NX Multiserviços</strong>, contribuindo na criação de
            soluções para empresas de diferentes segmentos. Além do
            desenvolvimento, apoio o time de front-end no dia a dia e faço a
            ponte com o back-end para garantir entregas mais alinhadas,
            eficientes e bem integradas.
          </p>

          <p>
            Fora do trabalho, curto estudar temas ligados à psicologia, manter a
            rotina de treinos com uma boa música e sair com minha esposa para
            explorar a culinária local. Quando sobra um tempo, estou em casa
            testando ideias e experimentando tecnologias novas.
          </p>
        </div>
      </Container>
    </section>
  );
}
