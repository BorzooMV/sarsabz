import { Grid } from '@mui/material';
import React from 'react';
import AboutApp from './aboutApp';
import { makeStyles } from '@mui/styles';
import AboutDeveloper from './aboutDeveloper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '20px auto',
    padding: '30px',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <AboutApp />
      </Grid>
      <Grid item xs={12}>
        <AboutDeveloper />
      </Grid>
    </Grid>
  );
};

export default About;
