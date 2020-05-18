import { combineReducers } from 'redux';

import { UsersState } from './users/types';
import users from './users';

/* eslint-disable */
export interface Action {
  type: string;
  payload?: any;
  error?: string;
}
/* eslint-enable */

export interface AppState {
  users: UsersState;
}

const rootReducer = combineReducers({ users });

export default rootReducer;
