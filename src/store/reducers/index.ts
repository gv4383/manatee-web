import { combineReducers } from 'redux';

import { UsersState } from './users/types';
import users from './users';

export interface AppState {
  users: UsersState;
}

const rootReducer = combineReducers({ users });

export default rootReducer;
