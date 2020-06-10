import { combineReducers } from 'redux';

import { SkillState } from './skill/types';
import { UserState } from './user/types';
import { UsersState } from './users/types';
import skill from './skill';
import user from './user';
import users from './users';

export interface AppState {
  skill: SkillState;
  user: UserState;
  users: UsersState;
}

const rootReducer = combineReducers({
  skill,
  user,
  users,
});

export default rootReducer;
