import { combineReducers } from 'redux';

import create, { initialCreateSkillState } from './create';
import { SkillState } from './types';

export const initialSkillState: SkillState = {
  create: initialCreateSkillState,
};

export default combineReducers({
  create,
});
