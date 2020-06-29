import { combineReducers } from 'redux';

import { SkillState } from './types';
import create, { initialCreateSkillState } from './create';
import destroy, { initialDestroySkillState } from './delete';
import update, { initialUpdateSkillState } from './update';

export const initialSkillState: SkillState = {
  create: initialCreateSkillState,
  destroy: initialDestroySkillState,
  update: initialUpdateSkillState,
};

export default combineReducers({
  create,
  destroy,
  update,
});
