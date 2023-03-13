import ReducerCommand from '../../const/ReducerCommand';

const initialState = {
  roomId: 0,
  lang: 'ua',
  colorMode: 'ligth'
};

const roomReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ReducerCommand.ROOMS:
      return {
        ...state,
        rooms: payload
      };
    default:
      return state;
  }
};

export default roomReducer;
