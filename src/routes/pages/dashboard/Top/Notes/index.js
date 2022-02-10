import { Save } from '@mui/icons-material';
import {
  Box,
  Divider,
  Stack,
  TextareaAutosize,
  Typography,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '20px',
    height: '330px',
  },
  footer: {
    position: 'absolute',
    bottom: '0%',
    right: '0%',
    background: '#eee',
    width: '100%',
    padding: '10px 20px',
  },
  textArea: {
    padding: '10px',
    width: '90%',
    resize: 'none',
    border: 'none',
  },
}));

const Notes = () => {
  const classes = useStyles();

  return (
    <Box sx={{ boxShadow: 2 }} className={classes.root}>
      <Typography variant="h5">یادداشت روزانه</Typography>
      <Divider sx={{ my: 2 }} />

      <TextareaAutosize
        placeholder="امروز چه خبر بود؟"
        className={classes.textArea}
        minRows={4}
      />
      <Stack direction="row" className={classes.footer}>
        <IconButton>
          <Save color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Notes;
