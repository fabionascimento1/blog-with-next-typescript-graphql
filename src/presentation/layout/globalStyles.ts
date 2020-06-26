import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Blender Pro';
      src: url('./fonts/blenderpro.woff');
      src: url('./fonts/blenderpro.woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root {
    height: 100%;
  }

  body{
    height: 100%;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Roboto', sans-serif;
  }

  a{
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Blender Pro', sans-serif;
    font-weight: 800;
    letter-spacing: -0.075em;
    line-height: 1.4;
    padding-left: 0.125em;
    padding-right: 0.125em;
    text-shadow: rgba(79, 79, 79, 0.6) 0.008em 0.008em, rgba(79, 79, 79, 0.6) 0.008em -0.008em, rgba(79, 79, 79, 0.6) -0.008em 0.008em, rgba(79, 79, 79, 0.6) -0.008em -0.008em;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;

    --rocketseat: #6633cc;
  }
`;
