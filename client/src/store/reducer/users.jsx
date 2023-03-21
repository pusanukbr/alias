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
  avatar: '',
  _id: ''
};

const userReducer = (state = initialState, action) => {
  console.log(action.payload);
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
    case ReducerCommand.CHANG_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

// ACTION
export const setUser = (response) => ({ type: ReducerCommand.SET_USERS, payload: response });
export const logOutUser = () => ({ type: ReducerCommand.LOGOUT_USERS });
export const changData = (data) => ({ type: ReducerCommand.CHANG_DATA, payload: data });

// THUNK ACTION
export const signin = (data) => async (dispatch) => {
  const response = await AuthService.signin(data);
  localStorage.setItem('token', response.data.user.token);
  localStorage.setItem('user_ID', response.data.user._id);

  dispatch(setUser(response.data.user.login));
};

export const registration =
  ({ name, password, email }) =>
  async (dispatch) => {
    const response = await AuthService.registration(name, password, email);
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('user_ID', response.data.user._id);

    dispatch(setUser(response.data.user));
  };

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await AuthService.checkAuth();
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('user_ID', response.data.user._id);

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

export const changUserData = (data) => async (dispatch) => {
  try {
    await AuthService.changUserData({
      ...data,
      _id: localStorage.getItem('user_ID')
    });
    await dispatch(changData(data));
  } catch (error) {
    console.log(error);
  }
};

export default userReducer;
