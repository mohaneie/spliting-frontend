import { CREATE_SPLIT_SUCCESSFULLY, CREATE_SPLIT_FAILED } from '../../constants/index';


const initialState = {
    loading: false,
    error: false,
    split: null
}


const SplitReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${CREATE_SPLIT_SUCCESSFULLY}`:
            return {...state, ...action.payload };
        case `${CREATE_SPLIT_FAILED}`:
            return {...state, error: action.error };
        default:
            return state;
    }
}

export default SplitReducer;