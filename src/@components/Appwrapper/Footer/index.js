import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
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
  socialsAvatars: {
    background: theme.palette.secondary.main,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="secondary">
          طراحی و اجرا به دست‌های برزو معظمی
        </Typography>
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
