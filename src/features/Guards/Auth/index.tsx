import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

const AuthGuard = ({children}: IProps) => {
  const authToken = localStorage.getItem('token');
  const location = useLocation();

  if (!authToken) {
    return <Navigate to="/auth/login" state={{from: location}} replace />;
  }

  return children;
};

export default AuthGuard;