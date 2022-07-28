import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Navigate,
    Outlet,
    useLocation
} from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";
import { checkAuth } from "../reducer/users";

const ProtectedRoute = ({ redirectPath = `${RouterConfig.AUTH.path}`, children }) => {
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    // React.useEffect(() => {
    //     if (localStorage.getItem('token') && !userState.isAuth) {
    //         dispatch(checkAuth());
    //     }
    // })
    
    if (!userState.isAuth) {
        return <Navigate to={redirectPath} replace state={{ from: fromPage }} />;
    }
    return children ? children : <Outlet />;
};

export default ProtectedRoute;