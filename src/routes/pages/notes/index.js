import { Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import Sheet from './Sheet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    margin: '20px auto',
  },
  header: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
}));

const Notes = () => {
  const classes = useStyles();
  const userNotes = useSelector((Store) => Store.main.user.user_notes);

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Paper elevation={2} className={classes.header}>
          <Typography variant="h5" sx={{ ml: 2 }}>
            نوشته‌ها
          </Typography>
          <Chip variant="contained" color="secondary" label={5} />
        </Paper>
      </Grid>
      {userNotes?.map((n, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Sheet text={n.text} date={n.date} key={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Notes;
