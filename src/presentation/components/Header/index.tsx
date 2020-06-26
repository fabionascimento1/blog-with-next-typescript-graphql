import { Grid } from "./styles";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
const Header = () => {
  return (
    <Grid>
      <Logo />
      <div className="darkMode">
        <DarkMode />
      </div>
    </Grid>
  );
};

export default Header;
