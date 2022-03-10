/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import tokenReducer from '../reducer/tokenReducer';

const store = createStore(
  tokenReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
