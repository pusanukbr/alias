import { useLocation, Navigate } from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";
import { useAuth } from '../hook/useAuth';
import React from "react";
const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { user, checkAuth } = useAuth();

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, [])

    console.log('ok');
    if(!user) {
        return <Navigate to={RouterConfig.AUTH.path} state={{from: location}} />
    }
    return children;
}

export default RequireAuth;