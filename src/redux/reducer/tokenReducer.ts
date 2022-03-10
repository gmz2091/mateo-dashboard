/* eslint-disable default-param-last */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { SetTokenAction } from '../actions';

const initialState = 'GLOBAL_TOKEN';

const tokenReducer = (state: string = initialState, action: SetTokenAction) => {
  console.log('tokenReducer', action);
  console.log('tokenReducer', state);
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
