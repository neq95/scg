import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthGuard = () => {
  const location = useLocation();
  const authToken = localStorage.getItem('token');

  if (!authToken) {
    return <Navigate to="/auth/login" state={{from: location}} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;