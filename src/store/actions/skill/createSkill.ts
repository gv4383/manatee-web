import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';

const createSkillEvent = eventCreator('CREATE_SKILL');

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
    userId,
  })
    .then(res => dispatch(createSkillEvent.resolve(res)))
    .catch(error => dispatch(createSkillEvent.reject(error)));
};
