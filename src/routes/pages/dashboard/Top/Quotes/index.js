import { AddCircle } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

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
  const classes = useStyles();
  return (
    <Box className={classes.root} sx={{ boxShadow: 2 }}>
      <Typography className={classes.header} variant="h5">
        جمله‌ی روز
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography paragraph>
        به راه بادیه رفتن به از نشستن باطل، که گر مراد نیابیم به قدر وسع بکوشیم.
      </Typography>
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
