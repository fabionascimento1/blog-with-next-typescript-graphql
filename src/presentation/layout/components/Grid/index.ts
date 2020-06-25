import styled from "styled-components";
import media, { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1366px",
  xnotebook: "1280px",
  notebook: "1170px",
  tablet: "1024px",
  mobile: "450px",
});

export const Wrapper = styled.div`
  width: 1326px;
  padding: 0 20px;
  margin: 0 auto;

  ${customMedia.lessThan("xnotebook")`
    width: 1240px;
  `}

  ${media.between("small", "large")`
    width: 98%;
  `}

  ${media.lessThan("small")`
    width: 98%;
  `}
`;
