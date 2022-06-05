import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getStatus } from 'store/slices/auth/selectors';
import { Statuses } from 'models/Enums/Statuses';

const AuthGuard = () => {
  const status = useSelector(getStatus);
  const location = useLocation();
  const authToken = localStorage.getItem('token');

  if (!authToken || status === Statuses.failed) {
    return <Navigate to="/auth/login" state={{from: location}} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;