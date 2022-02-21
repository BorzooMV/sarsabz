import { Archive, Save } from '@mui/icons-material';
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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const goToArchive = () => {
    navigate('/notes');
  };

  return (
    <Box sx={{ boxShadow: 2 }} className={classes.root}>
      <Typography variant="h5">یادداشت روزانه</Typography>
      <Divider sx={{ my: 2 }} />

      <TextareaAutosize
        placeholder="امروز از گلدونات چه حسی گرفتی؟"
        className={classes.textArea}
        minRows={4}
      />
      <Stack direction="row" className={classes.footer}>
        <IconButton>
          <Save color="primary" />
        </IconButton>
        <IconButton onClick={goToArchive}>
          <Archive color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Notes;
