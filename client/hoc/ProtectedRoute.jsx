import React from "react";
import { useSelector } from 'react-redux';
import {
    Navigate,
    Outlet,
    useLocation
} from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";

const ProtectedRoute = ({ redirectPath }) => {
    const userState = useSelector((state) => state.user);
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    if (redirectPath) return <Navigate to={redirectPath} replace state={{ from: fromPage }} />;
    return userState.isAuth
     ? <Outlet />
     : <Navigate to={RouterConfig.AUTH.path} state={{ from: fromPage }} />;
};

export default ProtectedRoute;