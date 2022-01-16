import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const AppWrapper = ({children}) => {
    const location = useLocation()
    if(location.pathname === "/login" || location.pathname === "/login/"){
        return(
            <Box style={{height:"100vh", width:"100%" }}>
                {children}
            </Box>
        )
    }
    return(
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}

export default AppWrapper;