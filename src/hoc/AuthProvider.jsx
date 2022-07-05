import React from "react";
import { createContext, useState } from 'react';
import AuthService from '../service/AuthService';
import axios from "axios";
import reducer from "../reducer";

export const AuthContex = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(null);
    const [state, dispatch] = React.useReducer(reducer);

    const signin = async ({ roomId, login, password }, cb) => {
        try {
            const response = await AuthService.login(roomId, login, password);
            localStorage.setItem('token', response.data.accessToken);
            dispatch({
                type: 'SET_USERS',
                payload: response.data.rooms.login[0].userName
            })
            setAuth(true);
            setUser(response.data.rooms.login[0].userName);
            cb();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const checkAuth = async () => {
        console.log(reducer);
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4000/refresh', {withCredentials: true});
            console.log(response.data);
            dispatch({
                type: 'SET_USERS',
                payload: response.data.rooms.login[0].userName,
            })
            localStorage.setItem('token', response.data.accessToken);
            console.log(state);
            setAuth(true);
            setUser(response.data.rooms.login[0].userName);
        } catch (e) {
            console.log('ERROR', e);
        } finally {
            setLoading(false);
        }
    }

    const value = {setLoading, user, signin, checkAuth, signout};

    return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>
}