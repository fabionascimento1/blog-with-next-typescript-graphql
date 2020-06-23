import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const PAGINATION_QUERY = gql`
  query {
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;

function Pagination() {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);

  if (error) return <div>Error ...</div>;
  if (loading) return <div>Loading</div>;

  const count = data.postsConnection.aggregate.count;
  const pages = Math.ceil(count / 3);
  return <>{pages}</>;
}

export default Pagination;
