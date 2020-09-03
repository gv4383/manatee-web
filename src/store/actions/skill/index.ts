import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { getUser } from '../user';
import {
  CREATE_SKILL,
  DESTROY_SKILL,
  UPDATE_SKILL,
} from './constants';

const createSkillEvent = eventCreator(CREATE_SKILL);
const destroySkillEvent = eventCreator(DESTROY_SKILL);
const updateSkilEvent = eventCreator(UPDATE_SKILL);

export const createSkill = (
  name: string,
  description: string,
  mentee: boolean,
  mentor: boolean,
  rating: number,
  userId: number,
) => (dispatch: ThunkDispatch) => {
  dispatch(createSkillEvent.fetch());

  return Api.post('/skills', {
    name,
    description,
    mentee,
    mentor,
    rating,
    user_id: userId,
  })
    .then(res => {
      dispatch(createSkillEvent.resolve(res));
      dispatch(getUser(userId));
    })
    .catch(error => dispatch(createSkillEvent.reject(error)));
};

export const destroySkill = (skillId: number, userId: number) => (dispatch: ThunkDispatch) => {
  dispatch(destroySkillEvent.fetch());

  return Api.delete(`/skills/${skillId}`)
    .then(res => {
      dispatch(destroySkillEvent.resolve(res));
      dispatch(getUser(userId));
    })
    .catch(error => dispatch(destroySkillEvent.reject(error)));
};

export const updateSkill = (
  name: string,
  description: string,
  rating: number,
  skillId: number,
  userId: number,
) => (dispatch: ThunkDispatch) => {
  dispatch(updateSkilEvent.fetch());

  return Api.put(`/skills/${skillId}`, {
    name,
    description,
    rating,
  })
    .then(res => {
      dispatch(updateSkilEvent.resolve(res.data));
      dispatch(getUser(userId));
    })
    .catch(error => dispatch(updateSkilEvent.reject(error)));
};
