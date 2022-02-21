import { Divider, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { translateNumber } from '@utils';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    background: 'rgba(253,244,167,0.7)',
  },
}));

const Sheet = ({ text, date }) => {
  const classes = useStyles();
  const createDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant="h5">{translateNumber(createDate(date))}</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography paragraph>{text}</Typography>
    </Paper>
  );
};

export default Sheet;
