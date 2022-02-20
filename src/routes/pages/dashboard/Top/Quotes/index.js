import { AddCircle } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  footer: {
    background: '#eee',
    margin: '0px -20px',
    marginBottom: '-20px',
    padding: '15px 20px',
  },
}));

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState('');
  const classes = useStyles();
  const quotes = useSelector((Store) => Store.main.quotes);

  const combineQuotes = (quotes) => {
    let arrayOfQoutes = [];

    for (let q of quotes) {
      arrayOfQoutes.push(q.text);
    }

    return arrayOfQoutes;
  };

  const giveRandomQuote = (arrayOfQoutes) => {
    let randomIndex = Math.floor(Math.random() * arrayOfQoutes.length);
    return arrayOfQoutes[randomIndex];
  };

  useEffect(() => {
    setRandomQuote(giveRandomQuote(combineQuotes(quotes)));
  }, [quotes]);

  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Typography className={classes.header} variant="h5">
        حرف حساب
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography paragraph>{randomQuote ? randomQuote : ''}</Typography>
      <Box className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddCircle sx={{ mr: 2 }} />}
        >
          به جملات اضافه کنید
        </Button>
      </Box>
    </Box>
  );
};

export default Quotes;
