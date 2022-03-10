/* eslint-disable import/no-unresolved */
import SET_TOKEN from './actions.type';

export interface SetTokenAction {
  type: string
  payload: string;
}

const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  payload: token,
});

export default setToken;
