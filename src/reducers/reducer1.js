import * as types from '../actions/types';

const initialState = {};

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION1:
      return Object.assign({}, state, {
        someStoreValue: action.value
      });
    default:
      return state;
  }
};

export default reducer1;
