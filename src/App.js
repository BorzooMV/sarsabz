import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import myTheme from './theme';
import AppWrapper from './components/pages/Appwrapper'



const theme = createTheme(myTheme)

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <AppWrapper />
    </ThemeProvider>
    </>
  );
}

export default App;
