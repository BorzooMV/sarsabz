import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlantCard from '../../../../../@components/PlantCard';
import ChiliPhoto from '../../../../../@assets/Chili.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));
const Hero = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root}>
      <PlantCard image={ChiliPhoto} />
      <PlantCard image={ChiliPhoto} />
      <PlantCard image={ChiliPhoto} />
      <PlantCard image={ChiliPhoto} />
      <PlantCard image={ChiliPhoto} />
      <PlantCard image={ChiliPhoto} />
    </Paper>
  );
};

export default Hero;
