import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import UserInfo from './UserInfo';
import FeatureList from './FeatureList';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid Container className={classes.root}>
      <Grid item xs={12}>
        <UserInfo />
      </Grid>
      <Grid item xs={12}>
        <FeatureList />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
