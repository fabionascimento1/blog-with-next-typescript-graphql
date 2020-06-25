import React, { ReactNode } from "react";
import Head from "next/head";
import { Wrapper } from "@presentation/layout/components/Grid";
import Header from "@presentation/components/Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Wrapper>
      <Header />
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </Wrapper>
  </>
);

export default Layout;
