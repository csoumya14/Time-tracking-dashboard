import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
    }
  body {  
    margin: 0px;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    overflow-x:hidden;  
    background:hsl(226, 43%, 10%);
  }
`;

export default GlobalStyle;