import React from 'react';
import { Grid } from '@mui/material';
import UserInfo from './UserInfo';
import Hero from './Hero';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Top = () => {
  const classes = useStyles();
  return (
    <Grid spacing={4} container className={classes.root}>
      <Grid item xs={12} md={6} lg={3}>
        <UserInfo />
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <Hero />
      </Grid>
    </Grid>
  );
};

export default Top;
