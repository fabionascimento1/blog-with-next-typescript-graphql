import styled from "styled-components";

export const ReadingProgress_ = styled.div`
  #progress-container {
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 0px;
    left: 0;
    height: 5px;
    display: block;
    z-index: 10;
  }
  .reading-progress-bar {
    position: sticky;
    height: 5px;
    top: 0;
    background: ${(props) => props.theme.text};
  }
`;
