import Card from "./Card";
import { content } from "./Card/content";

const Profile = () => {
  return (
    <>
      <Card image={content.image} bio={content.bio} />
    </>
  );
};

export default Profile;
