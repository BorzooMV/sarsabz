import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Stack, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Logout, Menu } from '@mui/icons-material';
import profilePic from '../../../@assets/vaseProfile.jpg';
import HamMenu from './HamMenu';
import { set_user } from 'Redux/Actions/Auth';
import { useDispatch } from 'react-redux';

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
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logOut: {
    width: '100px',
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuBtn: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = ({
  hamburgerRef,
  hamburgerMenuCondition,
  handleToggleHamMenu,
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(set_user('empty'));
    navigate('/login');
  };

  const handleToProfile = () => {
    navigate('/profile');
  };

  return (
    <Box className={classes.root}>
      <HamMenu isOpen={hamburgerMenuCondition} hamburgerRef={hamburgerRef} />
      <Stack className={classes.logo}>LOGO</Stack>
      <Stack className={classes.menuBtn}>
        <IconButton onClick={handleToggleHamMenu}>
          <Menu style={{ color: '#fff' }} />
        </IconButton>
      </Stack>

      <Stack
        className={classes.menus}
        direction="row"
        justifyContent="space-evenly"
      >
        <Link to="/">داشبرد</Link>
        <Link to="/plants">گلدون ها</Link>
        <Link to="/about">درباره ی من</Link>
      </Stack>
      <Stack
        className={classes.logOut}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar
          src={profilePic}
          onClick={handleToProfile}
          style={{ cursor: 'pointer' }}
        />
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
