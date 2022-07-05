const reducer = (state, action) => {
  switch (action.type) {
    case 'JOINED': 
      return {
        ...state,
        isAuth: true,
        roomId: action.payload.roomId,
        login: action.payload.login,
      };
    case 'SET_USERS':
      console.log('SET_USERS', action.payload);
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

export default reducer;