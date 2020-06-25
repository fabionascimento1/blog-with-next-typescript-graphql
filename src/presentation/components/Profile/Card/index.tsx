import React, { FunctionComponent } from "react";
import { Image, Bio } from "./styles";

type ICard = {
  image: string;
  bio: string;
};

const Card: FunctionComponent<ICard> = ({ image, bio }: ICard) => {
  return (
    <div>
      <img src={image} width="200" />
      <Bio>{bio}</Bio>
    </div>
  );
};

export default Card;
