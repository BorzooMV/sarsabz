import { Edit, Save } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  Stack,
  TextareaAutosize,
  Typography,
  Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Chili from '@assets/Chili.jpg';
import InfoBox from './InfoBox';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    width: '70%',
    margin: 'auto',
  },
  imgContainer: {
    width: '90%',
    aspectRatio: '1/1',
    overflow: 'hidden',
    border: '2px solid #eee',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
}));
const Spotlight = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Box className={classes.imgContainer}>
            <img alt="" src={Chili} className={classes.img} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <InfoBox />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Typography>title</Typography>
          <Divider />
          <TextareaAutosize value="Hello World" />
          <Stack direction="row">
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <Save />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Spotlight;
