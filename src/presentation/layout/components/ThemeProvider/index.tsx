import { ThemeProvider } from "styled-components";
import GlobalStyles from "@presentation/layout/GlobalStyles";

import { TypedUseSelectorHook, useSelector } from "react-redux";

const darkTheme = {
  background: "rgb(33, 44, 79)",
  text: "#fff",
};

const lightTheme = {
  background: "#fff",
  text: "rgb(33, 44, 79)",
};

interface ITheme {
  theme: string;
}

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
