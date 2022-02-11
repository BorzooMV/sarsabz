import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getInitInfo } from '@utils';
import { GetUserAndPlants } from 'constants/ActionCombo';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spotlight from './spotlight';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
  },
}));
const Plants = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    getInitInfo(dispatch, GetUserAndPlants);
  });

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Spotlight />
      </Grid>
      <Grid item xs={12}>
        List
      </Grid>
    </Grid>
  );
};

export default Plants;
