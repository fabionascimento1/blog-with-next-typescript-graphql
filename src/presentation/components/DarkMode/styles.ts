import styled from "styled-components";

export const DarkMode_ = styled.div`
  button {
    margin-top: 25px;
    padding: 8px 15px;
    border-radius: 12px;
    color: ${(props) => props.theme.textOther};
    background: ${(props) => props.theme.backgroundOther};
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
