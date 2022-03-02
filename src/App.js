import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import myTheme from './theme';
import AppWrapper from './@components/Appwrapper';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes';
import { Provider } from 'react-redux';
import Store, { persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme(myTheme);

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppWrapper>
              <Navigation />
            </AppWrapper>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
