import { Avatar, Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    color: '#FFF',
    padding: '30px',
  },
  socials: {
    width: '10%',
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          className={classes.socials}
          direction="row"
          justifyContent="space-evenly"
        >
          <Avatar>S</Avatar>
          <Avatar>S</Avatar>
          <Avatar>S</Avatar>
        </Stack>
        <Typography>copyright sentence</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
