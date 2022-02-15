import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

const AppWrapper = ({ children }) => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/login/') {
    return <Box style={{ height: '100vh', width: '100%' }}>{children}</Box>;
  }
  return (
    <Box>
      <Header />
      <Stack
        direction="column"
        justifyContent="space-between"
        style={{ height: '100vh' }}
      >
        {children}
        <Footer />
      </Stack>
    </Box>
  );
};

export default AppWrapper;
