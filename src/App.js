import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import myTheme from './theme';
import AppWrapper from './components/Appwrapper';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes';


const theme = createTheme(myTheme)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppWrapper>
          <Navigation />
        </AppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
