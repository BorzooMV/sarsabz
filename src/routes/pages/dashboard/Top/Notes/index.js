import { Inventory2, Save } from '@mui/icons-material';
import {
  Box,
  Divider,
  Stack,
  TextareaAutosize,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { save_note } from 'Redux/Actions/Main';

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
  const [text, setText] = useState('');
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((Store) => Store.main.user.user_notes);

  const goToArchive = () => {
    navigate('/notes');
  };

  const saveNote = (text) => {
    const today = new Date();
    if (text) {
      dispatch(save_note(text));
      openSnack();
    } else {
      openError();
    }
  };

  const closeSnack = () => {
    setIsSnackOpen(false);
  };

  const openSnack = () => {
    setIsSnackOpen(true);
  };

  const openError = () => {
    setIsErrorOpen(true);
  };

  const closeError = () => {
    setIsErrorOpen(false);
  };

  return (
    <Box sx={{ boxShadow: 2 }} className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isSnackOpen}
        autoHideDuration={6000}
        onClose={closeSnack}
      >
        <Alert onClose={closeSnack} severity="success" sx={{ width: '100%' }}>
          <Typography sx={{ mx: 2 }}>متن شما ذخیره شد</Typography>
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isErrorOpen}
        autoHideDuration={6000}
        onClose={closeError}
      >
        <Alert onClose={closeError} severity="error" sx={{ width: '100%' }}>
          <Typography sx={{ mx: 2 }}>ورودی اشتباه</Typography>
        </Alert>
      </Snackbar>

      <Typography variant="h5">یادداشت روزانه</Typography>
      <Divider sx={{ my: 2 }} />

      <TextareaAutosize
        placeholder="امروز از گلدونات چه حسی گرفتی؟"
        className={classes.textArea}
        minRows={4}
        onChange={(v) => setText(v.target.value)}
        value={text}
      />
      <Stack direction="row" className={classes.footer}>
        <IconButton onClick={() => saveNote(text)}>
          <Save color="primary" />
        </IconButton>
        <IconButton onClick={goToArchive}>
          <Inventory2 color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Notes;
