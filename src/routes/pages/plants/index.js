import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import PlantList from './plantList';
import Spotlight from './spotlight';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
  },
}));

const Plants = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Spotlight />
      </Grid>
      <Grid item xs={12}>
        <PlantList />
      </Grid>
    </Grid>
  );
};

export default Plants;
