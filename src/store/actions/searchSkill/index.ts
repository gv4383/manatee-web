import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { GET_SEARCH_SKILL } from './constants';

const getSearchSkillEvent = eventCreator(GET_SEARCH_SKILL);

export const getSearchSkill = (status: string, skill: string) => (dispatch: ThunkDispatch) => {
  const searchCriteria = status === 'mentor'
    ? 'mentor_skills'
    : 'mentee_skills';

  console.log(`Searching for a ${status} for ${skill}!`);

  dispatch(getSearchSkillEvent.fetch());

  return Api.get(`/${searchCriteria}?skill=${skill}`)
    .then(res => dispatch(getSearchSkillEvent.resolve(res)))
    .catch(error => dispatch(getSearchSkillEvent.reject(error)));
};

export const clearSearchSkill = () => (dispatch: ThunkDispatch) => {
  dispatch(getSearchSkillEvent.clear());
};
