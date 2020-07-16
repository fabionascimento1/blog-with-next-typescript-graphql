import { ThemeProvider } from "styled-components";
import GlobalStyles from "@presentation/layout/GlobalStyles";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import { ITheme } from "@utils/interfaces";

const darkTheme = {
  background: "rgb(33, 44, 79)",
  backgroundOther: "#f5f5f7",
  text: "#f5f5f7",
  textOther: "rgb(33, 44, 79)",
};

const lightTheme = {
  background: "#f5f5f7",
  backgroundOther: "rgb(33, 44, 79)",
  text: "rgb(33, 44, 79)",
  textOther: "#f5f5f7",
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
