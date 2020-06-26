import Card from "./Card";
import { content } from "./Card/content";

import React from "react";

const Profile = () => {
  return (
    <>
      <Card name={content.name} image={content.image} bio={content.bio} />
    </>
  );
};

export default Profile;
