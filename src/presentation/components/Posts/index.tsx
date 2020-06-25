import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      slug
      image {
        url
      }
    }
  }
`;

interface IPost {
  id?: number;
  title?: string;
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
        <div key={post.id}>
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
}
