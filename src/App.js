import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import myTheme from './theme';
import AppWrapper from './@components/Appwrapper';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

const theme = createTheme(myTheme);

const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppWrapper>
            <Navigation />
          </AppWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
