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
    case ReducerCommand.LOGOUT_USERS:
      return {
        ...initialState,
        isAuth: false
      };
    default:
      return state;
  }
};

// ACTION
export const setUser = (response) => ({ type: ReducerCommand.SET_USERS, payload: response });
export const logOutUser = () => ({ type: ReducerCommand.LOGOUT_USERS });

// THUNK ACTION
export const signin = (data) => async (dispatch) => {
  const response = await AuthService.signin(data);
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
  } catch (error) {
    console.log('ERROR', error);
    dispatch(setPreloader(false));
  }
};

export const logOutAction = () => async (dispatch) => {
  try {
    await AuthService.logout();
    dispatch(logOutUser());
    localStorage.removeItem('token');
    dispatch(setPreloader(false));
  } catch (error) {
    console.log('ERROR', error);
    dispatch(setPreloader(false));
  }
};

export default userReducer;
