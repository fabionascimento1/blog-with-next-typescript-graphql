import styled from "styled-components";
import { customMedia } from "@presentation/layout/components/CustomMedia";

export const Article = styled.div`
  padding: 20px;
  min-height: 250px;
  margin-top: 20px;

  .list-inline {
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      margin-right: 10px;
      padding: 5px 15px;
      border-radius: 12px;
      font-size: 14px;
      color: ${(props) => props.theme.text};
      background: var(--primary);

      ${customMedia.lessThan("tablet")`
        font-size: 12px;
      `}
    }
  }

  h2 {
    font-size: 60px;
    margin: 5px 0;
    color: var(--primary);
    line-height: 90%;
    margin: 0px 0 10px;
    ${customMedia.lessThan("tablet")`
      font-size: 42px;
    `}
  }

  .categories {
    li {
    }
  }
  .created_at {
    margin-bottom: 10px;
    ${customMedia.lessThan("tablet")`
      font-size: 12px;
    `}
  }
  figure {
    height: 350px;
    overflow: hidden;
    border-radius: 12px;
    .figure {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 40px;
      margin-inline-end: 40px;

      img {
        margin: 0.5em auto;
        display: block;
        height: auto;
      }
    }
  }

  .resume {
    margin: 15px 0;
  }
`;
