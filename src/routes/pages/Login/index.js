import React from "react";
import { Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import loginVase from "./assets/loginVase.jpg"

const useStyles = makeStyles(theme => ({
    root: {
        width:"800px",
        background:"#eee",
        position:"absolute",
        top:"20%",
        left:"50%",
        transform:"translateX(-50%)",
        borderRadius:"5px",
				[theme.breakpoints.down('md')]: {
					width:'600px'
				},
				[theme.breakpoints.down('sm')]: {
					width:"90%",
					left:"50%",
					top:"50%",
					transform:"translate(-50%,-50%)",
					
				},
    },
    text: {
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
				[theme.breakpoints.down('sm')]: {
					order:"2",
					padding:"50px 0px"
				}
    },
    divider: {
        margin:"10px auto",
        height:"2px",
        width:"100%",
        background:theme.palette.primary.main
    },
    textBox: {
        display:"block",
        margin:"10px 0px",
        textAlign:"right"
    },
    submitBtn: {
        width:"100%"
    },
		imageContainer: {
				height:"100%",
				width:"400px",
				padding:"0px",
				[theme.breakpoints.down('md')]: {
					width:'300px'
				},
				[theme.breakpoints.down('sm')]: {
					width:"100%"
				},
		},
		loginImage: {
			  width: "100%",
				height: "100%",
				borderBottomLeftRadius: "5px",
				borderTopLeftRadius: "5px",
				[theme.breakpoints.down('sm')]: {
					borderTopLeftRadius:"0px",
					borderBottomLeftRadius:"0px"
				}
		},

}))

const Login = () => {
    const classes = useStyles();
    return(
        <Box className={classes.root} sx={{boxShadow : 3}} >
            <Grid container >
                <Grid item xs={12} sm={6} className={classes.text}>
                    <Stack direction="column">
                        <Typography variant="h4" component="h2">خوش آمدید</Typography>
                        <Typography variant="subtitle1" component="span">لطفا مشخصاتتون رو وارد کنید</Typography>
                        <Divider variant="middle" component="hr" className={classes.divider} />
                        <form>
                            <TextField label="نام کاربری" id="name" size="small" className={classes.textBox}/>
                            <TextField label="کلمه‌ی عبور" id="name" size="small" className={classes.textBox}/>
                            <Button variant="contained" className={classes.submitBtn}>ورود</Button>
                        </form>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.imageContainer}>
                        <img className={classes.loginImage} src={loginVase} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;
