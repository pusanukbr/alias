import React from "react";
import axios from "axios";


export const AuthProvider = ({ children }) => {

    // const signin = async ({ roomId, login, password }, cb) => {
    //     try {
    //         const response = await AuthService.login(roomId, login, password);
    //         localStorage.setItem('token', response.data.accessToken);
    //         // dispatch({
    //         //     type: 'SET_USERS',
    //         //     payload: response.data.rooms.login[0].userName
    //         // })
    //         cb();
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     }
    // }

    const signout = (cb) => {
        // setUser(null);
        cb();
    }

    const checkAuth = async () => {
        // setLoading(true);
        try {
            const response = await axios.get('http://localhost:4000/refresh', {withCredentials: true});
            console.log(response.data);
            // dispatch({
            //     type: 'SET_USERS',
            //     payload: response.data.rooms.login[0].userName,
            // })
            localStorage.setItem('token', response.data.accessToken);
            // setAuth(true);
            // setUser(response.data.rooms.login[0].userName);
        } catch (e) {
            console.log('ERROR', e);
        } finally {
            // setLoading(false);
        }
    }

    // const value = {setLoading, user, signin, checkAuth, signout};
    return <></>
}