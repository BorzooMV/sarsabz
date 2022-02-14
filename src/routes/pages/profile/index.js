import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Box sx={{ boxShadow: 2 }} className={classes.root}>
      Profile
    </Box>
  );
};

export default Profile;
