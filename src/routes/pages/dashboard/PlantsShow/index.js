import React from 'react';
import PlantRails from './PlantRails';
import { Typography, Box, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflowX: 'hidden',
    padding: '20px',
    border: '2px solid #eee',
  },
}));
const PlantsShow = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        گلدون‌ها
      </Typography>
      <Divider />
      <PlantRails />
    </Box>
  );
};

export default PlantsShow;
