import ReducerCommand from '../const/ReducerCommand';

const initialState = {
    preloader: true,
    loading: false,
};

const uiReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ReducerCommand.TOGGLE_LOADING: 
            return {
                ...state,
                loading: payload,
            }
        case ReducerCommand.TOGGLE_PRELOADER: 
            return {
                ...state,
                preloader: payload,
            }
        default:
            return state;
    }
};

export const setLoading = (loading) => ({ type: ReducerCommand.TOGGLE_LOADING, payload: loading });
export const setPreloader = (preloader) => ({ type: ReducerCommand.TOGGLE_PRELOADER, payload: preloader });



export default uiReducer;