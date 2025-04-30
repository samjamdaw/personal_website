import { Navbar } from '../components/navbar/Navbar'
import { LandingPage } from '../components/landingPage/LandingPage'
import { ThemeProvider } from '@emotion/react';
import { theme } from '../components/theme/theme';

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}