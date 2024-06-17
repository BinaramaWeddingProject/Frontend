// src/components/Login.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  logout, checkLoginStatus } from '../redux/reducer/auth';

import { RootState, AppDispatch } from '../redux/store';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const user = useSelector((state: RootState) => state?.auth?.user?._id);



  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCheckLoginStatus = () => {
    dispatch(checkLoginStatus());
    console.log(isLoggedIn)
    
  };

  console.log('User:', user);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Logged in as: {user}</p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleCheckLoginStatus}>Check Login Status</button>
        </div>
      ) : (
        <div>
         
          <button onClick={handleCheckLoginStatus}>Check Login Status</button>
        </div>
      )}
    </div>
  );
};

export default Login;
