import styled from "styled-components";
import { customMedia } from "@presentation/layout/components/CustomMedia";

export const Article = styled.article`
  margin-top: 20px;

  ${customMedia.lessThan("tablet")`
    margin-top: 50px;
  `}

  .list-inline {
    display: flex;
    li {
      list-style: none;
    }
  }

  .categories {
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

  .post-meta {
    li {
      font-size: 14px;
      margin-bottom: 10px;
      ${customMedia.lessThan("tablet")`
        font-size: 12px;
      `}
    }
  }

  h1 {
    font-size: 60px;
    color: var(--primary);
    line-height: 90%;
    margin: 10px 0;
    ${customMedia.lessThan("tablet")`
      font-size: 42px;
    `}
  }

  figure {
    height: 500px;
    background-size: cover;
    overflow: hidden;
    border-radius: 12px;
    position: relative;
  }
`;

export const Section = styled.section`
  /* margin-top: -200px;
  background: ${(props) => props.theme.background};
  padding: 30px;
  z-index: 10;
  min-height: 200px;
  position: relative; */

  p {
    margin: 15px 0;
    line-height: 160%;
  }
  ul {
    margin-left: 20px;
    li {
      margin-bottom: 10px;
      font-weight: 600;
    }
  }
`;

export const Footer = styled.footer``;
