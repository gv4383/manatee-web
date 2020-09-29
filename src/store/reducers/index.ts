import { combineReducers } from 'redux';

import { SearchSkillState } from './searchSkill/types';
import { SkillState } from './skill/types';
import { UserState } from './user/types';
import { UsersState } from './users/types';
import searchSkill from './searchSkill';
import skill from './skill';
import user from './user';
import users from './users';

export interface AppState {
  searchSkill: SearchSkillState;
  skill: SkillState;
  user: UserState;
  users: UsersState;
}

const rootReducer = combineReducers({
  searchSkill,
  skill,
  user,
  users,
});

export default rootReducer;
