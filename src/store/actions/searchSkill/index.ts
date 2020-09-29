import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { GET_SEARCH_SKILL } from './constants';

const getSearchSkillEvent = eventCreator(GET_SEARCH_SKILL);

export const getSearchSkill = (
  searchOption: string,
  skill: string,
) => (dispatch: ThunkDispatch) => {
  const searchCriteria = searchOption === 'mentee'
    ? 'mentee_skills'
    : 'mentor_skills';

  console.log(`Searching for a ${searchOption} for ${skill}!`);

  dispatch(getSearchSkillEvent.fetch());

  return Api.get(`/${searchCriteria}?skill=${skill}`)
    .then(res => dispatch(getSearchSkillEvent.resolve(res)))
    .catch(error => dispatch(getSearchSkillEvent.reject(error)));
};

export const clearSearchSkill = () => (dispatch: ThunkDispatch) => {
  dispatch(getSearchSkillEvent.clear());
};
