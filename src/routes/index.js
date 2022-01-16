import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";

const Navigation = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Navigation;

//It's navigation because I'm using react-redux-dom v6
//and routes is taken by the package