import styled from "styled-components";

export const Section = styled.section`
  .perfil {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: end;

    img {
      width: 100%;
      border-radius: 100%;
    }

    .name {
      margin-bottom: 10px;

      h3 {
        line-height: 120%;
      }
    }
  }

  .bio {
    margin-top: 12px;
  }
`;
