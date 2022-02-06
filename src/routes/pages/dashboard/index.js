import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Top from './Top';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    margin: '20px auto',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Top />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Dashboard;
