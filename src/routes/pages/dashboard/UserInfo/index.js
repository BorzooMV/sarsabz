import React from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 0px',
    padding: '30px',
    background: '#fff',
    width: '100%',
  },
  infoStack: {},
  items: {
    width: '100px',
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Box>
        <Typography variant="h4">مشخصات کاربر</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack
        className={classes.infoStack}
        justifyContent="space-evenly"
        direction="row"
      >
        <Typography className={classes.items}>برزو</Typography>
        <Typography className={classes.items}>تعداد گلدون : {0}</Typography>
        <Typography className={classes.items}>تاریخ عضویت : {0}</Typography>
      </Stack>
    </Box>
  );
};

export default UserInfo;
