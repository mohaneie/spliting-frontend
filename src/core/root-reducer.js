import { combineReducers } from 'redux';
import SplitReducer from './reducers/split-reducer';

const rootReducer = combineReducers({
    splits: SplitReducer,
});

export default rootReducer;