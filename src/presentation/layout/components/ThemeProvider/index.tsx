import { ThemeProvider } from "styled-components";
import GlobalStyles from "@presentation/layout/GlobalStyles";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import { ITheme } from "@utils/interfaces";

const darkTheme = {
  background: "rgb(33, 44, 79)",
  backgroundOther: "#FFF",
  text: "#fff",
  textOther: "rgb(33, 44, 79)",
};

const lightTheme = {
  background: "#fff",
  backgroundOther: "rgb(33, 44, 79)",
  text: "rgb(33, 44, 79)",
  textOther: "#fff",
};

type Props = {
  children: React.ReactNode;
};

const _ThemeProvider = ({ children }: Props) => {
  const typedThemeSelector: TypedUseSelectorHook<ITheme> = useSelector;
  const _theme = typedThemeSelector((state) => state.theme);
  const { theme } = _theme;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default _ThemeProvider;
