/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { PrivateRouteProps } from '../../interfaces/privateRoute.interface';

const PrivateRoute = ({ user, children }: PrivateRouteProps) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
