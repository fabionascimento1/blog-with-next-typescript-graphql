import styled from "styled-components";

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
      border-radius: 20px;
      font-size: 14px;
      color: ${(props) => props.theme.textOther};
      background: ${(props) => props.theme.backgroundOther};
    }
  }

  h2 {
    font-size: 42px;
    margin: 5px 0;
  }

  .categories {
    li {
    }
  }

  figure {
    height: 350px;
    overflow: hidden;
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
