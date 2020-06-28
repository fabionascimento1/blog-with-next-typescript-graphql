import styled from "styled-components";

export const StyleFooter = styled.div`
  footer {
    margin-top: 30px;
    text-align: center;
  }
  div {
    margin-bottom: 10px;
  }

  a {
    color: ${(props) => props.theme.text};
    font-weight: 700;
  }
`;
