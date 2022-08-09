import AuthService from '../../API/service/AuthService';
import axios from "axios";
import ReducerCommand from '../../const/ReducerCommand';
import { setPreloader } from './ui';

const initialState = {
    userName: '',
    userToken: '',
    userActive: false,
    scope: 0,
    color: '',
    isAuth: false,
    idRoom: 0,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case ReducerCommand.SET_USERS:
        return {
            ...state,
            userName: action.payload.user,
            isAuth: true
        };
    default:
        return state;
    }
};

// ACTION
export const setUser = (response) => ({type: ReducerCommand.SET_USERS, payload: response});

// THUNK ACTION
export const signin = ({ name, password }) => async (dispatch) => {
    const response = await AuthService.signin(name, password);

    localStorage.setItem('token', response.data.accessToken);

    dispatch(setUser({user: response.data.user.login})) // TODO: FIX
}

export const checkAuth = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'http://localhost:4000/auth/refresh',
            {withCredentials: true}
        );
        dispatch(setUser({user: response.data.user.login}));
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setPreloader(false));
    } catch (e) {
        console.log('ERROR', e);
        dispatch(setPreloader(false));
    }
}

export default userReducer;