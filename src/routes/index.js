import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/404';
import Dashboard from './pages/dashboard';
import Plants from './pages/plants';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;

//It's navigation because I'm using react-redux-dom v6
//and routes is taken by the package
