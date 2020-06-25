import Link from "next/link";
import { Article } from "./styles";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      slug
      midia
      resume
      created_at
      categories {
        title
      }
    }
  }
`;

interface IPost {
  id?: number;
  title?: string;
  slug?: string;
  resume?: string;
  midia?: string;
  categories?: [] | undefined;
  created_at: string;
}
interface ICategories {
  title: string;
}

export default function ListPosts() {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY);

  if (error) return <div>Error loading posts.</div>;
  if (loading)
    return <div style={{ marginTop: "150px", height: "200px" }}></div>;

  const { posts } = data;

  return (
    <div>
      {posts.map((post: IPost) => (
        <Article key={post.id}>
          <ul className="list-inline categories">
            {post.categories.map((category: ICategories) => (
              <li>{category.title}</li>
            ))}
          </ul>
          <Link href="/[slug]" as={"/" + post.slug}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
          <figure
            className="figure"
            style={{
              backgroundImage: `url('${post.midia}')`,
            }}
          >
            <img src={post.midia} alt={post.title} width="100%" />
          </figure>
          <div className="resume">{post.resume}</div>
          <div className="created_at">{post.created_at}</div>
        </Article>
      ))}
    </div>
  );
}
