import { Grid, DarkMode } from "./styles";
import Logo from "./Logo";
const Header = () => {
  return (
    <Grid>
      <Logo />
      <DarkMode>DarkMode</DarkMode>
    </Grid>
  );
};

export default Header;
