import ReducerCommand from './const/ReducerCommand';

const Rooms = (state = [], action) => {

  const { type, payload } = action;

  switch (type) {
    case ReducerCommand.ROOMS:
      return {
        ...state,
        rooms: payload,
      };
    default:
      return state;
  }
};

export default Rooms;