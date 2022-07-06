const SET_USERS = 'SET_USERS';
const SET_DATA = 'SET_DATA';
const FINISH_WORD = 'FINISH_WORD';
const JOINED = 'JOINED';

const initialState = {
    userName: '',
    userToken: '',
    userActive: false,
    scope: 0,
    color: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case JOINED: 
        return {
            ...state,
            isAuth: true,
            roomId: action.payload.roomId,
            login: action.payload.login,
        };
    case SET_USERS:
        return {
            ...state,
            users: action.payload,
        };
    case SET_DATA: 
        return {
            ...state,
            users: action.payload.users,
            messages: action.payload.messages,
        };
    case FINISH_WORD:
        if(action.payload.win_word) {
            return {
            ...state,
            win_word: [...state.win_word, action.payload.win_word],
            };
        }
        return {
            ...state,
            skip_word: [ ...state.skip_word, action.payload.skip_word],
        };
        
    default:
        return state;
    }
};

export default userReducer;