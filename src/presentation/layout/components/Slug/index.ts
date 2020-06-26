import styled from "styled-components";

export const Article = styled.article`
  margin-top: 20px;
`;

export const Header = styled.header`
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
      border-radius: 20px;
      font-size: 14px;
      color: ${(props) => props.theme.textOther};
      background: ${(props) => props.theme.backgroundOther};
    }
  }

  .post-meta {
    li {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }

  h1 {
    font-size: 60px;
  }

  figure {
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
`;

export const Section = styled.section`
  p {
    margin: 10px 0;
    line-height: 140%;
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
