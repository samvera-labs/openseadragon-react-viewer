import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import * as types from '../actions/types';

const appReducer = combineReducers({
  reducer1
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
