import AuthService from '../../API/service/AuthService';
import ReducerCommand from '../../const/ReducerCommand';
import { setPreloader, setLoading } from './ui';

const initialState = {
  roomsHistory: [],
  isAuth: false,
  name: '',
  gaming: 0,
  roomCreated: 0,
  date: '00.00.0000',
  avatar: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducerCommand.SET_USERS:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    default:
      return state;
  }
};

// ACTION
export const setUser = (response) => ({ type: ReducerCommand.SET_USERS, payload: response });

// THUNK ACTION
export const signin =
  ({ password, email }) =>
  async (dispatch) => {
    const response = await AuthService.signin(password, email);
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('userData', response.data.user.name);

    dispatch(setUser(response.data.user.login));
  };

export const registration =
  ({ name, password, email }) =>
  async (dispatch) => {
    const response = await AuthService.registration(name, password, email);
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('userData', response.data.user.name);

    dispatch(setUser(response.data.user));
  };

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await AuthService.checkAuth();
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('userData', response.data.user.name);

    dispatch(setUser(response.data.user));

    dispatch(setPreloader(false));
    dispatch(setLoading(false));
  } catch (e) {
    console.log('ERROR', e);
    dispatch(setPreloader(false));
  }
};

export default userReducer;
