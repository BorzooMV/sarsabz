import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccessTime, LocalDrink } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '10px 30px',
  },
  imageContainer: {
    width: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  itemsFont: {
    fontSize: '0.7rem',
    fontFamily: 'XIranSans',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  name: {
    padding: '10px',
  },
  footer: {
    background: theme.palette.primary.dark,
    padding: '5px',
  },
}));
const PlantCard = ({ image, name, race }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: '3' }}>
      <Box className={classes.imageContainer}>
        <img src={image} className={classes.image} alt="plant_photo" />
      </Box>
      <Box className={classes.name}>
        <Stack direction="row" justifyContent="space-between">
          <Typography className={classes.itemsFont}>نام</Typography>
          <Typography className={classes.itemsFont}>{name}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography className={classes.itemsFont}>نژاد</Typography>
          <Typography className={classes.itemsFont}>{race}</Typography>
        </Stack>
      </Box>
      <Box className={classes.footer}>
        <Stack direction="row" justifyContent="flex-start">
          <IconButton>
            <LocalDrink color="secondary" />
          </IconButton>
          <IconButton>
            <AccessTime color="secondary" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default PlantCard;
