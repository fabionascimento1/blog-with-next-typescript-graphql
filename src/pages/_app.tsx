import { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "@utils/apollo";

import { Provider } from "react-redux";
import store from "@store/index";

import ThemeProvider from "@presentation/layout/components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
