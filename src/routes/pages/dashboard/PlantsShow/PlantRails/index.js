import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PlantCard from '../../../../../@components/PlantCard';
import ChiliPhoto from '../../../../../@assets/Chili.jpg';
import { useSelector } from 'react-redux';

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
  const user = useSelector((Store) => Store.main.user);
  return (
    <Paper elevation={2} className={classes.root}>
      {user.user_plants?.plants.map((plant, i) => (
        <PlantCard
          key={i}
          image={ChiliPhoto}
          name={plant.name_fa}
          race={plant.race_fa}
        />
      ))}
    </Paper>
  );
};

export default Hero;
