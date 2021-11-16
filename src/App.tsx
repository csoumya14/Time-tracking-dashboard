import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './themes/ThemeVariables';
import GlobalStyle from './themes/GlobalStyles';
import { ImageHeadingTab } from './containers/ImageHeadingTab/ImageHeadingTab';
import {Main} from './containers/Main/Main'
import Provider from './context';

function App() { 
  
  
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle/>
      <Provider>
      <ImageHeadingTab   />
      <Main />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
