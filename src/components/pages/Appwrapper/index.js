import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from '../home';
import NotFound from '../404';



const AppWrapper = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppWrapper;