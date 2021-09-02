import React from 'react';
import Home from './page/Home';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
        <Home />
    </ThemeProvider>
  );
}

export default App;
