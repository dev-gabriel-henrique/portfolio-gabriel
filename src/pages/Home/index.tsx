import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container";
import { Avatar } from "../../components/Avatar";

import { Title } from "../../components/Title";
import { Slider } from "../../components/Slider";
import { techs } from "../../constants/TECHS";

import profile from "../../assets/profile.jpg";

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

        <p className="max-w-md text-lg text-[var(--text-secondary)]">
          {t("apresentacao")}
        </p>

        <div className="max-w-md">
          <Slider items={techs} />
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
