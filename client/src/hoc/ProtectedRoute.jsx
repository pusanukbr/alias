import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RouterConfig from '../const/RouterConfig';

const ProtectedRoute = ({ redirectPath, param }) => {
  const storyUser = localStorage.getItem('userData');
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || RouterConfig.MAIN.path;
  if (redirectPath) return <Navigate to={redirectPath} replace state={{ from: fromPage }} />;
  return param ? (
    <Outlet />
  ) : (
    <Navigate
      to={storyUser ? RouterConfig.AUTH.path : RouterConfig.REGISTRATION.path}
      state={{ from: fromPage }}
    />
  );
};

export default ProtectedRoute;
