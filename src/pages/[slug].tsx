import React from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import Layout from "@presentation/layout/MainLayout";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { parseISO, format } from "date-fns";

import { Article, Section, Footer } from "@presentation/layout/components/Slug";

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
      created_at
      categories {
        title
      }
      midia
    }
  }
`;

interface ICategories {
  title: string;
}

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

  return (
    <Layout title={posts[0].title}>
      <Article>
        <header>
          <ul className="list-inline categories">
            {posts[0].categories.map((category: ICategories) => (
              <li>{category.title}</li>
            ))}
          </ul>
          <h1>{posts[0].title}</h1>
          <ul className="list-inline post-meta">
            <li> {format(parseISO(posts[0].created_at), "dd/MM/yyyy")}</li>
          </ul>
          <figure
            className="figure"
            style={{
              backgroundImage: `url('${posts[0].midia}')`,
            }}
          >
            <img src={posts[0].midia} alt={posts[0].title} width="100%" />
          </figure>
        </header>

        <Section>
          <ReactMarkdown source={posts[0].description} escapeHtml={false} />
        </Section>

        <Footer></Footer>
      </Article>
    </Layout>
  );
}

export default Post;
