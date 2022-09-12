import AuthService from '../../API/service/AuthService';
import $api from '../../API/http'
import ReducerCommand from '../../const/ReducerCommand';
import { setPreloader, setLoading } from './ui';

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
export const signin = ({ name, password, idRoom }) => async (dispatch) => {
    const response = await AuthService.signin(name, password, idRoom);
    console.log(response.data.user);
    localStorage.setItem('token', response.data.user.token);

    dispatch(setUser({user: response.data.user.login})) // TODO: FIX
}

export const checkAuth = () => async (dispatch) => {
    try {
        const response = await $api.get(
            'user',
            {withCredentials: true}
        );
        console.log('bjyvvt kt kftyktt', response);
        dispatch(setUser({user: response.data.user.login}));
        localStorage.setItem('token', response.data.user.token);
        dispatch(setPreloader(false));
        dispatch(setLoading(false));
    } catch (e) {
        console.log('ERROR', e);
        dispatch(setPreloader(false));
    }
}

export default userReducer;