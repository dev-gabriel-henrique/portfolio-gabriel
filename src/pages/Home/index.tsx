import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Avatar } from "../../components/Avatar";

import profile from "../../assets/profile.jpg";
import { Title } from "../../components/Title";

export function Home() {
  const { t } = useTranslation("home");

  return (
    <Container className="flex flex-col md:flex-row items-center justify-center md:justify-between py-20 gap-10">
      <div className="flex flex-col gap-4">
        <Title size="lg" withMargin={false}>
          Gabriel Henrique
        </Title>

        <Title variant="secondary" withMargin={false} bold={false}>
          {t("dev")}
        </Title>

        <p className="max-w-md text-lg text-neutral-600 dark:text-neutral-400">
          {t("apresentacao")}
        </p>

        <div className="flex gap-4 mt-4 text-lg font-medium opacity-80">
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Tailwind</span>
        </div>
      </div>

      <Avatar
        size="lg"
        src={profile}
        alt="Foto de perfil"
        rounded
        className="shadow-xl ring-4 ring-neutral-300/30"
      />
    </Container>
  );
}
