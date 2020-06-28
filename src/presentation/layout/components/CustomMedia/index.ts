import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  desktop: "1366px",
  xnotebook: "1280px",
  notebook: "1170px",
  xtablet: "1024px",
  tablet: "768px",
  mobile: "450px",
});
