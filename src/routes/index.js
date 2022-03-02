import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/404';
import Dashboard from './pages/dashboard';
import Plants from './pages/plants';
import { useDispatch } from 'react-redux';
import { get_quotes, get_users } from '../Redux/Actions/Main';
import About from './pages/about';
import Profile from './pages/profile';
import Notes from './pages/notes';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [user, setUser] = useState(useSelector((store) => store.auth.user));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_quotes);
    dispatch(get_users);
  });

  const PrivateRoute = ({ children }) => {
    return user.id ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/plants"
        element={
          <PrivateRoute>
            <Plants />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/notes"
        element={
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;

//It's navigation because I'm using react-redux-dom v6
//and routes is taken by the package
