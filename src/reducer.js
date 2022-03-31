const reducer = (state, action) => {
  switch (action.type) {
    case 'JOINED': 
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        userName: action.payload.userName,
      };
    case 'SET_USERS': 
      return {
        ...state,
        users: action.payload,
      };
    case 'SET_DATA': 
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };
    case 'FINISH_WORD': 
      return {
        ...state,
        win_word: action.payload.win,
        lose_word: action.payload.lose,
      };
    default:
      return state;
  }
};

export default reducer;