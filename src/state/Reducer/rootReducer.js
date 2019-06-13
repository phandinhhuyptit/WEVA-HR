import { combineReducers } from 'redux';
import app from './app';
import effect from './effectApp'

const rootReducer = combineReducers({
    app,
    effect
})

export default rootReducer;



