import {combineReducers} from 'redux';
import sessions from './sessionReducer';

const rootReducer = combineReducers({
    sessions
});

export default rootReducer;