import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Stack, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import profilePic from '../../../@assets/vaseProfile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menus: {
    width: '30%',
  },
  logOut: {
    width: '100px',
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box className={classes.root}>
      <Stack>LOGO</Stack>
      <Stack
        className={classes.menus}
        direction="row"
        justifyContent="space-evenly"
      >
        <Link to="/dashboard">داشبرد</Link>
        <Link to="/plants">گلدون ها</Link>
        <Link to="/about">درباره ی من</Link>
      </Stack>
      <Stack
        className={classes.logOut}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar src={profilePic} />
        <IconButton
          style={{ transform: 'rotate(180deg)' }}
          onClick={handleLogout}
        >
          <Logout color="white" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
