import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Top from './Top';
import PlantsShow from './PlantsShow';
import { useDispatch } from 'react-redux';
import { getInitInfo } from '@utils';
import { GetUserAndPlants } from 'constants/ActionCombo';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    margin: '20px auto',
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getInitInfo(dispatch, GetUserAndPlants);
  });
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
