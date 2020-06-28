import styled from "styled-components";
import { customMedia } from "@presentation/layout/components/CustomMedia";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  margin-bottom: 50px;

  ${customMedia.lessThan("tablet")`
   grid-template-columns: none;
   grid-template-row: 100%;
  `}
`;
