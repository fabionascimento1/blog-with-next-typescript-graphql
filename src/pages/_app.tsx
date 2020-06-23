import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "@utils/apollo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@presentation/layout/GlobalStyles";

const darkTheme = {
  background: "rgb(33, 44, 79)",
  text: "#fff",
};

const lightTheme = {
  background: "#fff",
  text: "rgb(33, 44, 79)",
};

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
