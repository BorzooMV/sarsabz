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
import { useSelector } from 'react-redux';

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
  aboutTextArea: {
    border: 'none',
    height: '400px',
    width: '80%',
    padding: '10px 20px',
    outline: 'none',
    resize: 'none',
  },
}));
const Spotlight = () => {
  const classes = useStyles();
  const user = useSelector((Store) => Store.main.user);
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
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 3 }}>
            درباره‌ی {user.user_plants?.plants[0].name_fa}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <TextareaAutosize
            className={classes.aboutTextArea}
            placeholder="مثلا میونش با نور چطوریه؟"
          />
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
