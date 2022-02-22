import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import loginVase from '../../../@assets/loginVase.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '800px',
    background: '#eee',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      width: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
    },
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      order: '2',
      padding: '50px 0px',
    },
  },
  divider: {
    margin: '10px auto',
    height: '2px',
    width: '100%',
    background: theme.palette.primary.main,
  },
  textBox: {
    display: 'block',
    margin: '10px 0px',
    textAlign: 'right',
  },
  submitBtn: {
    width: '100%',
  },
  imageContainer: {
    height: '100%',
    width: '400px',
    padding: '0px',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  loginImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: '5px',
    borderTopLeftRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
    },
  },
}));

const Login = () => {
  const [inputUsername, setInputUsername] = useState();
  const [inputPassword, setInputPassword] = useState();
  const classes = useStyles();
  const navigate = useNavigate();

  const user = useSelector((Store) => Store.main.user);

  const auth = (InputUser, InputPass) => {
    if (InputUser === user.username && InputPass === user.password) {
      return true;
    } else {
      return false;
    }
  };

  const handleLogin = () => {
    if (auth(inputUsername, inputPassword)) {
      localStorage.setItem('userId', JSON.stringify(user?.id));
    }
    navigate('/');
  };

  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Box className={classes.root} sx={{ boxShadow: 3 }}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.text}>
          <Stack direction="column">
            <Typography variant="h4" component="h2">
              خوش آمدید
            </Typography>
            <Typography variant="subtitle1" component="span">
              لطفا مشخصاتتون رو وارد کنید
            </Typography>
            <Divider
              variant="middle"
              component="hr"
              className={classes.divider}
            />
            <form onKeyPress={(e) => handleKeyPress(e)}>
              <TextField
                label="نام کاربری"
                id="name"
                size="small"
                className={classes.textBox}
                onChange={(e) => setInputUsername(e.target.value)}
              />
              <TextField
                label="کلمه‌ی عبور"
                id="pass"
                size="small"
                className={classes.textBox}
                type="password"
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <Button
                variant="contained"
                className={classes.submitBtn}
                onClick={handleLogin}
              >
                ورود
              </Button>
            </form>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.imageContainer}>
            <img alt="" className={classes.loginImage} src={loginVase} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
