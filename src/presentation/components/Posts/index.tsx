import Link from "next/link";
import { Post, Midia, Resume, Categories } from "./styles";

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
        <Post key={post.id}>
          <Categories>
            {post.categories.map((category: ICategories) => (
              <div>{category.title}</div>
            ))}
          </Categories>
          <Link href="/[slug]" as={"/" + post.slug}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
          <Midia>
            <img src={post.midia} width="100%" />
          </Midia>
          <Resume>{post.resume}</Resume>
        </Post>
      ))}
    </div>
  );
}
