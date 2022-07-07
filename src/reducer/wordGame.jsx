import ReducerCommand from '../const/ReducerCommand';

const initialState = {
    loseWord: [],
    winWord: []
};

const wordReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ReducerCommand.FINISH_WORD:
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

export default wordReducer;