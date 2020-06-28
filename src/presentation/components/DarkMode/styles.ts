import styled from "styled-components";
import { customMedia } from "@presentation/layout/components/CustomMedia";

export const DarkMode_ = styled.div`
  ${customMedia.between("mobile", "tablet")`
    position: absolute;
    top: 0;
    right: 0;
    width: 220px;
  `}

  ${customMedia.lessThan("mobile")`
    width: 100%;
  `}

  button {
    margin-top: 25px;
    padding: 8px 15px;
    border-radius: 12px;
    font-family: "Blender Pro";
    color: ${(props) => props.theme.textOther};
    background: ${(props) => props.theme.backgroundOther};
    width: 80%;
    min-height: 15px;
    ${customMedia.lessThan("tablet")`
      padding: 4px 7px;
      font-size: 14px;
    `}
  }

  .Light {
    ::after {
      content: " 🌞 ";
    }
  }

  .Dark {
    ::after {
      content: "🌜";
    }
  }
`;
