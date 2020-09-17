import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { theme } from './common/styles/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
