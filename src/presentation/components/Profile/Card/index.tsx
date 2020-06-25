import React, { FunctionComponent } from "react";
import { Section } from "./styles";
import SocialIcons from "@presentation/components/Profile/SocialIcons";

type ICard = {
  name: string;
  image: string;
  bio: string;
};

const Card: FunctionComponent<ICard> = ({ name, image, bio }: ICard) => {
  return (
    <Section>
      <div className="perfil">
        <img src={image} width="100" />
        <div className="perfil-name-icons">
          <div className="name"> {name} </div>
          <SocialIcons />
        </div>
      </div>
      <div className="bio">{bio}</div>
    </Section>
  );
};

export default Card;
