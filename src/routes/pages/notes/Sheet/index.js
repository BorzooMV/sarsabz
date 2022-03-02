import { Delete, KeyboardArrowDown } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { translateNumber } from '@utils';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delete_note } from 'Redux/Actions/Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    background: 'rgba(253,244,167,0.7)',
    position: 'relative',
  },
  expanded: {
    height: 'auto',
  },
  unExpanded: {
    height: '40px',
    overflowY: 'hidden',
  },
}));

const Sheet = ({ text, date, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const createDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = () => {
    dispatch(delete_note(id));
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">
          {translateNumber(createDate(date))}
        </Typography>
        <IconButton
          onClick={handleDelete}
          color="error"
          style={{ cursor: 'pointer' }}
        >
          <Delete />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box
        style={{ cursor: 'pointer' }}
        onClick={toggleExpand}
        className={clsx({
          [classes.expanded]: isExpanded,
          [classes.unExpanded]: !isExpanded,
        })}
      >
        <Typography paragraph>{text}</Typography>
      </Box>
    </Paper>
  );
};

export default Sheet;
