import { Grid } from "./styles";
import Posts from "@presentation/components/Posts";
import Card from "./Card";
import { content } from "./Card/content";

const Profile = () => {
  return (
    <Grid>
      <Card image={content.image} bio={content.bio} />
      <Posts />
    </Grid>
  );
};

export default Profile;
