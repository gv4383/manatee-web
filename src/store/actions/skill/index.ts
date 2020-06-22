import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { getUser } from '../user';

const createSkillEvent = eventCreator('CREATE_SKILL');
const destroySkillEvent = eventCreator('DESTROY_SKILL');

export const createSkill = (
  name: string,
  description: string,
  rating: number,
  userId: number,
) => (dispatch: ThunkDispatch) => {
  dispatch(createSkillEvent.fetch());

  return Api.post('/skills', {
    name,
    description,
    rating,
    user_id: userId,
  })
    .then(res => {
      dispatch(createSkillEvent.resolve(res));
      dispatch(getUser(userId));
    })
    .catch(error => dispatch(createSkillEvent.reject(error)));
};

export const destroySkill = (skillId: number) => (dispatch: ThunkDispatch) => {
  dispatch(destroySkillEvent.fetch());

  return Api.delete(`/skills/${skillId}`)
    .then(res => dispatch(destroySkillEvent.resolve(res)))
    .catch(error => dispatch(destroySkillEvent.reject(error)));
};