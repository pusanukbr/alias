import { useLocation, Navigate } from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";
import { connect } from "react-redux";
import { checkAuth } from "../reducer/users";
// import { useAuth } from '../hook/useAuth';
import React from "react";
const RequireAuth = ({ userName, children, dispatch }) => {
    const location = useLocation();
    // const { user, checkAuth } = useAuth();
    console.log('req');
    React.useEffect(() => {
        if (localStorage.getItem('token') && !userName) {
            console.log('token', localStorage.getItem('token'));
            dispatch(checkAuth());
        }
    })
    debugger
    if(!userName) {
        return <Navigate to={RouterConfig.AUTH.path} state={{from: location}} />
    }
    return children;
}

export default connect(({user}) => ({
    userName: user.userName
}), (dispatch) => ({dispatch}))(RequireAuth);