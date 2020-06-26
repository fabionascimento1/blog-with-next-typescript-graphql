import Layout from "@presentation/layout/MainLayout";
import Posts, { ALL_POSTS_QUERY } from "@presentation/components/Posts";
import { initializeApollo } from "@utils/apolloClient";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Posts />
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
