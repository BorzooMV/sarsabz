import React from 'react';
import { Avatar, Chip, Divider, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { translate } from '../../../../@utils';
import vaseProfile from '../../../../@assets/vaseProfile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 0px',
    padding: '30px',
    background: '#fff',
    width: '100%',
    minWidth: '250px',
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePicContainer: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: 'auto',
  },
  infoChip: {
    margin: '10px',
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Box className={classes.profileHeader}>
        <Stack direction="column">
          <Typography variant="h6">برزو</Typography>{' '}
          <Typography variant="subtitle1">تازه کار</Typography>{' '}
        </Stack>
        <Box className={classes.profilePicContainer}>
          <img src={vaseProfile} className={classes.profilePic} />
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack
        className={classes.infoStack}
        justifyContent="space-evenly"
        direction="column"
      >
        <Chip
          avatar={<Avatar>{translate(0)}</Avatar>}
          label="تعداد کار های امروز"
          variant="outlined"
          className={classes.infoChip}
        />
        <Chip
          avatar={<Avatar>{translate(0)}</Avatar>}
          label="تعداد کار های امروز"
          variant="outlined"
          className={classes.infoChip}
        />
      </Stack>
    </Box>
  );
};

export default UserInfo;
