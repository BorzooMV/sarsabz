import React from 'react';
import { Grid } from '@mui/material';
import UserInfo from './UserInfo';
import Quotes from './Quotes';
import { makeStyles } from '@mui/styles';
import Notes from './Notes';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '40px',
  },
}));
const Top = () => {
  const classes = useStyles();
  return (
    <Grid spacing={4} container className={classes.root}>
      <Grid item xs={12} md={4} lg={3}>
        <UserInfo />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Notes />
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <Quotes />
      </Grid>
    </Grid>
  );
};

export default Top;
