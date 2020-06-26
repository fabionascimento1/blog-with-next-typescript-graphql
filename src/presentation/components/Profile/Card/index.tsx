import React, { FunctionComponent } from "react";
import Link from "next/link";

import { Section } from "./styles";
import SocialIcons from "@presentation/components/Profile/SocialIcons";

import DarkMode from "@presentation/components/DarkMode";

type ICard = {
  name: string;
  image: string;
  bio: string;
};

const Card: FunctionComponent<ICard> = ({ name, image, bio }: ICard) => {
  return (
    <Section>
      <div className="perfil">
        <Link href="/" as="/">
          <a>
            <img src={image} width="100" />
          </a>
        </Link>
        <div className="perfil-name-icons">
          <div className="name">
            <h3>{name}</h3>{" "}
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="bio">{bio}</div>
      <DarkMode />
    </Section>
  );
};

export default Card;
