/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginProp } from '../../interfaces/privateRoute.interface';

const Login = ({ user }:LoginProp) => {
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <div>Login</div>;
};

export default Login;
