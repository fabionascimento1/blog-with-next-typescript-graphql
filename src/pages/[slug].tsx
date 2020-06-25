import React from "react";
import { useRouter } from "next/router";
import Layout from "@presentation/layout/MainLayout";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const POST_BY_SLUG = gql`
  query($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      description
      resume
      titleseo
      descriptionseo
    }
  }
`;

function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const SlugVar = {
    slug,
  };

  const { loading, error, data } = useQuery(POST_BY_SLUG, {
    variables: SlugVar,
  });

  if (error) return <div>Error ...</div>;
  if (loading) return <div>Loading</div>;

  const { posts } = data;

  return <Layout title={posts[0].title}>{posts[0].title}</Layout>;
}

export default Post;
