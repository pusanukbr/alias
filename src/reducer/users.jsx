import AuthService from '../service/AuthService';
import axios from "axios";
import ReducerCommand from '../const/ReducerCommand';
import { setLoading } from './ui';

const initialState = {
    userName: '',
    userToken: '',
    userActive: false,
    scope: 0,
    color: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case ReducerCommand.JOINED: 
        return {
            ...state,
            isAuth: true,
            roomId: action.payload.roomId,
            login: action.payload.login,
        };
    case ReducerCommand.SET_USERS:
        console.log(action.payload);
        return {
            ...state,
            userName: action.payload,
        };
    case ReducerCommand.SET_DATA: 
        return {
            ...state,
            users: action.payload.users,
        };
    default:
        return state;
    }
};

export const setUser = (users) => ({type: ReducerCommand.SET_USERS, payload: users});

export const signin = ({ roomId, login, password }, cb) => async (dispatch) => {
    try {
        const response = await AuthService.login(roomId, login, password);
        console.log(response.data);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setUser(response.data.rooms.login[0].userName))
        cb();
    } catch (e) {
        console.log(e);
    }
}
export const checkAuth = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        // const response = await axios.get('http://localhost:4000/refresh', {withCredentials: true});
        const response = await AuthService.checkAuth();
        console.log('response', response.data);
        dispatch(setUser(response.data.rooms.login[0].userName));
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setLoading(false));
    } catch (e) {
        console.log('ERROR', e);
    }
}

export default userReducer;