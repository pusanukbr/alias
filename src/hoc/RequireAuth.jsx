import { useLocation, Navigate } from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";
import { connect } from "react-redux";
import { checkAuth } from "../reducer/users";
// import { useAuth } from '../hook/useAuth';
import React from "react";

const RequireAuth = ({ userName, children, dispatch }) => {
    const location = useLocation();
    // const { user, checkAuth } = useAuth();
    if (localStorage.getItem('token') && !userName) {
        console.log('token', localStorage.getItem('token'));
        dispatch(checkAuth());
    }
    console.log('RequireAuth');
    return (
        <>
        {!userName
        ? <Navigate to={RouterConfig.AUTH.path} state={{from: location}} />
        : children}
        </>
    )
}

export default connect(({user}) => ({
    userName: user.userName
}), (dispatch) => ({dispatch}))(RequireAuth);