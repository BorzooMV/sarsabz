import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/404';
import Dashboard from './pages/dashboard';
import Plants from './pages/plants';
import { useDispatch } from 'react-redux';
import { get_user } from '../Redux/Actions/Main';
import About from './pages/about';
import Profile from './pages/profile';

const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_user);
  });
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;

//It's navigation because I'm using react-redux-dom v6
//and routes is taken by the package
