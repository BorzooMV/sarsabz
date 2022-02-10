import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Top from './Top';
import PlantsShow from './PlantsShow';
import { useDispatch } from 'react-redux';
import {
  get_user_name,
  get_user_name_fa,
  get_user_rank,
  get_user_join_date,
  get_plants_count,
  get_plants,
} from '../../../Redux/Actions/Main';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    margin: '20px auto',
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_user_name);
    dispatch(get_user_name_fa);
    dispatch(get_user_rank);
    dispatch(get_user_join_date);
    dispatch(get_plants_count);
    dispatch(get_plants);
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
