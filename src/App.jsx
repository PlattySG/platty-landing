import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { theme } from './common/styles/index';
import { SplashScreen } from './components/Layout/SplashScreen/SplashScreen';

const App = () => (
  <ThemeProvider theme={theme}>
    <SplashScreen>
      <Router />
    </SplashScreen>
  </ThemeProvider>
);

export default App;
