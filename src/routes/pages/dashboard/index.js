import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Top from './Top';
import PlantsShow from './PlantsShow';

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
      <Grid item xs={12}>
        <PlantsShow />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
