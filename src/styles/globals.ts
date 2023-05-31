import { createGlobalStyle } from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    background: #F7FBFA;
    font-family: 'Inter';
  }

  a {
    text-decoration: none;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .create-swiper {
    margin: 48px 0;
  }
`;
export default GlobalStyle;
