import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "@utils/apollo";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const darkTheme = {
  background: "rgb(33, 44, 79)",
  text: "#fff",
};

const lightTheme = {
  background: "#fff",
  text: "rgb(33, 44, 79)",
};

const GlobalStyles = createGlobalStyle`
  * {
    text-decoration: none;
  }
  html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
  }
  body {
    font-size: 16px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const theme = darkTheme;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
