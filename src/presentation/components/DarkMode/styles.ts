import styled from "styled-components";

export const DarkMode_ = styled.div`
  button {
    margin-top: 25px;
    padding: 8px 15px;
    border-radius: 12px;
    font-family: "Blender Pro";
    color: ${(props) => props.theme.textOther};
    background: ${(props) => props.theme.backgroundOther};
    width: 100%;
    min-height: 15px;
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
