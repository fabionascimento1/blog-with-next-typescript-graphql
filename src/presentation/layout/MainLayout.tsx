import React, { ReactNode } from "react";
import Head from "next/head";
import { Wrapper } from "@presentation/layout/components/Grid";
import Profile from "@presentation/components/Profile";
import { Grid } from "./styles";
import Footer from "@presentation/components/Footer";

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
      <Grid>
        <Profile />
        {children}
      </Grid>
      <Footer />
    </Wrapper>
  </>
);

export default Layout;
