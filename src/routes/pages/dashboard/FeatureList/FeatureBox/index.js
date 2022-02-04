import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    height: '300px',
    padding: '30px',
    margin: '30px',
  },
}));
const FeatureBox = ({ children, image, linkto, title }) => {
  const classes = useStyles();
  return (
    <Box sx={{ boxShadow: 2 }} className={classes.root}>
      {image && (
        <Box>
          <img src={image} />
        </Box>
      )}
      <Box>
        {title && <Typography variant="h5">title</Typography>}
        {children}
      </Box>
    </Box>
  );
};

export default FeatureBox;
