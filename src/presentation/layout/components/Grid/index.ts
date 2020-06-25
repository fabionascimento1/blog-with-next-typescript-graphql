import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 1366px;
  padding: 0 20px;
  margin: 0 auto;

  ${media.between("small", "large")`
    width: 98%;
  `}

  ${media.lessThan("small")`
    width: 98%;
  `}
`;
