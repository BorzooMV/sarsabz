import React, { useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

const AppWrapper = ({ children }) => {
  const hamburgerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/login/') {
    return <Box style={{ height: '100vh', width: '100%' }}>{children}</Box>;
  }

  const handleClickOutside = (e) => {
    if (isOpen && e.target !== hamburgerRef.current) {
      setIsOpen(false);
    }
  };

  const handleToggleHamMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Box onClick={(e) => handleClickOutside(e)}>
      <Header
        hamburgerRef={hamburgerRef}
        hamburgerMenuCondition={isOpen}
        handleToggleHamMenu={handleToggleHamMenu}
      />
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
