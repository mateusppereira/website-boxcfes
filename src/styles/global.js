import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Lato', sans-serif;
    color: #2C2E2F;
    font-size: 62.5%;

    @media (max-width: 800px) {
      font-size: 50%;
    }
    
    @media (max-width: 450px) {      
      font-size: 40%;
    }
  }
`

export default GlobalStyle;