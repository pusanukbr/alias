import AuthService from '../../API/service/AuthService';
import $api from '../../API/http';
import ReducerCommand from '../../const/ReducerCommand';
import { setPreloader, setLoading } from './ui';

const initialState = {
  roomsHistory: [],
  isAuth: false,
  name: '',
  numberGameEnd: 0,
  createRooms: 0,
  creatingProfile: '00.00.0000',
  avatar: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducerCommand.SET_USERS:
      return {
        ...state,
        name: action.payload,
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
  ({ name, password, idRoom }) =>
  async (dispatch) => {
    const response = await AuthService.signin(name, password, idRoom);
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('userData', response.data.user.name);

    dispatch(setUser(response.data.user.login));
  };

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await $api.get('user', { withCredentials: true });
    dispatch(setUser(response.data.user.login));
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('userData', response.data.user.name);
    dispatch(setPreloader(false));
    dispatch(setLoading(false));
  } catch (e) {
    console.log('ERROR', e);
    dispatch(setPreloader(false));
  }
};

export default userReducer;
