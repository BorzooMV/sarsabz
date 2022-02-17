import React from 'react';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFF',
    padding: '20px',
    borderRadius: '5px',
    color: '#000',
    position: 'absolute',
    width: '65%',
    right: '0px',
    top: '100%',
    transition: 'all 200ms ease-in-out',
  },
  offScreen: {
    transform: 'translateX(100%)',
  },
  links: {
    margin: '10px 0px',
    cursor: 'pointer',
  },
}));
const HamMenu = ({ isOpen }) => {
  const classes = useStyles();
  return (
    <Stack
      className={isOpen ? classes.root : clsx(classes.root, classes.offScreen)}
      sx={{ boxShadow: 3 }}
      direction="column"
      alignItems="flex-start"
    >
      <Link className={classes.links} to="/">
        داشبرد
      </Link>
      <Link className={classes.links} to="/plants">
        گلدون ها
      </Link>
      <Link className={classes.links} to="/about">
        درباره ی من
      </Link>
    </Stack>
  );
};

export default HamMenu;
