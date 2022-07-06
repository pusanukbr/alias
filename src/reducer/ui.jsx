import ReducerCommand from '../const/ReducerCommand';

const initialState = {
    preloader: true,
};

const uiReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

export default uiReducer;