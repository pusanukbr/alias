import ReducerCommand from '../const/ReducerCommand';

const initialState = {
    time: 90,
    mode: '',
    gameStart: false,
};

const gamesReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

export default gamesReducer;