import ReducerCommand from '../const/ReducerCommand';

const initialState = {
    loseWord: [],
    winWord: []
};

const wordReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

export default wordReducer;