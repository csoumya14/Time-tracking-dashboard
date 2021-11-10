import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './themes/ThemeVariables';
import GlobalStyle from './themes/GlobalStyles';
import {Header} from './containers/Header/Header'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle/>
      <Header/>
      <main></main>
    </ThemeProvider>
  );
}

export default App;
