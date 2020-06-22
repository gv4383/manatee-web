import { combineReducers } from 'redux';

import { SkillState } from './types';
import create, { initialCreateSkillState } from './create';
import destroy, { initialDestroySkillState } from './delete';

export const initialSkillState: SkillState = {
  create: initialCreateSkillState,
  destroy: initialDestroySkillState,
};

export default combineReducers({
  create,
  destroy,
});
