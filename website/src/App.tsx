import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonAppBar } from './components/navbar/Navbar'
import { LandingPage } from './components/landingPage/LandingPage'
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
