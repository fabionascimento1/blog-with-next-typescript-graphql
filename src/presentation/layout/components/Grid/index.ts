import styled from "styled-components";
import { customMedia } from "@presentation/layout/components/CustomMedia";

export const Wrapper = styled.div`
  width: 1326px;
  padding: 0 20px;
  margin: 0 auto;

  ${customMedia.lessThan("xnotebook")`
    width: 1240px;
  `}

  ${customMedia.between("mobile", "notebook")`
    width: 98%;
  `}

  ${customMedia.lessThan("mobile")`
    width: 98%;
  `}
`;
