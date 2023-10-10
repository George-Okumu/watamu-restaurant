import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Product from '../pages/Product';

export const ProtectedRoute = () => {
  const { token } = useContext(AuthContext);


  return (
    <div>
      { token ? (<Product/>) : <Navigate to="/login" />}
    </div>
  );
};

export default ProtectedRoute;
