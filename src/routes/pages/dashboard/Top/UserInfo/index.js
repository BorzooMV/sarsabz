import React from 'react';
import { Avatar, Chip, Divider, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { translateNumber, translateRank } from '../../../../../@utils';
import vaseProfile from '../../../../../@assets/vaseProfile.jpg';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
    background: '#fff',
    minWidth: '250px',
    maxWidth: '300px',
    width: '100%',
    height: '330px',
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
    },
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
  const name_fa = useSelector((Store) => Store.main.user.name_fa);
  const rank = translateRank(useSelector((Store) => Store.main.user.rank));
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Box className={classes.profileHeader}>
        <Stack direction="column">
          <Typography variant="h6">{name_fa}</Typography>{' '}
          <Typography variant="subtitle1">{rank}</Typography>{' '}
        </Stack>
        <Box className={classes.profilePicContainer}>
          <img src={vaseProfile} alt="" className={classes.profilePic} />
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack
        className={classes.infoStack}
        justifyContent="space-evenly"
        direction="column"
      >
        <Chip
          avatar={<Avatar>{translateNumber(0)}</Avatar>}
          label="تعداد کار های امروز"
          variant="outlined"
          className={classes.infoChip}
        />
        <Chip
          avatar={<Avatar>{translateNumber(0)}</Avatar>}
          label="تعداد کار های امروز"
          variant="outlined"
          className={classes.infoChip}
        />
      </Stack>
    </Box>
  );
};

export default UserInfo;
