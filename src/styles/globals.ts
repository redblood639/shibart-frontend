import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease-out;

  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Inter';
  }

  a {
    text-decoration: none;
  }


`
export default GlobalStyle