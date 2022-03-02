import { Divider, Typography, Stack, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    border: '2px solid #eee',
  },
  plantName: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
  },
  itemStack: {
    width: '40%',
  },
}));

const InfoBox = () => {
  const user = useSelector((Store) => Store.auth.user);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.plantName}>
        {user?.user_plants?.plants[0]?.name_fa}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          className={classes.itemStack}
        >
          <Typography>نژاد</Typography>
          <Typography>{user.user_plants?.plants[0]?.race_fa}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default InfoBox;
