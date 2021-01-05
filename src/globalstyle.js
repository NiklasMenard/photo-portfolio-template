import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: black;
    margin: 0;
    padding: 0;
  }
  
  h1, h3, p, ul, a, span {
    color:rgb(253, 255, 254);
    font-family:'Courier New', Courier, monospace;
  }

`;
export default GlobalStyle;
