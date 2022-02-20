import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    color: '#FFF',
    padding: '30px',
    width: '100%',
  },
  socials: {
    width: '10%',
    [theme.breakpoints.down('md')]: {
      width: '30%',
    },
  },
  socialsAvatars: {
    background: theme.palette.secondary.main,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.5)',
      margin: '0px -15px',
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="secondary">به دست برزو</Typography>
        <Stack
          className={classes.socials}
          direction="row"
          justifyContent="space-evenly"
        >
          <Avatar className={classes.socialsAvatars}>
            <Instagram color="primary" />
          </Avatar>
          <Avatar className={classes.socialsAvatars}>
            <GitHub color="primary" />
          </Avatar>
          <Avatar className={classes.socialsAvatars}>
            <LinkedIn color="primary" />
          </Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
