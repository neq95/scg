import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { getIsAuthenticated } from 'store/slices/auth/selectors';
import { getUser } from 'store/slices/auth/thunks';
import { useEffect } from 'react';

const AuthGuard = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const authToken = localStorage.getItem('token');

  useEffect(() => {
    if (authToken && !isAuthenticated) {
      dispatch(getUser());
    }
  }, []);

  if (!authToken) {
    return <Navigate to="/auth/login" state={{from: location}} replace />;
  }

  if (!isAuthenticated) {
    return <p>Loading</p>;
  }

  return <Outlet />;
};

export default AuthGuard;