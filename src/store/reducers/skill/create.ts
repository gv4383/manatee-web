import { CreateSkillEvent, CreateSkillState } from './types';

const initialCreateSkillState: CreateSkillState = {
  status: 'IDLE',
  error: null,
};

const idleReducer = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case 'CREATE_SKILL/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    default:
      return state;
  }
};

const loadingReducer = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { error, type } = event;

  switch (type) {
    case 'CREATE_SKILL/RESOLVE':
      return {
        status: 'SUCCESS',
        error: null,
      };
    case 'CREATE_SKILL/REJECT':
      return {
        ...state,
        status: 'FAILURE',
        error,
      };
    default:
      return state;
  }
};

const successFailureReducer = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case 'CREATE_SKILL/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    default:
      return state;
  }
};

const create = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { status } = state;

  switch (status) {
    case 'IDLE':
      return idleReducer(state, event);
    case 'LOADING':
      return loadingReducer(state, event);
    case 'SUCCESS':
    case 'FAILURE':
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default create;
