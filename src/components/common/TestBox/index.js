import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(theme => ({
    textHeading: {
        color:theme.palette.primary.main
    }
}))  
const TestBox = () => {
    const classes = useStyle();

    return(
        <Box>
            <Typography component="h2" variant="h2" className={classes.textHeading}>Test Box</Typography>
        </Box>
    )
}

export default TestBox;