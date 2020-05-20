import { combineReducers } from 'redux';

import { UserState } from './user/types';
import { UsersState } from './users/types';
import user from './user';
import users from './users';

export interface AppState {
  user: UserState;
  users: UsersState;
}

const rootReducer = combineReducers({ user, users });

export default rootReducer;
