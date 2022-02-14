import PlantCard from '@components/PlantCard';
import { Box, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ChiliPic from '@assets/Chili.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    margin: '40px auto',
    width: '90%',
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '85%',
    margin: '0px auto',
  },
}));
const PlantList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Typography variant="h5">گلدون‌ها</Typography>
      <Divider sx={{ my: 2 }} />
      <Box className={classes.cardList}>
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
        <PlantCard name="Borzoo" image={ChiliPic} race="Mashti" />
      </Box>
    </Box>
  );
};

export default PlantList;
