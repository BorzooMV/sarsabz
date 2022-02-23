import { KeyboardArrowDown } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { translateNumber } from '@utils';
import clsx from 'clsx';
import React, { useState } from 'react';

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

const Sheet = ({ text, date }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles();

  const createDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <Typography variant="h5">{translateNumber(createDate(date))}</Typography>
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
