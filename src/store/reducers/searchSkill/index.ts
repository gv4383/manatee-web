import { GET_SEARCH_SKILL } from '../../actions/searchSkill/constants';
import { EVENTS, STATUSES } from '../../lib/constants';
import { SearchSkillEvent, SearchSkillState } from './types';

const initialSearchSkillState: SearchSkillState = {
  status: STATUSES.IDLE,
  data: null,
  error: null,
};

const idleReducer = (
  state: SearchSkillState,
  event: SearchSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_SEARCH_SKILL}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    default:
      return state;
  }
};

const loadingReducer = (
  state: SearchSkillState,
  event: SearchSkillEvent,
) => {
  const {
    data,
    error,
    type,
  } = event;

  switch (type) {
    case `${GET_SEARCH_SKILL}/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        data,
        error: null,
      };
    case `${GET_SEARCH_SKILL}/${EVENTS.REJECT}`:
      return {
        ...state,
        status: STATUSES.FAILURE,
        error,
      };
    default:
      return state;
  }
};

const successFailureReducer = (
  state: SearchSkillState,
  event: SearchSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_SEARCH_SKILL}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    case `${GET_SEARCH_SKILL}/${EVENTS.CLEAR}`:
      return initialSearchSkillState;
    default:
      return state;
  }
};

const searchSkill = (
  state: SearchSkillState = initialSearchSkillState,
  event: SearchSkillEvent,
) => {
  const { status } = state;

  switch (status) {
    case STATUSES.IDLE:
      return idleReducer(state, event);
    case STATUSES.LOADING:
      return loadingReducer(state, event);
    case STATUSES.SUCCESS:
    case STATUSES.FAILURE:
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default searchSkill;
