import Link from "next/link";
import Layout from "@presentation/layout/MainLayout";
import Profile from "@presentation/components/Profile";
import ListPosts, { ALL_POSTS_QUERY } from "@presentation/components/Posts";
import { initializeApollo } from "@utils/apollo";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Profile />
  </Layout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default IndexPage;
